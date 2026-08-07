const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const gTTS = require("gtts");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

const users = {};
const roomHost = {};

const audioDir = path.join(__dirname, "audio");
if (!fs.existsSync(audioDir)) fs.mkdirSync(audioDir);

app.use("/audio", express.static(audioDir));

io.on("connection", (socket) => {
  const { room, userLang } = socket.handshake.query;

  socket.join(room);

  if (!roomHost[room]) {
    roomHost[room] = socket.id;
    users[socket.id] = { room, role: "host", userLang };
    socket.emit("role", "host");
  } else {
    users[socket.id] = { room, role: "participant", userLang };
    socket.emit("role", "participant");
  }

  socket.on("speech", async ({ text, sourceLang }) => {
    for (let id in users) {
      const user = users[id];

      if (user.role === "host") continue;
      if (user.room !== room) continue;

      try {
        let translated = text;

        if (user.userLang !== sourceLang) {
          const res = await axios.get(
            `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
              text
            )}&langpair=${sourceLang}|${user.userLang}`
          );

          translated =
            res.data.responseData.translatedText || text;
        }

        const fileName = `${Date.now()}_${id}.mp3`;
        const filePath = path.join(audioDir, fileName);

        const tts = new gTTS(translated, user.userLang);

        tts.save(filePath, (err) => {
          if (err) {
            io.to(id).emit("translation", { text: translated, audio: null });
            return;
          }

          io.to(id).emit("translation", {
            text: translated,
            audio: `https://automated-translation-backend.onrender.com/audio/${fileName}`,
          });
        });
      } catch (err) {
        console.log(err.message);
        io.to(id).emit("translation", { text, audio: null });
      }
    }
  });

  socket.on("disconnect", () => {
    delete users[socket.id];
    if (roomHost[room] === socket.id) delete roomHost[room];
  });
});

server.listen(5000, () => console.log("🚀 Server running on port 5000"));
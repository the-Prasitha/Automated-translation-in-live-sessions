import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log("From backend:", data);
      setMessage(data);
    });
  }, []);

  const sendMessage = () => {
    socket.emit("send_message", "Hello server");
  };

  return (
    <div>
      <h1>Live Translation App</h1>
      <button onClick={sendMessage}>Send Message</button>
      <h2>{message}</h2>
    </div>
  );
}

export default App;
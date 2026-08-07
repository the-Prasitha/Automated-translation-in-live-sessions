# 🌍 Automated Translation in Live Sessions

A Full Stack real-time web application that enables multilingual communication during online meetings. The application captures the host's speech, translates it into each participant's preferred language, displays live translated subtitles, and generates translated audio (dubbing) in real time.

## 🚀 Live Demo

**Application:** https://automated-translation-in-live-sessi.vercel.app/

**Backend API:** https://automated-translation-backend.onrender.com

---

## ✨ Features

- 🎥 Real-time online meetings using Jitsi Meet
- 🎤 Speech-to-Text using Web Speech API
- 🌐 Real-time language translation
- 🔊 AI-powered voice dubbing using Google Text-to-Speech (gTTS)
- 📝 Live translated subtitles
- 👥 Host and participant roles
- 🌍 Multiple language support
- ⚡ Real-time communication with Socket.IO

---

## 🛠️ Tech Stack

### Frontend
- React.js
- HTML5
- CSS3
- JavaScript
- Socket.IO Client

### Backend
- Node.js
- Express.js
- Socket.IO

### APIs & Libraries
- Web Speech API (Speech Recognition)
- MyMemory Translation API
- Google Text-to-Speech (gTTS)
- Axios

### Meeting Platform
- Jitsi Meet External API

### Deployment
- Frontend: Vercel
- Backend: Render

---

## 📁 Project Structure

```
Automated-translation-in-live-sessions
│
├── client
│   ├── public
│   ├── src
│   ├── package.json
│   └── ...
│
├── server
│   ├── audio
│   ├── uploads
│   ├── index.js
│   ├── package.json
│   └── ...
│
└── README.md
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/the-Prasitha/Automated-translation-in-live-sessions.git
```

Navigate to the project:

```bash
cd Automated-translation-in-live-sessions
```

### Install Frontend

```bash
cd client
npm install
npm start
```

Frontend runs at:

```
http://localhost:3000
```

### Install Backend

```bash
cd server
npm install
npm start
```

Backend runs at:

```
http://localhost:5000
```

---

## 🔄 Workflow

1. The host creates or joins a meeting.
2. Participants join the same meeting.
3. Participants select their preferred language.
4. The host speaks during the meeting.
5. Speech Recognition converts speech into text.
6. The text is translated into each participant's selected language.
7. The translated text is displayed as live subtitles.
8. Google Text-to-Speech (gTTS) converts the translated text into audio.
9. Participants hear the translated speech in their preferred language.

---

## 🌍 Supported Languages

- English
- Tamil
- Hindi
- Telugu
- Kannada
- Malayalam
- Bengali
- Gujarati
- Marathi
- Punjabi
- Urdu
- French
- German
- Spanish
- Italian
- Portuguese
- Russian
- Chinese
- Japanese
- Korean
- Arabic
- Turkish
- Thai
- Vietnamese
- Indonesian
- Malay
- Persian
- Polish
- Dutch
- Swedish
- Finnish
- Norwegian
- Danish
- Czech
- Greek
- Hebrew
- Romanian
- Hungarian
- Slovak
- Ukrainian
- Bulgarian
- Croatian
- Serbian
- Lithuanian
- Latvian
- Estonian
- Slovenian

---

## 🚀 Deployment

### Frontend
https://automated-translation-in-live-sessi.vercel.app/

### Backend
https://automated-translation-backend.onrender.com

---

## 🔮 Future Enhancements

- AI-based translation using LLMs
- Voice cloning for natural dubbing
- Automatic language detection
- User authentication
- Meeting history
- Meeting recording with translated subtitles
- Speaker identification
- Noise suppression
- End-to-end encryption

---


This project is developed for educational and academic purposes.

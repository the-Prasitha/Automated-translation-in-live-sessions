# Automated Translator for Live Sessions

## Overview
Automated Translator for Live Sessions is a real-time web application that provides live subtitles and instant translation during online meetings or live sessions. The system captures spoken audio from the host, converts it into text, translates the subtitles into the viewer’s preferred language, and displays them with minimal delay.

This project is designed to make communication easier across different languages and improve accessibility in live virtual sessions.

---

## Features
- 🎤 **Real-Time Speech Recognition** – Converts live spoken audio into text instantly
- 🌍 **Live Translation** – Translates subtitles into multiple languages
- 💬 **Real-Time Subtitles** – Displays captions with minimal latency
- 👥 **Multi-User Support** – Multiple participants can join the same live session
- 🔗 **Meeting Room Creation** – Create and join live meeting rooms
- ⚡ **Instant Updates with WebSockets** – Fast subtitle and translation updates
- 🎯 **Simple User Interface** – Easy-to-use meeting interface

---

## Technologies Used

### Frontend
- HTML
- CSS
- JavaScript
- Bootstrap (if used)

### Backend
- Node.js
- Express.js

### Real-Time Communication
- Socket.IO
- Jitsi Meet (for video conferencing)

### Translation & Speech Services
- Web Speech API (Speech Recognition)
- MyMemory Translation API

### Development Tools
- Visual Studio Code
- Git
- GitHub

---

## Project Architecture
1. User creates or joins a meeting room.
2. Host speaks during the live session.
3. Speech Recognition captures audio and converts speech into text.
4. Text is sent to the backend server using Socket.IO.
5. Backend translates the text into the selected language.
6. Translated subtitles are sent back to connected participants.
7. Participants view live translated subtitles in real time.

---

## Folder Structure
```bash
Automated-Translator/
│
├── public/
│   ├── css/
│   ├── js/
│   └── assets/
│
├── views/
│
├── server.js
├── package.json
└── README.md

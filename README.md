<div align="center">

# 🧠 AI Smart Journal

### *Your intelligent companion for self-reflection, mood tracking, and personal growth*

[![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![WebSocket](https://img.shields.io/badge/WebSocket-Real--Time-orange?style=for-the-badge&logo=socket.io&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
[![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-222?style=for-the-badge&logo=github&logoColor=white)](https://burukalamanireethika.github.io/ai-smart-journal-)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

<br/>

> **Write. Reflect. Grow.** — An AI-powered journaling app that listens, understands, and helps you unlock patterns in your thoughts and emotions.

<br/>

[🚀 Live Demo](#-live-demo) · [✨ Features](#-features) · [🛠️ Tech Stack](#️-tech-stack) · [⚡ Quick Start](#-quick-start) · [📁 Project Structure](#-project-structure) · [🤝 Contributing](#-contributing)

</div>

---

## 📸 Preview

> _Screenshots / GIF demo coming soon — add yours here!_

---

## ✨ Features

| Feature | Description |
|---|---|
| 🤖 **AI-Powered Insights** | Get intelligent reflections and pattern recognition from your journal entries |
| 💬 **Real-Time Chat** | Live WebSocket connection for instant AI responses — no page refresh needed |
| 📊 **Mood Tracking** | Visualize emotional trends and patterns over time |
| 📓 **Smart Journaling** | Write freely and let AI surface themes, highlights, and suggestions |
| 🌐 **Web-Based** | Accessible from any browser — no app install required |
| 🔒 **Privacy-First** | Your thoughts stay yours — local-first design |

---

## 🛠️ Tech Stack

### Backend
- **Python** — Core application logic
- **FastAPI** — High-performance REST + WebSocket API
- **WebSocket** — Real-time bidirectional communication

### Frontend
- **HTML / CSS / JavaScript** — Lightweight, fast, no framework bloat
- **WebSocket Client** — Live connection to backend for seamless UX

### Infrastructure
- **GitHub Actions** — CI/CD pipeline for automated deployments
- **GitHub Pages** — Frontend hosting

---

## 📁 Project Structure


ai-smart-journal-/
│
├── .github/
│   └── workflows/          # GitHub Actions CI/CD pipelines
│
├── app/
│   └── main.py             # Application entry point
│
├── backend/
│   ├── api/                # Route handlers & WebSocket endpoints
│   ├── models/             # Data models & schemas
│   └── services/           # AI integration & business logic
│
├── frontend/
│   ├── index.html          # Main UI
│   ├── style.css           # Styling
│   └── app.js              # WebSocket client & interactivity
│
└── README.md


## ⚡ Quick Start

### Prerequisites

- Python 3.10+
- pip

### 1. Clone the repository

bash
git clone https://github.com/BurukalaManiReethika/ai-smart-journal-.git
cd ai-smart-journal-
 2. Set up the environment

``bash
python -m venv venv
source venv/bin/activate        # On Windows: venv\Scripts\activate
pip install -r requirements.txt


### 3. Configure environment variables

``bash
cp .env.example .env
# Edit .env and add your API keys

``env
# .env
ANTHROPIC_API_KEY=your_api_key_here
```

### 4. Run the backend

```bash
python app/main.py
```

### 5. Open the frontend

Open `frontend/index.html` in your browser, or serve it locally:

```bash
cd frontend
python -m http.server 3000
# Visit http://localhost:3000
```

---

## 🚀 Live Demo

> Deployed via GitHub Pages: **[View Live →](https://burukalamanireethika.github.io/ai-smart-journal-)**

---

## 🔌 WebSocket API

The backend exposes a real-time WebSocket endpoint for journal interactions:

```
ws://localhost:8000/ws/journal
```

### Message Format

**Send (client → server):**
```json
{
  "type": "journal_entry",
  "content": "Today I felt overwhelmed but managed to stay focused..."
}
```

**Receive (server → client):**
```json
{
  "type": "ai_response",
  "insight": "You showed great resilience today. Here's what I noticed...",
  "mood": "mixed",
  "themes": ["stress", "focus", "perseverance"]
}
```

---

## 🗺️ Roadmap

- [x] Real-time WebSocket chat
- [x] GitHub Pages deployment
- [ ] Mood trend charts & visualizations
- [ ] User authentication & persistent storage
- [ ] Mobile PWA support
- [ ] Export journal as PDF
- [ ] Weekly AI-generated summaries
- [ ] Dark / Light theme toggle

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

```bash
# 1. Fork the repo
# 2. Create your feature branch
git checkout -b feature/amazing-feature

# 3. Commit your changes
git commit -m "feat: add amazing feature"

# 4. Push to the branch
git push origin feature/amazing-feature

# 5. Open a Pull Request
```

Please follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👩‍💻 Author

<div align="center">

**BurukalaManiReethika**

[![GitHub](https://img.shields.io/badge/GitHub-@BurukalaManiReethika-181717?style=flat-square&logo=github)](https://github.com/BurukalaManiReethika)

*Built with ❤️ and a whole lot of journaling*

</div>

---

<div align="center">
<sub>⭐ If this project helped you, consider giving it a star — it means a lot!</sub>
</div>

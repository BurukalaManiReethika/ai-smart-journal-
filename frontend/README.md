# 🧠 AI Smart Journal & Mood Analyzer

> An intelligent journaling platform that leverages NLP and LLMs to analyze emotional patterns, generate behavioral insights, and provide real-time feedback through a modern dashboard.

---

## 🚀 Live Demo

🔗 Frontend: https://your-frontend-url
🔗 Backend API: https://your-backend-url/docs

---

## 📸 Preview

*Add screenshots here (Dashboard, Journal Editor, Insights Panel, Mobile View)*

---

## ✨ Key Features

### 🧠 AI-Powered Insights

* GPT-based behavioral analysis of journal entries
* Weekly emotional summaries with actionable advice
* Pattern detection across days and moods

### 📊 Mood Analytics Dashboard

* Visual mood trends over time
* Emotion distribution tracking
* Clean, interactive charts

### ⚡ Real-Time Notifications

* WebSocket-based live updates
* Instant feedback when new entries are added

### 🔎 Smart Search

* Natural language search

  * Example: *"Show entries where I felt anxious"*

### 📱 Mobile-Responsive UI

* Fully responsive design (mobile, tablet, desktop)
* Smooth animations and modern UX

---

## 🧠 AI & NLP Capabilities

* Sentiment + emotion classification
* Pattern detection (day-wise behavioral trends)
* GPT-powered contextual insights
* Personalized mental health suggestions

---

## 🏗️ Architecture

```id="arch001"
Frontend (React + Tailwind)
        ↓
Backend (FastAPI)
        ↓
AI Layer (Transformers + OpenAI GPT)
        ↓
Database (PostgreSQL)
```

---

## 🛠️ Tech Stack

### Backend

* Python, FastAPI
* PostgreSQL, SQLAlchemy
* WebSockets (real-time communication)

### Frontend

* React (Vite)
* Tailwind CSS
* Recharts
* Framer Motion

### AI / NLP

* Hugging Face Transformers
* OpenAI GPT API

---

## 📂 Project Structure

```id="struct001"
ai-smart-journal/
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── routes/
│   │   ├── ai/
│   │   └── models/
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   └── App.jsx
│   └── package.json
```

---

## ⚙️ Environment Variables

### Backend `.env`

```id="env001"
DATABASE_URL=your_postgres_url
OPENAI_API_KEY=your_openai_key
```

### Frontend `.env`

```id="env002"
VITE_API_URL=http://localhost:8000
VITE_WS_URL=ws://localhost:8000/ws
```

---

## 🚀 Installation

### 1️⃣ Clone Repo

```bash
git clone https://github.com/your-username/ai-smart-journal.git
cd ai-smart-journal
```

---

### 2️⃣ Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## ☁️ Deployment

* **Frontend:** Vercel
* **Backend:** Render
* **Database:** Supabase

---

## 📊 Example AI Insight

> “You frequently experience stress at the beginning of the week, especially on Mondays. Consider starting your day with a structured plan or short relaxation routine.”

---

## 🔥 Engineering Highlights

* Designed a modular backend with scalable API architecture
* Implemented real-time communication using WebSockets
* Integrated LLM-based insights for contextual reasoning
* Built a responsive dashboard with modern UI patterns

---

## 🧪 Future Improvements

* User authentication & multi-user support
* Mood prediction using time-series modeling
* Voice journaling (speech-to-text)
* Push notifications

---

## 👨‍💻 Author

**BURUKALA MANI REETHIKA**

---

## ⭐ Why This Project Stands Out

This is not a basic CRUD app.

It combines:

* Real-time systems
* AI/ML integration
* Data visualization
* Production-ready architecture

👉 Built to demonstrate **full-stack + AI engineering capability**.

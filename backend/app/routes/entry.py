from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import SessionLocal
import models
from ai.analyzer import analyze
from routes.websocket import notify_all

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/entry")
async def create_entry(data: dict, db: Session = Depends(get_db)):
    mood = analyze(data["content"])

    entry = models.JournalEntry(content=data["content"], mood=mood)
    db.add(entry)
    db.commit()

    # 🔔 real-time notification
    await notify_all(f"New entry added with mood: {mood}")

    return entry

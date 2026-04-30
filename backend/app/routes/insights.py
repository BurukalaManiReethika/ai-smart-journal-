from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import SessionLocal
import models
from ai.gpt_service import generate_gpt_insight

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/gpt-insights")
def gpt_insights(db: Session = Depends(get_db)):
    entries = db.query(models.JournalEntry).all()
    return {"insight": generate_gpt_insight(entries)}

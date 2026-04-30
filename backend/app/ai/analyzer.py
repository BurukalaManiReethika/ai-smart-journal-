from transformers import pipeline

sentiment = pipeline("sentiment-analysis")

def analyze(text):
    return sentiment(text)[0]["label"]

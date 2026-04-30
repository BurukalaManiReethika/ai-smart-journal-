from openai import OpenAI
from config import OPENAI_API_KEY

client = OpenAI(api_key=OPENAI_API_KEY)

def generate_gpt_insight(entries):
    text_data = "\n".join([e.content for e in entries[-10:]])

    prompt = f"""
    Analyze these journal entries and give:
    - emotional pattern
    - advice
    - short summary

    Entries:
    {text_data}
    """

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}]
    )

    return response.choices[0].message.content

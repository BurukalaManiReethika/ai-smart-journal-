from fastapi import WebSocket

active_connections = []

async def connect(ws: WebSocket):
    await ws.accept()
    active_connections.append(ws)

async def notify_all(message: str):
    for conn in active_connections:
        await conn.send_text(message)

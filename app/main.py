from fastapi import FastAPI, WebSocket
from routes.entry import router as entry_router
from routes.insights import router as insights_router
from routes.websocket import connect

app = FastAPI()

app.include_router(entry_router)
app.include_router(insights_router)

@app.websocket("/ws")
async def websocket_endpoint(ws: WebSocket):
    await connect(ws)

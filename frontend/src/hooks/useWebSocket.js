import { useEffect } from "react";

export default function useWebSocket(setMessage) {
  useEffect(() => {
    const ws = new WebSocket("ws://127.0.0.1:8000/ws");

    ws.onmessage = (event) => {
      setMessage(event.data);
    };

    return () => ws.close();
  }, []);
}

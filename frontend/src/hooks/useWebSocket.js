// src/hooks/useWebSocket.js
import { useEffect, useRef } from "react";

export default function useWebSocket(onMessage) {
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket(import.meta.env.VITE_WS_URL);

    ws.current.onopen = () => {
      console.log("WebSocket connected");
    };

    ws.current.onmessage = (event) => {
      onMessage(event.data);
    };

    ws.current.onerror = (err) => {
      console.error("WebSocket error:", err);
    };

    ws.current.onclose = () => {
      console.log("WebSocket disconnected");
    };

    return () => {
      ws.current.close();
    };
  }, []);
}

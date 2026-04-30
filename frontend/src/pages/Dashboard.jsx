import { useState } from "react";
import useWebSocket from "../hooks/useWebSocket";
import NotificationToast from "../components/NotificationToast";
import InsightsPanel from "../components/InsightsPanel";

export default function Dashboard() {
  const [msg, setMsg] = useState("");

  useWebSocket(setMsg);

  return (
    <div className="p-4 md:p-8">
      <NotificationToast message={msg} />
      <InsightsPanel />
    </div>
  );
}

import { useEffect, useState } from "react";
import axios from "axios";

export default function InsightsPanel() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("/gpt-insights").then(res => setData(res.data.insight));
  }, []);

  return (
    <div className="bg-slate-800 p-4 rounded-xl">
      <h2 className="text-lg mb-2">🧠 AI Insights</h2>
      <p className="text-sm whitespace-pre-line">{data}</p>
    </div>
  );
}

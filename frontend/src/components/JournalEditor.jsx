import { useState } from "react";
import axios from "axios";

export default function JournalEditor() {
  const [text, setText] = useState("");

  const submit = async () => {
    await axios.post("/entry", { content: text });
    setText("");
  };

  return (
    <div className="bg-slate-800 p-4 rounded-xl w-full">
      <textarea
        className="w-full p-3 bg-slate-700 rounded-lg text-sm md:text-base"
        placeholder="Write your thoughts..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={submit}
        className="mt-3 w-full md:w-auto bg-indigo-500 px-4 py-2 rounded-lg"
      >
        Save Entry
      </button>
    </div>
  );
}

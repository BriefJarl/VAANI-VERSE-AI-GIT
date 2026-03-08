import { Mic } from "lucide-react";
import { useEffect, useState } from "react";

import TaskDashboard from "../components/TaskDashboard";
import FocusTimer from "../components/FocusTimer";
import ProductivityStats from "../components/ProductivityStats";
import VoiceWave from "../components/VoiceWave";

function VoiceWorkspace() {

  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [listening, setListening] = useState(false);
  const [loading, setLoading] = useState(false);

  /* ---------------- LOAD TASKS ---------------- */

  const loadTasks = async () => {

    try {

      const res = await fetch("http://localhost:5000/api/tasks/all");

      const data = await res.json();

      if (data.tasks) {

        console.log("Tasks from backend:", data.tasks); // ✅ Added log

        setTasks(data.tasks);
      }

    } catch (error) {

      console.error("Load tasks error:", error);

    }

  };

  useEffect(() => {
    loadTasks();
  }, []);

  /* ---------------- MARK DONE ---------------- */

  const markDone = async (task) => {

    try {

      const res = await fetch("http://localhost:5000/api/tasks/done", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ task })
      });

      const data = await res.json();

      if (data.success) {
        loadTasks();
      }

    } catch (error) {

      console.error("Done error:", error);

    }

  };

  /* ---------------- VOICE INPUT ---------------- */

  const startVoice = () => {

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition not supported in this browser");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";

    recognition.start();

    setListening(true);

    recognition.onresult = async (event) => {

      const text = event.results[0][0].transcript;

      console.log("User said:", text);

      setInputText(text);

      processTasks(text);

    };

    recognition.onend = () => {
      setListening(false);
    };

  };

  /* ---------------- PROCESS TASK ---------------- */

  const processTasks = async (text) => {

    if (!text.trim()) return;

    const lowerText = text.toLowerCase();

    try {

      setLoading(true);

      /* ---------- DONE COMMAND ---------- */

      if (lowerText.startsWith("done ")) {

        const taskName = lowerText.replace("done ", "");

        await fetch("http://localhost:5000/api/tasks/done", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            task: taskName
          })
        });

        alert("Task marked as completed");

      } 

      /* ---------- ADD TASK ---------- */

      else {

        await fetch("http://localhost:5000/api/tasks/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            task: text
          })
        });

        alert("Task Saved!");

      }

      loadTasks();

      setInputText("");

    } catch (error) {

      console.error("Task error:", error);

    } finally {

      setLoading(false);

    }

  };

  /* ---------------- UI ---------------- */

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-10">
          My Daily Launchpad 🚀
        </h1>

        {/* INPUT AREA */}

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-6">

          <textarea
            placeholder="Speak or type your tasks..."
            className="w-full bg-black border border-zinc-700 rounded-lg p-4 text-gray-300"
            rows="3"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />

          <div className="flex gap-4 mt-4">

            <button
              onClick={startVoice}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg ${
                listening
                  ? "bg-red-600"
                  : "bg-purple-600 hover:bg-purple-700"
              }`}
            >
              <Mic size={18} />
              {listening ? "Listening..." : "🎤 Start Voice"}
            </button>

            <button
              onClick={() => processTasks(inputText)}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg"
            >
              {loading ? "Processing..." : "Process Tasks"}
            </button>

          </div>

          {listening && <VoiceWave />}

        </div>

        {/* TASK DASHBOARD */}

        <TaskDashboard tasks={tasks} />

        <div className="grid md:grid-cols-2 gap-6 mt-6">

          <FocusTimer />

          <ProductivityStats tasks={tasks} />

        </div>

      </div>

    </div>
  );
}

export default VoiceWorkspace;
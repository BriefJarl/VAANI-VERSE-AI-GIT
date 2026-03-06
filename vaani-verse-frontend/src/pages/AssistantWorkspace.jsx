import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function AssistantWorkspace() {

  const location = useLocation();

  const [goal, setGoal] = useState("");
  const [plan, setPlan] = useState([]);
  const [messages, setMessages] = useState([]);

  const [validationTopic, setValidationTopic] = useState(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [validationResult, setValidationResult] = useState("");

  // Generate Study Plan
  const generatePlan = () => {

    if (!goal) return;

    const topics = [
      "Arrays",
      "Linked Lists",
      "Stacks",
      "Queues",
      "Recursion",
      "Trees",
      "Graphs"
    ];

    const generatedPlan = topics.map((topic, index) => ({
      day: index + 1,
      topic,
      completed: false
    }));

    setPlan(generatedPlan);

    setMessages([
      { role: "user", text: goal },
      { role: "ai", text: "Analyzing your learning goal..." },
      { role: "ai", text: "Generating adaptive roadmap..." },
      { role: "ai", text: "7-day study plan successfully created." }
    ]);
  };

  // Voice Input
  const startVoiceInput = () => {

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setGoal(transcript);
    };

    recognition.start();
  };

  // Trigger validation
  const completeTask = (day, topic) => {
    setValidationTopic({ day, topic });
    setUserAnswer("");
    setValidationResult("");
  };

  // Validate knowledge
  const validateAnswer = () => {

    if (userAnswer.toLowerCase().includes("log")) {

      const updatedPlan = plan.map((item) =>
        item.day === validationTopic.day
          ? { ...item, completed: true }
          : item
      );

      setPlan(updatedPlan);
      setValidationTopic(null);
      setValidationResult("");

    } else {

      setValidationResult("❌ Incorrect. Review the topic.");

    }
  };

  // AI Rescheduler
  const rescheduleMissed = () => {

    if (plan.length === 0) return;

    const updated = [...plan];

    const firstIncomplete = updated.find((p) => !p.completed);

    if (!firstIncomplete) return;

    updated.push({
      ...firstIncomplete,
      day: updated.length + 1
    });

    setPlan(updated);

    setMessages((prev) => [
      ...prev,
      { role: "ai", text: "Rescheduler Agent redistributed unfinished tasks." }
    ]);
  };

  // Progress
  const progress =
    plan.length === 0
      ? 0
      : (plan.filter((p) => p.completed).length / plan.length) * 100;

  return (
    <div className="min-h-screen bg-[#0F0C29] text-white flex">

      {/* SIDEBAR */}
      <div className="w-64 bg-white/5 backdrop-blur-lg border-r border-white/10 p-6">

        <h2 className="text-xl font-semibold mb-8">
          Vaani Verse
        </h2>

        <ul className="space-y-4 text-white/70">

          <Link to="/app">
            <li className={`cursor-pointer hover:text-white ${location.pathname === "/app" && "text-white font-semibold"}`}>
              Study Plan
            </li>
          </Link>

          <Link to="/tasks">
            <li className={`cursor-pointer hover:text-white ${location.pathname === "/tasks" && "text-white font-semibold"}`}>
              Daily Tasks
            </li>
          </Link>

          <li className="hover:text-white cursor-pointer">
            Voice Assistant
          </li>

          <li className="hover:text-white cursor-pointer">
            Progress
          </li>

        </ul>

      </div>

      {/* MAIN GRID */}
      <div className="flex-1 grid grid-cols-3 gap-6 p-10">

        {/* COMMAND CENTER */}
        <div className="col-span-2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">

          <h3 className="text-lg font-semibold mb-4">
            AI Study Planner
          </h3>

          <p className="text-white/60 mb-6">
            Tell Vaani what you want to learn.
          </p>

          {/* GOAL INPUT */}
          <div className="flex gap-2 mb-4">

            <input
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="Example: Crack DSA in 15 days"
              className="flex-1 p-3 rounded-xl bg-white/10 border border-white/10 outline-none"
            />

            <button
              onClick={startVoiceInput}
              className="bg-purple-500 px-4 rounded-xl"
            >
              🎤
            </button>

          </div>

          <button
            onClick={generatePlan}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-xl"
          >
            Generate Plan
          </button>

          {/* AI CHAT */}
          {messages.length > 0 && (

            <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-4">

              <p className="text-white/50 text-sm mb-3">
                AI Assistant
              </p>

              <div className="space-y-2 max-h-40 overflow-y-auto">

                {messages.map((msg, index) => (

                  <div
                    key={index}
                    className={`text-sm p-2 rounded ${
                      msg.role === "user"
                        ? "bg-blue-500/20 text-blue-200"
                        : "bg-purple-500/20 text-purple-200"
                    }`}
                  >

                    <strong>
                      {msg.role === "user" ? "You" : "Vaani"}:
                    </strong>{" "}
                    {msg.text}

                  </div>

                ))}

              </div>

            </div>

          )}

          {/* PROGRESS */}
          {plan.length > 0 && (

            <div className="mt-6">

              <p className="text-sm text-white/70 mb-1">
                Learning Progress
              </p>

              <div className="w-full bg-white/10 h-3 rounded">

                <div
                  className="bg-green-400 h-3 rounded"
                  style={{ width: `${progress}%` }}
                />

              </div>

            </div>

          )}

          {/* STUDY PLAN */}
          {plan.length > 0 && (

            <div className="mt-8 bg-white/5 border border-white/10 rounded-xl p-4">

              <p className="text-white/50 text-sm mb-4">
                Generated Study Plan
              </p>

              {plan.map((item) => (

                <div
                  key={item.day}
                  className="flex justify-between items-center bg-white/5 p-3 rounded-lg mb-2"
                >

                  <div>
                    <p>Day {item.day}</p>
                    <p className="text-blue-300 text-sm">{item.topic}</p>
                  </div>

                  {!item.completed ? (

                    <button
                      onClick={() => completeTask(item.day, item.topic)}
                      className="text-xs bg-green-500 px-3 py-1 rounded"
                    >
                      Complete
                    </button>

                  ) : (

                    <span className="text-green-400 text-sm">
                      ✔ Done
                    </span>

                  )}

                </div>

              ))}

            </div>

          )}

          {/* VALIDATION */}
          {validationTopic && (

            <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-4">

              <p className="text-yellow-300 mb-2">
                AI Knowledge Check
              </p>

              <p className="mb-3">
                What is the time complexity of Binary Search?
              </p>

              <input
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Your answer..."
                className="w-full p-2 rounded bg-white/10 mb-3"
              />

              <button
                onClick={validateAnswer}
                className="bg-blue-500 px-4 py-1 rounded"
              >
                Submit Answer
              </button>

              {validationResult && (
                <p className="mt-3 text-red-400">
                  {validationResult}
                </p>
              )}

            </div>

          )}

          {/* RESCHEDULER */}
          {plan.length > 0 && (

            <button
              onClick={rescheduleMissed}
              className="mt-6 bg-purple-500 px-4 py-2 rounded-xl"
            >
              Run AI Rescheduler
            </button>

          )}

        </div>

        {/* AGENT PANEL */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">

          <h3 className="text-lg font-semibold mb-6">
            Agent Activity
          </h3>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span>Planner Agent</span>
              <span className="text-green-400">Active</span>
            </div>

            <div className="flex justify-between">
              <span>Rescheduler Agent</span>
              <span className="text-yellow-400">Monitoring</span>
            </div>

            <div className="flex justify-between">
              <span>Validation AI</span>
              <span className="text-gray-400">Idle</span>
            </div>

            <div className="flex justify-between">
              <span>Memory System</span>
              <span className="text-green-400">Synced</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
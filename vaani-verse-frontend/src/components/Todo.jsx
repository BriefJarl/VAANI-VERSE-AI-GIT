import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Todo() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks"));
    if (saved) setTasks(saved);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const formatDateTime = (date) => {
    const optionsDate = {
      day: "2-digit",
      month: "short",
      year: "numeric",
      weekday: "short",
    };

    const optionsTime = {
      hour: "2-digit",
      minute: "2-digit",
    };

    return {
      date: date.toLocaleDateString("en-GB", optionsDate),
      time: date.toLocaleTimeString("en-GB", optionsTime),
    };
  };

  const getPendingDays = (createdAt) => {
    const now = new Date().getTime();
    const diff = now - createdAt;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days === 0) return "Added today";
    if (days === 1) return "Pending since yesterday";
    return `Pending since ${days} days`;
  };

  const addTask = () => {
    if (!taskInput.trim()) return;

    const now = new Date();
    const formatted = formatDateTime(now);

    const newTask = {
      id: Date.now(),
      text: taskInput,
      completed: false,
      date: formatted.date,
      time: formatted.time,
      createdAt: now.getTime(),
    };

    // newest task on top
    setTasks([newTask, ...tasks]);
    setTaskInput("");
  };

  const toggleComplete = (id) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, completed: true } : task
    );
    setTasks(updated);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-md mx-auto mt-8 p-4 bg-gray-900 rounded-xl shadow-lg"
    >
      <h2 className="text-xl font-bold text-white mb-4 text-center">
        Today's Tasks
      </h2>

      {/* Input */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter a task..."
          className="flex-1 p-2 rounded-lg bg-gray-800 text-white outline-none"
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <button
          onClick={addTask}
          className="bg-blue-500 hover:bg-blue-600 transition px-4 py-2 rounded-lg text-white"
        >
          Add
        </button>
      </div>

      {/* Task List */}
      <div className="max-h-64 overflow-y-auto space-y-3">
        <AnimatePresence>
          {tasks.map((task) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="relative bg-gray-800 p-4 rounded-lg"
            >
              {/* Green Tick */}
              {task.completed && (
                <span className="absolute top-2 right-2 text-green-400 text-xl">
                  ✅
                </span>
              )}

              <p
                className={`text-white font-medium ${
                  task.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {task.text}
              </p>

              <p className="text-xs text-gray-400 mt-1">
                Date - {task.date}
              </p>
              <p className="text-xs text-gray-400">
                Time - {task.time}
              </p>

              {!task.completed && (
                <>
                  <p className="text-xs text-red-400 mt-1">
                    {getPendingDays(task.createdAt)}
                  </p>

                  <button
                    onClick={() => toggleComplete(task.id)}
                    className="mt-3 bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-sm text-white transition"
                  >
                    Mark Complete
                  </button>
                </>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
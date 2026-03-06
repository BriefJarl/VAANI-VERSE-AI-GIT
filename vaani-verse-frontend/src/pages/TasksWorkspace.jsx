import { useState } from "react";

export default function TasksWorkspace() {

  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {

    if (!taskInput) return;

    const newTask = {
      id: Date.now(),
      title: taskInput,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  const completeTask = (id) => {

    const updated = tasks.map((task) =>
      task.id === id ? { ...task, completed: true } : task
    );

    setTasks(updated);
  };

  return (
    <div className="min-h-screen bg-[#0F0C29] text-white p-10">

      <h1 className="text-2xl font-semibold mb-6">
        Daily Productivity Dashboard
      </h1>

      {/* Task Input */}

      <div className="flex gap-3 mb-6">

        <input
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add a task (e.g. Solve 3 Leetcode problems)"
          className="flex-1 p-3 rounded-xl bg-white/10 border border-white/10"
        />

        <button
          onClick={addTask}
          className="bg-blue-500 px-6 rounded-xl"
        >
          Add
        </button>

      </div>

      {/* Task List */}

      <div className="space-y-3">

        {tasks.map((task) => (

          <div
            key={task.id}
            className="flex justify-between items-center bg-white/5 p-3 rounded-lg"
          >

            <span>{task.title}</span>

            {!task.completed ? (

              <button
                onClick={() => completeTask(task.id)}
                className="bg-green-500 px-3 py-1 rounded text-xs"
              >
                Done
              </button>

            ) : (

              <span className="text-green-400">
                ✔ Completed
              </span>

            )}

          </div>

        ))}

      </div>

    </div>
  );
}
import { useState } from "react";

function TaskDashboard({ tasks }) {

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
        window.location.reload(); // refresh tasks from DB
      }

    } catch (error) {

      console.error("Done error:", error);

    }

  };

  /* -------- FORMAT DATE TIME -------- */

  const formatDateTime = (timestamp) => {

    if (!timestamp) return "";

    const date = new Date(timestamp);

    if (isNaN(date.getTime())) return "";

    const datePart = date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
      timeZone: "Asia/Kolkata"
    });

    const timePart = date.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Asia/Kolkata"
    });

    return `${datePart} • ${timePart}`;
  };

  return (

    <div className="grid md:grid-cols-2 gap-6 mt-10">

      {/* Pending Tasks */}

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">

        <h2 className="text-xl font-semibold mb-4">
          Pending Tasks
        </h2>

        {(!Array.isArray(tasks) || tasks.length === 0) ? (
          <div className="text-gray-500">
            No tasks yet
          </div>
        ) : (

          <div className="space-y-3">

            {tasks
              .filter((t) => !t.completed)
              .map((t) => (

                <div
                  key={t.id}
                  className="flex justify-between items-center bg-zinc-800 p-3 rounded-lg"
                >

                  <div>

                    <p>{t.task}</p>

                    {t.created_at && (
                      <p className="text-gray-400 text-sm">
                        {formatDateTime(t.created_at)}
                      </p>
                    )}

                  </div>

                  <button
                    onClick={() => {
                      if (!t.completed) {
                        markDone(t.task);
                      }
                    }}
                    disabled={t.completed}
                    className={`text-green-400 ${
                      t.completed ? "opacity-40 cursor-not-allowed" : ""
                    }`}
                  >
                    Done
                  </button>

                </div>

            ))}

          </div>

        )}

      </div>


      {/* Completed Tasks */}

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">

        <h2 className="text-xl font-semibold mb-4">
          Completed Tasks
        </h2>

        {(!Array.isArray(tasks) || tasks.filter(t => t.completed).length === 0) ? (
          <div className="text-gray-500">
            Nothing completed yet
          </div>
        ) : (

          <div className="space-y-3">

            {tasks
              .filter((t) => t.completed)
              .map((t) => (

                <div
                  key={t.id}
                  className="bg-green-900/40 p-3 rounded-lg"
                >

                  <p>✓ {t.task}</p>

                  {t.created_at && (
                    <p className="text-green-300 text-sm">
                      {formatDateTime(t.created_at)}
                    </p>
                  )}

                </div>

            ))}

          </div>

        )}

      </div>

    </div>

  );

}

export default TaskDashboard;
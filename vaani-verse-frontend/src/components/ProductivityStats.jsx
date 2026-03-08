import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function ProductivityStats({ tasks }) {

  // total tasks today
  const totalTasks = tasks.length;

  // completed tasks
  const completed = tasks.filter((t) => t.completed).length;

  // pending tasks
  const pending = tasks.filter((t) => !t.completed).length;

  const data = [
    { name: "Completed", value: completed },
    { name: "Pending", value: pending }
  ];

  const COLORS = ["#22c55e", "#ef4444"]; // green , red

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">

      <h2 className="text-xl font-semibold mb-2">
        Today's Productivity
      </h2>

      {/* Tasks Generated */}
      <p className="text-gray-400 mb-4">
        Tasks Generated Today: <span className="text-white font-semibold">{totalTasks}</span>
      </p>

      <PieChart width={320} height={260}>

        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={90}
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>

        <Tooltip />
        <Legend />

      </PieChart>

    </div>
  );
}

export default ProductivityStats;
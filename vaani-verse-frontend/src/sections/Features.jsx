import { Mic, Brain, RefreshCcw, BarChart3, Bot } from "lucide-react";

function Features() {
  return (
    <section className="py-28 bg-black text-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold mb-4">
            Powerful AI Productivity Features
          </h2>

          <p className="text-gray-400">
            Designed to transform how you plan and complete tasks
          </p>

        </div>

        {/* FEATURE GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* FEATURE 1 */}
          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl hover:border-purple-500 transition">

            <Mic className="text-purple-500 mb-4" size={28} />

            <h3 className="text-xl font-semibold mb-2">
              Voice Task Creation
            </h3>

            <p className="text-gray-400 text-sm">
              Instantly create tasks using natural voice commands.
            </p>

          </div>

          {/* FEATURE 2 */}
          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl hover:border-purple-500 transition">

            <Brain className="text-purple-500 mb-4" size={28} />

            <h3 className="text-xl font-semibold mb-2">
              AI Planner
            </h3>

            <p className="text-gray-400 text-sm">
              Automatically generate structured study or work plans.
            </p>

          </div>

          {/* FEATURE 3 */}
          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl hover:border-purple-500 transition">

            <RefreshCcw className="text-purple-500 mb-4" size={28} />

            <h3 className="text-xl font-semibold mb-2">
              Smart Rescheduler
            </h3>

            <p className="text-gray-400 text-sm">
              AI adjusts your tasks dynamically based on progress.
            </p>

          </div>

          {/* FEATURE 4 */}
          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl hover:border-purple-500 transition">

            <BarChart3 className="text-purple-500 mb-4" size={28} />

            <h3 className="text-xl font-semibold mb-2">
              Productivity Analytics
            </h3>

            <p className="text-gray-400 text-sm">
              Visual insights into your productivity and consistency.
            </p>

          </div>

          {/* FEATURE 5 */}
          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl hover:border-purple-500 transition">

            <Bot className="text-purple-500 mb-4" size={28} />

            <h3 className="text-xl font-semibold mb-2">
              Multi-Agent AI
            </h3>

            <p className="text-gray-400 text-sm">
              Planner agents and validation agents coordinate tasks.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Features;
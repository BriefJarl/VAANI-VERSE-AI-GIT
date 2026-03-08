import { Mic, Brain, ListChecks } from "lucide-react";

function HowItWorks() {
  return (
    <section className="py-28 bg-black text-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* SECTION TITLE */}
        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold mb-4">
            How Vaani Works
          </h2>

          <p className="text-gray-400">
            Turn voice commands into organized productivity instantly
          </p>

        </div>

        {/* STEPS */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* STEP 1 */}
          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl text-center hover:border-purple-500 transition">

            <Mic className="mx-auto text-purple-500 mb-4" size={32} />

            <h3 className="text-xl font-semibold mb-2">
              Speak Tasks
            </h3>

            <p className="text-gray-400 text-sm">
              Simply tell Vaani what you need to do using voice commands.
            </p>

          </div>

          {/* STEP 2 */}
          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl text-center hover:border-purple-500 transition">

            <Brain className="mx-auto text-purple-500 mb-4" size={32} />

            <h3 className="text-xl font-semibold mb-2">
              AI Understands
            </h3>

            <p className="text-gray-400 text-sm">
              Our AI analyzes and converts your speech into structured tasks.
            </p>

          </div>

          {/* STEP 3 */}
          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl text-center hover:border-purple-500 transition">

            <ListChecks className="mx-auto text-purple-500 mb-4" size={32} />

            <h3 className="text-xl font-semibold mb-2">
              Tasks Organized
            </h3>

            <p className="text-gray-400 text-sm">
              Automatically get a structured task list and productivity plan.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;
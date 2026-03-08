function ProductScreens() {
  return (
    <section className="py-28 bg-black text-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold mb-4">
            Built for Intelligent Productivity
          </h2>

          <p className="text-gray-400">
            Explore the core interfaces of Vaani Verse
          </p>

        </div>

        {/* SCREEN GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* SCREEN 1 */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">

            <h3 className="text-xl font-semibold mb-4">
              Voice Workspace
            </h3>

            <div className="bg-black border border-zinc-700 rounded-lg p-6 text-gray-400">
              🎤 Voice command interface where users speak tasks and AI converts them into structured actions.
            </div>

          </div>

          {/* SCREEN 2 */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">

            <h3 className="text-xl font-semibold mb-4">
              Task Dashboard
            </h3>

            <div className="bg-black border border-zinc-700 rounded-lg p-6 text-gray-400">
              📋 Organized task view showing pending tasks, completed tasks and progress tracking.
            </div>

          </div>

          {/* SCREEN 3 */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">

            <h3 className="text-xl font-semibold mb-4">
              AI Planner
            </h3>

            <div className="bg-black border border-zinc-700 rounded-lg p-6 text-gray-400">
              🧠 AI generates structured learning or productivity plans based on user goals.
            </div>

          </div>

          {/* SCREEN 4 */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">

            <h3 className="text-xl font-semibold mb-4">
              Analytics
            </h3>

            <div className="bg-black border border-zinc-700 rounded-lg p-6 text-gray-400">
              📊 Productivity analytics including consistency, completion rate and focus insights.
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ProductScreens;
import { useState } from "react"
import { generatePlan } from "../services/api"
import PlanCard from "../components/PlanCard"
import Loader from "../components/Loader"
import Todo from "../components/Todo"

export default function Home() {
  const [goal, setGoal] = useState("")
  const [plan, setPlan] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleGenerate = async () => {
    if (!goal.trim()) {
      setError("Please enter a valid goal.")
      return
    }

    try {
      setError("")
      setLoading(true)
      const res = await generatePlan(goal)
      setPlan(res.data.plan)
    } catch (err) {
      console.error(err)
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleClear = () => {
    setGoal("")
    setPlan([])
    setError("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-black to-purple-900 bg-[length:400%_400%] animate-gradient text-white flex flex-col items-center px-6 py-16">

      {/* Glass Container */}
      <div className="w-full max-w-2xl backdrop-blur-2xl bg-white/20 border border-white/10 rounded-2xl shadow-2xl p-10">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-blue-400 mb-4">
            Vaani Verse 🚀
          </h1>
          <p className="text-gray-300">
            Turn your study goals into a structured AI-powered learning plan.
          </p>
        </div>

        {/* Input Section */}
        <div className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Enter your goal (e.g. Crack DSA in 15 days)"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}

          <div className="flex gap-4">
            <button
              onClick={handleGenerate}
              className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition duration-300"
            >
              {loading ? "Generating..." : "Generate Plan"}
            </button>

            <button
              onClick={handleClear}
              className="flex-1 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition duration-300"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Loader */}
        {loading && (
          <div className="mt-6">
            <Loader />
          </div>
        )}

        {/* Plan Section */}
        {plan.length > 0 && (
          <div className="mt-10 space-y-4">
            {plan.map((item, index) => (
              <PlanCard
                key={index}
                day={item.day}
                task={item.task}
              />
            ))}
          </div>
        )}

      </div>

      {/* 🔥 TODO SECTION BELOW */}
      <div className="w-full max-w-2xl mt-10">
        <Todo />
      </div>

    </div>
  )
}
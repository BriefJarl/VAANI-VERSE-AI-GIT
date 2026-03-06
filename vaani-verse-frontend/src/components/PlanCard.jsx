import { motion } from "framer-motion"

export default function PlanCard({ day, task }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-xl shadow-xl hover:scale-105 transition duration-300"
    >
      <h3 className="font-semibold text-blue-400 text-lg">
        Day {day}
      </h3>
      <p className="text-gray-300 mt-2">{task}</p>
    </motion.div>
  )
}
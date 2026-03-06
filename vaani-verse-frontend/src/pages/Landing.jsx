import assistantImg from "../assets/assistant.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FloatingParticles from "../components/FloatingParticles";
import ChatMockup from "../components/ChatMockup";
import VoiceButton from "../components/VoiceButton";

export default function Landing() {
  return (
    <div className="min-h-screen text-white overflow-hidden relative font-inter">

      {/* Floating AI particles */}
      <FloatingParticles />

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]" />

      {/* Cinematic Radial Spotlights */}
      <div className="absolute top-32 left-40 w-[600px] h-[600px] bg-purple-500 opacity-10 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute bottom-32 right-40 w-[600px] h-[600px] bg-blue-500 opacity-10 blur-[200px] rounded-full pointer-events-none" />

      {/* Soft Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600 opacity-20 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600 opacity-20 blur-[160px] rounded-full" />

      <div className="relative z-10">

        {/* NAVBAR */}
        <nav className="flex justify-between items-center px-16 py-8">
          <h1 className="text-3xl font-orbitron font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Vaani Verse
          </h1>

          <Link to="/app">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg"
            >
              Launch Assistant
            </motion.button>
          </Link>
        </nav>

        {/* HERO */}
        <section className="grid md:grid-cols-2 items-center px-20 mt-24 gap-16">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >

            <h1 className="text-5xl md:text-6xl font-orbitron font-bold leading-[1.1]">
              From Voice to{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Verified Learning Intelligence.
              </span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg max-w-lg leading-relaxed">
              An AI-powered adaptive study partner that transforms your goals into structured plans,
              intelligently reschedules missed work, and validates real learning.
            </p>

            <Link to="/app">
              <motion.button
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 60px rgba(124,58,237,0.8)"
                }}
                whileTap={{ scale: 0.95 }}
                className="relative mt-10 px-10 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-purple-500 to-blue-500 shadow-2xl overflow-hidden"
              >
                <span className="relative z-10">
                  Try Vaani Now →
                </span>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-20 blur-xl"
                  animate={{ opacity: [0.15, 0.35, 0.15] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.button>
            </Link>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >

            {/* Chat UI */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.4)] w-[420px] relative">
              <ChatMockup />
            </div>

            {/* Floating Assistant */}
            <motion.img
              src={assistantImg}
              alt="Vaani Assistant"
              className="absolute -bottom-6 -right-6 w-44 drop-shadow-2xl"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Voice Button */}
            <div className="absolute bottom-0 left-0">
              <VoiceButton />
            </div>

          </motion.div>

        </section>

        {/* FEATURES */}
        <section className="grid md:grid-cols-3 gap-10 px-20 mt-20 pb-28">

          {[
            {
              icon: "🎙️",
              title: "Voice Intelligence",
              desc: "Understands English & Hinglish inputs and converts them into structured study plans."
            },
            {
              icon: "🧠",
              title: "Adaptive Planning Engine",
              desc: "Agent-based system redistributes missed tasks intelligently across remaining days."
            },
            {
              icon: "📊",
              title: "Verified Learning Loop",
              desc: "AI validates task completion through contextual micro-quiz accountability."
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 40px rgba(168,85,247,0.4)"
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-xl"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}

        </section>

      </div>
    </div>
  );
}
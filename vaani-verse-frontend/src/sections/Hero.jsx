import { Mic, Sparkles, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Tilt from "react-parallax-tilt";
import VoicePulse from "../components/VoicePulse";
import { TypeAnimation } from "react-type-animation";

function Hero() {

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="min-h-screen flex items-center justify-center text-white px-6 pt-24 relative overflow-hidden bg-black">

      {/* Floating Gradient Blobs */}
      <div className="absolute top-40 left-40 w-[500px] h-[500px] bg-purple-500 opacity-20 blur-[200px] rounded-full"></div>
      <div className="absolute bottom-20 right-40 w-[400px] h-[400px] bg-blue-500 opacity-20 blur-[200px] rounded-full"></div>

      {/* Extra AI Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">

        <div className="absolute top-40 left-20 w-96 h-96 bg-purple-600 opacity-20 blur-[200px] animate-pulse rounded-full"></div>

        <div className="absolute bottom-20 right-40 w-96 h-96 bg-indigo-600 opacity-20 blur-[200px] animate-pulse rounded-full"></div>

      </div>

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-700/20 via-blue-600/20 to-purple-700/20 blur-3xl"></div>

      <motion.div
        style={{ y }}
        className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center relative z-10"
      >

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >

          {/* Tag */}
          <div className="flex items-center gap-2 text-purple-400">
            <Sparkles size={18} />
            <span className="text-sm">AI Voice Productivity</span>
          </div>

          {/* Animated Heading */}
          <motion.h1
            className="text-5xl md:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="block"
            >
              Your Voice.
            </motion.span>

            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="block"
            >
              Your Plan.
            </motion.span>

            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="block"
            >
              Your Success.
            </motion.span>

          </motion.h1>

          {/* Description */}
          <p className="text-gray-400 text-lg">
            Speak your tasks. Let AI organize them automatically.
            Stay productive without typing.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">

            {/* Start Planning */}
            <a
              href="/workspace"
              className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-200"
            >
              Start Planning
              <ArrowRight size={18} />
            </a>

            {/* Voice Demo */}
            <button className="border border-gray-600 px-6 py-3 rounded-lg flex items-center gap-2 relative overflow-hidden hover:border-purple-500 transition">

              <Mic size={18} />

              {/* Ripple animation */}
              <span className="absolute inset-0 animate-ping rounded-lg bg-purple-500 opacity-10"></span>

              <span className="relative z-10">
                Try Voice Demo
              </span>

            </button>

          </div>

          {/* Voice Animation */}
          <VoicePulse />

        </motion.div>

        {/* RIGHT SIDE DEMO CARD WITH 3D TILT */}
        <Tilt glareEnable={true} glareMaxOpacity={0.2} scale={1.05}>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-lg"
          >

            <div className="text-sm text-gray-400 mb-3">
              Voice Input
            </div>

            <div className="bg-black border border-zinc-700 rounded-lg p-4 text-gray-300">

              <TypeAnimation
                sequence={[
                  "Study DSA today and submit assignment",
                  2000,
                  "Finish Machine Learning lecture",
                  2000,
                  "Complete statistics assignment",
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />

            </div>

            <div className="mt-6 space-y-3">

              <div className="bg-zinc-800 p-3 rounded-lg">
                📘 Study DSA
              </div>

              <div className="bg-zinc-800 p-3 rounded-lg">
                📝 Submit Assignment
              </div>

            </div>

          </motion.div>

        </Tilt>

      </motion.div>

      {/* Floating Brand */}
      <motion.div
        className="absolute bottom-10 text-4xl font-bold text-purple-400"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity
        }}
      >
        Vaani Verse 
      </motion.div>

    </section>
  );
}

export default Hero;
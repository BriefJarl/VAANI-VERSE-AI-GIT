import { motion } from "framer-motion";
import { Mic } from "lucide-react";

export default function VoiceButton() {
  return (

    <motion.button
      className="relative p-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-xl"
      animate={{ scale: [1, 1.15, 1] }}
      transition={{ duration: 1.8, repeat: Infinity }}
    >

      <Mic size={22} />

      <span className="absolute inset-0 rounded-full border border-blue-400 animate-ping"></span>

    </motion.button>

  );
}
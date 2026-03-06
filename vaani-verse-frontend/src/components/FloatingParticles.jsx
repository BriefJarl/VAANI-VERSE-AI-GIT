import { motion } from "framer-motion";

export default function FloatingParticles() {
  const particles = Array.from({ length: 20 });

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/40 rounded-full"
          animate={{
            y: ["0%", "-100%"],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
          style={{
            left: `${Math.random() * 100}%`,
            bottom: "-10%"
          }}
        />
      ))}
    </div>
  );
}
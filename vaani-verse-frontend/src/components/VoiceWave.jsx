import { motion } from "framer-motion";

function VoiceWave() {

  return (

    <div className="flex gap-1 items-end h-10">

      {[...Array(5)].map((_, i) => (

        <motion.div
          key={i}
          animate={{
            height: ["10px", "30px", "10px"]
          }}
          transition={{
            repeat: Infinity,
            duration: 1,
            delay: i * 0.2
          }}
          className="w-1 bg-purple-500 rounded"
        />

      ))}

    </div>

  );

}

export default VoiceWave;
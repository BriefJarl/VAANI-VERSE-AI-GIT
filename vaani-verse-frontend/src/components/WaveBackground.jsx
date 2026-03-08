import { motion, useMotionValue, useTransform } from "framer-motion";

function WaveBackground() {

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [0, window.innerHeight], [6, -6]);
  const rotateY = useTransform(mouseX, [0, window.innerWidth], [-6, 6]);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (

    <div
      className="absolute inset-0 -z-10 overflow-hidden"
      onMouseMove={handleMouseMove}
    >

      {/* Grid Layer */}

      <motion.div
        style={{
          rotateX,
          rotateY
        }}
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"
      />

      {/* Glow blob */}

      <div className="absolute w-[700px] h-[700px] bg-purple-600 opacity-20 blur-[200px] rounded-full animate-blob1"></div>

      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-blue-500 opacity-20 blur-[200px] rounded-full animate-blob2"></div>

    </div>

  );
}

export default WaveBackground;
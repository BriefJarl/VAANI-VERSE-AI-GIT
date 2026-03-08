import { useEffect, useState } from "react";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[9999]"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)"
      }}
    >

      {/* Glow Aura */}
      <div className="absolute w-10 h-10 bg-purple-500/20 blur-xl rounded-full -z-10"></div>

      {/* Diamond Cursor */}
      <div
        className="w-4 h-4 rotate-45 bg-gradient-to-r from-purple-500 to-blue-500 shadow-[0_0_12px_rgba(168,85,247,0.8)]"
      ></div>

    </div>
  );
}

export default CustomCursor;
import { useState } from "react";

function CursorSpotlight() {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="fixed inset-0 pointer-events-none z-0"
    >

      <div
        className="absolute w-[500px] h-[500px] rounded-full bg-purple-600 opacity-20 blur-[200px] transition-transform duration-75"
        style={{
          transform: `translate(${position.x - 250}px, ${position.y - 250}px)`
        }}
      />

    </div>
  );
}

export default CursorSpotlight;
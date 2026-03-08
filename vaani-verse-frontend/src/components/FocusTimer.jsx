import { useState, useEffect } from "react";

function FocusTimer() {

  const [seconds, setSeconds] = useState(1500); // 25 min
  const [running, setRunning] = useState(false);

  useEffect(() => {

    let timer;

    if (running && seconds > 0) {

      timer = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);

    }

    return () => clearInterval(timer);

  }, [running, seconds]);

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (

    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">

      <h2 className="text-xl mb-4">
        Focus Timer
      </h2>

      <div className="text-4xl mb-4">
        {minutes}:{secs.toString().padStart(2, "0")}
      </div>

      <button
        onClick={() => setRunning(!running)}
        className="bg-purple-600 px-4 py-2 rounded-lg"
      >
        {running ? "Pause" : "Start"}
      </button>

    </div>

  );

}

export default FocusTimer;
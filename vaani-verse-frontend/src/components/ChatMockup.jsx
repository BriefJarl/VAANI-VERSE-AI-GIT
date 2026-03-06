import { useEffect, useState } from "react";

export default function ChatMockup() {

  const messages = [
    "I need to finish Organic Chemistry in 7 days.",
    "Analyzing syllabus...",
    "Creating adaptive study roadmap...",
    "Day 1 scheduled: Thermodynamics + Practice"
  ];

  const [displayed, setDisplayed] = useState([]);

  useEffect(() => {

    let index = 0;

    const interval = setInterval(() => {

      setDisplayed((prev) => {

        if (index >= messages.length) {
          clearInterval(interval);
          return prev;
        }

        const newMessages = [...prev, messages[index]];
        index++;

        return newMessages;
      });

    }, 1500);

    return () => clearInterval(interval);

  }, []);

  return (
    <div>

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        <span className="text-sm text-gray-300">
          Vaani Assistant
        </span>
      </div>

      {/* Messages */}
      {displayed.map((msg, i) => (

        <div
          key={i}
          className={`p-4 rounded-xl mb-3 text-sm ${
            i % 2 === 0
              ? "bg-white/10 text-gray-200"
              : "bg-gradient-to-r from-purple-500/30 to-blue-500/30 text-gray-100 ml-6"
          }`}
        >
          {msg}
        </div>

      ))}

      {/* Typing Indicator */}
      {displayed.length < messages.length && (

        <div className="flex gap-1 mt-2 ml-2">
          <span className="w-2 h-2 bg-white/40 rounded-full animate-bounce"></span>
          <span className="w-2 h-2 bg-white/40 rounded-full animate-bounce delay-100"></span>
          <span className="w-2 h-2 bg-white/40 rounded-full animate-bounce delay-200"></span>
        </div>

      )}

    </div>
  );
}
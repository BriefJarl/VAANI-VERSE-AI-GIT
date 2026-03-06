import FloatingParticles from "./FloatingParticles";
import ChatMockup from "./ChatMockup";
import VoiceButton from "./VoiceButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-between px-16 text-white">

      {/* AI floating background */}
      <FloatingParticles />

      {/* LEFT TEXT */}
      <div className="max-w-xl">

        <h1 className="text-6xl font-bold leading-tight">
          From Voice to <br />
          <span className="text-blue-400">
            Verified Learning Intelligence.
          </span>
        </h1>

        <p className="mt-6 text-gray-300 text-lg">
          An AI-powered adaptive study partner that transforms
          your goals into structured plans, intelligently
          reschedules missed work, and validates real learning.
        </p>

        <button className="mt-8 bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:scale-105 transition">
          Try Vaani Now →
        </button>

      </div>

      {/* RIGHT SIDE CHAT MOCKUP */}
      <div className="relative flex items-center gap-4">
        <ChatMockup />
        <VoiceButton />
      </div>

    </section>
  );
}
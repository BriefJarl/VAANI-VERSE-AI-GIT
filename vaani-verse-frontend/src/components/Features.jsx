import Tilt from "react-parallax-tilt";

export default function Features() {

  const features = [
    {
      title: "Voice Intelligence",
      desc: "Understands English & Hinglish inputs and converts them into structured study plans.",
      icon: "🎤"
    },
    {
      title: "Adaptive Planning Engine",
      desc: "Agent-based system redistributes missed tasks intelligently across remaining days.",
      icon: "🧠"
    },
    {
      title: "Verified Learning Loop",
      desc: "AI validates task completion through contextual micro-quiz accountability.",
      icon: "📊"
    }
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-16 pb-20">

      {features.map((f, i) => (

        <Tilt
          key={i}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          glareEnable={true}
          glareMaxOpacity={0.2}
          scale={1.05}
        >

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">

            <div className="text-3xl mb-3">
              {f.icon}
            </div>

            <h3 className="text-xl font-semibold mb-2 text-white">
              {f.title}
            </h3>

            <p className="text-gray-300">
              {f.desc}
            </p>

          </div>

        </Tilt>

      ))}

    </section>
  );
}
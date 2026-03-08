export default function VoicePulse() {

  return (

    <div className="flex gap-2 justify-center mt-6">

      <div className="w-2 h-6 bg-purple-500 animate-bounce"></div>
      <div className="w-2 h-8 bg-purple-400 animate-bounce delay-100"></div>
      <div className="w-2 h-10 bg-purple-500 animate-bounce delay-200"></div>
      <div className="w-2 h-8 bg-purple-400 animate-bounce delay-300"></div>
      <div className="w-2 h-6 bg-purple-500 animate-bounce delay-400"></div>

    </div>

  );
}
export default function Navbar() {

  return (
    <nav className="flex justify-between items-center px-16 py-6 text-white">

      <h1 className="text-2xl font-bold text-blue-400">
        Vaani Verse
      </h1>

      <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-2 rounded-lg shadow-lg hover:scale-105 transition">
        Launch Assistant
      </button>

    </nav>
  );

}

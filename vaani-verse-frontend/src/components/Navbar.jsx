import { Mic } from "lucide-react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/40 border-b border-zinc-800">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-2 text-white font-semibold text-lg">
          <Mic className="text-purple-500" />
          Vaani
        </div>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-8 text-gray-300 text-sm">

          <a href="#" className="hover:text-white transition">
            Home
          </a>

          <a href="#" className="hover:text-white transition">
            Features
          </a>

          <a href="#" className="hover:text-white transition">
            Dashboard
          </a>

          <a href="#" className="hover:text-white transition">
            Pricing
          </a>

          <a href="#" className="hover:text-white transition">
            Contact
          </a>

        </div>

        {/* RIGHT BUTTONS */}
        <div className="flex items-center gap-4">

          <button className="text-gray-300 hover:text-white text-sm">
            Sign In
          </button>

          <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm text-white">
            Get Started
          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;
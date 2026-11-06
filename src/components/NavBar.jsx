import React from "react";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white px-6 md:px-12 py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Brand */}
        <h1 className="text-2xl font-bold text-blue-400">
          DevWorld.
        </h1>

        {/* Navigation links */}
        <div className="hidden sm:flex items-center gap-8">
          <a href="#home" className="hover:text-blue-400 transition">
            Home
          </a>

          <a href="#skills" className="hover:text-blue-400 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-blue-400 transition">
            Projects
          </a>
        </div>

        {/* Call to action */}
        <a
          href="#projects"
          className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg transition"
        >
          Explore Work
        </a>

      </div>
    </nav>
  );
}

export default Navbar;

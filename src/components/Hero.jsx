import React from "react";

function Hero() {
  return (
    <section
      id="home"
      className="bg-slate-900 text-white px-6 md:px-12 py-20"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Introduction */}
        <div className="space-y-6">


          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Turning Ideas Into
            <span className="text-blue-400"> Digital Experiences.</span>
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed">
            Explore my technical skills, creative projects and
            journey in software development. 
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4">

            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
            >
              Explore Projects
            </a>

            <a
              href="#skills"
              className="border border-slate-500 hover:border-blue-400 px-6 py-3 rounded-lg transition"
            >
              View Skills
            </a>

          </div>
        </div>

        {/* Decorative coding panel */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-2xl hover:shadow-lg hover:-translate-x-4 transition duration-300">

          <div className="flex gap-2 mb-6">
            <span className="w-3 h-3 bg-red-400 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
            <span className="w-3 h-3 bg-green-400 rounded-full"></span>
          </div>

          <div className="font-mono text-sm md:text-base space-y-3">
            <p className="text-slate-400">
              // A little about me
            </p>

            <p>
              <span className="text-purple-400">const</span>{" "}
              <span className="text-blue-300">developer</span> = {"{"}
            </p>

            <p className="pl-6">
              <span className="text-blue-300">name:</span>{" "}
              <span className="text-green-400">'Wendy Wahome'</span>,
            </p>

            <p className="pl-6">
              <span className="text-blue-300">skills:</span>{" "}
              <span className="text-green-400">['HTML $ CSS', 'JS', 'React']</span>,
            </p>

            <p className="pl-6">
              <span className="text-blue-300">passion:</span>{" "}
              <span className="text-green-400">'Building amazing things'</span>
            </p>

            <p>{"}"}</p>

            
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;

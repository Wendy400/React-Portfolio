import React from "react";


function ProjectCard({ project }) {
    return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-lg transition duration-300">

      {/* Project information */}
      <div className="p-6">
        <span className="text-sm font-semibold text-blue-600">
          {project.category}
        </span>

        <h3 className="text-xl font-bold text-slate-900 mt-2 mb-3">
          {project.title}
        </h3>

        <p className="text-slate-600 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Technologies used */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology, index) => (
            <span
              key={index}
              className="bg-slate-100 text-slate-700 text-xs px-3 py-2 rounded-full"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
import React from "react";


function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-lg transition duration-300 ">
      <div className="p-6">
        {/* Project preview image */}
        {project.image && (
          <div className="w-full h-48 overflow-hidden">
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="w-full h-full object-cover hover:scale-105 transition duration-300"
            />
          </div>
        )}

      </div>

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

        {/* View Project Link */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 underline transition mb-5"
          >
            View Project
            <span>↗</span>
          </a>
        )}

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
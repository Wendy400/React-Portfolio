import React from "react";
import ProjectCard from "./ProjectCard.jsx";
import ProjectForm from "./ProjectForm.jsx";

function ProjectList({
    projects,
    searchTerm,
    onSearchChange,
    showForm,
    onShowForm,
    onCloseForm,
    onAddProject,
}) {
    return (
        <section id="projects" className="bg-slate-50 py-10 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-12">

                    <h2 className="text-5xl md:text-4xl font-bold text-slate-900 mt-3">
                        Featured Projects
                    </h2>
                </div>

                {/* Search bar */}
                <div className="max-w-xl mx-auto mb-10">
                    <input
                        type="search"
                        placeholder="Search projects by title, category..."
                        value={searchTerm}
                        onChange={(event) => onSearchChange(event.target.value)}
                        className="w-full px-5 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    {/* Add Project Button */}
                    <div className="flex justify-end mb-6">
                        <button
                            onClick={onShowForm}
                            className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            + Add Project
                        </button>
                    </div>

                    {showForm && (
                        <ProjectForm
                            onAddProject={onAddProject}
                            onClose={onCloseForm}
                        />
                    )}

                </div>


                {projects.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center  py-10 text-slate-500">
                        No projects found. Try another word.
                    </p>
                )}
            </div>
        </section>
    );
}

export default ProjectList;
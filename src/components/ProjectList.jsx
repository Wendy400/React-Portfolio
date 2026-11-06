import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
  return (
    <section id="projects" className="bg-slate-50 py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">

          <h2 className="text-5xl md:text-4xl font-bold text-slate-900 mt-3">
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default ProjectList;
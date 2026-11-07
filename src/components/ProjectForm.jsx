import React, { useState } from "react";

function ProjectForm({ onAddProject, onClose }) {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    technologies: "",
    link: "",
    image: "", 
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newProject = {
      id: Date.now(),
      title: formData.title,
      category: formData.category,
      description: formData.description,
      technologies: formData.technologies,
      image: formData.image,
      link : formData.link
        .split(",")
        .map((technology) => technology.trim())
        .filter(Boolean),
    };

    onAddProject(newProject);

    setFormData({
      title: "",
      category: "",
      description: "",
      technologies: "",
      link: "",
      image: "",
    });

    onClose();
  }

  return (
    <form onSubmit={handleSubmit} className="bg-slate-100 p-6 rounded-xl shadow-md border border-slate-200 ">
      <h3 className="text-xl font-bold mb-5">Add a New Project</h3>

      <div className="grid gap-4">
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Project title"
          required
          className="border p-3 rounded-lg"
        />

        <input
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category (e.g. Frontend, Backend, Fullstack)"
          required
          className="border p-3 rounded-lg"
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Project description"
          required
          className="border p-3 rounded-lg"
        />

        <input
          name="technologies"
          value={formData.technologies}
          onChange={handleChange}
          placeholder="Technologies (e.g. React, CSS, JavaScript)"
          className="border p-3 rounded-lg"
        />

        <input
          name="link"
          value={formData.link}
          onChange={handleChange}
          placeholder="Project Link (eg https:/ github/newproject.com)"
          className="border p-3 rounded-lg"
        />

        <input
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Thumbnail URL"
          className="border p-3 rounded-lg"
        />


      </div>

      <div className="flex gap-3 mt-5">
        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          Add Project
        </button>

        <button
          type="button"
          onClick={onClose}
          className="bg-slate-200 text-slate-700 px-5 py-2 rounded-lg hover:bg-slate-300"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default ProjectForm;
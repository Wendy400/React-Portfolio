import { useState } from 'react'
import './App.css'
import Navbar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills';
import ProjectList from './components/ProjectList.jsx';
import projectsData from './data/projects.js';




function App() {
  const [projects, setProjects] = useState(projectsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);

  const filteredProjects = projects.filter((project) => {
    return (
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  });
  function handleAddProject(newProject) {
    setProjects((previousProjects) => [
      newProject,
      ...previousProjects,
    ]);
  }
  function handleCloseForm() {
    setShowForm(false);
    
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <ProjectList
        projects={filteredProjects}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        showForm={showForm}
        onShowForm={() => setShowForm(true)}
        onCloseForm={handleCloseForm}
        onAddProject={handleAddProject}
      />


    </>
  );
}

export default App;
import { useState } from 'react'
import './App.css'
import Navbar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills';
import ProjectList from './components/ProjectList.jsx';
import projectsData from './data/projects.js';


function App() {
  const [projects, setProjects] = useState(projectsData);

  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <ProjectList projects={projects} />

      
    </>
  );
}

export default App;
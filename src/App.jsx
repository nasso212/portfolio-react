// src/App.jsx
import React, { useState, useEffect } from 'react'
import Home from './components/Home'
import Projects from './components/Projects'
import ProjectDetail from './components/ProjectDetail'
import Contact from './components/Contact'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [selectedProject, setSelectedProject] = useState(null)

  const navigateTo = (section) => {
    setActiveSection(section)
    setSelectedProject(null)
  }

  const showProjectDetails = (project) => {
    setSelectedProject(project)
    setActiveSection('projectDetail')
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [activeSection, selectedProject])

  const linkClasses = "cursor-pointer px-4 py-2 rounded-lg text-lg font-medium transition duration-200 hover:bg-blue-600 hover:text-white"
  const activeLink  = "bg-blue-600 text-white"

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-blue-800 py-4 sticky top-0 z-50 shadow">
        <nav className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-white">Nassim Akhchine</h1>
          <ul className="flex space-x-4">
            <li>
              <a
                onClick={() => navigateTo('home')}
                className={`${linkClasses} ${activeSection==='home' ? activeLink : 'text-blue-200'}`}
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                onClick={() => navigateTo('projects')}
                className={`${linkClasses} ${['projects','projectDetail'].includes(activeSection) ? activeLink : 'text-blue-200'}`}
              >
                Projets
              </a>
            </li>
            <li>
              <a
                onClick={() => navigateTo('contact')}
                className={`${linkClasses} ${activeSection==='contact' ? activeLink : 'text-blue-200'}`}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-6 py-12">
        {activeSection === 'home' && <Home />}
        {activeSection === 'projects' && <Projects showProjectDetails={showProjectDetails} />}
        {activeSection === 'projectDetail' && selectedProject && (
          <ProjectDetail project={selectedProject} goBack={() => navigateTo('projects')} />
        )}
        {activeSection === 'contact' && <Contact />}
      </main>

      <footer className="bg-gray-900 text-white py-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Nassim Akhchine. Tous droits réservés.</p>
        <p>Construit avec la passion de l'innovation technologique.</p>
      </footer>
    </div>
  )
}

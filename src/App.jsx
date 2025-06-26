import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Contact from './components/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigateTo = (section) => {
    setActiveSection(section);
    setSelectedProject(null);
    setMenuOpen(false);
  };

  const showProjectDetails = (project) => {
    setSelectedProject(project);
    setActiveSection('projectDetail');
    setMenuOpen(false);
  };

  // Scroll to top on section change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection, selectedProject]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-blue-800 py-4 sticky top-0 z-50 shadow">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/logo-portfolio.png" alt="Logo Nassim" className="h-10 w-auto mr-3" />
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Nassim Akhchine</h1>
          </div>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          <nav>
            <ul className={`${menuOpen ? 'flex flex-col items-center space-y-4' : 'hidden'} md:flex md:flex-row md:space-x-6 md:space-y-0`}>  
              <li>
                <button
                  onClick={() => navigateTo('home')}
                  className={`px-4 py-2 rounded-lg text-lg font-medium transition-colors duration-300 focus:outline-none ${activeSection === 'home' ? 'bg-blue-600 text-white' : 'text-blue-200 hover:bg-blue-600 hover:text-white'}`}
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('projects')}
                  className={`px-4 py-2 rounded-lg text-lg font-medium transition-colors duration-300 focus:outline-none ${['projects','projectDetail'].includes(activeSection) ? 'bg-blue-600 text-white' : 'text-blue-200 hover:bg-blue-600 hover:text-white'}`}
                >
                  Projets
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('contact')}
                  className={`px-4 py-2 rounded-lg text-lg font-medium transition-colors duration-300 focus:outline-none ${activeSection === 'contact' ? 'bg-blue-600 text-white' : 'text-blue-200 hover:bg-blue-600 hover:text-white'}`}
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow container mx-auto px-6 py-12">
        {activeSection === 'home' && <Home />}
        {activeSection === 'projects' && <Projects showProjectDetails={showProjectDetails} />}
        {activeSection === 'projectDetail' && selectedProject && (
          <ProjectDetail project={selectedProject} goBack={() => navigateTo('projects')} />
        )}
        {activeSection === 'contact' && <Contact />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg">© {new Date().getFullYear()} Nassim Akhchine. Tous droits réservés.</p>
          <p className="mt-2 text-sm text-gray-400">Construit avec la passion de l'innovation technologique.</p>
        </div>
      </footer>
    </div>
  );
}

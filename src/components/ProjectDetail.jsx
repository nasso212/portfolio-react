import React from 'react'

export default function ProjectDetail({ project, goBack }) {
  return (
    <section className="bg-white p-6 md:p-10 rounded-3xl shadow-2xl max-w-5xl mx-auto animate-fade-in-up">
      <button
        onClick={goBack}
        className="mb-6 bg-blue-500 text-white font-bold py-2 px-6 rounded-full shadow hover:bg-blue-600 transition"
      >
        ← Retour aux projets
      </button>

      <h2 className="text-4xl font-extrabold text-blue-800 mb-8 text-center">
        Détails du Projet : {project.title}
      </h2>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex items-center justify-center text-7xl text-blue-600">{project.icon}</div>
        <div className="text-lg text-gray-700 space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Description courte :</h3>
            <p>{project.description}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">En savoir plus :</h3>
            <p>{project.details}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Compétences mises en œuvre :</h3>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill,i) => (
                <span key={i} className="bg-blue-200 text-blue-800 text-sm font-semibold px-4 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

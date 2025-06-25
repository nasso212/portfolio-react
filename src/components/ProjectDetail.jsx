export default function ProjectDetail({ project, goBack }) {
  return (
    <section className="animate-fade-in-up max-w-5xl mx-auto">
      <button onClick={goBack} className="mb-6 text-blue-600 hover:underline font-medium">
        ← Retour aux projets
      </button>

      <h2 className="text-4xl font-extrabold text-blue-800 mb-4 text-center">
        Détails du Projet : {project.title}
      </h2>

      <div className="text-center text-6xl mb-6">{project.icon}</div>

      <div className="text-lg text-gray-800 space-y-6">
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
            {project.skills.map((skill, i) => (
              <span key={i} className="bg-blue-200 text-blue-900 text-sm font-semibold px-4 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

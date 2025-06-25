export default function Projects({ showProjectDetails }) {
  const projects = [
    {
      id: 'wordpress-rotary',
      icon: '🌐',
      title: "Mise en place d'un site WordPress pour Rotary",
      description:
        "J'ai conçu, développé et optimisé un site web dynamique sous WordPress pour l'organisation Rotary...",
      skills: ["WordPress", "Personnalisation de Thème", "SEO", "Gestion de Contenu", "Design Web"],
      details: `Ce projet m'a permis de maîtriser l'écosystème WordPress de A à Z. J'ai été responsable de l'analyse des besoins, de la sélection et configuration des thèmes et plugins, et de l'intégration de contenus pour créer une présence en ligne professionnelle et fonctionnelle pour le Rotary. L'accent a été mis sur l'expérience utilisateur et l'accessibilité. J'ai également appris à diagnostiquer et résoudre les problèmes courants liés à WordPress.`
    },
    {
      id: 'ai-creation',
      icon: '🧠',
      title: "Création et Implémentation d'une IA",
      description:
        "Un projet fascinant où j'ai exploré les fondements de l'Intelligence Artificielle...",
      skills: ["Python", "Machine Learning", "Analyse de Données", "Algorithmes", "Développement AI"],
      details: `Au cours de ce projet, j'ai mis en œuvre un petit programme d'IA, en commençant par la préparation des données, la sélection d'algorithmes simples (comme la régression linéaire ou la classification de base), et l'évaluation des performances. J'ai utilisé Python pour le développement, ce qui a renforcé mes compétences en programmation et en résolution de problèmes complexes liés aux données. J'ai également abordé les défis liés à la qualité des données et à l'interprétation des résultats des modèles.`
    },
    {
      id: 'network-fortinet',
      icon: '🔒',
      title: "Mise en place d'un réseau sécurisé (Windows Server & Fortinet)",
      description:
        "J'ai conçu et déployé une infrastructure réseau robuste et hautement sécurisée...",
      skills: ["Windows Server", "Active Directory", "Réseau TCP/IP", "Fortinet", "Cybersécurité", "Administration Système"],
      details: `Ce projet a été une expérience immersive dans l'administration réseau et la sécurité. J'ai configuré un environnement Windows Server avec Active Directory pour centraliser la gestion des utilisateurs et des ressources. L'intégration d'un pare-feu Fortinet m'a permis de mettre en place des règles de sécurité strictes, de surveiller le trafic réseau et de protéger l'infrastructure contre les accès non autorisés et les cyberattaques. J'ai également appris à diagnostiquer et résoudre les problèmes de connectivité, et à optimiser les performances réseau.`
    }
  ]

  return (
    <section className="animate-fade-in-up">
      <h2 className="text-5xl font-extrabold text-blue-800 mb-12 text-center">
        Mes Projets : Là où la curiosité prend forme
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-6 rounded-2xl shadow hover:shadow-xl border border-blue-100">
            <div className="text-5xl mb-4 text-center">{project.icon}</div>
            <h3 className="text-2xl font-bold text-blue-700 mb-2 text-center">{project.title}</h3>
            <p className="text-gray-700 mb-4 text-center">{project.description}</p>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {project.skills.map((skill, i) => (
                <span key={i} className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
            <div className="text-center">
              <button
                onClick={() => showProjectDetails(project)}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded-full shadow transition"
              >
                Plus d'informations
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

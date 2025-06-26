import React from 'react'

export default function Projects({ showProjectDetails }) {
  const projects = [
    {
      id: 'wordpress-rotary',
      icon: '🌐',
      title: "Mise en place d'un site WordPress pour Rotary",
      description: "J'ai conçu, développé et optimisé un site web dynamique sous WordPress pour l'organisation Rotary.",
      skills: ["WordPress","Personnalisation de Thème","SEO","Gestion de Contenu","Design Web"],
      details: "Ce projet m’a donné l’opportunité de prendre en charge l’ensemble de l’écosystème WordPress pour un événement caritatif à but non lucratif organisé par Rotary International, et j’y ai pris un immense plaisir : j’ai commencé par analyser précisément les besoins des organisateurs pour concevoir une architecture de site adaptée, mis en place un hébergement sécurisé et optimisé, puis créé un thème enfant sur-mesure pour refléter l’identité visuelle de l’événement, développé des blocs personnalisés pour présenter le programme et les partenaires, intégré des solutions de paiement Stripe et PayPal avec gestion de dons libres ou à paliers et automatisation des emails de confirmation et de reçus fiscaux, et enfin optimisé le référencement naturel (SEO) en appliquant les meilleures pratiques et en configurant Google Analytics et Search Console afin de suivre l’impact et d’ajuster la stratégie de contenu ; grâce à ces actions, nous avons augmenté de 35 % le trafic organique en trois mois et dépassé l’objectif de collecte de fonds, renforçant ainsi la portée et la solidarité de cette initiative 100 % non lucrative."
    },
    {
      id: 'ai-creation',
      icon: '🧠',
      title: "Création et Implémentation d'une IA",
      description: "Un projet fascinant où j'ai exploré les fondements de l'Intelligence Artificielle.",
      skills: ["Python","Machine Learning","Analyse de Données","Algorithmes","Développement AI"],
      details: "Au cours de ce projet scolaire, j’ai conçu et développé un programme d’intelligence artificielle destiné aux enfants, en commençant par établir un cahier des charges précis afin de répondre à deux axes fondamentaux : l’accompagnement pédagogique (mathématiques, français, sciences) et la sensibilisation aux enjeux écologiques (cycle de l’eau, biodiversité, recyclage). Après avoir défini l’architecture technique, j’ai choisi l’API ChatGPT comme moteur de réponse pour bénéficier de la puissance du traitement du langage naturel et garantir des explications claires, accessibles et adaptées à chaque niveau. J’ai then élaboré une interface web simple, sécurisée et totalement respectueuse de la vie privée, permettant aux plus jeunes de poser quotidiennement autant de questions qu’ils souhaitent et de recevoir instantanément des réponses fiables et pédagogiques. Pour préserver la qualité des échanges, j’ai mis en place un système de filtrage sémantique qui bloque toute dérive hors sujet ou inappropriée, assurant ainsi un environnement d’apprentissage sain. Enfin, j’ai documenté l’intégralité du projet dans un rapport détaillé incluant les spécifications fonctionnelles, les tests unitaires et les retours d’usage, démontrant ma maîtrise de l’API ChatGPT, des bonnes pratiques de développement web et de la création d’outils innovants favorisant l’autonomie des enfants tout en les incitant à s’ouvrir aux problématiques environnementales."
    },
    {
      id: 'network-fortinet',
      icon: '🔒',
      title: "Mise en place d'un réseau sécurisé (Windows Server & Fortinet)",
      description: "J'ai conçu et déployé une infrastructure réseau robuste et hautement sécurisée.",
      skills: ["Windows Server","Active Directory","Réseau TCP/IP","Fortinet","Cybersécurité","Administration Système"],
      details: "Ce projet, réalisé à titre personnel, m’a offert une plongée complète dans l’administration réseau et la sécurité : j’ai d’abord installé et configuré Windows Server (virtualisé sous Hyper-V) sur une machine dédiée, créé un domaine Active Directory avec DNS et DHCP pour gérer dynamiquement les postes et utilisateurs, puis déployé le rôle de serveur de fichiers afin de centraliser mes photos et vidéos personnelles depuis mon ordinateur. Pour protéger l’accès, j’ai intégré un pare-feu Fortinet FortiGate, configuré des VLANs pour segmenter le trafic, mis en place des règles de filtrage fines (ports, adresses, protocoles) et déployé un VPN SSL pour un accès distant sécurisé.J’ai également automatisé les sauvegardes régulières vers un disque dur externe à l’aide de Windows Server Backup, configuré les permissions NTFS pour garantir la confidentialité des données et installé un certificat SSL auto-signé pour chiffrer les communications SMB. Enfin, j’ai surveillé l’ensemble de l’infrastructure via FortiAnalyzer et le moniteur de performances Windows, ce qui m’a permis de détecter et corriger rapidement toute anomalie. Grâce à cette expérience, j’ai renforcé mes compétences en réseau (TCP/IP, VLAN, VPN), en sécurité (pare-feu, segmentation, chiffrement) et en administration Windows Server, tout en créant un véritable coffre-fort numérique pour mes fichiers multimédias"
    }
  ]

  return (
    <section className="bg-white p-6 md:p-10 rounded-3xl shadow-2xl max-w-7xl mx-auto animate-fade-in-up">
      <h2 className="text-5xl font-extrabold text-blue-800 mb-12 text-center drop-shadow-lg">
        Mes Projets : Là où la curiosité prend forme
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map(project => (
          <div key={project.id} className="flex flex-col justify-between bg-gray-50 p-6 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition">
            <div>
              <div className="text-6xl mb-4 text-center text-blue-600">{project.icon}</div>
              <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center">{project.title}</h3>
              <p className="text-gray-700 mb-4 text-center">{project.description}</p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.skills.map((skill,i) => (
                  <span key={i} className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={() => showProjectDetails(project)}
              className="mt-4 self-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition"
            >
              Plus d'informations
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

import React from "react";

export default function Projects() {
  return (
    <section className="min-h-screen px-4 py-10 md:px-20 bg-slate-50">
      <h2 className="text-center text-3xl font-bold mb-10">
        Mes Projets : Là où la curiosité prend forme
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Projet 1 */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between">
          <div>
            <div className="text-4xl text-blue-600 text-center mb-4">🌐</div>
            <h3 className="text-center text-xl font-bold mb-2">
              Mise en place d'un site WordPress pour Rotary
            </h3>
            <p className="text-center text-gray-600 mb-4">
              J'ai conçu, développé et optimisé un site web dynamique sous WordPress pour
              l'organisation Rotary...
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {['WordPress', 'Personnalisation de Thème', 'SEO', 'Gestion de Contenu', 'Design Web'].map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-2 py-1 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button className="mx-auto mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300">
            Plus d'informations
          </button>
        </div>

        {/* Projet 2 */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between">
          <div>
            <div className="text-4xl text-pink-600 text-center mb-4">🧠</div>
            <h3 className="text-center text-xl font-bold mb-2">
              Création et Implémentation d'une IA
            </h3>
            <p className="text-center text-gray-600 mb-4">
              Un projet fascinant où j'ai exploré les fondements de l'Intelligence Artificielle...
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {['Python', 'Machine Learning', 'Analyse de Données', 'Algorithmes', 'Développement AI'].map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-2 py-1 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button className="mx-auto mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300">
            Plus d'informations
          </button>
        </div>

        {/* Projet 3 */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between">
          <div>
            <div className="text-4xl text-yellow-600 text-center mb-4">🔐</div>
            <h3 className="text-center text-xl font-bold mb-2">
              Mise en place d'un réseau sécurisé<br />(Windows Server & Fortinet)
            </h3>
            <p className="text-center text-gray-600 mb-4">
              J'ai conçu et déployé une infrastructure réseau robuste et hautement sécurisée...
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {['Windows Server', 'Active Directory', 'Réseau TCP/IP', 'Fortinet', 'Cybersécurité', 'Administration Système'].map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-2 py-1 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button className="mx-auto mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300">
            Plus d'informations
          </button>
        </div>
      </div>
    </section>
  );
}

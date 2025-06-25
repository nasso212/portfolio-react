import React from 'react';

const Home = () => {
    // URL PDF (pour le bouton téléchargement)
    const cvPdfUrl = "https://nassim-akhchine.ch/cv-nassim-akhchine.pdf";

    return (
        <section id="home" className="bg-white p-10 rounded-3xl shadow-2xl mb-12 animate-fade-in-up">
            <h2 className="text-5xl font-extrabold text-blue-800 mb-8 text-center drop-shadow-lg">
                Bonjour, je suis <span className="text-blue-600">Nassim Akhchine</span> !
            </h2>
            <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
                <div className="lg:w-1/2 mb-8 lg:mb-0 flex justify-center items-center">
                    <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-blue-400 transform hover:scale-105 transition-transform duration-500">
                        <img
                            src="/photo-nassim.png" // Remplace par /photo-nassim.png si prêt
                            alt="Nassim Akhchine"
                            className="w-full h-full object-cover"
                            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x400/94A3B8/FFFFFF?text=Votre+Photo"; }}
                        />
                    </div>
                </div>
                <div className="lg:w-1/2 text-xl leading-relaxed text-gray-700">
                    <p className="mb-6">
                        Actuellement en formation <strong className="text-blue-700">CFC Informatique</strong> au sein de l'école <a href="https://genevainstituteoftechnology.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">Geneva Institute of Technology</a>, ma curiosité insatiable me pousse à explorer chaque recoin des nouvelles technologies. Fort de mes expériences variées en IT, je touche un peu à tout dans le vaste monde de l'informatique, de l'assemblage et la configuration de matériel à l'installation et la gestion de systèmes d'exploitation, en passant par la mise en place d'infrastructures complexes.
                    </p>
                    <p className="mb-6">
                        Motivé et désireux de choisir le domaine précis vers lequel m'orienter, je suis activement à la recherche d'un stage qui me permettra d'approfondir mes connaissances et de mettre en pratique mes compétences dans un environnement professionnel stimulant. Ce portfolio est ma vitrine, un aperçu de mon parcours, de mes compétences et des projets qui ont marqué mon apprentissage. Mon objectif est d'apporter une touche d'innovation et une énergie nouvelle aux défis du monde numérique.
                    </p>
                    <p className="mb-8">
                        Je suis particulièrement motivé à mettre mes compétences au service d'un environnement où la technologie rencontre l'humain, comme dans le domaine de la santé. Découvrez mes réalisations et imaginez comment ma passion pourrait s'intégrer à votre équipe.
                    </p>
                </div>
            </div>

            {/* SECTION CV EN IMAGES */}
            <div className="mt-12 pt-8 border-t-2 border-gray-200">
                <h3 className="text-4xl font-extrabold text-blue-800 mb-6 text-center drop-shadow-lg">Mon Curriculum Vitae</h3>

                {/* Images PNG du CV */}
                <div className="space-y-6 max-w-4xl mx-auto">
                    <img
                        src="/cv-nassim-akhchine-1.png"
                        alt="CV Page 1"
                        className="w-full rounded-xl shadow"
                    />
                    <img
                        src="/cv-nassim-akhchine-2.png"
                        alt="CV Page 2"
                        className="w-full rounded-xl shadow"
                    />
                </div>

                {/* Bouton Télécharger PDF */}
                <div className="text-center mt-6">
                    <a
                        href={cvPdfUrl}
                        download
                        className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-full shadow transition mt-4"
                    >
                        📥 Télécharger mon CV (PDF)
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;

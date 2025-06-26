import { useState } from 'react';

export default function Contact() {
  // État pour le statut du formulaire
  const [submitting, setSubmitting] = useState(false);      // True pendant l'envoi
  const [statusMessage, setStatusMessage] = useState(null); // Message de succès/erreur
  const [statusOk, setStatusOk] = useState(null);           // null = pas de message, true = succès, false = erreur

  // Gestion de la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatusMessage(null);   // Réinitialise le message précédent
    setStatusOk(null);

    try {
      const form = e.target;
      const data = new FormData(form);
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        // Succès de l'envoi
        setStatusOk(true);
        setStatusMessage("✅ Votre message a bien été envoyé.");
        form.reset();  // Réinitialiser le formulaire (vider les champs)
      } else {
        // Erreur côté serveur (ex: champ manquant, etc.)
        const result = await response.json();
        if (result.errors && result.errors.length > 0) {
          // Concaténer les messages d’erreur éventuels renvoyés par Formspree
          const messages = result.errors.map(err => err.message).join(", ");
          setStatusMessage("❌ " + messages);
        } else {
          setStatusMessage("❌ Oups! Un problème est survenu lors de l'envoi du formulaire.");
        }
        setStatusOk(false);
      }
    } catch (error) {
      // Erreur réseau ou exception
      setStatusOk(false);
      setStatusMessage("❌ Oups! Une erreur réseau est survenue. Veuillez réessayer plus tard.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="animate-fade-in-up max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-5xl font-extrabold text-blue-800 mb-12 text-center">
        Connectons-nous !
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Formulaire de contact */}
        <form 
          onSubmit={handleSubmit}
          action="https://formspree.io/f/xrbkorzp" 
          method="POST"
          className="bg-blue-50 p-6 rounded-xl space-y-6 shadow"
        >
          <div>
            <label htmlFor="name" className="block text-lg font-medium mb-1">Votre Nom</label>
            <input 
              id="name" 
              name="name" 
              type="text" 
              placeholder="Votre nom complet" 
              className="w-full border px-4 py-2 rounded" 
              required 
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium mb-1">Votre E-mail</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              placeholder="votre.email@example.com" 
              className="w-full border px-4 py-2 rounded" 
              required 
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium mb-1">Votre Message</label>
            <textarea 
              id="message" 
              name="message" 
              placeholder="Écrivez votre message ici..." 
              className="w-full border px-4 py-2 rounded" 
              rows="5" 
              required 
            />
          </div>

          <button 
            type="submit" 
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-2 rounded-full disabled:opacity-50" 
            disabled={submitting}
          >
            {submitting ? "Envoi en cours..." : "Envoyer le message"}
          </button>

          {/* Message de statut (succès ou erreur) */}
          {statusMessage && (
            <p 
              className={
                "mt-4 text-lg font-medium text-center " + 
                (statusOk ? "text-green-700" : "text-red-600") + 
                " animate-fade-in-up"
              }
            >
              {statusMessage}
            </p>
          )}
        </form>

        {/* Coordonnées directes */}
        <div className="bg-blue-700 text-white p-6 rounded-xl flex flex-col justify-center items-center space-y-6 shadow-xl">
          <h3 className="text-3xl font-bold">Me contacter directement :</h3>
          <p className="text-xl flex items-center">
            <span className="text-2xl mr-3">📞</span> +33 7 82 85 08 79
          </p>
          <p className="text-xl flex items-center">
            <span className="text-2xl mr-3">📧</span> nassim.ak@outlook.fr
          </p>
          <p className="text-lg mt-4 text-center">
            Je suis à votre disposition pour toute question ou opportunité !
          </p>
          <span className="text-6xl animate-pulse">🤝</span>
        </div>
      </div>
    </section>
  );
}

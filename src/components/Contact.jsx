import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Envoi en cours...');
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('Message envoyé !');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Erreur. Réessayez.');
      }
    } catch (error) {
      setStatus('Erreur serveur.');
    }
  };

  return (
    <section className="bg-white p-6 md:p-10 rounded-3xl shadow-2xl max-w-4xl mx-auto animate-fade-in-up">
      <h2 className="text-4xl font-extrabold text-blue-800 mb-8 text-center">Connectons-nous !</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2 font-medium text-gray-700">Nom</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
        </div>
        <div>
          <label className="block mb-2 font-medium text-gray-700">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
        </div>
        <div>
          <label className="block mb-2 font-medium text-gray-700">Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} rows="6" required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg"></textarea>
        </div>
        <button type="submit" className="bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-blue-800">
          Envoyer
        </button>
        {status && <p className="mt-4 text-center text-sm text-gray-600">{status}</p>}
      </form>

      <div className="mt-12 text-center">
        <p className="text-xl mb-2">📞 +33 7 82 85 08 79</p>
        <p className="text-xl">📧 nassim.ak@outlook.fr</p>
      </div>
    </section>
  );
};

export default Contact;

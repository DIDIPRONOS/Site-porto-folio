import { useState, type FormEvent } from 'react';

export const NewsletterSubscribe = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation simple de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Veuillez entrer une adresse email valide');
      return;
    }

    // Simulation d'envoi (à remplacer par votre API)
    console.log('Email soumis:', email);
    setIsSubmitted(true);
    setEmail('');

    // Réinitialiser après 3 secondes
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="newsletter" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Restez Informé
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Inscrivez-vous à ma newsletter pour recevoir des conseils exclusifs,
            des ressources gratuites et des astuces pour votre développement personnel.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre adresse email"
                  className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg whitespace-nowrap"
                >
                  S'inscrire
                </button>
              </div>
              {error && (
                <p className="text-red-200 mt-2 text-sm">{error}</p>
              )}
            </form>
          ) : (
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
              <div className="text-white text-lg font-semibold">
                ✓ Merci pour votre inscription !
              </div>
              <p className="text-white/90 mt-2">
                Vous recevrez bientôt votre premier email.
              </p>
            </div>
          )}

          <p className="text-white/70 text-sm mt-6">
            Vos données sont sécurisées. Pas de spam, désinscription possible à tout moment.
          </p>
        </div>
      </div>
    </section>
  );
};

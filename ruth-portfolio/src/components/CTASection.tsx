export const CTASection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Prêt à Transformer Votre Vie ?
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Commencez votre voyage vers le succès dès aujourd'hui.
          Réservez votre consultation gratuite et découvrez comment
          je peux vous aider à atteindre vos objectifs.
        </p>
        <button
          onClick={scrollToContact}
          className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-xl"
        >
          Réserver Ma Consultation Gratuite
        </button>
        <p className="text-white/80 mt-4">
          Première consultation de 30 minutes offerte
        </p>
      </div>
    </section>
  );
};

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sophie Martin',
      role: 'Directrice Marketing',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
      text: 'Ruth m\'a aidée à surmonter mes doutes et à prendre confiance en mes capacités. Grâce à son accompagnement, j\'ai obtenu la promotion que je visais depuis des années.',
      rating: 5
    },
    {
      name: 'Thomas Dubois',
      role: 'Entrepreneur',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      text: 'Un coaching transformateur ! Ruth a su identifier mes blocages et m\'a donné les outils pour les surmonter. Mon entreprise a doublé son chiffre d\'affaires en 6 mois.',
      rating: 5
    },
    {
      name: 'Marie Lefebvre',
      role: 'Cadre en Reconversion',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
      text: 'Ruth m\'a accompagnée dans ma reconversion professionnelle avec bienveillance et professionnalisme. Aujourd\'hui, je m\'épanouis dans un métier qui me passionne.',
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <span key={i} className="text-yellow-400">★</span>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ce Que Disent Mes Clients
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les témoignages de personnes qui ont transformé leur vie
            grâce à un accompagnement personnalisé.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-4 text-2xl">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-700 italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

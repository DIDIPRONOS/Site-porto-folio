export const Benefits = () => {
  const benefits = [
    {
      icon: '🎯',
      title: 'Définir vos Objectifs',
      description: 'Clarifiez vos aspirations et établissez un plan d\'action concret pour les atteindre.'
    },
    {
      icon: '💪',
      title: 'Développer votre Confiance',
      description: 'Renforcez votre estime de soi et libérez votre potentiel inexploité.'
    },
    {
      icon: '🚀',
      title: 'Progresser Rapidement',
      description: 'Bénéficiez d\'un accompagnement personnalisé pour accélérer votre développement.'
    },
    {
      icon: '⚖️',
      title: 'Équilibre Vie Pro/Perso',
      description: 'Trouvez l\'harmonie entre votre carrière et votre vie personnelle.'
    },
    {
      icon: '🧭',
      title: 'Orientation de Carrière',
      description: 'Définissez votre trajectoire professionnelle et faites les bons choix.'
    },
    {
      icon: '🌟',
      title: 'Transformation Durable',
      description: 'Adoptez de nouvelles habitudes pour un changement qui perdure.'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comment Je Peux Vous Aider
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un accompagnement sur mesure pour vous aider à surmonter vos défis
            et atteindre vos objectifs personnels et professionnels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-700">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { useState } from 'react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Qu\'est-ce que le coaching professionnel ?',
      answer: 'Le coaching professionnel est un accompagnement personnalisé qui vous aide à clarifier vos objectifs, surmonter vos obstacles et développer vos compétences pour atteindre votre plein potentiel, tant sur le plan personnel que professionnel.'
    },
    {
      question: 'Combien de temps dure un programme de coaching ?',
      answer: 'La durée varie selon vos besoins et objectifs. Un programme standard dure généralement 3 à 6 mois, avec des séances hebdomadaires ou bimensuelles. Nous adaptons le programme à votre rythme et à vos progrès.'
    },
    {
      question: 'Comment se déroule une séance de coaching ?',
      answer: 'Chaque séance dure environ 1 heure et se déroule en visioconférence ou en présentiel. Nous discutons de vos progrès, définissons des objectifs, travaillons sur des exercices pratiques et établissons un plan d\'action pour la période suivante.'
    },
    {
      question: 'Quelle est la différence entre le coaching et la thérapie ?',
      answer: 'Le coaching se concentre sur le présent et l\'avenir, avec un focus sur l\'action et l\'atteinte d\'objectifs. La thérapie traite généralement des problèmes du passé et des troubles psychologiques. Le coaching est orienté solution et performance.'
    },
    {
      question: 'À qui s\'adresse le coaching ?',
      answer: 'Le coaching s\'adresse à toute personne souhaitant progresser dans sa vie personnelle ou professionnelle : cadres, entrepreneurs, personnes en reconversion, étudiants, ou simplement toute personne désireuse de se développer.'
    },
    {
      question: 'Quels résultats puis-je espérer ?',
      answer: 'Les résultats varient selon les personnes, mais mes clients rapportent généralement une meilleure confiance en soi, une clarté sur leurs objectifs, une amélioration de leurs relations, et des progrès concrets dans leur carrière et leur vie personnelle.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-lg text-gray-600">
            Tout ce que vous devez savoir sur le coaching professionnel
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-primary transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

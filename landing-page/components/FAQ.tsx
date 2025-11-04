"use client";

import { useState } from "react";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does the free trial work?",
      answer: "You get full access to all features for 14 days, no credit card required. You can cancel anytime during the trial period without any charges.",
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any charges or credits.",
    },
    {
      question: "What kind of support do you offer?",
      answer: "We offer 24/7 email support for all plans, with priority phone and chat support available for premium plans. Our average response time is under 2 hours.",
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use enterprise-grade encryption, regular security audits, and comply with all major data protection regulations including GDPR and SOC 2.",
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with our service, contact us within 30 days for a full refund.",
    },
    {
      question: "Can I integrate with other tools?",
      answer: "Yes! We offer integrations with over 100+ popular tools including Slack, Google Workspace, Microsoft Teams, and many more through our API.",
    },
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our platform
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
            Contact our support team →
          </button>
        </div>
      </div>
    </section>
  );
};

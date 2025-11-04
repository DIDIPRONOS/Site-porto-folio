"use client";

import { useState } from "react";

export const NewsletterSubscribe = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section className="py-20 px-4 bg-primary-600">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Stay Updated
        </h2>
        <p className="text-xl text-primary-100 mb-8">
          Subscribe to our newsletter for the latest updates, tips, and exclusive offers
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
          {isSubmitted && (
            <p className="mt-4 text-white font-semibold">
              Thank you for subscribing! 🎉
            </p>
          )}
        </form>

        <p className="mt-6 text-sm text-primary-100">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

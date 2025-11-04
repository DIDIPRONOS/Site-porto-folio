import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { NewsletterSubscribe } from "@/components/NewsletterSubscribe";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <Testimonials />
        <NewsletterSubscribe />
        <CTASection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

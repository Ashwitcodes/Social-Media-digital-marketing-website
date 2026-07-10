import { Navigation } from '@/components/navigation';
import { ContactForm } from '@/components/contact-form';
import { Footer } from '@/components/footer';
import { Chatbot } from '@/components/chatbot';

interface ContactPageProps {
  searchParams?: { service?: string | string[] };
}

export default function ContactPage({ searchParams }: ContactPageProps) {
  const selectedService = Array.isArray(searchParams?.service)
    ? searchParams.service[0]
    : searchParams?.service;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">
            Contact Us
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ready to start your project?
          </h1>
          <p className="text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Share your details and requirements, and our team will follow up with a custom plan and pricing.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactForm selectedService={selectedService} />
      </div>
      <Footer />
      <Chatbot />
    </main>
  );
}

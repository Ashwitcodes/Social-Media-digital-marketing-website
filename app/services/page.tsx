import { Navigation } from '@/components/navigation';
import { Services } from '@/components/services';
import { Footer } from '@/components/footer';
import { Chatbot } from '@/components/chatbot';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-secondary/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">
            Our Services
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Solutions for Every Business Need
          </h1>
          <p className="text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Explore our full range of digital marketing, web development, and creative services designed to help your brand grow online.
          </p>
        </div>
      </section>

      <Services />
      <Footer />
      <Chatbot />
    </main>
  );
}

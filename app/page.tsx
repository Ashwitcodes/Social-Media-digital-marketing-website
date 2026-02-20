import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { Features } from '@/components/features';
import { Pricing } from '@/components/pricing';
import { Testimonials } from '@/components/testimonials';
import { FAQ } from '@/components/faq';
import { Footer } from '@/components/footer';
import { Chatbot } from '@/components/chatbot';

export const metadata = {
  title: 'DevHub - Digital Marketing & Software Development',
  description: 'Your complete digital marketing and custom software development partner for business growth. Monthly and yearly SaaS packages available.',
  keywords: 'digital marketing, software development, web development, SaaS',
  openGraph: {
    title: 'DevHub - Digital Marketing & Software Development',
    description: 'Professional digital marketing and software development services with flexible SaaS pricing.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Services />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
      <Chatbot />
    </main>
  );
}

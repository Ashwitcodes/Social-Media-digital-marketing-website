import { Navigation } from '@/components/navigation';
import { About } from '@/components/about';
import { Footer } from '@/components/footer';
import { Chatbot } from '@/components/chatbot';

export const metadata = {
  title: 'About Us - BrandMatrix',
  description: 'Meet the team behind BrandMatrix. Learn about our founders and the mission driving our growth and innovation.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-16" />
      <About />
      <Footer />
      <Chatbot />
    </main>
  );
}

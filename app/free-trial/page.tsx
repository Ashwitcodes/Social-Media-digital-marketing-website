import { Navigation } from '@/components/navigation';
import Link from 'next/link';
import { Footer } from '@/components/footer';
import { Chatbot } from '@/components/chatbot';

const addOns = [
  'Priority onboarding support',
  'Custom social media graphics',
  'Performance tracking dashboard',
  '1:1 planning session with our strategist',
];

export default function FreeTrialPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-primary/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">
            Free Trial
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Start your free trial with premium add-ons
          </h1>
          <p className="text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Get a risk-free introduction to our marketing and development services with bonus support, campaign assets, and performance planning.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-foreground mb-4">What you get</h2>
            <ul className="space-y-3 text-foreground/80">
              <li>• 7-day free trial of our marketing support</li>
              <li>• Quick project review and action plan</li>
              <li>• Trial access to campaign analytics</li>
              <li>• Social media strategy recommendations</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-foreground mb-4">Free trial add-ons</h2>
            <ul className="space-y-3 text-foreground/80">
              {addOns.map((addon) => (
                <li key={addon} className="rounded-2xl border border-border/60 bg-secondary/20 p-4">
                  {addon}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white hover:bg-primary/90 transition-all">
            Claim your free trial
          </Link>
        </div>
      </div>

      <Footer />
      <Chatbot />
    </main>
  );
}

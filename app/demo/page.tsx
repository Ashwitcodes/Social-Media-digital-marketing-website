import { Navigation } from '@/components/navigation';
import Link from 'next/link';
import { Footer } from '@/components/footer';
import { Chatbot } from '@/components/chatbot';

const demos = [
  {
    title: 'Social Media Campaign Spotlight',
    subtitle: 'Example campaign across Instagram, Facebook, and YouTube',
    details:
      'A complete creative campaign with story-driven posts, short-form video teasers, and audience retargeting to boost engagement.',
    image: 'https://source.unsplash.com/featured/?social-media-campaign',
    badge: 'Campaign',
  },
  {
    title: 'Content Launch Plan',
    subtitle: 'Product launch content and daily posting schedule',
    details:
      'High-impact carousel designs, reel concepts, and ad copy to create consistent social media momentum for a new service.',
    image: 'https://source.unsplash.com/featured/?product-launch',
    badge: 'Launch',
  },
  {
    title: 'Performance Review Snapshot',
    subtitle: 'Campaign metrics presented clearly for stakeholders',
    details:
      'A quick demo dashboard showing reach, lead generation, engagement rate, and conversion insights for social media ads.',
    image: 'https://source.unsplash.com/featured/?analytics-dashboard',
    badge: 'Analytics',
  },
  {
    title: 'AI-Powered Video Editing',
    subtitle: 'Auto-crop, filter, and caption generation demo',
    details:
      'See how our AI takes raw footage and transforms it into polished, platform-ready short-form videos in minutes.',
    image: 'https://source.unsplash.com/featured/?ai-video-editing',
    badge: 'AI Tools',
  },
  {
    title: 'Brand Identity Showcase',
    subtitle: 'Logo, color palette, and design system',
    details:
      'A complete visual identity build with AI-assisted design concepts, brand guidelines, and asset templates.',
    image: 'https://source.unsplash.com/featured/?brand-identity-design',
    badge: 'Branding',
  },
  {
    title: 'E-commerce Website Demo',
    subtitle: 'Modern shopping experience with AI recommendations',
    details:
      'Full-featured online store with product catalog, checkout flow, and AI-powered product recommendations.',
    image: 'https://source.unsplash.com/featured/?ecommerce-website',
    badge: 'Web Development',
  },
];

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-accent/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">
            Social Media Demo
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            See how our social media solutions perform
          </h1>
          <p className="text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Browse sample campaign ideas, post plans, and performance previews created for brands like yours.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {demos.map((demo) => (
          <div key={demo.title} className="group rounded-3xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="relative h-40 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
              <img
                src={demo.image}
                alt={demo.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3 inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-primary/90 text-white">
                {demo.badge}
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {demo.title}
              </h2>
              <p className="text-sm text-foreground/70 mb-3">{demo.subtitle}</p>
              <p className="text-foreground/70 leading-relaxed text-sm mb-5">{demo.details}</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors group/link"
              >
                Request demo
                <span className="group-hover/link:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <Footer />
      <Chatbot />
    </main>
  );
}

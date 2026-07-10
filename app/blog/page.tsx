import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Chatbot } from '@/components/chatbot';

const posts = [
  {
    title: 'Social Media Success Stories',
    description: 'Learn how our campaigns generated viral reach and accelerated brand growth for clients across Instagram, YouTube, and Facebook.',
    image: 'https://source.unsplash.com/featured/?social-media-marketing',
    category: 'Case Study',
    readTime: '5 min read',
  },
  {
    title: 'How to Launch Your First Ad Campaign',
    description: 'Step-by-step guidance to create high-converting social media ads and measure the results in real time.',
    image: 'https://source.unsplash.com/featured/?digital-ad-campaign',
    category: 'Tutorial',
    readTime: '8 min read',
  },
  {
    title: 'Building High-Impact Video Content',
    description: 'Discover the creative strategy behind engaging short-form videos, clips, and ads that drive engagement.',
    image: 'https://source.unsplash.com/featured/?video-production',
    category: 'Strategy',
    readTime: '6 min read',
  },
  {
    title: 'AI Tools for Content Creation',
    description: 'Explore how AI-powered tools can speed up your design, copywriting, and video editing workflow.',
    image: 'https://source.unsplash.com/featured/?artificial-intelligence-creative',
    category: 'Tools',
    readTime: '7 min read',
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-secondary/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">
            Blog
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Insights for smarter digital marketing
          </h1>
          <p className="text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Read the latest ideas, social media tips, and campaign examples from our marketing team.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid gap-8 lg:grid-cols-2">
          {posts.map((post, index) => (
            <article
              key={post.title}
              className="group rounded-3xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/90 text-white">
                  {post.category}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 text-xs text-foreground/60 mb-3">
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <span>AI Enhanced</span>
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-foreground/70 leading-relaxed mb-6">{post.description}</p>
                <a href="#" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors group/link">
                  Read Article
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Footer />
      <Chatbot />
    </main>
  );
}

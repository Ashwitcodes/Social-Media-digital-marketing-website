import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Chatbot } from '@/components/chatbot';

const posts = [
  {
    title: 'Social Media Success Stories',
    description: 'Learn how thoughtful creative strategy and consistent execution can unlock viral reach and measurable growth across Instagram, YouTube, and Facebook.',
    image: '/1.jpeg',
    category: 'Case Study',
    readTime: '5 min read',
  },
  {
    title: 'How to Launch Your First Ad Campaign',
    description: 'A practical guide to building high-converting campaigns with clear messaging, sharp creatives, and real-time measurement.',
    image: '/2.jpeg',
    category: 'Tutorial',
    readTime: '8 min read',
  },
  {
    title: 'Building High-Impact Video Content',
    description: 'Discover the structure behind engaging short-form videos and motion-led stories that drive attention and conversions.',
    image: '/3.jpeg',
    category: 'Strategy',
    readTime: '6 min read',
  },
  {
    title: 'AI Tools for Content Creation',
    description: 'Explore how AI-assisted workflows can speed up ideation, design, and content production without losing quality.',
    image: '/4.jpeg',
    category: 'Tools',
    readTime: '7 min read',
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,_#f8fafc_0%,_#ffffff_45%,_#f8fafc_100%)] text-slate-900">
      <Navigation />

      <section className="px-4 pb-14 pt-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-[0_35px_120px_-45px_rgba(15,23,42,0.25)] backdrop-blur md:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-primary">Insights & strategy</p>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                Creative ideas for brands that want to grow smarter.
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                Explore practical guides, campaign lessons, and visual strategies that help ambitious brands stand out and convert better.
              </p>
              <div className="mt-6 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600">
                Fresh content • clear strategy • premium execution
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 p-3 shadow-inner">
              <img src="/brand.jpeg" alt="Creative marketing workspace" className="h-[280px] w-full rounded-[1.25rem] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Featured articles</p>
            <h2 className="text-2xl font-semibold text-slate-900">Latest thoughts from our studio</h2>
          </div>
          <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
            Updated regularly for modern brands
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_20px_70px_-35px_rgba(15,23,42,0.24)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-30px_rgba(15,23,42,0.32)]"
            >
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 inline-flex items-center rounded-full bg-slate-900/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                  {post.category}
                </div>
              </div>

              <div className="p-8">
                <div className="mb-3 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <span>Studio insight</span>
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-slate-900 transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mb-6 leading-7 text-slate-600">{post.description}</p>
                <a href="#" className="inline-flex items-center gap-2 font-semibold text-slate-800 transition hover:text-primary">
                  Read Article
                  <span className="transition group-hover:translate-x-1">→</span>
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

'use client';

import { motion } from 'framer-motion';
import { Award, Sparkles, Users, Video } from 'lucide-react';

const team = [
  {
    name: 'Ashwit Sharma',
    role: 'Founder & Growth Lead',
    description: 'Guides our strategy, growth, and client success with a focus on digital marketing and conversion-driven campaigns.',
  },
  {
    name: 'Asheesh Madhesia',
    role: 'Technical Lead',
    description: 'Builds powerful brand visuals, animation concepts, and high-performing social content for top performance.',
  },
  {
    name: 'Aditya Pandey',
    role: 'Director Of Designer',
    description: 'Leads technical architecture and delivery of modern websites, automation, and AI-powered workflows that scale creative campaigns.',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-background/90">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-primary/80 mb-3">About Us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet the minds behind BrandMatrix
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-foreground/70 leading-relaxed">
            A compact team of growth, creative, and technical specialists who build AI-driven marketing campaigns, viral video content, and modern web products that help brands grow faster.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {team.map((member) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-border bg-card/90 p-8 shadow-xl shadow-black/10"
            >
              <div className="inline-flex items-center justify-center rounded-3xl bg-primary/10 text-primary w-14 h-14 mb-6">
                <Sparkles size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">{member.name}</h3>
              <p className="text-sm uppercase tracking-[0.25em] text-foreground/60 font-semibold mb-4">
                {member.role}
              </p>
              <p className="text-foreground/70 leading-relaxed">{member.description}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-16 grid gap-6 lg:grid-cols-3"
        >
          <div className="rounded-[2rem] bg-primary/5 border border-primary/10 p-8">
            <div className="inline-flex items-center justify-center rounded-3xl bg-primary/10 text-primary w-12 h-12 mb-4">
              <Video size={20} />
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-3">AI Video Studio</h4>
            <p className="text-foreground/70 leading-relaxed">
              Edit videos faster with smart crop, filter, and caption tools powered by AI — designed to make content creation feel effortless.
            </p>
          </div>
          <div className="rounded-[2rem] bg-primary/5 border border-primary/10 p-8">
            <div className="inline-flex items-center justify-center rounded-3xl bg-primary/10 text-primary w-12 h-12 mb-4">
              <Award size={20} />
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-3">Fast Creative Wins</h4>
            <p className="text-foreground/70 leading-relaxed">
              Launch campaigns quickly with free AI-first tools for captions, design previews, and automated brand assets.
            </p>
          </div>
          <div className="rounded-[2rem] bg-primary/5 border border-primary/10 p-8">
            <div className="inline-flex items-center justify-center rounded-3xl bg-primary/10 text-primary w-12 h-12 mb-4">
              <Users size={20} />
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-3">Growth-Focused Support</h4>
            <p className="text-foreground/70 leading-relaxed">
              We pair campaign strategy, analytics, and AI content tools so your marketing works harder from day one.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

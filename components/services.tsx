'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Zap,
  Code2,
  TrendingUp,
  Video,
  Palette,
  Database,
  Smartphone,
  Shield,
  Share2,
  Users,
  Sparkles,
  Rocket,
} from 'lucide-react';

interface ServicesProps {
  onChooseService?: (serviceTitle: string) => void;
}

export function Services({ onChooseService }: ServicesProps) {
  const digitalMarketingServices = [
    {
      title: 'Video Editing',
      description: 'Fast-paced social videos, YouTube edits, and storyboard-driven cuts using Premiere Pro and After Effects.',
      icon: Video,
      color: 'from-sky-500 to-cyan-500',
    },
    {
      title: 'Thumbnail Design',
      description: 'High-converting thumbnails for YouTube, reels, and ads to boost click-through rates and visibility.',
      icon: Palette,
      color: 'from-violet-500 to-fuchsia-500',
    },
    {
      title: 'Logo Design',
      description: 'Unique brand identity systems with logo, color palette, and brand mark design for memorable presence.',
      icon: Zap,
      color: 'from-emerald-500 to-lime-500',
    },
    {
      title: 'Animation Design',
      description: 'Motion graphics, animated socials, and brand explainer clips that bring your message to life.',
      icon: Sparkles,
      color: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Photo Editing',
      description: 'Professional image retouching, background removal, color correction, and product polish for stunning visuals.',
      icon: Smartphone,
      color: 'from-orange-400 to-red-500',
    },
    {
      title: 'Brand & Content Strategy',
      description: 'End-to-end campaign planning, content calendars, and messaging frameworks to grow your audience.',
      icon: Share2,
      color: 'from-blue-500 to-indigo-500',
    },
  ];

  const webDevelopmentServices = [
    {
      title: 'Gym Website',
      description: 'Member portal, class booking, payment integration, trainer profiles, and fitness tracking dashboard.',
      icon: Code2,
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Restaurant Website',
      description: 'Online menu, food ordering, table reservations, delivery integration, and real-time order tracking.',
      icon: Database,
      color: 'from-orange-500 to-yellow-500',
    },
    {
      title: 'E-commerce Website',
      description: 'Product catalog, shopping cart, secure payments, inventory management, and customer accounts.',
      icon: Shield,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Static Website',
      description: 'Fast, SEO-optimized branding websites perfect for portfolios, agencies, and information-based sites.',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Dynamic Website',
      description: 'Database-driven sites with real-time content, user interactions, and admin dashboards for complex applications.',
      icon: Database,
      color: 'from-red-500 to-pink-500',
    },
    {
      title: 'Custom Web App',
      description: 'Tailored solutions including SaaS, MLM, school management, hospital systems, and enterprise software.',
      icon: Sparkles,
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  const trustedLogos = [
    { src: '/pw.png', alt: 'PW' },
    { src: '/unacademy.jpg', alt: 'Unacademy' },
    { src: '/brand-logo.png', alt: 'BrandMatrix' },
    { src: '/motion.jpg', alt: 'Partner' },
    { src: '/placeholder-logo.svg', alt: 'Partner' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const borderColors = [
    'border-l-primary',
    'border-l-accent',
    'border-l-purple-500',
    'border-l-orange-500',
    'border-l-green-500',
    'border-l-pink-500',
  ];

  const badgeColors = [
    'bg-primary/20 text-primary',
    'bg-accent/20 text-accent',
    'bg-purple-500/20 text-purple-400',
    'bg-orange-500/20 text-orange-400',
    'bg-green-500/20 text-green-400',
    'bg-pink-500/20 text-pink-400',
  ];

  const renderServiceCategory = (title: string, services: any[], isMarketing: boolean) => (
    <div className="mb-16">
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-foreground mb-12 flex items-center gap-3"
      >
        {isMarketing ? (
          <TrendingUp className="text-primary" size={32} />
        ) : (
          <Code2 className="text-accent" size={32} />
        )}
        {title}
      </motion.h3>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="space-y-6"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={itemVariants}
            whileHover={{ x: 8 }}
            className={`group relative p-8 rounded-2xl border-l-8 ${borderColors[index]} bg-card/50 backdrop-blur border border-border hover:bg-card/80 transition-all duration-300 overflow-hidden`}
          >
            {/* Background Gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-3 transition-opacity duration-300 -z-10`}
            />

            {/* Top Row: Number Circle + Title + Badge */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                {/* Numbered Circle */}
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center font-bold text-white text-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {index + 1}
                </div>

                {/* Title */}
                <h4 className="text-2xl font-bold text-foreground">
                  {service.title}
                </h4>
              </div>

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap ${badgeColors[index]} flex items-center gap-2`}
              >
                <Zap size={16} />
                Premium Service
              </motion.div>
            </div>

            {/* Description */}
            <p className="text-foreground/70 leading-relaxed text-base ml-16">
              {service.description}
            </p>

            {/* CTA Button */}
            <Link
              href={`/contact?service=${encodeURIComponent(service.title)}`}
              className="inline-flex items-center gap-2 mt-4 ml-16 text-primary font-semibold hover:text-accent transition-colors duration-300"
            >
              Request this service
              <span className="text-lg">→</span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section
      id="services"
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(192,132,252,0.14),_transparent_24%)]" />
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-[0.32em] uppercase text-cyan-300/80 mb-3">
            Premium Creative Studio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Services that scale your brand
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From high-impact design to video, animation, and brand strategy, we build polished digital experiences that convert and keep your audience engaged.
          </p>
        </motion.div>

        {/* Logo Frame */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/40 overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-950/90 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/90 to-transparent pointer-events-none" />
            <div className="flex items-center justify-between gap-6 overflow-x-auto py-2 px-1 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-700/70">
              {trustedLogos.map((logo) => (
                <div
                  key={logo.alt}
                  className="flex-shrink-0 flex items-center justify-center min-w-[160px] h-20 rounded-3xl bg-slate-900/90 border border-white/10 p-3"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-12 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Digital Marketing Services */}
        {renderServiceCategory('Digital Marketing', digitalMarketingServices, true)}

        {/* Software Development Services */}
        {renderServiceCategory('Software Development', webDevelopmentServices, false)}

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-3xl bg-card border border-border"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6">Tools & Technology</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-3xl bg-slate-950/80 p-6 border border-white/10">
              <h4 className="font-semibold text-primary mb-3">Video & Design Tools</h4>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  Adobe After Effects
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  Premiere Pro
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  Alight Motion
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  Photoshop & Illustrator
                </li>
              </ul>
            </div>
            <div className="rounded-3xl bg-slate-950/80 p-6 border border-white/10">
              <h4 className="font-semibold text-accent mb-3">Web Development Stack</h4>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Next.js & React
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Node.js Backend
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Tailwind CSS & modern UI
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  API & automation integration
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Showcase Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80 mb-3">Portfolio Spotlight</p>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Design, video, and web work that converts.
              </h3>
              <p className="text-slate-300 max-w-2xl leading-relaxed mb-8">
                We create visuals and digital experiences inspired by top growth studios. Below are a few recent brand projects that combine motion, marketing, and creative strategy.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
                  <p className="text-sm text-cyan-300 uppercase mb-2">Featured Work</p>
                  <h4 className="text-xl font-semibold text-white mb-2">Viral Campaign Visuals</h4>
                  <p className="text-foreground/80">High-impact thumbnails, story-driven reels, and fast-edit social videos designed for rapid engagement.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
                  <p className="text-sm text-cyan-300 uppercase mb-2">Brand Identity</p>
                  <h4 className="text-xl font-semibold text-white mb-2">Logo + Brand System</h4>
                  <p className="text-foreground/80">Memorable visual systems built for recognition across digital ads, social feeds, and websites.</p>
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <img src="/1.jpeg" alt="Brand creative sample" className="w-full rounded-[2rem] border border-white/10 object-cover h-[250px]" />
              <img src="/2.jpeg" alt="Video marketing sample" className="w-full rounded-[2rem] border border-white/10 object-cover h-[250px]" />
            </div>
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 rounded-[2rem] border border-white/10 bg-slate-950/80 p-10"
        >
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80 mb-3">How we deliver</p>
            <h3 className="text-3xl md:text-4xl font-bold text-white">A 4-step growth creative process</h3>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {[
              { title: 'Discover', description: 'We map your audience, brand position, and growth goals before any creative work begins.' },
              { title: 'Create', description: 'Design, video, animation and copy that align with the campaign and platform.' },
              { title: 'Launch', description: 'Deploy content with optimized delivery for social and web performance.' },
              { title: 'Scale', description: 'Measure results, refine creatives, and grow reach with data-led iterations.' },
            ].map((step) => (
              <div key={step.title} className="rounded-3xl border border-white/10 bg-slate-950/90 p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300 font-semibold">{step.title.charAt(0)}</div>
                <h4 className="text-xl font-semibold text-white mb-3">{step.title}</h4>
                <p className="text-foreground/80">{step.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

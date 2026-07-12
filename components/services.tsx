'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Database,
  Palette,
  Rocket,
  Shield,
  Smartphone,
  Sparkles,
  TrendingUp,
  Video,
  Zap,
} from 'lucide-react';

interface ServicesProps {
  onChooseService?: (serviceTitle: string) => void;
}

export function Services({ onChooseService }: ServicesProps) {
  const digitalMarketingServices = [
    {
      title: 'Video Editing',
      description: 'Fast-paced social videos, YouTube edits, and storyboard-driven cuts that feel cinematic and conversion-ready.',
      color: 'from-sky-500 to-cyan-500',
    },
    {
      title: 'Thumbnail Design',
      description: 'High-converting thumbnails for YouTube, reels, and ads built to improve visibility and click-through rates.',
      color: 'from-violet-500 to-fuchsia-500',
    },
    {
      title: 'Logo Design',
      description: 'Distinct brand identity systems with logos, palette direction, and visual hierarchy that feel premium.',
      color: 'from-emerald-500 to-lime-500',
    },
    {
      title: 'Animation Design',
      description: 'Motion graphics and animated social creatives that add energy, clarity, and memorable storytelling.',
      color: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Photo Editing',
      description: 'Retouching, background cleanup, color correction, and product polishing for polished, high-quality visuals.',
      color: 'from-orange-400 to-red-500',
    },
    {
      title: 'Brand & Content Strategy',
      description: 'Campaign planning, content calendars, and message frameworks that help ideas turn into repeatable growth.',
      color: 'from-blue-500 to-indigo-500',
    },
  ];

  const webDevelopmentServices = [
    {
      title: 'Gym Website',
      description: 'Modern fitness websites with class booking, memberships, trainer profiles, and smooth customer journeys.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Restaurant Website',
      description: 'Online menus, reservations, delivery integrations, and ordering flows tailored for hospitality brands.',
      color: 'from-orange-500 to-yellow-500',
    },
    {
      title: 'E-commerce Website',
      description: 'Storefronts built for trust and conversion with catalog structure, secure payments, and inventory flow.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Static Website',
      description: 'Fast, SEO-focused sites ideal for agencies, portfolios, service businesses, and information-heavy brands.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Dynamic Website',
      description: 'Interactive sites with real-time content, dashboards, and flexible backend systems for expanding operations.',
      color: 'from-red-500 to-pink-500',
    },
    {
      title: 'Custom Web App',
      description: 'Bespoke solutions for SaaS, education, healthcare, MLM, and internal business systems.',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  const trustedLogos = [
    { src: '/brandmatlogo.jpeg', alt: 'BrandMatrix' },
    { src: '/pw.png', alt: 'PW' },
    { src: '/unacademy.jpg', alt: 'Unacademy' },
    { src: '/adda.png', alt: 'Adda' },
    { src: '/motion.jpg', alt: 'Motion Studio' },
    { src: '/Vidyapeet(PW).jpeg', alt: 'Vidyapeet' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const renderServiceCategory = (
    title: string,
    services: Array<{ title: string; description: string; color: string }>,
    isMarketing: boolean
  ) => (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
        className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-slate-200/80 pb-4"
      >
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            {isMarketing ? 'Growth & creative' : 'Digital products'}
          </p>
          <h3 className="text-3xl font-bold text-slate-900">{title}</h3>
        </div>
        <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
          Tailored for quality, speed, and results
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid gap-6 lg:grid-cols-2"
      >
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            variants={itemVariants}
            whileHover={{ y: -4, scale: 1.01 }}
            className="group relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-[0_20px_70px_-35px_rgba(15,23,42,0.22)] transition-all hover:shadow-[0_30px_90px_-35px_rgba(15,23,42,0.3)]"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`} />
            <div className="relative flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} font-semibold text-white shadow-lg`}>
                  {index + 1}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-900">{service.title}</h4>
                  <p className="text-sm text-slate-500">Premium solution</p>
                </div>
              </div>
              <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                {isMarketing ? 'Growth' : 'Build'}
              </div>
            </div>

            <p className="relative mt-5 text-base leading-7 text-slate-600">{service.description}</p>

            <div className="relative mt-6 flex items-center justify-between gap-4 border-t border-slate-100 pt-4">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                Custom strategy included
              </div>
              <Link
                href={`/contact?service=${encodeURIComponent(service.title)}`}
                onClick={() => onChooseService?.(service.title)}
                className="inline-flex items-center gap-2 font-semibold text-slate-800 transition hover:text-primary"
              >
                Request now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section id="services" className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.08),_transparent_30%),linear-gradient(135deg,_#f8fafc_0%,_#ffffff_48%,_#f8fafc_100%)] py-24 px-4 sm:px-6 lg:px-8 md:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.55)_45%,transparent_100%)]" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-[0_35px_120px_-45px_rgba(15,23,42,0.25)] backdrop-blur"
        >
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-primary">
                Premium Creative Studio
              </p>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                Services crafted to look sharp and perform better.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                From strategy and motion to polished websites, we build experiences that feel modern, trustworthy, and ready to grow.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700"
                >
                  Book a consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-medium text-slate-600">
                  <Rocket className="h-4 w-4 text-primary" />
                  Fast turnaround • tailored delivery
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-6 shadow-inner">
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { title: '48hr turnaround', subtitle: 'On select creative requests' },
                  { title: '100% custom', subtitle: 'No template-first approach' },
                  { title: 'SEO-ready', subtitle: 'Designed for discoverability' },
                  { title: 'Growth focus', subtitle: 'Built around conversion' },
                ].map((item) => (
                  <div key={item.title} className="rounded-[1.25rem] border border-slate-200 bg-white p-4 shadow-sm">
                    <p className="text-lg font-semibold text-slate-900">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-500">{item.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.16)]">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Trusted by modern brands</p>
                <h3 className="text-2xl font-semibold text-slate-900">Selected partner work</h3>
              </div>
              <p className="max-w-xl text-sm text-slate-500">
                A mix of education, startup, and product-led teams that value clarity, consistency, and memorable design.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
              {trustedLogos.map((logo) => (
                <div key={logo.alt} className="flex h-24 items-center justify-center rounded-[1.25rem] border border-slate-200 bg-slate-50 p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <img src={logo.src} alt={logo.alt} className="max-h-12 w-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {renderServiceCategory('Digital Marketing', digitalMarketingServices, true)}
        {renderServiceCategory('Software Development', webDevelopmentServices, false)}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.16)]"
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Why brands choose us</p>
              <h3 className="mt-3 text-3xl font-bold text-slate-900">Polished execution, thoughtful strategy, and a premium experience.</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Every project is handled with attention to detail, strong communication, and creative systems that work for both brand and growth.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: 'Creative direction', text: 'Visual systems and storytelling aligned to your brand.' },
                { title: 'Flexible delivery', text: 'Built for agencies, startups, and established businesses alike.' },
                { title: 'Modern stack', text: 'Next.js, React, and performance-first development.' },
                { title: 'Clear communication', text: 'Fast updates and transparent project ownership.' },
              ].map((item) => (
                <div key={item.title} className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4">
                  <h4 className="font-semibold text-slate-900">{item.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

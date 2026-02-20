'use client';

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

export function Services() {
  const digitalMarketingServices = [
    {
      title: 'Complete Social Media Management',
      description: 'End-to-end social media strategy, content planning, posting, and community engagement across all platforms',
      icon: Share2,
      color: 'from-primary to-blue-500',
    },
    {
      title: 'Content Production Studio',
      description: 'Professional video editing, graphics design, thumbnails, and content creation using After Effects, Premiere Pro, Alight Motion',
      icon: Video,
      color: 'from-accent to-cyan-500',
    },
    {
      title: 'Brand Community Building',
      description: 'Build engaged communities around your brand with targeted strategies and authentic audience connections',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Viral Reach Marketing',
      description: 'Strategic campaigns designed to maximize visibility, engagement, and organic reach across all social platforms',
      icon: Rocket,
      color: 'from-orange-500 to-red-500',
    },
  ];

  const webDevelopmentServices = [
    {
      title: 'MLM Website',
      description: 'Complete MLM platform with commission tracking and user management',
      icon: Code2,
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'School Management System',
      description: 'Student database, attendance, grades, and parent portal',
      icon: Database,
      color: 'from-red-500 to-pink-500',
    },
    {
      title: 'Hospital Management Website',
      description: 'Appointment booking, patient records, and staff management',
      icon: Shield,
      color: 'from-indigo-500 to-purple-500',
    },
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
        ease: 'easeOut',
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

            {/* CTA Link */}
            <motion.a
              href="#contact"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 mt-4 ml-16 text-primary font-semibold hover:text-accent transition-colors duration-300"
            >
              See what we can do for your brand. Contact us.
              <span className="text-lg">→</span>
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section
      id="services"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive solutions for your digital transformation
          </p>
        </motion.div>

        {/* Digital Marketing Services */}
        {renderServiceCategory('Digital Marketing', digitalMarketingServices, true)}

        {/* Web Development Services */}
        {renderServiceCategory('Web Development', webDevelopmentServices, false)}

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-xl bg-card border border-border"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">Tools & Technology</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-primary mb-3">Video & Design Tools</h4>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  Adobe After Effects
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  Premiere Pro
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  Alight Motion
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-accent mb-3">Web Development Stack</h4>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Next.js & React
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Node.js Backend
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Database Solutions
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

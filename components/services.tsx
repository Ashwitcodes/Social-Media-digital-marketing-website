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
} from 'lucide-react';

export function Services() {
  const digitalMarketingServices = [
    {
      title: 'Content Production',
      description: 'High-quality content creation for all platforms and audiences',
      icon: Video,
      color: 'from-primary to-blue-500',
    },
    {
      title: 'Logo Design',
      description: 'Professional brand identity and logo creation',
      icon: Palette,
      color: 'from-accent to-cyan-500',
    },
    {
      title: 'Thumbnail Design',
      description: 'Eye-catching thumbnails for videos and social media',
      icon: Palette,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Short Video Editing',
      description: 'Professional editing using After Effects, Premiere Pro, Alight Motion',
      icon: Video,
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
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const renderServiceCategory = (title: string, services: any[]) => (
    <div className="mb-12">
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-foreground mb-8 flex items-center gap-3"
      >
        {title === 'Digital Marketing' ? (
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
      >
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}
              />

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} p-2.5 mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className="w-full h-full text-white" />
              </div>

              {/* Content */}
              <h4 className="text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h4>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Border Animation */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent w-0 group-hover:w-full transition-all duration-300" />
            </motion.div>
          );
        })}
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
        {renderServiceCategory('Digital Marketing', digitalMarketingServices)}

        {/* Web Development Services */}
        {renderServiceCategory('Web Development', webDevelopmentServices)}

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

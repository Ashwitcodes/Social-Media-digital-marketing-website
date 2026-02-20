'use client';

import { motion } from 'framer-motion';
import {
  Zap,
  Code2,
  TrendingUp,
  BarChart3,
  Smartphone,
  Shield,
} from 'lucide-react';

export function Services() {
  const services = [
    {
      title: 'Digital Marketing',
      description: 'Grow your online presence with data-driven marketing strategies',
      icon: TrendingUp,
      color: 'from-primary to-blue-500',
    },
    {
      title: 'SEO Optimization',
      description: 'Rank higher on search engines and drive organic traffic',
      icon: BarChart3,
      color: 'from-accent to-cyan-500',
    },
    {
      title: 'Web Development',
      description: 'Build fast, responsive, and modern web applications',
      icon: Code2,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications',
      icon: Smartphone,
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment',
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Security First',
      description: 'Enterprise-grade security for your applications',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
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

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
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
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
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
    </section>
  );
}

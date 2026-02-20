'use client';

import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Zap,
  Users,
  BarChart3,
  Lock,
  Headphones,
} from 'lucide-react';

export function Features() {
  const features = [
    {
      title: 'Lightning Fast',
      description: 'Optimized performance with sub-second load times',
      icon: Zap,
    },
    {
      title: 'Team Collaboration',
      description: 'Work together seamlessly with real-time updates',
      icon: Users,
    },
    {
      title: 'Analytics Included',
      description: 'Detailed insights and reporting built-in',
      icon: BarChart3,
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-grade encryption and compliance standards',
      icon: Lock,
    },
    {
      title: '24/7 Support',
      description: 'Always available to help when you need it',
      icon: Headphones,
    },
    {
      title: 'Proven Results',
      description: 'Track record of delivering measurable success',
      icon: CheckCircle2,
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

  return (
    <section
      id="features"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8"
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
            Why Choose Us
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Experience the difference with our industry-leading features and dedicated support
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="flex gap-4 p-6 rounded-xl border border-border/50 bg-card/50 hover:border-primary/50 transition-colors duration-300"
              >
                <div className="flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20"
                  >
                    <Icon className="w-6 h-6 text-primary" />
                  </motion.div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105">
            Explore All Features
          </button>
        </motion.div>
      </div>
    </section>
  );
}

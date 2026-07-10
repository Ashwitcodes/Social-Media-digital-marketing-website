'use client';

import { motion } from 'framer-motion';
import { Star, TrendingUp, Users, Award } from 'lucide-react';

export function Features() {
  const achievements = [
    {
      stat: '500M+',
      label: 'Total Views Delivered',
      icon: TrendingUp,
      color: 'from-primary to-blue-500',
      borderColor: 'border-t-primary',
      badge: 'Premium',
    },
    {
      stat: '1000+',
      label: 'Successful Projects',
      icon: Award,
      color: 'from-accent to-cyan-500',
      borderColor: 'border-t-accent',
      badge: 'Trusted',
    },
    {
      stat: '98%',
      label: 'Client Satisfaction Rate',
      icon: Users,
      color: 'from-orange-500 to-red-500',
      borderColor: 'border-t-orange-500',
      badge: 'Proven',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="features"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* Top Line Accent */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"
          />

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">BrandMatrix</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            We don't just promise growth—we deliver 300% beyond expectations, backed by proven results and viral victories. Our track record speaks for itself.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.label}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className={`group relative p-8 rounded-2xl border-4 ${achievement.borderColor} bg-card border-b-2 border-border/30 hover:shadow-lg transition-all duration-300 overflow-hidden`}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}
                />

                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-4 bg-gradient-to-r ${achievement.color} text-white/90`}
                >
                  <Star size={14} />
                  {achievement.badge}
                </motion.div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className={`w-14 h-14 rounded-full bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-4 text-white`}
                >
                  <Icon size={24} />
                </motion.div>

                {/* Stat */}
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold text-foreground mb-2"
                >
                  {achievement.stat}
                </motion.h3>

                {/* Label */}
                <p className="text-foreground/70 font-semibold">
                  {achievement.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold text-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
          >
            Contact Us Now
            <span className="text-xl">→</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

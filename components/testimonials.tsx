'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Physics Wallah',
      role: 'Education Platform',
      image: 'pw.png',
      content:
        'BrandMatrix transformed our digital presence. The team delivered beyond expectations and our conversion rates increased by 150%.',
      rating: 5,
    },
    {
      name: 'Adda247',
      role: 'Education Platform',
      image: 'adda.png',
      content:
        'Outstanding service! The level of professionalism and attention to detail is unmatched. Highly recommended for any business.',
      rating: 5,
    },
    {
      name: 'Unacademy',
      role: 'Education Platform',
      image: 'unacademy.jpg',
      content:
        'From strategy to execution, they handled everything flawlessly. Our ROI improved significantly within the first month.',
      rating: 5,
    },
    {
      name: 'DKB',
      role: 'Social Awareness Platform',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=david',
      content:
        'Best investment we made for our company. The results speak for themselves. Exceptional team and support.',
      rating: 5,
    },
    {
      name: 'XYZ',
      role: 'Startup Founder',
      image: 'adda.png',
      content:
        'They understood our vision and executed it perfectly. Great communication and timely delivery throughout the project.',
      rating: 5,
    },
    {
      name: 'Nitin Vijay',
      role: 'Motion Kota',
      image: 'motion.jpg',
      content:
        'Professional, reliable, and results-driven. They helped us scale our operations significantly. Would work with them again.',
      rating: 5,
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
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
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
            Loved by Thousands
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            See what our satisfied clients are saying about their experience with us
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 mb-6 leading-relaxed text-sm">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-foreground/60">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
        >
          {[
            { value: '500+', label: 'Happy Clients' },
            { value: '4.9/5', label: 'Average Rating' },
            { value: '1000+', label: 'Projects Completed' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl border border-border/50 bg-card/50"
            >
              <div className="text-3xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-foreground/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

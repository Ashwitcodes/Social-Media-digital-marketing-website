'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';

export function Pricing() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const successStories = [
    {
      title: 'Yeh Meri Family',
      subtitle: 'Premium Family Entertainment',
      views: '122M+ Views',
      category: 'Web Series',
      image: 'https://images.unsplash.com/photo-1633356122544-f6fba8e2e6c4?w=400&h=500&fit=crop',
    },
    {
      title: 'BadtameezDil',
      subtitle: 'Viral Romance Series',
      views: '109M+ Views',
      category: 'Streaming',
      image: 'https://images.unsplash.com/photo-1633356122544-f6fba8e2e6c4?w=400&h=500&fit=crop',
    },
    {
      title: 'Financial Stories',
      subtitle: 'Educational Content',
      views: '98M+ Views',
      category: 'Documentary',
      image: 'https://images.unsplash.com/photo-1633356122544-f6fba8e2e6c4?w=400&h=500&fit=crop',
    },
    {
      title: 'Highway Season 2',
      subtitle: 'Adventure Series',
      views: '156M+ Views',
      category: 'Drama',
      image: 'https://images.unsplash.com/photo-1633356122544-f6fba8e2e6c4?w=400&h=500&fit=crop',
    },
    {
      title: 'Mystery Chronicles',
      subtitle: 'Thriller Series',
      views: '87M+ Views',
      category: 'Suspense',
      image: 'https://images.unsplash.com/photo-1633356122544-f6fba8e2e6c4?w=400&h=500&fit=crop',
    },
    {
      title: 'Comedy Gold',
      subtitle: 'Entertainment Hub',
      views: '145M+ Views',
      category: 'Comedy',
      image: 'https://images.unsplash.com/photo-1633356122544-f6fba8e2e6c4?w=400&h=500&fit=crop',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % successStories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section
      id="success-stories"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20"
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
          {/* Award Icon + Title */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-8 h-8 text-orange-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground inline-block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Our Success Stories
            </h2>
          </div>

          <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Shaping Brands into Digital Powerhouses
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative mb-12">
          {/* Story Cards Carousel */}
          <div className="relative h-96 md:h-96 overflow-hidden rounded-3xl">
            <AnimatePresence initial={false} custom={currentIndex} mode="wait">
              <motion.div
                key={currentIndex}
                custom={currentIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                }}
                className="absolute inset-0"
              >
                <div className="relative h-full w-full rounded-3xl overflow-hidden group">
                  {/* Background Image */}
                  <img
                    src={successStories[currentIndex].image}
                    alt={successStories[currentIndex].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-4 py-1 rounded-full bg-primary/80 text-white text-xs font-bold">
                          {successStories[currentIndex].category}
                        </span>
                        <span className="px-4 py-1 rounded-full bg-accent/80 text-white text-xs font-bold">
                          {successStories[currentIndex].views}
                        </span>
                      </div>
                      <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                        {successStories[currentIndex].title}
                      </h3>
                      <p className="text-lg text-foreground/80">
                        {successStories[currentIndex].subtitle}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-primary/80 hover:bg-primary text-white transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-primary/80 hover:bg-primary text-white transition-all duration-300"
          >
            <ChevronRight size={24} />
          </motion.button>

          {/* Dot Indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {successStories.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-muted w-2 hover:bg-muted/80'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg hover:shadow-xl transition-all duration-300"
          >
            View All Success Stories
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

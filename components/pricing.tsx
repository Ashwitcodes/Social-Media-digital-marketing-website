'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Pricing() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const successStories = [
    {
      title: 'Desh Ki Betiyan',
      subtitle: 'Jahan Beti, Wahan Shakti',
      views: '12M+ Views',
      category: 'Motivation Page',
      image: '/5.jpeg',
    },
    {
      title: 'Physics Wallah',
      subtitle: 'Har Student Ka Sapna',
      views: '50M+ Views',
      category: 'ED Tech',
      image: '/6.jpeg',
    },
    {
      title: 'Adda 247',
      subtitle: 'Educational Content',
      views: '98k+ Views',
      category: 'Teachers PR',
      image: '/3.jpeg',
    },
    {
      title: 'Unacademy',
      subtitle: 'Educational Platform',
      views: '14M+ Views',
      category: 'Ed Tech',
      image: '/1.jpeg',
    },
  ];

  const nextSlide = () => {
    if (currentIndex < successStories.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="py-20  bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Slider Container */}
        <div className="relative overflow-hidden">

          <motion.div
  className="flex gap-6"
  animate={{ x: -currentIndex * 420 }}
  transition={{ type: 'spring', stiffness: 200, damping: 25 }}
>
  {successStories.map((story, index) => (
    <div
      key={index}
      className="min-w-[400px] h-[600px] rounded-3xl overflow-hidden relative group shadow-xl"
    >
      {/* Background Image */}
      <img
        src={story.image}
        alt={story.title}
        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Text Content */}
      <div className=" w-full absolute bottom-0 p-6 bg-black/60 text-white">
        <span className="text-xs bg-orange-500 px-3 py-1 rounded-full font-semibold">
          {story.category}
        </span>

        <h3 className="text-4xl text-blue-800 font-bold mt-3">
          {story.title}
        </h3>

        <p className="text-sm opacity-90 mt-1">
          {story.subtitle}
        </p>

        <p className="text-sm font-semibold mt-3 text-orange-400">
          {story.views}
        </p>
      </div>
    </div>
  ))}
</motion.div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-primary text-white p-3 rounded-full"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary text-white p-3 rounded-full"
          >
            <ChevronRight />
          </button>

        </div>
      </div>
    </section>
  );
}
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Pricing() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const successStories = [
    {
      title: 'Desh Ki Betiyan By (Adda 247)',
      subtitle: 'Jahan Beti, Wahan Shakti',
      views: '12M+ Views',
      category: 'Motivation Page',
      image: '/5.jpeg',
    },
    {
      title: 'Samridhi Minds By (Physics Wallah)',
      subtitle: 'Har Student Ka Sapna',
      views: '50M+ Views',
      category: 'ED Tech',
      image: '/6.jpeg',
    },
    {
      title: 'NetGenius Adda BY (Adda 247)',
      subtitle: 'Educational Content',
      views: '98k+ Views',
      category: 'Teachers PR',
      image: '/3.jpeg',
    },
    {
      title: 'Unacademy',
      subtitle: 'Educational Platform',
      views: '5M+ Views',
      category: 'Ed Tech',
      image: '/1.jpeg',
    },
    {
      title: 'The Last Man Speak',
      subtitle: 'Rajneetik Page',
      views: '20M+ Views',
      category: 'Politics',
      image: '/4.jpeg',
    },
    {
      title: 'Alakhians Army By (Physics Wallah)',
      subtitle: 'Rajneetik Page',
      views: '30M+ Views',
      category: 'Politics',
      image: '/Vidyapeet(PW).jpeg',
    },
  ];
const loopStories = [...successStories, ...successStories];
  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === successStories.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? successStories.length - 1 : prev - 1
    );
  };

  // auto slide every -0 .9 sec
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) =>
      prev === successStories.length ? 0 : prev + 1
    );
  }, 2000);

  return () => clearInterval(interval);
}, []);
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4">

        <div className="relative overflow-hidden">

            <motion.div
  className="flex gap-6"
  animate={{ x: ["0%", "-50%"] }}
  transition={{
    ease: "linear",
    duration: 25,
    repeat: Infinity,
  }}
>
            {loopStories.map((story, index) => (    
              <div
                key={index}
                className="min-w-[400px] h-[600px] rounded-3xl overflow-hidden relative group shadow-xl"
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <div className="w-full absolute bottom-0 p-6 bg-black/60 text-white">
                  <span className="text-xs bg-orange-500 px-3 py-1 rounded-full font-semibold">
                    {story.category}
                  </span>

                  <h3 className="text-2xl font-bold mt-3">
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

          {/* Navigation Buttons */}
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
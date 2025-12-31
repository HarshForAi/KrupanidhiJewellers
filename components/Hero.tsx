import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: '/Home/Emerald_Diamond_Earrings.png',
    title: 'Discover Your',
    highlight: 'Sparkle',
    description: 'Welcoming In The Spring Season With An Enchanting Emerald, Diamond & Gold Dance With Earrings.'
  },
  {
    id: 2,
    image: '/Home/Golden_Heritage.png',
    title: 'Timeless',
    highlight: 'Elegance',
    description: 'Crafted for moments that last forever. Explore our heritage collection of fine Gold.'
  },
  {
    id: 3,
    image: '/Home/Modern_GoldenLocket.png',
    title: 'Modern',
    highlight: 'Luxury',
    description: 'Redefining sophistication with contemporary designs for the modern visionary.'
  },
  {
    id: 4,
    image: 'Public/Home/Modern_GoldenRing.png',
    title: 'Endless',
    highlight: 'Fire',
    description: 'Ignite your passion with our exquisite collection of Golden Rings with Modern touches.'
  },
  {
    id: 5,
    image: 'Public/Home/Sapphire_Necklace.png',
    title: 'Royal',
    highlight: 'Blue',
    description: 'Experience the allure of deep blue sapphires set in intricate gold patterns.'
  }
];

export const Hero = () => {
   const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="relative h-screen w-full overflow-hidden bg-neutral-900">
      
      {/* Carousel Container */}
      <AnimatePresence mode="wait">
        <motion.div 
            key={current}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
        >
             {/* General Overlay */}
             <div className="absolute inset-0 bg-neutral-900/20 z-10" />
             
             {/* Bottom Fade - Using dark gradient to ensure text readability in Light Mode */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
             
             <img 
                src={slides[current].image} 
                alt={slides[current].title} 
                className="w-full h-full object-cover object-center"
             />
        </motion.div>
      </AnimatePresence>

      {/* Content Layer */}
      <div className="relative z-20 h-full max-w-[1400px] mx-auto px-6 flex flex-col justify-center items-start pt-20">
        <div className="max-w-7xl w-full overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-white mb-8 tracking-tighter drop-shadow-2xl w-full">
                    {slides[current].title} <br />
                    <span className="font-serif italic text-gold-400 font-normal">
                        {slides[current].highlight}
                    </span>
                  </h1>
                </motion.div>
            </AnimatePresence>
            
            <AnimatePresence mode="wait">
                <motion.p 
                  key={`desc-${current}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-lg md:text-2xl text-white/95 max-w-3xl mb-12 font-light leading-relaxed drop-shadow-md"
                >
                  {slides[current].description}
                </motion.p>
            </AnimatePresence>
        </div>
      </div>
      
      {/* Carousel Controls */}
      <div className="absolute bottom-10 right-10 z-30 flex gap-4">
        <button 
            onClick={prevSlide}
            className="p-3 rounded-full border border-white/20 bg-black/20 backdrop-blur-md text-white hover:bg-gold-400 hover:text-black hover:border-transparent transition-all duration-300"
        >
            <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
            onClick={nextSlide}
            className="p-3 rounded-full border border-white/20 bg-black/20 backdrop-blur-md text-white hover:bg-gold-400 hover:text-black hover:border-transparent transition-all duration-300"
        >
            <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, idx) => (
            <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-1 rounded-full transition-all duration-500 ${
                    current === idx 
                    ? 'w-12 bg-gold-500' 
                    : 'w-2 bg-white/50 hover:bg-gold-400/50'
                }`}
            />
        ))}
      </div>
    </section>
  );
};
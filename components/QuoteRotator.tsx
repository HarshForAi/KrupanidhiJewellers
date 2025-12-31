import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const quotes = [
  { text: "Jewelry is the most transformative thing you can wear.", author: "Iris Apfel" },
  { text: "Jewelry has the power to be the one little thing that makes you feel unique.", author: "Elizabeth Taylor" },
  { text: "Elegance is not being noticed, it's about being remembered.", author: "Giorgio Armani" },
  { text: "Pearls are always appropriate.", author: "Jackie Kennedy" },
  { text: "Jewelry is like the perfect spice - it always complements what’s already there.", author: "Diane Von Furstenberg" },
  { text: "Trends come and go, style evolves. It’s important to have pieces of jewelry that are timeless.", author: "Karen Elson" },
  { text: "I never worry about diets. The only carrots that interest me are the number you get in a diamond.", author: "Mae West" },
  { text: "You can't cry on a diamond's shoulder, and diamonds won't keep you warm at night, but they are sure fun when the sun shines.", author: "Elizabeth Taylor" },
  { text: "A girl could never have too much jewelry.", author: "Unknown" },
  { text: "Life is too short to wear boring jewelry.", author: "Unknown" }
];

export const QuoteRotator = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Change quote every 60 seconds
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-gold-100 dark:bg-neutral-900 transition-colors duration-500">
      <div className="absolute inset-0 opacity-10 dark:opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 min-h-[250px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <blockquote className="font-serif text-3xl md:text-5xl italic text-amber-950 dark:text-white/80 leading-relaxed px-4">
              "{quotes[index].text}"
            </blockquote>
            <cite className="block mt-8 text-gold-600 dark:text-gold-400 font-medium tracking-widest text-sm uppercase">
              - {quotes[index].author}
            </cite>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
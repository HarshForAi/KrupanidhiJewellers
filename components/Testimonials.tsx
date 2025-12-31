import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

interface Review {
  name: string;
  text: string;
  rating: number;
  relative_time: string;
}

// Default reviews (Static Data)
const reviews: Review[] = [
  {
    name: "Yash",
    text: "I exchanged my old jewellery here and was surprised by the value I received. The transparency in their process built my trust firmly in their services and authenticity.",
    rating: 5,
    relative_time: "2 weeks ago"
  },
  {
    name: "Mala",
    text: "I bought my wedding set from here. The craftsmanship is unique and they have a very wide variety of designs. Highly recommended for bridal shopping.",
    rating: 5,
    relative_time: "1 month ago"
  },
  {
    name: "Umang",
    text: "The customized gold jewelry I ordered for my sister was stunning. They even adjusted the price because I provided some of the old gold myself. Very flexible and honest.",
    rating: 5,
    relative_time: "3 months ago"
  },
  {
    name: "Mahesh",
    text: "I had a specific design for a temple jewelry necklace. They worked with me for weeks on the 3D design. The final piece in 22k gold is a masterpiece. They even suggested using some of my old gold to reduce the cost!",
    rating: 5,
    relative_time: "4 months ago"
  }
];

// Custom Themed Google Logo
const GoogleLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

export const Testimonials = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      // Estimate card width based on first child or default
      const cardWidth = container.firstElementChild?.getBoundingClientRect().width || 350;
      const scrollAmount = cardWidth + 24; // Width + gap
      
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 500);
    }
  };

  return (
    <section className="py-24 bg-gold-50 dark:bg-neutral-950 transition-colors duration-500 overflow-hidden border-t border-gold-200/30 dark:border-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header with Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
             <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-100 dark:bg-white/5 border border-gold-200 dark:border-white/10 text-gold-700 dark:text-gold-400 text-xs font-bold uppercase tracking-widest mb-4"
            >
                <Sparkles className="w-3 h-3" /> Real Client Experiences
            </motion.div>
            <h2 className="font-serif text-4xl md:text-5xl text-amber-950 dark:text-white leading-tight">
              Trusted by Our <span className="italic text-gold-600 dark:text-gold-500">Patrons</span>
            </h2>
            <p className="text-amber-950/80 dark:text-white/50 text-lg mt-4">
               Stories of legacy and trust from our valued clients.
            </p>
          </div>
          
          <div className="flex gap-4">
            <button 
                onClick={() => scroll('left')} 
                disabled={!canScrollLeft}
                className={`p-3 rounded-full border transition-all duration-300 ${
                    !canScrollLeft 
                    ? 'border-neutral-200 text-neutral-300 cursor-not-allowed dark:border-white/10 dark:text-white/20' 
                    : 'border-amber-900/20 text-amber-900 hover:bg-amber-900 hover:text-white dark:border-white/30 dark:text-white dark:hover:bg-white dark:hover:text-black'
                }`}
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
                onClick={() => scroll('right')} 
                disabled={!canScrollRight}
                className={`p-3 rounded-full border transition-all duration-300 ${
                    !canScrollRight
                    ? 'border-neutral-200 text-neutral-300 cursor-not-allowed dark:border-white/10 dark:text-white/20' 
                    : 'border-amber-900/20 text-amber-900 hover:bg-amber-900 hover:text-white dark:border-white/30 dark:text-white dark:hover:bg-white dark:hover:text-black'
                }`}
            >
                <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Horizontal Slider */}
        <div 
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto pb-10 hide-scrollbar snap-x snap-mandatory px-1 py-2"
        >
          <AnimatePresence mode="popLayout">
              {reviews.map((t, i) => (
                <motion.div 
                  key={`${t.name}-${i}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="snap-start shrink-0 w-[85vw] md:w-[45vw] lg:w-[32%] min-w-[300px] flex flex-col h-auto"
                >
                  <div className="flex-1 bg-white dark:bg-white/5 rounded-[2.5rem] p-8 md:p-10 shadow-warm dark:shadow-none border border-gold-200/50 dark:border-white/10 hover:border-gold-500/50 dark:hover:border-gold-500/30 transition-all duration-500 flex flex-col h-full hover:-translate-y-1">
                    
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-3">
                        <GoogleLogo className="w-5 h-5 text-amber-950/20 dark:text-gold-500/40" />
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, idx) => (
                            <Star 
                              key={idx} 
                              className={`w-3.5 h-3.5 ${idx < t.rating ? 'fill-gold-500 text-gold-500' : 'text-gold-200 dark:text-white/10'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <Quote className="w-6 h-6 text-gold-100 dark:text-white/5" />
                    </div>

                    {/* Text container */}
                    <p className="text-amber-950/90 dark:text-white/80 italic mb-10 leading-relaxed text-[15px] md:text-lg flex-1">
                      "{t.text}"
                    </p>
                    
                    <div className="flex items-center gap-4 pt-6 border-t border-gold-50 dark:border-white/5 mt-auto">
                      <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center text-white font-bold text-xl font-serif shrink-0">
                        {t.name.charAt(0)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-serif text-lg text-amber-950 dark:text-white leading-tight font-bold truncate">
                          {t.name}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <p className="text-[10px] text-gold-600 dark:text-gold-400 uppercase tracking-widest font-bold whitespace-nowrap">
                            {t.relative_time}
                          </p>
                        </div>
                      </div>
                      
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-colors duration-300 bg-green-100/50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800 shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> 
                        Verified
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Scale, Banknote, Store, BadgeCheck, Hammer, Gem, Calendar, UserCog, Microscope, Eye, ChevronLeft, ChevronRight, Coins, Shield, Clock, BadgeCent, Lock, Landmark } from 'lucide-react';

const exchangePoints = [
  {
    icon: <Coins className="w-8 h-8" />,
    title: "Instant Cash For Gold",
    info: "Turn your assets into liquidity instantly with our secure, transparent gold buying service."
  },
  {
    icon: <Scale className="w-8 h-8" />,
    title: "We accept 9kt to 22kt gold",
    info: "No matter the purity — bring in your gold, and we’ll help you upgrade"
  },
  {
    icon: <Banknote className="w-8 h-8" />,
    title: "Best exchange value on old gold",
    info: "Get full exchange value on gold – no hidden deductions"
  },
  {
    icon: <Store className="w-8 h-8" />,
    title: "We accept gold from any jeweller",
    info: "You can exchange old gold jewellery bought from anywhere"
  },
  {
    icon: <BadgeCheck className="w-8 h-8" />,
    title: "Guaranteed best value on exchange",
    info: "We ensure you get the highest possible value — always."
  },
  {
    icon: <Hammer className="w-8 h-8" />,
    title: "Exchange small or broken jewellery",
    info: "We accept even small or damaged pieces because every gram counts"
  },
  {
    icon: <BadgeCent className="w-8 h-8" />,
    title: "Certified Gemologists",
    info: "Our in-house experts ensure every evaluation is accurate, professional, and fair."
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Exchange all year round",
    info: "No waiting for offers - come in whenever you're ready to upgrade"
  },
  {
    icon: <UserCog className="w-8 h-8" />,
    title: "Dedicated craftsman at store",
    info: "Skilled karigars handle your jewellery with precision and care."
  },
  {
    icon: <Microscope className="w-8 h-8" />,
    title: "A scientific evaluation process",
    info: "A consistent, technology-led process to assess purity and weight of your old gold"
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Complete transparency",
    info: "Watch your gold being melted and evaluated in front of you."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Free Purity Check",
    info: "Walk in anytime for a complimentary computerized karatage test of your jewellery."
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Quick & Easy Process",
    info: "Complete your exchange or sale in under 30 minutes with our streamlined workflow."
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "Secure Handling",
    info: "Your valuables are handled with the utmost security and surveillance during the process."
  }
];

export const GoldExchangeInfo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = 350;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section className="py-24 bg-gold-50 dark:bg-neutral-950 border-b border-gold-200/30 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-gold-600 dark:text-gold-400 font-bold uppercase tracking-widest text-sm mb-2">Our Gold Promise</h4>
            <h2 className="font-serif text-4xl md:text-5xl text-amber-950 dark:text-white leading-tight">
              The Gold Exchange <span className="italic text-gold-500">Advantage</span>
            </h2>
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

        <div 
            ref={containerRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto pb-10 hide-scrollbar snap-x snap-mandatory px-1"
        >
            {exchangePoints.map((point, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="snap-start min-w-[300px] md:min-w-[350px] bg-gold-100 dark:bg-white/5 rounded-2xl p-8 border border-gold-200 dark:border-white/10 hover:border-gold-400 dark:hover:border-gold-400/50 transition-all duration-300 group shadow-sm hover:shadow-lg dark:shadow-none hover:-translate-y-1"
                >
                    <div className="w-14 h-14 rounded-full bg-white dark:bg-neutral-800 flex items-center justify-center text-gold-600 dark:text-gold-400 mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                        {point.icon}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-amber-950 dark:text-white mb-3 group-hover:text-gold-700 dark:group-hover:text-gold-400 transition-colors">
                        {point.title}
                    </h3>
                    <p className="text-amber-950/80 dark:text-white/60 text-sm leading-relaxed">
                        {point.info}
                    </p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};
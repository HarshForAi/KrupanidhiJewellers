import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowLeft, Sparkles, ShieldCheck, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

interface JewelleryCareProps {
  onBack: () => void;
}

const careGuidelines = [
  { title: "Store Jewellery Separately", description: "Always store each piece individually in a soft pouch or lined jewellery box. This prevents scratches caused by metal-to-metal contact, especially between gold and silver pieces." },
  { title: "Avoid Contact with Chemicals", description: "Remove jewellery before exposure to perfumes, deodorants, lotions, hairspray, chlorine, detergents, and cleaning agents. Chemicals can dull finishes, discolor metals, and weaken solder joints." },
  { title: "Remove Before Bathing or Swimming", description: "Soap residue, hard water, and chlorine can create a film on gold and accelerate tarnishing in silver. Always remove jewellery before showering, swimming, or using hot tubs." },
  { title: "Wear Jewellery After Dressing", description: "Put on jewellery as the final step after applying makeup, perfumes, and hair products. This minimizes chemical exposure and helps retain the original polish." },
  { title: "Clean Regularly Safely", description: "For routine cleaning, use warm water, mild soap, and a soft brush or cloth. Gently clean and rinse thoroughly, then pat dry with a lint-free cloth. This method is widely recommended by professional jewellers." },
  { title: "Use Polishing Cloths", description: "Specialised gold and silver polishing cloths effectively remove tarnish and restore shine without damaging the metal. These are industry-approved and safe for regular use." },
  { title: "Avoid Abrasive Materials", description: "Never use toothpaste, baking soda, harsh brushes, or abrasive cleaners. These can permanently scratch the metal surface and remove protective plating." },
  { title: "Remove During Physical Activities", description: "Take off jewellery during exercise, household chores, or heavy work. Physical impact and friction can bend settings, loosen stones, and cause premature wear." },
  { title: "Protect Silver from Tarnishing", description: "Silver naturally reacts with air and moisture. Store silver jewellery in airtight bags or anti-tarnish pouches with silica gel to slow oxidation—this is a widely used professional storage method." },
  { title: "Inspect Jewellery Periodically", description: "Check clasps, settings, and links regularly. Early detection of wear or loosened stones prevents loss and costly repairs. Professional inspection is recommended at least once a year." },
  { title: "Avoid Sleeping with Jewellery", description: "Sleeping with jewellery can cause chains to stretch, clasps to weaken, and settings to loosen due to continuous pressure and movement." },
  { title: "Professional Cleaning & Polishing", description: "Have your jewellery professionally cleaned and polished periodically. Jewellers use ultrasonic and steam cleaning equipment that safely restores brilliance and removes deep-seated dirt." },
  { title: "Handle with Clean Hands", description: "Always handle jewellery with clean, dry hands. Natural oils and dirt can accumulate over time and dull the metal’s shine." },
  { title: "Keep Away from Heat & Sunlight", description: "Excessive heat can alter metal properties and fade finishes. Store jewellery away from direct sunlight and heat sources." },
  { title: "Rhodium Plating Maintenance", description: "White gold jewellery may require periodic rhodium plating to maintain its bright white appearance. This is a standard professional practice to restore its original finish." }
];

// Fix: Explicitly typed as React.FC to allow 'key' and other standard React attributes in JSX
const TimelineItem: React.FC<{ 
  item: typeof careGuidelines[0]; 
  index: number; 
  isLast: boolean; 
}> = ({ item, index, isLast }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const scale = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 1]);

  return (
    <div ref={ref} className="relative flex gap-8 pb-16 md:pb-24 group">
      {/* Node and Line */}
      <div className="flex flex-col items-center shrink-0">
        <motion.div 
          style={{ opacity }}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-neutral-900 dark:bg-gold-500 text-white dark:text-black flex items-center justify-center font-bold text-sm md:text-lg z-10 shadow-xl border-2 border-gold-50 dark:border-neutral-950 transition-colors duration-500"
        >
          {index + 1}
        </motion.div>
        
        {!isLast && (
          <div className="w-0.5 bg-neutral-200 dark:bg-white/10 h-full absolute top-10 md:top-12 left-5 md:left-6 -translate-x-1/2 rounded-full overflow-hidden">
            <motion.div 
              style={{ scaleY: scale }}
              className="w-full h-full bg-neutral-900 dark:bg-gold-500 origin-top"
            />
          </div>
        )}
      </div>

      {/* Content */}
      <motion.div 
        style={{ opacity, scale: useTransform(scrollYProgress, [0, 0.5], [0.98, 1]) }}
        className="pt-1.5"
      >
        <h3 className="font-serif text-xl md:text-3xl text-amber-950 dark:text-white mb-3 font-bold group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
          {item.title}
        </h3>
        <p className="text-sm md:text-lg text-amber-950/70 dark:text-white/60 leading-relaxed font-medium">
          {item.description}
        </p>
      </motion.div>
    </div>
  );
};

export const JewelleryCare: React.FC<JewelleryCareProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleVisitShowroom = () => {
    onBack();
    // Use a small timeout to allow the App component to render the home view before scrolling
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section className="pt-32 pb-32 bg-gold-50 dark:bg-neutral-950 min-h-screen transition-colors duration-500 overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row md:justify-between items-start md:items-center gap-6 md:gap-0">
          <Button 
            variant="outline" 
            onClick={onBack}
            className="border-amber-900/20 text-amber-900 hover:bg-amber-900 hover:text-white dark:border-white/20 dark:text-white group w-full md:w-auto"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Button>
          
          <div className="flex items-center gap-2 text-gold-600 dark:text-gold-400">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-widest">Our Commitment to Care</span>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-100 dark:bg-white/5 border border-gold-200 dark:border-white/10 text-gold-700 dark:text-gold-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3 h-3" /> Professional Guidelines
          </div>
          <h1 className="font-serif text-4xl md:text-7xl text-amber-950 dark:text-white mb-8 leading-tight font-bold">
            Jewellery Care <br />
            <span className="italic text-gold-600 dark:text-gold-500">Guidelines</span>
          </h1>
          <p className="text-lg md:text-xl text-amber-950/80 dark:text-white/60 max-w-2xl leading-relaxed">
            Proper care preserves the brilliance, finish, and value of your jewellery. 
            Follow our professional guide to maintain your pieces in like-new condition for years to come.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative mt-12 md:mt-24 pl-2 md:pl-0">
          {careGuidelines.map((item, index) => (
            <TimelineItem 
              key={index} 
              item={item} 
              index={index} 
              isLast={index === careGuidelines.length - 1} 
            />
          ))}
        </div>

        {/* Final Message - Redesigned to match Privacy Policy contact block */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-8 md:p-12 rounded-[2.5rem] bg-white dark:bg-white/5 border border-gold-200 dark:border-white/10 text-center shadow-warm-lg dark:shadow-none transition-colors"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-gold-600 dark:text-gold-400" />
            <h2 className="font-serif text-2xl md:text-4xl text-amber-950 dark:text-white italic">Professional Recommendation</h2>
          </div>
          
          <p className="text-sm md:text-lg text-amber-950/70 dark:text-white/60 max-w-xl mx-auto leading-relaxed mb-10 font-medium">
            By following these professionally recommended care guidelines, your gold and silver jewellery will maintain its brilliance, strength, and beauty for generations. For expert care, inspection, or restoration services, we recommend visiting our showroom.
          </p>

          <Button variant="primary" onClick={handleVisitShowroom} className="w-full md:w-auto">
            Visit Our Showroom <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
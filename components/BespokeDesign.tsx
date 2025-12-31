import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { PenTool, Hammer, Gem, Sparkles, Star, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

interface BespokeDesignProps {
  onBack: () => void;
}

const steps = [
  {
    number: "01",
    title: "The Consultation",
    desc: "Every masterpiece begins with a conversation. We sit down with you—over coffee or a call—to understand your story, your inspirations, and the emotions you wish to capture in gold."
  },
  {
    number: "02",
    title: "The Design",
    desc: "Our artists translate your ideas into visual poetry through detailed 3D renders. Every curve, proportion, and setting is refined digitally until the design mirrors your imagination perfectly."
  },
  {
    number: "03",
    title: "The Creation",
    desc: "Fire meets metal. Our master craftsmen, with decades of lineage, hand-forge your piece. From casting the gold to setting the stones, every movement is deliberate and precise."
  },
  {
    number: "04",
    title: "The Revelation",
    desc: "The final polish. We present your heirloom in our signature velvet box. It is no longer just jewellery; it is a memory made tangible, ready to be worn forever."
  }
];

export const BespokeDesign: React.FC<BespokeDesignProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleVisitStore = () => {
    onBack();
    // Allow time for the Home view to render before scrolling
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section className="bg-gold-50 dark:bg-neutral-950 min-h-screen transition-colors duration-500 overflow-x-hidden">
      
      {/* Hero Section - Contained width and rounded for 'lessened widthishness' */}
      <div className="pt-28 pb-12 px-6">
        <div className="relative h-[70vh] w-full max-w-[1400px] mx-auto overflow-hidden rounded-[3rem] shadow-2xl">
            <div className="absolute inset-0">
                <img 
                    src="Public/Bespoke/Header_Bespoke.jpeg" 
                    alt="Bespoke Jewellery Art" 
                    className="w-full h-full object-cover"
                />
                {/* Black filter for text readability */}
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
            </div>
            
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">
                        The Atelier
                    </span>
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-xl">
                        Curate Your <br />
                        <span className="italic text-gold-300">Personalised Jewellery</span>
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
                        Your story, forged in gold. A journey from imagination to exquisite reality.
                    </p>
                </motion.div>
            </div>
        </div>
      </div>

      {/* Chapter 1: The Blueprint */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="order-2 lg:order-1"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-6xl font-serif text-gold-200 dark:text-neutral-800 font-bold opacity-50">01</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-amber-950 dark:text-white">The Blueprint of <br/><span className="italic text-gold-600 dark:text-gold-400">Dreams</span></h2>
                    </div>
                    <p className="text-lg text-amber-950/80 dark:text-white/70 leading-relaxed mb-8">
                        It starts with a whisper of an idea. Perhaps it's a vintage design you saw in a grandmother's locket, or a modern geometric shape that speaks to your soul.
                    </p>
                    <p className="text-lg text-amber-950/80 dark:text-white/70 leading-relaxed mb-8">
                        Our designers translate your vision directly into detailed 3D models. Through precise digital rendering, we refine every line, curve, and setting—adjusting until the design on screen matches exactly what you imagined.
                    </p>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-600 dark:text-gold-400">
                            <PenTool className="w-4 h-4" /> Hand Sketched
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-600 dark:text-gold-400">
                            <Sparkles className="w-4 h-4" /> 3D Modeling
                        </div>
                    </div>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative order-1 lg:order-2 h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl group"
                >
                    <img 
                        src="Public/Bespoke/First_Step.jpeg" 
                        alt="Sketching Jewellery" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-950/50 to-transparent"></div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* Chapter 2: The Fire */}
      <section className="py-24 md:py-32 px-6 bg-gold-100/30 dark:bg-white/5">
        <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl group"
                >
                    <div className="absolute top-4 left-4 z-10 bg-black/30 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border border-white/20">
                        In The Workshop
                    </div>
                    <img 
                        src="Public/Bespoke/Second_Step.jpeg" 
                        alt="Crafting Jewellery with Fire" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-6xl font-serif text-gold-200 dark:text-neutral-800 font-bold opacity-50">02</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-amber-950 dark:text-white">Alchemy & <br/><span className="italic text-gold-600 dark:text-gold-400">Fire</span></h2>
                    </div>
                    <p className="text-lg text-amber-950/80 dark:text-white/70 leading-relaxed mb-8">
                        This is where patience meets passion. The metal is heated, beaten, and shaped by hands that have inherited the craft through generations.
                    </p>
                    <p className="text-lg text-amber-950/80 dark:text-white/70 leading-relaxed mb-8">
                        There is no machinery that can replicate the soul put into a piece by a human hand. We solder the joints, refine the edges, and prepare the mount for its crowning glory.
                    </p>
                     <div className="flex gap-4">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-600 dark:text-gold-400">
                            <Hammer className="w-4 h-4" /> Hand Forged
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* Chapter 3: The Detail */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="order-2 lg:order-1"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-6xl font-serif text-gold-200 dark:text-neutral-800 font-bold opacity-50">03</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-amber-950 dark:text-white">The Setting of <br/><span className="italic text-gold-600 dark:text-gold-400">Stars</span></h2>
                    </div>
                    <p className="text-lg text-amber-950/80 dark:text-white/70 leading-relaxed mb-8">
                        A gemstone is a fragment of the earth's history. We treat it with reverence.
                    </p>
                    <p className="text-lg text-amber-950/80 dark:text-white/70 leading-relaxed mb-8">
                        With microscopic precision, we set the stones. The prongs are tightened, the metal is polished to a mirror finish, and the piece finally awakens. It catches the light, and suddenly, the sketch has become a legacy.
                    </p>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-600 dark:text-gold-400">
                            <Gem className="w-4 h-4" /> Precision Setting
                        </div>
                    </div>
                </motion.div>
                
                <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
                     <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden"
                    >
                        <img 
                            src="Public/Bespoke/Third_Step_1.jpeg" 
                            alt="Setting Stones" 
                            className="w-full h-full object-cover"
                        />
                     </motion.div>
                     <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden mt-12 md:mt-16"
                    >
                        <img 
                            src="Public/Bespoke/Third_Step_2.jpeg" 
                            alt="Final Polish" 
                            className="w-full h-full object-cover"
                        />
                     </motion.div>
                </div>
            </div>
        </div>
      </section>

      {/* Chapter 4: The Finishing Line */}
      <section className="py-24 md:py-32 px-6 bg-gold-100/30 dark:bg-white/5">
        <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl group order-1 lg:order-1"
                >
                    <img 
                        src="Public/Bespoke/Fourth_Step.jpeg" 
                        alt="The Finishing Line" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="order-2 lg:order-2"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-6xl font-serif text-gold-200 dark:text-neutral-800 font-bold opacity-50">04</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-amber-950 dark:text-white">The Finishing <br/><span className="italic text-gold-600 dark:text-gold-400">Line</span></h2>
                    </div>
                    <p className="text-lg text-amber-950/80 dark:text-white/70 leading-relaxed mb-8">
                        Perfection lies in the final touch. Every facet is inspected, every curve polished to a brilliant shine.
                    </p>
                    <p className="text-lg text-amber-950/80 dark:text-white/70 leading-relaxed mb-8">
                        Before it reaches your hands, it undergoes our rigorous quality assurance, ensuring that the piece is not just beautiful, but flawless.
                    </p>
                     <div className="flex gap-4">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-600 dark:text-gold-400">
                            <Star className="w-4 h-4" /> Perfection
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* The Process Grid */}
      <section className="py-24 px-6 bg-white dark:bg-neutral-900 border-y border-gold-200 dark:border-white/10">
        <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-16">
                <h2 className="font-serif text-4xl text-amber-950 dark:text-white mb-4">How It Works</h2>
                <p className="text-amber-950/60 dark:text-white/40">From your mind to your hand in four simple steps.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, idx) => (
                    <div key={idx} className="p-8 bg-gold-50 dark:bg-white/5 rounded-3xl border border-gold-100 dark:border-white/5 hover:border-gold-300 dark:hover:border-gold-500/30 transition-colors group">
                        <div className="text-4xl font-serif font-bold text-gold-300 dark:text-white/10 mb-6 group-hover:text-gold-500 dark:group-hover:text-gold-400 transition-colors">
                            {step.number}
                        </div>
                        <h3 className="text-xl font-serif text-amber-950 dark:text-white mb-4">{step.title}</h3>
                        <p className="text-sm text-amber-950/70 dark:text-white/60 leading-relaxed">
                            {step.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-5xl md:text-6xl text-amber-950 dark:text-white mb-8">Ready to Curate Your <br/> <span className="italic text-gold-600 dark:text-gold-400">Personalised Jewellery?</span></h2>
            <p className="text-lg text-amber-950/80 dark:text-white/60 mb-10">
                Experience the art of bespoke creation. Visit our showroom to begin your consultation.
            </p>
            <Button 
                variant="outline" 
                onClick={handleVisitStore}
                className="border-amber-900/20 text-amber-900 dark:text-white hover:bg-amber-900 hover:text-white !dark:hover:bg-white !dark:hover:text-neutral-900 !dark:hover:border-white px-12"
            >
                Visit Our Store <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
        </div>
      </section>

    </section>
  );
};
import React from 'react';
import { Diamond, PenTool, ShieldCheck, Banknote, Scale } from 'lucide-react';
import { motion } from 'framer-motion';

export const ValueProposition = () => {
  const features = [
    {
      icon: <Diamond className="w-6 h-6" />,
      title: "Ethically Sourced",
      description: "Every stone has a story. We ensure ours are conflict-free and traceable to their origin."
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Master Craftsmanship",
      description: "Hand-finished by artisans with decades of experience in the traditional art of jewelry making."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Lifetime Warranty",
      description: "We stand behind our quality. Enjoy complimentary cleaning and inspection for life."
    },
    {
      icon: <Banknote className="w-6 h-6" />,
      title: "Unbeatable Cash Buyback",
      description: "We buy back old Gold/Silver ornaments at the best market price, offering you superior value in cash instantly."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 bg-gold-50 dark:bg-neutral-950 relative transition-colors duration-500">
        {/* The Promise */}
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
             <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-serif text-4xl md:text-5xl lg:text-6xl text-amber-950 dark:text-white mb-6"
             >
                Where Artistry Meets <span className="text-gold-600 dark:text-gold-400 italic">Eternity</span>
             </motion.h2>
             <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-amber-950/80 dark:text-white/60 max-w-2xl mx-auto text-lg leading-relaxed"
             >
                At Krupanidhi Jewellers, we go beyond jewelry. 
                We craft legacies—heirlooms infused with emotion, tradition, and 
                the promise of being treasured for generations to come.
             </motion.p>
        </div>

        {/* DharamKato Storytelling Section */}
        <div className="max-w-5xl mx-auto px-6 mb-20">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative bg-white/60 dark:bg-white/5 border border-gold-300 dark:border-gold-500/30 rounded-[2rem] p-8 md:p-12 text-center shadow-warm-lg overflow-hidden"
            >
                {/* Decorative background element */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-50"></div>
                
                <div className="flex flex-col items-center relative z-10">
                    <div className="w-16 h-16 rounded-full bg-gold-100 dark:bg-gold-900/20 border border-gold-200 dark:border-gold-500/30 flex items-center justify-center text-gold-700 dark:text-gold-400 mb-6 shadow-sm">
                        <Scale className="w-8 h-8" />
                    </div>
                    
                    <h3 className="font-serif text-3xl md:text-4xl text-amber-950 dark:text-white mb-6">
                        <span className="italic text-gold-600 dark:text-gold-400">#</span>DharamKato
                    </h3>

                    <div className="max-w-3xl space-y-6 text-amber-950/80 dark:text-white/70 text-lg leading-relaxed font-light">
                        <p>
                            The term <span className="font-semibold text-gold-700 dark:text-gold-300">"DharamKato"</span> is not just a name; it is the ancient standard of our integrity. 
                            It signifies a jewellery showroom dedicated to buying old gold and silver ornaments with instant cash, adhering to a process of absolute righteousness. 
                            We accept any gold or silver by its sheer purity, We honor the true value of every piece based on its actual purity.
                        </p>
                        <p className="font-serif text-xl md:text-2xl text-amber-950 dark:text-white italic opacity-90 border-t border-b border-gold-200 dark:border-white/10 py-6 my-6">
                            "In a world of hidden fees and clouded glass, our scales are open, and our process is clear. We don’t just weigh your gold; we weigh the trust you place in us. Come specifically for the purity of our transaction."
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* Detailed Value Grid */}
        <div className="max-w-7xl mx-auto px-6">
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-gold-200 dark:border-white/10 pt-16"
            >
                {features.map((feature, idx) => (
                    <motion.div key={idx} variants={itemVariants} className="flex flex-col items-center text-center group">
                        <div className="w-16 h-16 rounded-full bg-gold-100 dark:bg-white/5 border border-gold-200 dark:border-white/10 flex items-center justify-center text-gold-600 dark:text-gold-400 mb-6 group-hover:scale-110 group-hover:bg-gold-200 dark:group-hover:bg-gold-400/10 transition-all duration-300 shadow-sm">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-serif text-amber-950 dark:text-white mb-3">{feature.title}</h3>
                        <p className="text-amber-950/80 dark:text-white/50 text-sm leading-relaxed max-w-xs">{feature.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
  );
};
import React from 'react';
import { motion } from 'framer-motion';
import { PenTool } from 'lucide-react';

export const CuratedBy = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-gold-50 dark:bg-neutral-950 border-y border-gold-200 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="relative bg-white/40 dark:bg-white/5 rounded-[2.5rem] p-8 md:p-10 overflow-hidden border border-gold-200 dark:border-white/10 backdrop-blur-sm">
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 flex flex-col items-center text-center"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100/50 dark:bg-white/10 border border-gold-200 dark:border-white/10 text-gold-700 dark:text-gold-400 text-[10px] font-bold uppercase tracking-widest mb-6">
                    <PenTool className="w-3 h-3" /> Curator & Visionary
                </div>

                <p className="font-serif text-xl md:text-2xl text-amber-950/90 dark:text-white/80 max-w-2xl mx-auto leading-relaxed font-light italic mb-6">
                    "Blending the purity of tradition with the audacity of modern design. Every piece in this collection is hand-selected to ensure it doesn't just adorn you, but defines you."
                </p>
                
                <div className="w-12 h-px bg-gold-300 dark:bg-white/20 mb-6"></div>

                <div className="space-y-1">
                    <h2 className="font-serif text-3xl md:text-4xl text-amber-950 dark:text-white tracking-tight font-bold">
                        Harsh Parekh
                    </h2>
                    <p className="text-xs font-bold uppercase tracking-widest text-gold-600 dark:text-gold-500 opacity-80">
                        Krupanidhi Jewellers
                    </p>
                </div>

                <div className="mt-8 opacity-60 dark:opacity-40">
                    <span 
                        className="font-serif text-4xl md:text-5xl text-amber-900/20 dark:text-white/20" 
                        style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}
                    >
                        HP
                    </span>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};
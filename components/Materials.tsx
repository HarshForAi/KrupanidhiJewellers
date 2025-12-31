import React, { useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowLeft, Gem, Sparkles, Hammer, Crown, Feather, Anchor, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

interface MaterialsProps {
  onBack: () => void;
}

export const Materials: React.FC<MaterialsProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBuildLegacy = () => {
    onBack();
    // Allow time for the Home view to render before scrolling
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="bg-gold-50 dark:bg-neutral-950 min-h-screen transition-colors duration-500 overflow-x-hidden pt-28">
      
      {/* Hero Section */}
      <div className="relative w-full max-w-[1400px] mx-auto px-6 mb-24">
        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[60vh] min-h-[500px]">
            <img 
                src="Public/Materials/Header_Material.png" 
                alt="Raw Materials Texture" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/20"></div>
            
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                >
                    <span className="inline-block py-1 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gold-300 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                        The Foundation
                    </span>
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-xl">
                        Our Materials
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-8"></div>
                    <p className="text-white/90 text-xl md:text-2xl font-serif italic text-gold-200">
                        "The Soul of Our Craftsmanship"
                    </p>
                </motion.div>
            </div>
        </div>
      </div>

      {/* Intro Text */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-32">
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-amber-950/80 dark:text-white/70 leading-relaxed font-light"
        >
            True luxury begins at its source. Every piece we create is rooted in the purity of its material, shaped by skilled hands, and elevated by thoughtful design. Our collections are defined by three noble elements—<span className="text-gold-600 dark:text-gold-400 font-semibold">Gold</span>, <span className="text-neutral-500 dark:text-neutral-300 font-semibold">Silver</span>, and <span className="text-amber-700 dark:text-amber-500 font-semibold">Gemstones</span>—each chosen for its beauty, meaning, and legacy.
        </motion.p>
      </div>

      {/* GOLD SECTION */}
      <section className="py-12 md:py-24 px-6 max-w-[1400px] mx-auto">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
             >
                 <div className="flex items-center gap-3 mb-4">
                     <div className="p-2 rounded-full bg-gold-100 dark:bg-gold-500/10 text-gold-600 dark:text-gold-400">
                        <Crown className="w-6 h-6" />
                     </div>
                     <h2 className="text-sm font-bold uppercase tracking-widest text-gold-600 dark:text-gold-400">The Royal Metal</h2>
                 </div>
                 
                 <h2 className="text-4xl md:text-6xl font-serif text-amber-950 dark:text-white mb-6">
                     GOLD — The Language of <span className="italic text-gold-500">Legacy</span>
                 </h2>
                 
                 <p className="text-lg text-amber-950/80 dark:text-white/70 leading-relaxed mb-6">
                    Gold has always symbolized prosperity, celebration, and permanence. In our atelier, gold is not merely crafted—it is curated and customised to reflect individuality and timeless elegance.
                 </p>
                 <p className="text-lg text-amber-950/80 dark:text-white/70 leading-relaxed mb-8">
                    From delicately curated gold jewellery to bespoke creations designed around your story, each piece is a reflection of refined taste and personal expression. Whether marking milestones or becoming heirlooms, our gold jewellery is designed to transcend trends and generations.
                 </p>
                 
                 <div className="flex flex-wrap gap-4">
                    {['Curated', 'Customised', 'Enduring'].map((tag) => (
                        <span key={tag} className="px-4 py-2 rounded-lg bg-gold-100 dark:bg-white/5 text-amber-950 dark:text-gold-200 border border-gold-200 dark:border-white/10 text-sm font-bold uppercase tracking-wide">
                            {tag}
                        </span>
                    ))}
                 </div>
             </motion.div>

             <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-1 lg:order-2 relative h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-gold-200 dark:border-white/10"
             >
                 <img 
                    src="Public/Materials/GoldBars.png" 
                    alt="Molten Gold Texture" 
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-gold-900/40 to-transparent mix-blend-multiply"></div>
             </motion.div>
         </div>
      </section>

      {/* SILVER SECTION */}
      <section className="py-12 md:py-24 px-6 max-w-[1400px] mx-auto">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-neutral-200 dark:border-white/10"
             >
                 <img 
                    src="Public/Materials/SilverBars.png" 
                    alt="Silver Craftsmanship" 
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110 grayscale-[0.2]"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/30 to-transparent"></div>
             </motion.div>

             <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
             >
                 <div className="flex items-center gap-3 mb-4">
                     <div className="p-2 rounded-full bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-neutral-300">
                        <Feather className="w-6 h-6" />
                     </div>
                     <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-600 dark:text-neutral-400">The Moon Metal</h2>
                 </div>
                 
                 <h2 className="text-4xl md:text-6xl font-serif text-amber-950 dark:text-white mb-6">
                     SILVER — Purity in Its Most <span className="italic text-neutral-500 dark:text-neutral-400">Elegant Form</span>
                 </h2>
                 
                 <p className="text-lg text-amber-950/80 dark:text-white/70 leading-relaxed mb-6">
                    Silver carries a quiet grace—pure, powerful, and deeply rooted in tradition. We honour this legacy through our finely crafted 925 sterling jewellery, sacred silver idols, and pure silver utensils made for moments of devotion and everyday elegance.
                 </p>
                 <p className="text-lg text-amber-950/80 dark:text-white/70 leading-relaxed mb-8">
                    Every silver creation reflects balance—between spirituality and style, heritage and modernity. From adornment to worship and investment, our silver stands as a symbol of authenticity, trust, and timeless value.
                 </p>
                 
                 <div className="flex flex-wrap gap-4">
                    {['Pure in Form', 'Powerful in Meaning'].map((tag) => (
                        <span key={tag} className="px-4 py-2 rounded-lg bg-neutral-100 dark:bg-white/5 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-white/10 text-sm font-bold uppercase tracking-wide">
                            {tag}
                        </span>
                    ))}
                 </div>
             </motion.div>
         </div>
      </section>

      {/* GEMSTONE SECTION */}
      <section className="py-12 md:py-24 px-6 max-w-[1400px] mx-auto">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
             >
                 <div className="flex items-center gap-3 mb-4">
                     <div className="p-2 rounded-full bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-500">
                        <Gem className="w-6 h-6" />
                     </div>
                     <h2 className="text-sm font-bold uppercase tracking-widest text-amber-700 dark:text-amber-500">Earth's Treasures</h2>
                 </div>
                 
                 <h2 className="text-4xl md:text-6xl font-serif text-amber-950 dark:text-white mb-6">
                     GEMSTONES — Nature’s Art, <span className="italic text-amber-700 dark:text-amber-500">Perfected</span>
                 </h2>
                 
                 <p className="text-lg text-amber-950/80 dark:text-white/70 leading-relaxed mb-6">
                    Gemstones are stories written by nature—each stone unique, each hue alive with character. Our gemstone rings and jewellery are curated for brilliance, balance, and beauty, chosen to complement both gold and silver with understated luxury.
                 </p>
                 <p className="text-lg text-amber-950/80 dark:text-white/70 leading-relaxed mb-8">
                    Whether worn as a statement or cherished for its deeper meaning, every gemstone is set with precision to enhance its natural allure, making each piece unmistakably personal and eternally elegant.
                 </p>
                 
                 <div className="flex flex-wrap gap-4">
                    {['Rare', 'Radiant', 'Remarkable'].map((tag) => (
                        <span key={tag} className="px-4 py-2 rounded-lg bg-amber-50 dark:bg-white/5 text-amber-900 dark:text-amber-200 border border-amber-200 dark:border-white/10 text-sm font-bold uppercase tracking-wide">
                            {tag}
                        </span>
                    ))}
                 </div>
             </motion.div>

             <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-1 lg:order-2 relative h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-gold-200 dark:border-white/10"
             >
                 <img 
                    src="Public/Materials/Sapphire_Gemstone.png" 
                    alt="Vivid Gemstones" 
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
             </motion.div>
         </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-24 px-6 bg-white dark:bg-white/5 border-y border-gold-200 dark:border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <div className="w-16 h-16 mx-auto bg-gold-100 dark:bg-gold-500/20 rounded-full flex items-center justify-center text-gold-600 dark:text-gold-400 mb-8">
                    <Anchor className="w-8 h-8" />
                </div>
                
                <h2 className="text-3xl md:text-5xl font-serif text-amber-950 dark:text-white mb-8">Our Promise</h2>
                
                <p className="text-xl md:text-2xl text-amber-950/80 dark:text-white/80 leading-relaxed mb-8 font-light italic">
                    "We believe true luxury lies in purity of material, excellence of craftsmanship, and meaning behind every design."
                </p>
                
                <p className="text-lg text-amber-950/70 dark:text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto">
                    From curated and customised gold to refined silver and radiant gemstones, our materials come together to create jewellery that is not just worn—but felt, remembered, and passed on.
                </p>

                <div className="inline-flex flex-col md:flex-row gap-4 items-center justify-center text-sm font-bold uppercase tracking-widest text-gold-700 dark:text-gold-300">
                    <span>Crafted in Purity</span>
                    <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-gold-300"></span>
                    <span>Curated with Purpose</span>
                    <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-gold-300"></span>
                    <span>Designed for Generations</span>
                </div>
            </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 text-center bg-gold-50 dark:bg-neutral-950">
        <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-5xl md:text-6xl text-amber-950 dark:text-white mb-8">Let's Build The <br/> <span className="italic text-gold-600 dark:text-gold-400">Curated Legacy</span></h2>
            <p className="text-lg text-amber-950/80 dark:text-white/60 mb-12">
                Visit us today to explore these materials in their finest forms.
            </p>
            <Button 
                variant="primary" 
                onClick={handleBuildLegacy}
                className="px-12 py-4 text-lg"
            >
                Visit Our Showroom <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
        </div>
      </section>

    </section>
  );
};
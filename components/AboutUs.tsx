import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Scale, RefreshCw, Star, Landmark, ShieldCheck, ArrowLeft, Crown, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

interface AboutUsProps {
  onBack: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleVisitShowroom = () => {
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
    <section className="bg-gold-50 dark:bg-neutral-950 min-h-screen transition-colors duration-500 overflow-x-hidden pt-28">
      
      {/* 1. Hero Section */}
      <div className="relative w-full max-w-[1400px] mx-auto px-6 mb-24">
        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[80vh] min-h-[600px]">
            <img 
                src= "Public/AboutUs/Dark_Gold_Dust.jpg"
                alt="Gold Dust and Legacy" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-neutral-900/30"></div>
            
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gold-300 text-xs font-bold uppercase tracking-[0.2em] mb-8">
                        <ShieldCheck className="w-3 h-3" /> Since 1991
                    </div>
                    
                    <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight drop-shadow-lg">
                        Guardians of Value, <br />
                        <span className="italic text-gold-400">Curators of Legacy</span>
                    </h1>
                    
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-8"></div>

                    <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
                        "Where Trust Weighs More Than Gold."
                    </p>
                    <p className="text-white/80 text-base md:text-lg max-w-4xl mx-auto font-light leading-relaxed mt-6 hidden md:block">
                        To us, jewellery is never just an object. It is a quiet witness to life’s most profound moments. 
                        It is the heirloom passed down by a grandmother, the investment for a daughter’s education, and the token of a promise kept.
                    </p>
                </motion.div>
            </div>
        </div>
        
        {/* Mobile Intro Text (visible only on small screens below hero image) */}
        <div className="md:hidden mt-8 text-amber-950/80 dark:text-white/70 px-2 text-center leading-relaxed">
             We do not just trade in gold and silver; we trade in transparency, fairness, and the weight of our word.
        </div>
      </div>

      {/* 2. 1991 Section */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto relative">
         {/* Connector Line */}
         <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gold-200 dark:bg-white/10 hidden md:block"></div>

         <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 relative">
             <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2 text-right md:pr-12 order-2 md:order-1"
             >
                 <div className="inline-block mb-4">
                     <span className="text-8xl font-serif font-bold text-gold-200/50 dark:text-white/5 absolute -top-10 right-10 md:right-20 -z-10 select-none">1991</span>
                     <h2 className="text-4xl md:text-5xl font-serif text-amber-950 dark:text-white mb-2">A Legacy Cast in <span className="italic text-gold-600 dark:text-gold-400">Trust</span></h2>
                 </div>
                 
                 <div className="mb-6">
                    <h3 className="text-2xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-gold-500 dark:from-gold-300 dark:to-gold-600 uppercase tracking-wide">
                        Krupanidhi Jewellers
                    </h3>
                 </div>

                 <p className="text-lg text-amber-950/80 dark:text-white/70 leading-relaxed mb-6">
                    Our story began in 1991 with a simple but powerful ambition: to create a space where customers felt as valuable as the metal they bought. In an industry often defined by transaction volume, we chose to define ourselves by relationships.
                 </p>
                 <p className="text-lg text-amber-950/80 dark:text-white/70 leading-relaxed italic border-r-4 border-gold-400 pr-4">
                    "It is our greatest honor that our very first customer from 1991 is still our esteemed customer today."
                 </p>
             </motion.div>

             <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2 order-1 md:order-2"
             >
                 <div className="relative rounded-3xl overflow-hidden shadow-warm-xl border border-gold-200 dark:border-white/10 h-[400px] md:h-[500px]">
                     <img 
                        src="Public/AboutUs/Krupanidhi.jpeg"
                        alt="Vintage Scales of Trust" 
                        className="w-full h-full object-cover sepia-[0.3]"
                     />
                     <div className="absolute bottom-6 left-6 bg-white/90 dark:bg-black/80 backdrop-blur-md px-6 py-3 rounded-xl border border-gold-200 dark:border-white/10">
                        <p className="text-xs font-bold uppercase tracking-widest text-gold-700 dark:text-gold-400">The Beginning</p>
                     </div>
                 </div>
             </motion.div>
         </div>
      </section>

      {/* 3. DharamKato Standard */}
      <section className="py-24 bg-gold-100/50 dark:bg-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')]"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <div className="w-20 h-20 mx-auto bg-gold-500 rounded-full flex items-center justify-center text-white mb-8 shadow-lg shadow-gold-500/30">
                    <Scale className="w-10 h-10" />
                </div>
                
                <h2 className="text-4xl md:text-5xl font-serif text-amber-950 dark:text-white mb-6">
                    The <span className="text-gold-600 dark:text-gold-400">#DharamKato</span> Standard
                </h2>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-900/60 dark:text-white/40 mb-10">
                    The Ancient Scale of Righteousness
                </p>

                <div className="bg-white dark:bg-neutral-900 p-8 md:p-12 rounded-[2rem] shadow-xl border border-gold-200 dark:border-white/10">
                    <p className="text-lg md:text-xl text-amber-950/80 dark:text-white/80 leading-relaxed mb-8">
                        At the heart of our operations lies the philosophy of "DharamKato." As outlined in our founding principles, this is not merely a name—it is an ancient standard of integrity.
                    </p>
                    <p className="text-lg md:text-xl text-amber-950/80 dark:text-white/80 leading-relaxed mb-8">
                        In a marketplace where hidden fees and clouded glass can obscure true value, our scales remain open. DharamKato signifies a process of absolute righteousness. When you bring your gold or silver to us, we do not judge the piece by its age or origin; we honor it by its sheer purity.
                    </p>
                    <div className="h-px w-1/2 bg-gold-200 dark:bg-white/10 mx-auto my-8"></div>
                    <p className="font-serif italic text-xl md:text-2xl text-gold-700 dark:text-gold-300">
                        "We don’t just weigh your gold; we weigh the trust you place in us."
                    </p>
                </div>
            </motion.div>
        </div>
      </section>

      {/* 4. Cycle of Gold */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-serif text-amber-950 dark:text-white mb-4">The Cycle of Gold</h2>
             <p className="text-amber-950/60 dark:text-white/50 text-lg">We are makers, sellers, and buyers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* For Seller */}
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-white/5 rounded-3xl p-8 md:p-12 border border-gold-200 dark:border-white/10 shadow-lg group hover:border-gold-400 transition-colors"
            >
                <div className="w-14 h-14 rounded-2xl bg-gold-100 dark:bg-white/10 flex items-center justify-center text-amber-900 dark:text-white mb-8 group-hover:scale-110 transition-transform">
                    <RefreshCw className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-serif text-amber-950 dark:text-white mb-4">For the Seller</h3>
                <p className="text-amber-950/80 dark:text-white/70 leading-relaxed mb-6">
                    We provide instant cash for gold and silver ornaments, accepting pieces from any jeweller and of any size. We know that parting with jewellery can be emotional.
                </p>
                <blockquote className="border-l-4 border-gold-400 pl-4 italic text-amber-950/70 dark:text-white/60">
                    "Whether it’s an heirloom or a broken chain, we treat every piece with the dignity of its history and pay you the price it truly deserves."
                </blockquote>
            </motion.div>

            {/* For Buyer */}
            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-neutral-900 dark:bg-neutral-800 rounded-3xl p-8 md:p-12 border border-neutral-800 dark:border-white/10 shadow-lg text-white group"
            >
                <div className="w-14 h-14 rounded-2xl bg-gold-500/20 flex items-center justify-center text-gold-400 mb-8 group-hover:scale-110 transition-transform">
                    <Star className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-serif text-white mb-4">For the Buyer & Creator</h3>
                <p className="text-white/70 leading-relaxed mb-6">
                    For those looking to invest in the future or celebrate the present, we offer the finest Hallmarked gold and silver. 
                </p>
                <p className="text-white/70 leading-relaxed">
                    Whether you need an investment piece cashed or wish to curate a custom design that expresses your unique personality and Indian heritage, our artisans are ready to bring your vision to life.
                </p>
            </motion.div>
        </div>
      </section>

      {/* 5. 2025 Section */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto relative mb-24">
         {/* Connector Line */}
         <div className="absolute right-6 md:right-1/2 top-0 bottom-0 w-px bg-gold-200 dark:bg-white/10 hidden md:block"></div>

         <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 relative">
             <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2"
             >
                 <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gold-200 dark:border-white/10 h-[400px] md:h-[500px]">
                     <img 
                        src="Public/AboutUs/ShreeKrupanidhi.jpg" 
                        alt="Luxury Modern Showroom" 
                        className="w-full h-full object-cover"
                     />
                     <div className="absolute top-6 right-6 bg-gold-500 text-white px-6 py-3 rounded-xl shadow-lg">
                        <p className="text-xs font-bold uppercase tracking-widest flex items-center gap-2"><Crown className="w-4 h-4"/> New Showroom</p>
                     </div>
                 </div>
             </motion.div>

             <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2 text-left md:pl-12"
             >
                 <div className="inline-block mb-4 relative w-full">
                     <span className="text-8xl font-serif font-bold text-gold-200/50 dark:text-white/5 absolute -top-10 left-0 -z-10 select-none">2025</span>
                     <h2 className="text-4xl md:text-5xl font-serif text-amber-950 dark:text-white mb-2">A New <span className="italic text-gold-600 dark:text-gold-400">Horizon</span></h2>
                 </div>

                 <div className="mb-6">
                    <h3 className="text-2xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-l from-gold-600 to-amber-800 dark:from-gold-300 dark:to-white uppercase tracking-wide">
                        Shree Krupanidhi Jewellers
                    </h3>
                 </div>
                 
                 <p className="text-lg text-amber-950/80 dark:text-white/70 leading-relaxed mb-6">
                    As the years have passed, our family of customers has grown, and so has our vision. In 2025, we marked a monumental milestone in our legacy with the launch of our New Showroom.
                 </p>
                 <p className="text-lg text-amber-950/80 dark:text-white/70 leading-relaxed mb-8">
                    This expansion is more than just a new address; it is a testament to three decades of unwavering trust. While the showroom offers a modern, luxurious experience for exploring our rich Indian heritage designs, the values inside remain unchanged.
                 </p>
                 
                 <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-amber-950 dark:bg-white text-white dark:text-amber-950 font-medium text-sm">
                    <Landmark className="w-4 h-4" />
                    <span>Carrying the spirit of 1991 into 2025</span>
                 </div>
             </motion.div>
         </div>
      </section>

      {/* Footer Callout */}
      <section className="py-20 px-6 bg-gold-600 dark:bg-neutral-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-5xl mb-8">Experience the #DharamKato Difference</h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 font-light">
                Come specifically for the purity of our transaction, and stay for the warmth of our service.
            </p>
            <Button 
                variant="outline" 
                onClick={handleVisitShowroom}
                className="border-white text-white hover:bg-white hover:text-gold-600 px-10 py-4"
            >
                Visit Us Today <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
        </div>
      </section>

    </section>
  );
};
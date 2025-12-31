import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';

export const ReachOutCTA = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if store is open: 10 AM to 9 PM, Mon (1) - Sat (6). Closed Sunday (0).
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();
      
      const isWorkDay = day !== 0; // Not Sunday
      const isWorkHours = hour >= 10 && hour < 21; // 10:00 to 20:59
      
      setIsOpen(isWorkDay && isWorkHours);
    };

    checkStatus();
    const timer = setInterval(checkStatus, 60000); // Check every minute
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-32 overflow-hidden transition-colors duration-500 bg-gold-100 dark:bg-neutral-950" id="contact">
      {/* Background - Elegant Texture */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=2000')] opacity-5 dark:opacity-30 mix-blend-overlay bg-cover bg-center bg-fixed"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gold-100 via-gold-100/90 to-gold-200/50 dark:from-neutral-950 dark:via-neutral-950/90 dark:to-neutral-900/80"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl text-amber-950 dark:text-white leading-tight mb-4">
              Visit Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 to-amber-700 dark:from-gold-300 dark:to-gold-500">Showrooms</span>
            </h2>
            <p className="text-lg text-amber-950/80 dark:text-white/60 max-w-2xl mx-auto">
                Experience the luxury firsthand. Visit our boutiques for a personalized consultation with our jewellery experts.
            </p>
        </div>

        {/* Constrain width to 5xl so cards don't look stretched on very wide screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Location 1 - Krupanidhi Jewellers */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/60 dark:bg-white/5 border border-gold-200 dark:border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300"
            >
                <div className="flex items-start justify-between mb-6">
                    <div>
                        <h3 className="text-2xl font-serif text-amber-950 dark:text-white mb-2">Krupanidhi Jewellers</h3>
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border transition-colors duration-300 ${
                            isOpen 
                            ? 'bg-green-100/50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800' 
                            : 'bg-red-100/50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800'
                        }`}>
                            <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></span> 
                            {isOpen ? 'Open Now' : 'Closed'}
                        </div>
                    </div>
                    <div className="p-3 rounded-full bg-gold-100 dark:bg-white/10 text-amber-900 dark:text-white">
                        <MapPin className="w-6 h-6" />
                    </div>
                </div>
                
                <div className="space-y-4 mb-8">
                    <p className="flex items-start gap-3 text-amber-950/90 dark:text-white/70">
                        <MapPin className="w-5 h-5 mt-1 shrink-0 text-gold-600 dark:text-gold-400" />
                        <span>21 Raj Plaza, Palace Road,<br/>Rajkot, Gujarat 360001</span>
                    </p>
                    <p className="flex items-center gap-3 text-amber-950/90 dark:text-white/70">
                        <Phone className="w-5 h-5 shrink-0 text-gold-600 dark:text-gold-400" />
                        <span>+91 92278 80038</span>
                    </p>
                    <p className="flex items-start gap-3 text-amber-950/90 dark:text-white/70">
                        <Clock className="w-5 h-5 mt-1 shrink-0 text-gold-600 dark:text-gold-400" />
                        <span>Mon - Sat: 10:00 AM - 9:00 PM<br/>Sun: Closed</span>
                    </p>
                </div>
                
                <Button 
                    variant="secondary" 
                    className="w-full"
                    onClick={() => window.open('https://maps.app.goo.gl/1VzS55RUieNbfAYRA', '_blank')}
                >
                    Get Directions
                </Button>
            </motion.div>

            {/* Location 2 - Shree Krupanidhi Jewellers */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/60 dark:bg-white/5 border border-gold-200 dark:border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300"
            >
                <div className="flex items-start justify-between mb-6">
                    <div>
                        <h3 className="text-2xl font-serif text-amber-950 dark:text-white mb-2">Shree Krupanidhi Jewellers</h3>
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border transition-colors duration-300 ${
                            isOpen 
                            ? 'bg-green-100/50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800' 
                            : 'bg-red-100/50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800'
                        }`}>
                            <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></span> 
                            {isOpen ? 'Open Now' : 'Closed'}
                        </div>
                    </div>
                    <div className="p-3 rounded-full bg-gold-100 dark:bg-white/10 text-amber-900 dark:text-white">
                        <MapPin className="w-6 h-6" />
                    </div>
                </div>
                
                <div className="space-y-4 mb-8">
                    <p className="flex items-start gap-3 text-amber-950/90 dark:text-white/70">
                        <MapPin className="w-5 h-5 mt-1 shrink-0 text-gold-600 dark:text-gold-400" />
                        <span>Near India Circle, University Road<br/>Rajkot, Gujarat 360007</span>
                    </p>
                    <p className="flex items-center gap-3 text-amber-950/90 dark:text-white/70">
                        <Phone className="w-5 h-5 shrink-0 text-gold-600 dark:text-gold-400" />
                        <span>+91 92279 80038</span>
                    </p>
                    <p className="flex items-start gap-3 text-amber-950/90 dark:text-white/70">
                        <Clock className="w-5 h-5 mt-1 shrink-0 text-gold-600 dark:text-gold-400" />
                        <span>Mon - Sat: 10:00 AM - 9:00 PM<br/>Sun: Closed</span>
                    </p>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-amber-900/20 text-amber-900 dark:text-white hover:bg-amber-900 hover:text-white !dark:hover:bg-white !dark:hover:text-neutral-900 !dark:hover:border-white"
                  onClick={() => window.open('https://maps.app.goo.gl/uvvGvSVRP5QQ1XRBA', '_blank')}
                >
                  Get Directions
                </Button>
            </motion.div>

        </div>
      </div>
    </section>
  );
};
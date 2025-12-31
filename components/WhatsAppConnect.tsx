import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Camera, Clock } from 'lucide-react';

export const WhatsAppConnect = () => {
  const handleConnect = () => {
    // Redirect to WhatsApp API
    // Using a placeholder number. In production, replace with actual business number.
    window.open('https://wa.me/message/YRUIKJIBOWMRH1', '_blank');
  };

  return (
    <section className="py-24 relative overflow-hidden transition-colors duration-500 bg-gold-50 dark:bg-neutral-950">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-900/5 dark:bg-green-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 overflow-hidden"
          >
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-amber-950 dark:text-white mb-6 leading-tight">
                Your Personal <br />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-700 dark:from-green-400 dark:to-teal-500">
                  Digital Concierge
                </span>
              </h2>
              <p className="text-lg text-amber-950/80 dark:text-white/60 leading-relaxed w-full ">
                Customize with our assistance and curate your thoughts to reality. Connect with us on WhatsApp for instant assistance.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gold-100 dark:bg-white/5 text-amber-900 dark:text-white">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-amber-950 dark:text-white mb-1">Secure & Private</h4>
                  <p className="text-sm text-amber-950/80 dark:text-white/50">End-to-end encrypted conversations with our senior experts.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gold-100 dark:bg-white/5 text-amber-900 dark:text-white">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-amber-950 dark:text-white mb-1">Instant Pricing</h4>
                  <p className="text-sm text-amber-950/80 dark:text-white/50">Get immediate quotes and availability checks on any item.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Action Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
                {/* Glow behind card */}
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-teal-600 rounded-3xl blur opacity-20 dark:opacity-40"></div>
                
                <div className="relative bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border border-white/20 dark:border-white/10 p-8 rounded-3xl shadow-2xl">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                            {/* Custom WhatsApp SVG for crisp styling */}
                            <svg viewBox="0 0 24 24" className="w-8 h-8 text-green-600 dark:text-green-400 fill-current">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-xs text-green-600 dark:text-green-400 font-bold uppercase tracking-wider mb-1">Online Now</p>
                            <h3 className="font-serif text-2xl text-amber-950 dark:text-white">Krupanidhi Jewellers</h3>
                        </div>
                    </div>

                    <div className="bg-gold-50/50 dark:bg-black/20 rounded-2xl p-4 mb-6">
                        <p className="text-sm text-amber-950/80 dark:text-white/70 italic">
                            "Hello! I can help you with product details, customization options, or scheduling a visit. How may I assist you today?"
                        </p>
                    </div>

                    <button
                        onClick={handleConnect}
                        className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-green-600 to-teal-700 hover:from-green-500 hover:to-teal-600 text-white font-medium text-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-green-900/20 transform hover:-translate-y-1"
                    >
                        <span>Start Conversation</span>
                        <ArrowRight className="w-5 h-5" />
                    </button>
                    
                    <p className="text-center text-xs text-amber-950/40 dark:text-white/30 mt-4">
                        Typically replies within 5 minutes during business hours.
                    </p>
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
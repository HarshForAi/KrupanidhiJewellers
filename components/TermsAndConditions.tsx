import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/Button';
import { CompanyDetails } from '../enums';

interface TermsAndConditionsProps {
  onBack: () => void;
}

export const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <section className="pt-32 pb-24 bg-gold-50 dark:bg-neutral-950 min-h-screen transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
            <Button 
            variant="outline" 
            onClick={onBack}
            className="border-amber-900/20 text-amber-900 hover:bg-amber-900 hover:text-white dark:border-white/20 dark:text-white group"
            >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
            </Button>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-white/5 border border-gold-200 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-warm-lg dark:shadow-none"
        >
          <h1 className="font-serif text-3xl md:text-5xl text-amber-950 dark:text-white mb-4 leading-tight">Terms and Conditions of Use</h1>
          <p className="font-sans font-medium text-amber-950/60 dark:text-white/40 mb-12 text-sm uppercase tracking-wider">Last Updated: {currentDate}</p>

          <div className="space-y-12 text-amber-950/80 dark:text-white/70 leading-relaxed text-sm md:text-lg font-sans font-medium">
            
            <section>
              <h2 className="font-serif text-xl md:text-2xl text-amber-950 dark:text-white mb-4">1. Introduction</h2>
              <p>Welcome to the website of Krupanidhi Jewellers ("we," "us," or "our"). By accessing or using this website (the "Site"), you agree to comply with and be bound by these Terms and Conditions ("Terms"). If you do not agree with these Terms, please do not use this Site.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl md:text-2xl text-amber-950 dark:text-white mb-4">2. Nature of the Website</h2>
              <p className="mb-4">This Site is strictly for informational and display purposes only.</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-gold-500">
                <li><strong>No E-Commerce:</strong> This Site does not facilitate direct online purchases, payment processing, or cart functionality.</li>
                <li><strong>Showcase:</strong> The content provided is to showcase our jewelry collection, brand heritage, and showroom locations.</li>
                <li><strong>Invitation to Offer:</strong> The display of items on this site constitutes an "invitation to offer" and not a binding offer to sell.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl md:text-2xl text-amber-950 dark:text-white mb-4">3. Product Representation and Disclaimers</h2>
              <p className="mb-4">As a jewelry retailer, we strive for accuracy, but the following disclaimers apply to all images and descriptions on the Site:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-gold-500">
                <li><strong>Visual Appearance:</strong> Jewelry involves intricate details. Due to lighting, screen resolution, and photography techniques, the colors, shades, and texture of the jewelry shown on your screen may vary slightly from the actual physical product.</li>
                <li><strong>Handcrafted Nature:</strong> Many of our products are handcrafted. Slight variations in weight, design, or finish are intrinsic to the nature of jewelry making and are not defects.</li>
                <li><strong>Availability:</strong> Display of a product on the Site does not guarantee its availability in our showroom. Stock is subject to prior sale.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl md:text-2xl text-amber-950 dark:text-white mb-4">4. Pricing and Gold Rates</h2>
              <ul className="list-disc pl-5 space-y-2 marker:text-gold-500">
                <li><strong>Market Fluctuations:</strong> Prices of Gold, Silver, Platinum, and gemstones are subject to market fluctuations.</li>
                <li><strong>Indicative Pricing:</strong> Any prices mentioned on the Site (if any) are indicative only. The final billing price will be calculated based on the Gold/Silver rate, making charges, and taxes (GST) applicable at the time of the final sale in the showroom or via confirmed invoice.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl md:text-2xl text-amber-950 dark:text-white mb-4">5. WhatsApp Redirection and Communication</h2>
              <p className="mb-4">Our Site features a redirection link to WhatsApp to facilitate customer support and inquiries.</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-gold-500">
                <li><strong>Third-Party Platform:</strong> By clicking the WhatsApp button, you acknowledge that you are leaving our Site and entering a third-party platform governed by its own Terms and Privacy Policy. We are not responsible for the technical functionality or data handling of WhatsApp.</li>
                <li><strong>Inquiries vs. Contracts:</strong> Discussions, chats, or price quotes provided via WhatsApp are for negotiation and inquiry purposes only. A binding contract of sale is formed only when a formal tax invoice is generated by Krupanidhi Jewellers.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl md:text-2xl text-amber-950 dark:text-white mb-4">6. Intellectual Property Rights</h2>
              <p className="mb-4">All content on this Site is the exclusive property of Krupanidhi Jewellers.</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-gold-500">
                <li><strong>Copyright:</strong> All images, photographs of jewelry, text, graphics, logos, and designs are protected by Indian Copyright laws.</li>
                <li><strong>Prohibited Use:</strong> You may not copy, reproduce, republish, upload, post, transmit, or distribute any material from this Site without our prior written permission. Using our jewelry designs to create replicas is a violation of our Intellectual Property rights.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl md:text-2xl text-amber-950 dark:text-white mb-4">7. Limitation of Liability</h2>
              <p className="mb-4">To the fullest extent permitted by law:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-gold-500">
                <li>The Site is provided on an "as is" and "as available" basis.</li>
                <li>Krupanidhi Jewellers shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the Site.</li>
                <li>We do not warrant that the Site is free of viruses or other harmful components, though we take standard precautions.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl md:text-2xl text-amber-950 dark:text-white mb-4">8. External Links</h2>
              <p>Other than WhatsApp, this Site may contain links to maps (e.g., Google Maps) for showroom locations. We are not responsible for the content or accuracy of these external sites.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl md:text-2xl text-amber-950 dark:text-white mb-4">9. Governing Law and Jurisdiction</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in Rajkot, Gujarat.</p>
            </section>

            <section className="bg-gold-50 dark:bg-white/5 p-8 rounded-2xl border border-gold-200 dark:border-white/10">
              <h2 className="font-serif text-xl md:text-2xl text-amber-950 dark:text-white mb-6">10. Contact Information</h2>
              <p className="mb-6 font-sans font-medium">If you have any questions regarding these Terms, please contact us at:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif font-bold text-gold-600 dark:text-gold-400 uppercase tracking-wider text-xs mb-2">Krupanidhi Jewellers</h3>
                  <p className="font-sans font-medium text-amber-950 dark:text-white">21 Raj Plaza, Palace Road,</p>
                  <p className="font-sans font-medium text-amber-950 dark:text-white">Rajkot, Gujarat 360001</p>
                </div>
                
                <div className="space-y-4">
                    <div>
                        <h3 className="font-serif font-bold text-gold-600 dark:text-gold-400 uppercase tracking-wider text-xs mb-2">Phone</h3>
                        <p className="font-sans font-medium text-amber-950 dark:text-white">{CompanyDetails.Phone}</p>
                    </div>

                    <div>
                        <h3 className="font-serif font-bold text-gold-600 dark:text-gold-400 uppercase tracking-wider text-xs mb-2">Email</h3>
                        <p className="font-sans font-medium text-amber-950 dark:text-white break-all">{CompanyDetails.Email}</p>
                    </div>
                </div>
              </div>
            </section>

          </div>
          
          <div className="mt-12 pt-8 border-t border-gold-200 dark:border-white/10 flex justify-center">
            <Button variant="primary" onClick={onBack}>
                Accept & Continue
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
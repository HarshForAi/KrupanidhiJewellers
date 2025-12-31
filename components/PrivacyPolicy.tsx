import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/Button';
import { CompanyDetails } from '../enums';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
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
          <h1 className="font-serif text-3xl md:text-5xl text-amber-950 dark:text-white mb-4 leading-tight">Privacy Notice</h1>
          <p className="font-sans font-medium text-amber-950/60 dark:text-white/40 mb-12 text-sm uppercase tracking-wider">Effective Date: {currentDate}</p>

          <div className="space-y-12 text-amber-950/80 dark:text-white/70 leading-relaxed text-sm md:text-lg font-sans font-medium">
            
            <section>
              <p>At Krupanidhi Jewelers, we value your privacy. Since our website is informational and static, we do not use cookies to track your personal behavior, nor do we require you to create an account.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl md:text-2xl text-amber-950 dark:text-white mb-4">1. Information We Receive</h2>
              <p className="mb-4">We do not collect any personal data directly through this website. However, when you click the WhatsApp redirection link or call our listed numbers, we may receive:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-gold-500">
                <li>Your phone number.</li>
                <li>Your name (as displayed on your WhatsApp profile).</li>
                <li>Any details regarding jewelry inquiries you share with us.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl md:text-2xl text-amber-950 dark:text-white mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">Any information shared via WhatsApp or phone is used strictly for:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-gold-500">
                <li>Responding to your product inquiries and pricing requests.</li>
                <li>Sharing showroom locations or digital catalogues.</li>
                <li>Providing updates on your specific orders (if a transaction is initiated).</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl md:text-2xl text-amber-950 dark:text-white mb-4">3. Data Sharing and Security</h2>
              <ul className="list-disc pl-5 space-y-2 marker:text-gold-500">
                <li><strong>No Third-Party Sharing:</strong> We do not sell, rent, or trade your contact information to third-party marketing agencies.</li>
                <li><strong>Security:</strong> We take reasonable physical and digital precautions at our showrooms to ensure that your inquiry details remain confidential.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl md:text-2xl text-amber-950 dark:text-white mb-4">4. Third-Party Links</h2>
              <p>Our website contains links to WhatsApp and Google Maps. Please note that these platforms have their own privacy policies. Once you leave our website, our privacy notice no longer applies, and we encourage you to read the policies of those respective platforms.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl md:text-2xl text-amber-950 dark:text-white mb-4">5. Consent</h2>
              <p>By using our website and contacting us via the provided WhatsApp links, you consent to the collection and use of your information as described in this notice.</p>
            </section>

            <section className="bg-gold-50 dark:bg-white/5 p-8 rounded-2xl border border-gold-200 dark:border-white/10">
              <h2 className="font-serif text-xl md:text-2xl text-amber-950 dark:text-white mb-6">6. Contact Us</h2>
              <p className="mb-6 font-sans font-medium">For any privacy-related concerns, you may reach out to us at:</p>
              
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
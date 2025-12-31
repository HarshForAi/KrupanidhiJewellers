import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownCircle } from 'lucide-react';
import { Button } from './ui/Button';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="mb-4">
      <button 
        onClick={onClick}
        className={`w-full flex items-center gap-4 px-6 py-5 rounded-full text-left transition-all duration-300 ${
          isOpen 
          ? 'bg-gold-200/50 dark:bg-gold-600/30' 
          : 'bg-gold-100/50 dark:bg-white/5 hover:bg-gold-200 dark:hover:bg-white/10'
        }`}
      >
        <ArrowDownCircle className={`w-6 h-6 text-amber-900 dark:text-gold-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
        <span className="font-serif text-lg text-amber-950 dark:text-white/90">{question}</span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-16 py-6 text-amber-950/80 dark:text-white/60 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
  {
    question: "Can I purchase jewelry directly through this website?",
    answer: "No, this website serves as a digital catalogue to showcase our latest collections. To make a purchase or inquire about a specific piece, please click the 'WhatsApp' button or visit our showroom. We handle all orders personally to ensure customization and satisfaction."
  },
  {
    question: "Why are the prices not displayed on the website?",
    answer: "Gold and silver prices fluctuate daily based on market rates. Additionally, the final price depends on the weight, making charges, and applicable taxes (GST) at the time of booking. Please contact us via WhatsApp for a current price estimate."
  },
  {
    question: "Is your jewelry certified/hallmarked?",
    answer: "Yes, absolutely. At Krupanidhi Jewelers, we strictly adhere to quality standards. Our gold jewelry is BIS Hallmarked, ensuring purity and trust."
  },
  {
    question: "How do I proceed if I like a design on the website?",
    answer: "Simply take a screenshot of the design you like and click the WhatsApp icon on our site. Share the image with our team, and we will provide you with the weight details, current pricing, and availability."
  },
  {
    question: "Do you offer customization for jewelry?",
    answer: "Yes, we specialize in bespoke jewelry. If you have a specific design in mind or want to modify an existing piece from our catalogue, please discuss your requirements with us on WhatsApp or in-store."
  },
  {
    question: "Do you ship jewelry to other cities?",
    answer: "No, we do not prefer to sell the Online jewellery, so you can visit our store."
  },
  {
    question: "What payment methods do you accept?",
    answer: "For in-store visits, we accept Cash Or UPI."
  },
  {
    question: "What is your exchange or buyback policy?",
    answer: "We offer a transparent buyback and exchange policy based on the current market value of gold/silver, deducting making charges and taxes as per industry standards. Please ask for our detailed exchange policy at the time of purchase."
  }
];

  return (
    <section className="py-24 bg-gold-50/30 dark:bg-neutral-900">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-6 lg:sticky lg:top-32">
            <h2 className="font-serif text-5xl md:text-7xl text-amber-950 dark:text-white">
                Frequently Asked <br />
                <span className="italic text-gold-600">Questions</span>
            </h2>
            {/* Removed max-w-md constraint so text flows full width on mobile/tablet if needed */}
            <p className="text-amber-950/80 dark:text-white/60 text-lg w-full">
                Find answers to common questions about our craftsmanship, shipping, and services. Can't find what you're looking for?
            </p>
        </div>

        <div className="w-full">
            {faqs.map((faq, index) => (
                <FAQItem 
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
            ))}
        </div>
      </div>
    </section>
  );
};
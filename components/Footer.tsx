import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from 'lucide-react';
import {CompanyDetails} from '../enums';

interface FooterProps {
  onTermsClick?: (e: React.MouseEvent) => void;
  onPrivacyClick?: (e: React.MouseEvent) => void;
}

export const Footer: React.FC<FooterProps> = ({ onTermsClick, onPrivacyClick }) => {
  return (
    <footer className="bg-gold-100 dark:bg-neutral-950 pt-10">
      {/* Rounded Top Container - Uses Dark Brown in Light Mode for contrast */}
      <div className="bg-[#1a1510] dark:bg-neutral-900 rounded-tl-3xl rounded-tr-3xl px-6 py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-white/70">
          
          <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-serif text-white tracking-tight font-bold">
                Krupanidhi<span className="text-gold-400">.</span>
                </h2>
                <p className="text-gold-400 font-serif italic text-lg mt-1">#DharamKato</p>
            </div>
            
            <p className="text-sm leading-relaxed max-w-xs">
              Crafting timeless elegance since 1991. Every piece tells a story of love, legacy, and unparalleled artistry.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold-400 hover:text-black hover:border-transparent transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold-400 hover:text-black hover:border-transparent transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold-400 hover:text-black hover:border-transparent transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://wa.me/message/YRUIKJIBOWMRH1" target="_blank" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold-400 hover:text-black hover:border-transparent transition-all duration-300" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Collections</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-gold-400 transition-colors">Engagement Rings</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Wedding Bands</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">High Jewellery</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Gemstones</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Men's Collection</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-gold-400 transition-colors">Bespoke Design</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Jewellery Care</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Valuations</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Book an Appointment</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 shrink-0" />
                <span>21 Raj Plaza, Palace Road,<br />Rajkot, Gujarat 360001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-400 shrink-0" />
                <span>{CompanyDetails.Phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-400 shrink-0" />
                <span>{CompanyDetails.Email}</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-white/30">
          <p>© {new Date().getFullYear()} Krupanidhi Jewellers. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                if (onPrivacyClick) onPrivacyClick(e);
              }}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                if (onTermsClick) onTermsClick(e);
              }}
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
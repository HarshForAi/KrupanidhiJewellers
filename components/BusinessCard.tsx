import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { Download, Share2, Scale, Loader2, X, Link as LinkIcon, Smartphone, Check, Copy } from 'lucide-react';
import { Button } from './ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

export const BusinessCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const shareUrl = typeof window !== 'undefined' ? window.location.origin : 'https://krupanidhi-jewellers.vercel.app';
  const shareText = "Visit Krupanidhi Jewellers for exquisite gold and silver craftsmanship. #DharamKato";

  const socialLinks = [
    { 
      name: 'WhatsApp', 
      icon: WhatsAppIcon, 
      color: 'bg-[#25D366] hover:bg-[#20bd5a]', 
      textColor: 'text-white',
      href: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}` 
    },
    { 
      name: 'Facebook', 
      icon: FacebookIcon, 
      color: 'bg-[#1877F2] hover:bg-[#166fe5]', 
      textColor: 'text-white',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}` 
    },
    { 
      name: 'X', 
      icon: XIcon, 
      color: 'bg-black hover:bg-neutral-800', 
      textColor: 'text-white',
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}` 
    },
  ];

  const handleDownload = async () => {
    if (!cardRef.current) return;
    setIsGenerating(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 100));

      const canvas = await html2canvas(cardRef.current, {
        scale: 3,
        useCORS: true,
        backgroundColor: '#0a0a0a',
        logging: false,
      });

      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'Krupanidhi_Jewellers_Card.png';
      link.click();
    } catch (error) {
      console.error('Failed to generate image', error);
      alert('Could not generate image. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleNativeImageShare = async () => {
    if (!cardRef.current) return;
    setIsGenerating(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const canvas = await html2canvas(cardRef.current, {
        scale: 3,
        useCORS: true,
        backgroundColor: '#0a0a0a',
      });

      canvas.toBlob(async (blob) => {
        if (!blob) return;

        const file = new File([blob], 'Krupanidhi_Card.png', { type: 'image/png' });

        if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
          try {
            await navigator.share({
              files: [file],
              title: 'Krupanidhi Jewellers',
              text: shareText,
            });
            setShowShareModal(false);
          } catch (err) {
            console.error('Share failed', err);
          }
        } else {
          // Fallback if sharing is not supported
          alert('Native sharing is not supported on this browser. Downloading image instead.');
          const image = canvas.toDataURL('image/png');
          const link = document.createElement('a');
          link.href = image;
          link.download = 'Krupanidhi_Jewellers_Card.png';
          link.click();
        }
      }, 'image/png');
    } catch (error) {
      console.error('Failed to share', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  return (
    <section className="py-24 bg-gold-50 dark:bg-neutral-950 transition-colors duration-500 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-amber-950 dark:text-white mb-4">
            Share Our <span className="italic text-gold-600 dark:text-gold-400">Legacy</span>
          </h2>
          <p className="text-lg text-amber-950/80 dark:text-white/60">
            Scan to visit or share with your friends and family.
          </p>
        </div>

        <div className="flex flex-col items-center gap-10">
          
          {/* Focused QR Card */}
          <div className="relative group perspective-1000">
            <div 
              ref={cardRef}
              className="relative w-[320px] bg-[#0a0a0a] rounded-3xl shadow-2xl overflow-hidden flex flex-col items-center p-8 border border-[#C0A865]/30 text-center"
              style={{ fontFamily: 'serif' }}
            >
              {/* Background Glow */}
              <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(192,168,101,0.1),transparent_70%)] pointer-events-none"></div>
              
              {/* Gold Border Line Top */}
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#C0A865] to-transparent mb-8"></div>

              {/* Logo & Name */}
              <div className="flex flex-col items-center gap-4 mb-8 relative z-10">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-black font-bold text-3xl shadow-lg shadow-gold-500/20">
                  <img 
                  src="/Logo/Krupanidhi.svg" 
                  alt="Krupanidhi"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/100/000000/FFFFFF?text=KJ';
                  }}
                />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white tracking-wide leading-tight font-serif">Krupanidhi Jewellers</h3>
                    <p className="text-[#C0A865] text-[10px] uppercase tracking-[0.3em] font-sans mt-2 font-medium">Est. 1991</p>
                </div>
              </div>

              {/* QR Code */}
              <div className="relative z-10 p-3 bg-white rounded-2xl shadow-l mb-8">
                 <div className="absolute inset-0 rounded-2xl pointer-events-none transform translate-x-1 translate-y-1"></div>
                 <img 
                    src="Logo/Site_QR_Code.svg"
                    alt="Scan to Visit" 
                    className="w-48 h-48 object-contain"
                    onError={(e) => {
                        e.currentTarget.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(shareUrl)}&bgcolor=ffffff&color=000000&margin=0`;
                    }}
                 />
              </div>

              {/* Tagline */}
              <div className="relative z-10">
                  <div className="flex items-center justify-center gap-2 text-[#C0A865] mb-2">
                    <Scale className="w-4 h-4" />
                    <span className="text-sm font-bold uppercase tracking-wider">#DharamKato</span>
                  </div>
                  <p className="text-[#C0A865]/40 text-[9px] uppercase tracking-widest font-sans">krupanidhi-jewellers.vercel.app</p>
              </div>

              {/* Bottom Decoration */}
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0a0a0a] via-[#C0A865]/50 to-[#0a0a0a]"></div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
                onClick={() => setShowShareModal(true)} 
                variant="secondary"
                className="w-40 shadow-lg hover:shadow-gold-500/20"
            >
                <Share2 className="w-4 h-4 mr-2" />
                Share
            </Button>
            
            <Button 
                onClick={handleDownload} 
                disabled={isGenerating}
                variant="outline"
                className="w-40 border-gold-600 text-gold-600 hover:bg-gold-600 hover:text-white dark:border-gold-400 dark:text-gold-400 dark:hover:bg-gold-400 dark:hover:text-black"
            >
                {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4 mr-2" />}
                Download
            </Button>
          </div>
        </div>
      </div>

      {/* Share Modal */}
      <AnimatePresence>
        {showShareModal && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowShareModal(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
               <motion.div 
                 initial={{ scale: 0.9, opacity: 0, y: 20 }}
                 animate={{ scale: 1, opacity: 1, y: 0 }}
                 exit={{ scale: 0.9, opacity: 0, y: 20 }}
                 onClick={(e) => e.stopPropagation()}
                 className="bg-white dark:bg-neutral-900 rounded-3xl p-6 md:p-8 w-full max-w-sm shadow-2xl border border-gold-200 dark:border-white/10 relative"
               >
                  <button 
                    onClick={() => setShowShareModal(false)}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors text-neutral-500 dark:text-white/50"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="text-center mb-8">
                    <h3 className="font-serif text-2xl text-amber-950 dark:text-white mb-2">Share Card</h3>
                    <p className="text-sm text-neutral-500 dark:text-white/50">Spread the word about Krupanidhi Jewellers</p>
                  </div>

                  {/* Social Grid */}
                  <div className="grid grid-cols-4 gap-4 mb-8">
                     {socialLinks.map((link) => (
                       <a 
                         key={link.name}
                         href={link.href}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="flex flex-col items-center gap-2 group"
                       >
                         <div className={`w-12 h-12 rounded-full ${link.color} ${link.textColor} flex items-center justify-center shadow-md transform transition-transform group-hover:scale-110`}>
                           <link.icon />
                         </div>
                         <span className="text-[10px] font-bold text-neutral-600 dark:text-white/60">{link.name}</span>
                       </a>
                     ))}
                     
                     <button 
                        onClick={copyToClipboard}
                        className="flex flex-col items-center gap-2 group"
                     >
                         <div className="w-12 h-12 rounded-full bg-neutral-200 dark:bg-white/10 text-neutral-700 dark:text-white flex items-center justify-center shadow-md transform transition-transform group-hover:scale-110 relative">
                           {copySuccess ? <Check className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5" />}
                         </div>
                         <span className="text-[10px] font-bold text-neutral-600 dark:text-white/60">{copySuccess ? 'Copied!' : 'Copy Link'}</span>
                     </button>
                  </div>

                  {/* Native Image Share */}
                  <div className="border-t border-neutral-200 dark:border-white/10 pt-6">
                    <button
                      onClick={handleNativeImageShare}
                      disabled={isGenerating}
                      className="w-full flex items-center justify-center gap-3 p-4 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-black font-bold transition-all hover:opacity-90 active:scale-95"
                    >
                      {isGenerating ? <Loader2 className="w-5 h-5 animate-spin" /> : <Smartphone className="w-5 h-5" />}
                      <span>Share Image to Apps</span>
                    </button>
                    <p className="text-center text-[10px] text-neutral-400 dark:text-white/30 mt-3">
                      Best for Instagram Stories, WhatsApp Status & more.
                    </p>
                  </div>

               </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};
import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, description }) => {
  return (
    // Clean card without commerce elements
    <div className="min-w-[280px] md:min-w-[320px] bg-gold-100 dark:bg-neutral-900 rounded-3xl p-5 md:p-6 relative group border border-transparent hover:border-gold-300 dark:border-white/10 dark:hover:border-gold-400/50 transition-all duration-300 dark:shadow-none hover:shadow-md h-full flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div>
            <p className="text-xs text-amber-950/70 dark:text-neutral-500 uppercase tracking-wider mb-1">Collection</p>
            <h3 className="text-2xl font-serif text-amber-950 dark:text-white font-bold tracking-tight">{name}</h3>
        </div>
      </div>

      <div className="relative aspect-square mb-6 overflow-hidden rounded-2xl bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/5 shrink-0">
        <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-contain p-4 mix-blend-multiply dark:mix-blend-normal transition-transform duration-500 group-hover:scale-110" 
        />
      </div>

      <div className="flex-1 flex items-end">
         <p className="text-sm text-amber-950/70 dark:text-white/60 leading-relaxed font-light">
             {description}
         </p>
      </div>
    </div>
  );
};

export const CategoryCarousel = () => {
  const scrollContainerRef1 = useRef<HTMLDivElement>(null);
  const scrollContainerRef2 = useRef<HTMLDivElement>(null);

  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = 350;
      ref.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const ringProducts = [
    { name: "Premium Golden", description: "Exquisite 22kt gold craftsmanship for the discerning collector.", image: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?auto=format&fit=crop&q=80&w=500" },
    { name: "Diamond Ring", description: "Brilliant cut diamonds set in a modern platinum band.", image: "https://plus.unsplash.com/premium_photo-1678730056405-0cf5eaaad097?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUyfHx8ZW58MHx8fHx8" },
    { name: "Couple Rings", description: "Matching bands symbolizing unity and eternal bond.", image: "https://images.unsplash.com/photo-1586104195538-050b9f74f50e?auto=format&fit=crop&q=80&w=500" },
    { name: "Golden Band", description: "Simple yet sophisticated pure gold band for everyday wear.", image: "https://images.unsplash.com/photo-1618212135676-46b0a68d8393?auto=format&fit=crop&q=80&w=500" },
  ];

  return (
    <section className="py-24 bg-gold-50 dark:bg-neutral-950 transition-colors duration-500">
      
      {/* First Section */}
      <div className="max-w-[1400px] mx-auto px-6 mb-32">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/3 space-y-6">
                <h2 className="font-serif text-5xl md:text-6xl text-amber-950 dark:text-white leading-none">
                    Diamonds & <br />
                    <span className="italic text-gold-600 dark:text-gold-400">Engagement Ring</span>
                </h2>
                <p className="text-amber-950/80 dark:text-white/60 text-lg leading-relaxed">
                    Experience the beauty of diamond jewellery and find your perfect piece for a special occasion. 
                    Find the perfect diamond for any special occasion.
                </p>
                <div className="pt-4">
                    <Button variant="primary">More Product</Button>
                </div>
            </div>

            <div className="lg:w-2/3 w-full relative">
                <div className="absolute -top-16 right-0 flex gap-4">
                    <button onClick={() => scroll(scrollContainerRef1, 'left')} className="p-3 rounded-xl bg-white border border-gold-200 dark:border-white/10 dark:bg-neutral-800 hover:bg-gold-400 dark:hover:bg-gold-400 transition-colors shadow-sm dark:shadow-none">
                        <ArrowLeft className="w-6 h-6 text-amber-950 dark:text-white" />
                    </button>
                    <button onClick={() => scroll(scrollContainerRef1, 'right')} className="p-3 rounded-xl bg-amber-950 dark:bg-white hover:bg-gold-600 dark:hover:bg-gold-400 transition-colors group shadow-lg">
                        <ArrowRight className="w-6 h-6 text-white dark:text-black" />
                    </button>
                </div>
                
                <div 
                    ref={scrollContainerRef1}
                    className="flex gap-6 overflow-x-auto pb-8 pt-4 hide-scrollbar snap-x snap-mandatory"
                >
                    {ringProducts.map((p, i) => (
                        <div key={i} className="snap-start h-full">
                            <ProductCard {...p} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>

      {/* Second Section - Abstract/Generic Background */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
            {/* Generic abstract texture that works for both themes */}
            <div className="absolute inset-0 bg-neutral-900"></div>
            <img 
                src="https://www.transparenttextures.com/patterns/black-scales.png" 
                alt="Texture" 
                className="w-full h-full object-cover opacity-30 mix-blend-overlay"
            />
            {/* Overlay gradient to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="flex justify-between items-end mb-12">
                <h2 className="font-serif text-4xl md:text-5xl text-white">Find The Perfect Diamond For</h2>
                <div className="flex gap-4">
                    <button onClick={() => scroll(scrollContainerRef2, 'left')} className="p-3 rounded-xl bg-white/10 backdrop-blur-md hover:bg-white hover:text-black transition-colors text-white border border-white/10">
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <button onClick={() => scroll(scrollContainerRef2, 'right')} className="p-3 rounded-xl bg-white text-black hover:bg-gold-400 transition-colors">
                        <ArrowRight className="w-6 h-6" />
                    </button>
                </div>
            </div>

            <div 
                ref={scrollContainerRef2}
                className="flex gap-6 overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory"
            >
                {[...ringProducts].reverse().map((p, i) => (
                    <div key={i} className="snap-start h-full">
                        <ProductCard {...p} />
                    </div>
                ))}
            </div>
        </div>
      </div>

    </section>
  );
};
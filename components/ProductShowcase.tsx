import React from 'react';
import { SpotlightCard } from './ui/SpotlightCard';
import { Button } from './ui/Button';

const products = [
  {
    id: 1,
    name: 'Temple Necklace',
    category: 'Royal Indian Heritage',
    description: 'A stunning temple necklace that embodies the essence of Indian craftsmanship.',
    image: '/CuratedMasterPieces/Temple_Necklace.png',
    featured: true
  },
  {
    id: 2,
    name: 'Maharani Necklace',
    category: 'Necklaces',
    description: 'An heirloom-quality necklace designed for royal elegance.',
    image: '/CuratedMasterPieces/Maharani_Necklace.png',
    featured: false
  },
  {
    id: 3,
    name: 'Antique Gold Bangles',
    category: 'Bangles',
    description: 'Exquisite antique gold bangles that add a touch of tradition to any ensemble.',
    image: '/CuratedMasterPieces/Antique_Gold_Bangles.png',
    featured: false
  }
];

export const ProductShowcase = () => {
  return (
    <section className="relative py-32 transition-colors duration-500 overflow-hidden" id="collections">
      
      {/* Background Image with Vignette Blending */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Texture" 
            className="w-full h-full object-cover opacity-15 dark:opacity-25"
         />
         {/* Vertical Blend: Solid edges, transparent center to reveal texture */}
         <div className="absolute inset-0 bg-gradient-to-b from-gold-50 via-gold-50/20 to-gold-50 dark:from-neutral-950 dark:via-neutral-950/20 dark:to-neutral-950"></div>
         {/* Horizontal Blend: Softens the sides */}
         <div className="absolute inset-0 bg-gradient-to-r from-gold-50/80 via-transparent to-gold-50/80 dark:from-neutral-950/80 dark:via-transparent dark:to-neutral-950/80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-amber-950 dark:text-white mb-4">Curated Masterpieces</h2>
            <p className="text-amber-950/80 dark:text-white/60 max-w-md">Hand-selected gems set in timeless designs.</p>
          </div>
          <Button variant="outline">View All Collections</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <SpotlightCard key={product.id} className="h-full group shadow-md hover:shadow-xl dark:shadow-none transition-shadow bg-white/40 dark:bg-white/5 backdrop-blur-md border-white/20 dark:border-white/10">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* 
                    Overlay: Forced to 'black thin reel' style in BOTH modes.
                    Used from-black/90 instead of from-gold-100 to maintain the dark mode look.
                */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/95 via-black/80 to-transparent">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-xs text-gold-400 uppercase tracking-wider mb-1">{product.category}</p>
                    <h3 className="text-2xl font-serif text-white mb-2">{product.name}</h3>
                    
                    {/* Description: White text for contrast against the black overlay */}
                    <p className="text-sm text-white/70 font-light leading-relaxed line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {product.description}
                    </p>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};
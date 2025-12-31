import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({ 
  children, 
  className = ""
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setOpacity(1);
  };

  const handleBlur = () => {
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ y: 0, opacity: 0.9 }}
      whileHover={{ y: -4, opacity: 1 }} // Reduced from -8 to -4
      transition={{ type: "spring", stiffness: 300, damping: 25 }} // Increased damping for less bounce
      className={`relative overflow-hidden rounded-xl border border-gold-200 dark:border-white/10 bg-white/50 dark:bg-neutral-900/40 backdrop-blur-sm ${className}`}
    >
      {/* Light Mode Spotlight (Darker) */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 dark:hidden"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0,0,0,0.03), transparent 40%)`,
        }}
      />
      
      {/* Dark Mode Spotlight (Lighter) */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 hidden dark:block"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.08), transparent 40%)`,
        }}
      />
      
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
};
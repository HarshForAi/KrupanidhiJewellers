import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  icon?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  icon = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-3 text-sm font-medium transition-all duration-300 rounded-full group overflow-hidden shadow-lg";
  
  const variants = {
    // Primary: Dark in light mode, White in dark mode for maximum contrast
    primary: "bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-gold-100",
    // Secondary: Gold accent
    secondary: "bg-gold-500 text-white dark:text-black hover:bg-gold-600 dark:hover:bg-gold-400",
    // Outline: Adaptive border
    outline: "border border-neutral-900/20 text-neutral-900 hover:bg-neutral-900 hover:text-white dark:border-white/30 dark:text-white dark:hover:bg-white/10 dark:hover:border-white",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </span>
      
      {/* Glow effect on hover */}
      <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
    </motion.button>
  );
};
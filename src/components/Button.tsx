
import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({ 
  children, 
  className = '', 
  onClick,
  variant = 'primary',
  type = 'button'
}: ButtonProps) => {
  const baseClasses = "px-6 py-1 pt-2 2xl:py-3 2xl:pt-4 rounded-full font-regular text-lg 2xl:text-xl font-objective transition-all duration-300";
  
  const variantClasses = {
    primary: "bg-[#7918f9] text-white hover:bg-boltz-dark-purple hover:shadow-lg hover:shadow-[#7918f9]/25",
    outline: "bg-transparent border border-[#7918f9] text-[#7918f9] hover:bg-[#7918f9]/10 hover:shadow-md",
  };
  
  return (
    <motion.button 
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`} 
      onClick={onClick}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      whileTap={{ 
        scale: 0.95,
        transition: { duration: 0.1 }
      }}
    >
      {children}
    </motion.button>
  );
};

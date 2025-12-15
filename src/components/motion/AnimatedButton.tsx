
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../Button';

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  type?: 'button' | 'submit' | 'reset';
}

export const AnimatedButton = ({ 
  children, 
  className = '', 
  onClick,
  variant = 'primary',
  type = 'button'
}: AnimatedButtonProps) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      whileTap={{ 
        scale: 0.95,
        transition: { duration: 0.1 }
      }}
    >
      <Button 
        className={className}
        onClick={onClick}
        variant={variant}
        type={type}
      >
        {children}
      </Button>
    </motion.div>
  );
};

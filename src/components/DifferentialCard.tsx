
import React from 'react';
import { motion } from 'framer-motion';
import { OptimizedImage } from './OptimizedImage';

interface DifferentialCardProps {
  title: string;
  backgroundImage: string;
  className?: string;
  delay?: number;
}

export const DifferentialCard = ({ 
  title, 
  backgroundImage, 
  className = "",
  delay = 0 
}: DifferentialCardProps) => {
  return (
    <motion.div 
      className={`relative rounded-lg overflow-hidden xl:h-[400px] 2xl:h-[600px] ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center left',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 hover:bg-opacity-30"></div>
      <div className="relative z-10 p-10 pt-14 h-full flex flex-col justify-start">
        <motion.h3 
          className="text-white font-regular xl:text-2xl 2xl:text-4xl xl:pr-20 2xl:pr-48 mb-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
        >
          {title}
        </motion.h3>
      </div>
    </motion.div>
  );
};

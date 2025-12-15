
import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: string;
  title: string;
  description?: string;
  variant?: 'default' | 'dark';
  iconBg?: string;
  delay?: number;
}

export const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  variant = 'default',
  iconBg = 'bg-purple-600',
  delay = 0
}: FeatureCardProps) => {
  const cardBg = variant === 'dark' ? 'bg-black' : 'bg-white';
  const titleColor = variant === 'dark' ? 'text-white' : 'text-black';

  return (
    <motion.div 
      className={`${cardBg} p-6 rounded-lg text-center transition-all duration-300 hover:shadow-xl`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        delay,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      <motion.div 
        className={`w-24 h-32 ${iconBg} rounded mx-auto mb-4 flex items-center justify-center transition-transform duration-300`}
        whileHover={{ 
          scale: 1.1,
          rotate: 5,
          transition: { duration: 0.3 }
        }}
      >
        <span className="text-white text-2xl">{icon}</span>
      </motion.div>
      <motion.h3 
        className={`font-bold text-lg mb-2 ${titleColor}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
      >
        {title}
      </motion.h3>
      {description && (
        <motion.p 
          className="text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

import React from 'react';
import { motion } from 'framer-motion';

interface ProjectTimelineItemProps {
  icon: string;
  title: string;
  description: string;
  active: boolean;
  isCompleted?: boolean;
}

const ProjectTimelineItem: React.FC<ProjectTimelineItemProps> = ({ 
  icon, 
  title, 
  description, 
  active, 
  isCompleted = true 
}) => {
  return (
    <div className="relative pb-20 mb-32 last:pb-0">
      {/* Ícone */}
      <div className="absolute left-0 top-0 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
        <motion.img
          src={icon}
          alt={title}
          className={`transition-all duration-700 ${!isCompleted ? 'opacity-20' : ''}`}
          initial={{ opacity: 0.15 }}
          animate={{ 
            opacity: active ? 1 : 0.15
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>

      {/* Círculo na linha */}
      <div className="absolute left-[60px] sm:left-[88px] top-6">
        <div className={`w-4 h-4 rounded-full transition-all duration-700 ${
          active ? 'bg-[#7918f9]' : 'bg-gray-300'
        }`} />
      </div>

      {/* Texto */}
      <div className="ml-[84px] sm:ml-[120px] mt-1">
        <motion.h3 
          className={`font-bold text-base sm:text-lg mb-2 transition-all duration-700 ${
            isCompleted ? 'text-purple-600' : 'text-gray-500'
          }`}
          initial={{ opacity: 0.15 }}
          animate={{ 
            opacity: active ? 1 : 0.15
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className={`text-sm sm:text-base font-semibold leading-relaxed transition-all duration-700 ${
            isCompleted ? 'text-gray-600' : 'text-gray-400'
          }`}
          initial={{ opacity: 0.15 }}
          animate={{ 
            opacity: active ? 1 : 0.15
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
};

export default ProjectTimelineItem; 
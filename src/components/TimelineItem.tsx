import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  year: string;
  text: string;
  active: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, text, active }) => {
  return (
    <div className="relative pb-20 last:mb-0">
      {/* Ano - sempre estático */}
      <div className="absolute left-0 top-0 w-10 sm:w-20 text-right">
        <span className="text-xl sm:text-3xl font-bold text-black">
          {year}
        </span>
      </div>

      {/* Círculo na linha */}
      <div className="absolute left-[72px] sm:left-[112px] top-2">
        <div className={`w-4 h-4 rounded-full transition-all duration-700 ${
          active ? 'bg-[#7918f9]' : 'bg-gray-300'
        }`} />
      </div>

      {/* Texto - vai sendo preenchido */}
      <div className="ml-[106px] sm:ml-[176px] mt-1">
        <motion.p 
          className="text-sm sm:text-xl font-semibold leading-relaxed text-gray-800"
          initial={{ opacity: 0.15 }}
          animate={{ 
            opacity: active ? 1 : 0.15
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {text}
        </motion.p>
      </div>
    </div>
  );
};

export default TimelineItem;

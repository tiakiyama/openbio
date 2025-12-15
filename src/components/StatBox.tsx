
import React from 'react';

interface StatBoxProps {
  value: string;
  description: string;
}

export const StatBox = ({ value, description }: StatBoxProps) => {
  return (
    <div className="mb-4 lg:mb-0 lg:text-center lg:p-6">
      <p className="text-white font-bold text-sm mb-1 lg:text-lg lg:mb-4 lg:leading-relaxed">{value}</p>
      <p className="text-gray-400 text-xs lg:text-sm">{description}</p>
    </div>
  );
};

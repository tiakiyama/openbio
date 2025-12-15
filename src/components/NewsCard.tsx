import React from 'react';
import { Button } from './Button';

interface NewsCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

export const NewsCard = ({ title, description, imageSrc }: NewsCardProps) => {
  return (
    <div className="w-full max-w-sm mb-6 lg:max-w-none lg:mb-0 p-10 min-h-[330px] sm:min-h-[630px] justify-between flex flex-col">
      <div className="w-full mb-2 lg:mb-4">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <h3 className="text-black font-medium text-sm line-clamp-2 mb-1 lg:text-base lg:mb-3 lg:line-clamp-3">
        {title}
      </h3>
      <p className="text-gray-600 text-xs line-clamp-3 mb-2 lg:text-sm lg:mb-4 lg:line-clamp-4">
        {description}
      </p>
      <a
        href="#"
        className="text-[#7918f9] text-xs underline font-medium hover:opacity-80 w-fit"
      >
        Saiba mais
      </a>
    </div>
  );
};


import React from 'react';
import { OptimizedImage } from './OptimizedImage';

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center cursor-pointer hover:opacity-80 transition-opacity ${className}`}>
      <OptimizedImage 
        src="/lovable-uploads/c33e716f-4400-452d-93e5-2dcd5348ae84.png" 
        alt="OpenBio Logo" 
        className="h-8 xl:h-7 2xl:h-10 w-auto"
        priority={true}
        lazy={false}
      />
    </div>
  );
};

export const LogoFooter = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center cursor-pointer hover:opacity-80 transition-opacity ${className}`}>
      <OptimizedImage 
        src="/lovable-uploads/c33e716f-4400-452d-93e5-2dcd5348ae84.png" 
        alt="OpenBio Logo" 
        className="h-10 w-auto"
        priority={true}
        lazy={false}
      />
    </div>
  );
};

export const LogoMobile = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center cursor-pointer hover:opacity-80 transition-opacity ${className}`}>
      <OptimizedImage 
        src="/lovable-uploads/c33e716f-4400-452d-93e5-2dcd5348ae842.png" 
        alt="OpenBio Logo" 
        className="h-12 w-auto"
        priority={true}
        lazy={false}
      />
    </div>
  );
};

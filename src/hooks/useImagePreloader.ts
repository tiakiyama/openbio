
import { useEffect } from 'react';

export const useImagePreloader = (images: string[]) => {
  useEffect(() => {
    const preloadImages = images.map(src => {
      const img = new Image();
      img.src = src;
      return img;
    });

    return () => {
      preloadImages.forEach(img => {
        img.src = '';
      });
    };
  }, [images]);
};

// Hook específico para precarregar imagens críticas do site
export const useCriticalImages = () => {
  const criticalImages = [
    '/lovable-uploads/c33e716f-4400-452d-93e5-2dcd5348ae84.png', // Logo desktop
    '/lovable-uploads/c33e716f-4400-452d-93e5-2dcd5348ae842.png', // Logo mobile
  ];

  useImagePreloader(criticalImages);
};

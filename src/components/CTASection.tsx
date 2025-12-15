
import React from 'react';
import { Button } from './Button';

interface CTASectionProps {
  title?: string;
  buttonText?: string;
}

export const CTASection = ({ 
  title = "Transformamos tecnologia em segurança",
  buttonText = "Fale conosco"
}: CTASectionProps) => {
  return (
    <section
      className="relative py-32 px-5 lg:py-40 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/lovable-uploads/98097686-c442-4f38-9425-abe923adb251.png)'
      }}
    >
      <div className="relative z-10 max-w-lg mx-auto text-center lg:max-w-4xl">
        <h2 
          className="text-white font-medium text-2xl mb-6 lg:text-4xl" 
          style={{ textShadow: '0px 2px 10px rgb(0,0,0,1)' }}
        >
          {title}
        </h2>
         <div className="relative z-10 max-w-lg mx-auto text-center lg:max-w-4xl">
          <div
            className="text-white text-lg lg:text-2xl mb-6"
            style={{ textShadow: '0px 1px 8px rgba(0,0,0,0.8)' }}
          >
            Entre em contato com nossa equipe pelo telefone:<br />
            <a href="tel:+554130280222" className="text-[#7918f9] font-bold text-3xl mt-2 inline-block">
              (41) 3028-0222
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import TimelineItem from './TimelineItem';

const items = [
  { 
    year: '2005', 
    text: 'Akiyama é fundada como distribuidora de scanners de identificação, iniciando sua jornada no setor de tecnologia biométrica.' 
  },
  { 
    year: '2008', 
    text: 'Integrador de sistemas de ID para o Governo Brasileiro, expandindo sua atuação para o setor público.' 
  },
  { 
    year: '2009', 
    text: 'As soluções de cadastramento biométrico começaram a ser utilizadas pelo Tribunal Superior Eleitoral do Brasil.' 
  },
  { 
    year: '2010', 
    text: 'Expansão da unidade fabril para Pato Branco, fortalecendo a produção nacional de hardware biométrico.' 
  },
  { 
    year: '2015', 
    text: 'A empresa se consolida como fornecedora de tecnologia para grandes projetos nacionais, incluindo parcerias com órgãos governamentais.' 
  },
  { 
    year: '2020', 
    text: 'Reconhecimento internacional e crescimento no mercado de biometria, ampliando a presença da marca no Brasil.' 
  },
  { 
    year: '2022', 
    text: 'Soluções antes oferecidas como Akiyama, passam a ser da nova marca OpenBio. É constituído o Grupo Akiyama, reforçando seu compromisso com inovação, tecnologia e identidade digital.' 
  },
];

const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            if (!isNaN(index)) {
              setActiveIndex((prev) => Math.max(prev, index));
            }
          }
        });
      },
      { 
        threshold: 0.4,
        rootMargin: '0px 0px -40% 0px'
      }
    );

    const elements = containerRef.current?.querySelectorAll('[data-index]');
    elements?.forEach((el) => observer.observe(el));
    return () => elements?.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section className="bg-white py-16 px-5 lg:py-24">
      <div className="w-10/12 mx-auto">
        <motion.h2 
          className="text-black font-bold text-2xl mb-16 lg:text-4xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Linha do tempo
        </motion.h2>

        <div className="relative max-w-4xl mx-auto" ref={containerRef}>
          {/* Linha vertical principal - inspirada na VinoCoin */}
          <div className="absolute left-[79px] sm:left-[120px] top-0 bottom-0 w-0.5 bg-gray-200">
            <motion.div
              className="absolute left-0 top-0 w-0.5 bg-[#7918f9] origin-top"
              initial={{ height: '0%' }}
              animate={{ 
                height: activeIndex >= 0 ? `${((activeIndex + 1) / items.length) * 100}%` : '0%'
              }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </div>

          {/* Items da Timeline */}
          <div className="relative z-10">
            {items.map((item, index) => (
              <div key={index} data-index={index}>
                <TimelineItem 
                  {...item} 
                  active={index <= activeIndex} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

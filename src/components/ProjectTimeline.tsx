import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProjectTimelineItem from './ProjectTimelineItem';

const projectItems = [
  {
    icon: '/lovable-uploads/Icone-Projeto Piloto.png',
    title: '2008 – Projeto Piloto',
    description: 'Para a fase de testes, 3 municípios brasileiros participaram com 65 mil cadastramentos feitos. Nesta etapa, 60 kits foram entregues.',
    isCompleted: true
  },
  {
    icon: '/lovable-uploads/Icone-Identificac╠ºa╠âo do Leitor.png',
    title: '2009 a 2012 — Identificação do Eleitor',
    description: 'Coletas realizadas em 330 municípios totalizando mais de 5 milhões de cadastros biométricos no período, foram entregues 2 mil kits.',
    isCompleted: true
  },
  {
    icon: '/lovable-uploads/Icone-Recadastramento.png',
    title: '2014 – Início do recadastramento dos eleitores',
    description: 'Foco no cadastramento em massa da população, foi a maior aquisição de kit biométrico do TSE, com cerca de 13 mil kits.',
    isCompleted: false
  },
  {
    icon: '/lovable-uploads/Icone-At Parque de Kits.png',
    title: '2023 e 2024 — Atualização do parque de kits',
    description: 'Com o objetivo de cadastrar o restante da população, após 8 anos de utilização, 80% dos brasileiros já cadastrados, cerca de 12 mil kits distribuídos.',
    isCompleted: false
  },
];

const ProjectTimeline = () => {
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
    <div className="max-w-4xl mx-auto">
      <div className="relative" ref={containerRef}>
        {/* Linha vertical principal */}
        <div className="absolute left-[68px] sm:left-[96px] top-0 bottom-0 w-0.5 bg-gray-200">
          <motion.div
            className="absolute left-0 top-0 w-0.5 bg-[#7918f9] origin-top"
            initial={{ height: '0%' }}
            animate={{ 
              height: activeIndex >= 0 ? `${((activeIndex + 1) / projectItems.length) * 100}%` : '0%'
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </div>

        {/* Items da Timeline */}
        <div className="relative z-10">
          {projectItems.map((item, index) => (
            <div key={index} data-index={index}>
              <ProjectTimelineItem 
                {...item} 
                active={index <= activeIndex} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectTimeline; 
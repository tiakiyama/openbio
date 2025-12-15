
import React from 'react';
import { motion } from 'framer-motion';
import { NavBar } from '@/components/NavBar';
import { Button } from '@/components/Button';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { useImagePreloader } from '@/hooks/useImagePreloader';
import { AnimatedSection } from '@/components/motion/AnimatedSection';
import { AnimatedCard } from '@/components/motion/AnimatedCard';
import { AnimatedButton } from '@/components/motion/AnimatedButton';
import ProjectTimeline from '@/components/ProjectTimeline';

const ElectoralSolution = () => {
  // Preload critical hero image
  useImagePreloader([
    '/lovable-uploads/Bg_pag TSE_Mobile.png'
  ]);

  return (
    <div className="min-h-screen bg-black text-white font-objective">
      <NavBar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-5 bg-cover bg-center" style={{ backgroundImage: 'url(/lovable-uploads/Bg_pag_TSE_Mobile.png)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl font-bold mb-6 leading-tight lg:text-6xl lg:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Solução para Cadastramento Eleitoral | TSE
          </motion.h1>
          <motion.p
            className="text-lg mb-8 lg:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Para garantir a autenticidade cadastramento biométrico no Brasil. A OpenBio desenvolveu uma plataforma para aplicações com grande foco na captura do Tribunal Superior Eleitoral (TSE), desenvolvemos tecnologia essencial para a recadastramento de pessoas através do país.
          </motion.p>
        </div>
      </section>

      {/* Timeline Section */}
      {/* <section className="bg-white py-16 px-5 lg:py-24">
        <div className="w-10/12 mx-auto">
          <ProjectTimeline />
        </div>
      </section> */}

      {/* SEÇÃO BRANCA: Números + Descrição com linha roxa acima do título */}
<section className="bg-white text-black py-12 lg:py-20">
  <div className="w-10/12 mx-auto">
    <ul className="divide-y divide-gray-200">
      {/* Item 1 */}
      <li className="py-6 lg:py-8 grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-4 lg:gap-6 items-start">
        {/* coluna esquerda: número */}
        <div>
          <span className="block text-5xl lg:text-6xl font-bold leading-none text-black">
            65 Mil
          </span>
          <span className="block text-sm lg:text-base text-gray-400 font-bold">
            cadastramentos
          </span>
        </div>

        {/* coluna direita: linha roxa + título + texto */}
        <div className="mt-3 lg:mt-0">
          <span className="block h-1 w-20 bg-[#7918f9] rounded-full mb-3" />
          <h4 className="font-bold text-black text-base lg:text-lg mb-1">
            <span className="text-black">2008</span> – Projeto Piloto
          </h4>
          <p className="text-gray-700 text-sm lg:text-base">
            Para a fase de testes, 3 municípios brasileiros participaram com 65 mil cadastramentos feitos. Nesta etapa, 60 kits foram entregues.
          </p>
        </div>
      </li>

      {/* Item 2 */}
      <li className="py-6 lg:py-8 grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-4 lg:gap-6 items-start">
        <div>
          <span className="block text-5xl lg:text-6xl font-bold leading-none text-black">
            5 <span className="text-4xl lg:text-54xl">Milhões</span>
          </span>
          <span className="block text-sm lg:text-base text-gray-400 font-bold">
            cadastros biométricos
          </span>
        </div>
        <div className="mt-3 lg:mt-0">
          <span className="block h-1 w-20 bg-[#7918f9] rounded-full mb-3" />
          <h4 className="font-bold text-black text-base lg:text-lg mb-1">
            <span className="text-black">2009 a 2012</span> – Identificação do Eleitor
          </h4>
          <p className="text-gray-700 text-sm lg:text-base">
            Coletas realizadas em 330 municípios totalizando mais de 5 milhões de cadastros biométricos no período, foram entregues 2 mil kits.
          </p>
        </div>
      </li>

      {/* Item 3 */}
      <li className="py-6 lg:py-8 grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-4 lg:gap-6 items-start">
        <div>
          <span className="block text-5xl lg:text-6xl font-bold leading-none text-black">
            13 Mil
          </span>
          <span className="block text-sm lg:text-base text-gray-400 font-bold">
            kits biométricos
          </span>
        </div>
        <div className="mt-3 lg:mt-0">
          <span className="block h-1 w-20 bg-[#7918f9] rounded-full mb-3" />
          <h4 className="font-bold text-black text-base lg:text-lg mb-1">
            <span className="text-black">2014</span> – Início do recadastramento dos eleitores
          </h4>
          <p className="text-gray-700 text-sm lg:text-base">
            Foco no cadastramento em massa da população, foi a maior aquisição de kit biométrico do TSE, com cerca de 13 mil kits.
          </p>
        </div>
      </li>

      {/* Item 4 */}
      <li className="py-6 lg:py-8 grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-4 lg:gap-6 items-start">
        <div>
          <span className="block text-5xl lg:text-6xl font-bold leading-none text-black">
            12 Mil
          </span>
          <span className="block text-sm lg:text-base text-gray-400 font-bold">
            kits distribuídos
          </span>
        </div>
        <div className="mt-3 lg:mt-0">
          <span className="block h-1 w-20 bg-[#7918f9] rounded-full mb-3" />
          <h4 className="font-bold text-black text-base lg:text-lg mb-1">
            <span className="text-black">2023 e 2024</span> – Atualização do parque de kits
          </h4>
          <p className="text-gray-700 text-sm lg:text-base">
            Com o objetivo de cadastrar o restante da população, após 8 anos de utilização, 80% dos brasileiros já cadastrados, cerca de 12 mil kits distribuídos.
          </p>
        </div>
      </li>
    </ul>
  </div>
</section>

      {/* Products Section */}
      <section className="bg-gray-100 py-16 px-5 lg:py-24">
        <div className="w-10/12 mx-auto">
          <AnimatedSection animation="fadeIn">
            <h2 className="text-black font-bold text-2xl mb-12 lg:text-4xl text-start">
              Produção de Produtos
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="slideUp" delay={0.2}>
            <div className='w-full flex justify-start items-start'>
              <p className="w-full sm:w-1/2 text-gray-600 text-start mb-12">
                As soluções de biometria para TSE garantem total interoperabilidade, segurança e confiabilidade permitindo o cadastramento biométrico dos eleitores.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedCard delay={0}>
              <div className="bg-white rounded-lg text-center">
                <div className="w-full h-full bg-white rounded mx-auto flex items-center justify-center">
                  <img
                    src="/lovable-uploads/CardCenario.png"
                    alt="Team working"
                  />
                </div>
                <h3 className="text-black font-medium text-xl pb-8 px-6 text-center">Módulo Cenário Assento Fixo</h3>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.1}>
              <div className="bg-white rounded-lg text-center">
                <div className="w-full h-full bg-white rounded mx-auto flex items-center justify-center">
                  <img
                    src="/lovable-uploads/CardConjuntoFlash.png"
                    alt="Team working"
                  />
                </div>
                <h3 className="text-black font-medium text-xl pb-8 px-6 text-center">Conjunto Flash</h3>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <div className="bg-white rounded-lg text-center">
                <div className="w-full h-full bg-white rounded mx-auto flex items-center justify-center">
                  <img
                    src="/lovable-uploads/Card Akyscam Plus.png"
                    alt="Team working"
                  />
                </div>
                <h3 className="text-black font-medium text-xl pb-8 px-6 text-center">Akyscam</h3>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default ElectoralSolution;

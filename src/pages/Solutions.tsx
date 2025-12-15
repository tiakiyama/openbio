import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavBar } from '@/components/NavBar';
import { Button } from '@/components/Button';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { DifferentialCard } from '@/components/DifferentialCard';
import { AnimatedSection } from '@/components/motion/AnimatedSection';
import { AnimatedCard } from '@/components/motion/AnimatedCard';
import { useImagePreloader } from '@/hooks/useImagePreloader';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Solutions = () => {
  // Preload critical images
  useImagePreloader([
    '/lovable-uploads/e625b5bd-15a9-4732-8d2e-a00d5d3bbe87.png'
  ]);

  return (
    <div className="min-h-screen bg-black text-white font-objective">
      <NavBar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-5 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/lovable-uploads/e625b5bd-15a9-4732-8d2e-a00d5d3bbe87.png)',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}>
        <div className="relative z-10 text-center max-w-7xl mx-auto">
          <motion.h1
            className="text-4xl font-medium mb-6 leading-tight lg:text-5xl 2xl:text-7xl lg:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Somos defensores da unicidade
          </motion.h1>
          <div className='w-full flex items-center justify-center'>
            <motion.p
              className="w-full 2xl:w-2/3 text-lg mb-8 lg:text-xl 2xl:text-3xl xl:max-w-lg 2xl:max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              A identidade de cada pessoa merece ser protegida com precisão e confiança
            </motion.p>
          </div>
          <a href="/contato">
            <button
              className="mt-4 rounded-full bg-[#7918f9] text-white px-6 py-2 font-medium text-xl shadow-lg hover:bg-[#5e13c6] transition-colors"
            >
              Fale conosco
            </button>
          </a>
        </div>
      </section>

      {/* Technology Section */}
      <section className="bg-gray-100 py-16 px-5 lg:py-48">
        <div className="w-10/12 mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-20">
            <AnimatedSection animation="slideRight" className="mb-12">
              <h2 className="text-[#7918f9] font-bold text-2xl mb-4 xl:text-4xl 2xl:text-6xl">
                Tecnologia a Serviço da Identificação
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" delay={0.1}>
              <h3 className="text-black font-bold xl:text-xl 2xl:text-2xl mb-3">Cadastro Civil e Emissão de Documentos:</h3>
              <p className="text-gray-600 xl:text-xl 2xl:text-2xl">
                Soluções biométricas para emissão de documentos civis, garantindo segurança e autenticidade.
              </p>
              <motion.div
                className='h-1 bg-[#7918f9] w-[100px] mt-10'
                initial={{ width: 0 }}
                whileInView={{ width: 100 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              ></motion.div>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" delay={0.2}>
              <h3 className="text-black font-bold xl:text-xl 2xl:text-2xl mb-3">Identificação Biométrica Pós-Óbito:</h3>
              <p className="text-gray-600 xl:text-xl 2xl:text-2xl">
                Tecnologia para identificação post mortem com soluções exclusivas, facilitando a emissão de Laudos Médicos de Atestado de Óbito.
              </p>
              <motion.div
                className='h-1 bg-[#7918f9] w-[100px] mt-10'
                initial={{ width: 0 }}
                whileInView={{ width: 100 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              ></motion.div>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" delay={0.3}>
              <h3 className="text-black font-bold xl:text-xl 2xl:text-2xl mb-3">Soluções Biométricas para Tribunais:</h3>
              <p className="text-gray-600 xl:text-xl 2xl:text-2xl">
                Autenticação segura digital para controle de acesso e identificação precisa de funcionários.
              </p>
              <motion.div
                className='h-1 bg-[#7918f9] w-[100px] mt-10'
                initial={{ width: 0 }}
                whileInView={{ width: 100 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              ></motion.div>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" delay={0.4}>
              <h3 className="text-black font-bold xl:text-xl 2xl:text-2xl mb-3">Instituições Financeiras:</h3>
              <p className="text-gray-600 xl:text-xl 2xl:text-2xl">
                Soluções avançadas para o segmento financeiro com experiência comprovada em projetos de larga escala para prevenção a fraudes.
              </p>
              <motion.div
                className='h-1 bg-[#7918f9] w-[100px] mt-10'
                initial={{ width: 0 }}
                whileInView={{ width: 100 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              ></motion.div>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" delay={0.5}>
              <h3 className="text-black font-bold xl:text-xl 2xl:text-2xl mb-3">Sistema Penitenciário e Criminal:</h3>
              <p className="text-gray-600 xl:text-xl 2xl:text-2xl">
                Controle de identificação de internos e visitantes, integrado com instituições físicas.
              </p>
              <motion.div
                className='h-1 bg-[#7918f9] w-[100px] mt-10'
                initial={{ width: 0 }}
                whileInView={{ width: 100 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              ></motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="bg-gray-100 py-16 px-5 lg:py-24">
        <div className="mx-auto w-10/12">
          <AnimatedSection animation="fadeIn" className="text-center mb-12">
            <h2 className="text-black font-medium text-2xl xl:text-4xl 2xl:text-5xl">
              Diferenciais
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <DifferentialCard
              title="Tecnologia proprietária"
              backgroundImage="/lovable-uploads/d538d6ce-daba-45a0-a20c-452827a2416d.png"
              delay={0}
            />

            <DifferentialCard
              title="Presença nacional"
              backgroundImage="/lovable-uploads/9f746c55-c2c2-4b08-bb67-4488b8c2a10e.png"
              delay={0.2}
            />

            <DifferentialCard
              title="Precisão e segurança"
              backgroundImage="/lovable-uploads/b55c47c3-0333-4c4c-b20c-14b0ce30daed.png"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Solutions Cards */}
      <section className="bg-gray-100 py-16 px-5 lg:py-24">
        <div className="w-10/12 mx-auto">
          <AnimatedSection animation="fadeIn" className="mb-12 text-center">
            <h2 className="text-black font-medium xl:text-4xl 2xl:text-5xl">
              Cases de Sucesso
            </h2>
          </AnimatedSection>

          {/* Carousel de Cases */}
          {(() => {
            const cases = [
              {
                title: 'Solução para Cadastramento Eleitoral | TSE',
                highlights: [
                  'Maior parque de cadastramento biométrico <b>do mundo</b>.',
                  'Fornecendo tecnologia para o TSE <b>desde 2008</b>.',
                  'Mais de <b>25 mil kits de cadastramento biométrico</b> entregues.'
                ],
                image: '/lovable-uploads/otse.png',
                link: '/solucoes/cadastramento-eleitoral',
              },
              {
                title: 'Controle de Fronteiras | Polícia Federal',
                highlights: [
                  'Tecnologia avançada para segurança nas fronteiras.',
                  'Sistemas biométricos em pontos estratégicos.',
                  'Mais de <b>950 soluções</b> operando no controle de fronteiras do Brasil.'
                ],
                image: '/lovable-uploads/policia.png',
                link: '/solucoes/controle-fronteiras',
              },
              {
                title: 'Solução para Instituições Financeiras | Banco do Brasil',
                highlights: [
                  'Tecnologia biométrica para segurança bancária.',
                  'Identificação precisa e confiável de clientes.',
                  'Soluções implementadas em agências em todo o país.'
                ],
                image: '/lovable-uploads/bancobb.png',
                link: '/solucoes/instituicoes-financeiras',
              },
            ];
            const [selectedIndex, setSelectedIndex] = useState(0);
            const [carouselApi, setCarouselApi] = useState<any>(null);
            useEffect(() => {
              if (!carouselApi) return;
              const onSelect = () => setSelectedIndex(carouselApi.selectedScrollSnap());
              carouselApi.on('select', onSelect);
              onSelect();
              return () => carouselApi.off('select', onSelect);
            }, [carouselApi]);
            return (
              <Carousel opts={{ align: "center", loop: true }} className="w-full" setApi={setCarouselApi}>
                <CarouselContent className="flex">
                  {cases.map((caseItem, idx) => {
                    let opacity = 0.25;
                    if (idx === selectedIndex) opacity = 1;
                    else if (idx === (selectedIndex + 1) % cases.length || idx === (selectedIndex - 1 + cases.length) % cases.length) opacity = 0.5;
                    return (
                      <CarouselItem key={idx} className="basis-full md:basis-3/4 lg:basis-2/3 px-2">
                        <a
                          href={caseItem.link}
                          className="block relative rounded-2xl overflow-hidden h-[400px] md:h-[500px] lg:h-[420px] 2xl:h-[500px] bg-white shadow-xl flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer"
                          style={{ opacity }}
                        >
                          <div className="absolute inset-0 z-0">
                            <img
                              src={caseItem.image}
                              alt={caseItem.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="relative z-10 flex flex-col h-full justify-start p-8">
                            <div>
                              <h3 className="w-2/3 text-gray-800 font-semibold text-3xl mb-4 text-left">
                                {caseItem.title}
                              </h3>
                              <div className="space-y-1 mb-4 text-left">
                                {caseItem.highlights.map((hl, i) => (
                                  <p key={i} className="text-gray-700 text-base" dangerouslySetInnerHTML={{ __html: hl }} />
                                ))}
                              </div>
                            </div>
                            <span className="text-[#7918f9] text-xs underline font-medium w-fit mt-2 text-left">
                              Saiba mais
                            </span>
                          </div>
                        </a>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                <div className="flex justify-end gap-2 mt-6">
                  <CarouselPrevious className="rounded-full bg-gray-200 text-gray-500 hover:bg-gray-300 w-10 h-10 flex items-center justify-center" />
                  <CarouselNext className="rounded-full bg-[#7918f9] text-white hover:bg-[#5e13c6] w-10 h-10 flex items-center justify-center" />
                </div>
              </Carousel>
            );
          })()}
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Solutions;

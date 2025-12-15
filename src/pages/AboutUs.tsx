import React from 'react';
import { motion } from 'framer-motion';
import { NewsCard } from '@/components/NewsCard';
import { NavBar } from '@/components/NavBar';
import { Button } from '@/components/Button';
import { Logo } from '@/components/Logo';
import { Footer } from '@/components/Footer';
import { AnimatedSection } from '@/components/motion/AnimatedSection';
import { AnimatedCard } from '@/components/motion/AnimatedCard';
import Timeline from '@/components/Timeline';


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { noticias } from "@/data/noticias";
import { NoticiaCard } from "@/components/NoticiaCard";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-black text-white font-objective">
      <NavBar />

      {/* Hero Section with Company Info */}
      <section className="relative min-h-screen flex flex-col justify-center px-5 py-32">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/f4a6e2eb-43de-46a4-8a57-9aa107b7ac6d.png')`
          }}
        />

        <div className="relative z-10 mx-auto">
          {/* Hero Title */}
          <div className="text-center mb-16 lg:mb-24 my-20">
            <motion.h1
              className="text-4xl font-bold mb-6 leading-tight lg:text-6xl lg:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Quem somos
            </motion.h1>
            <motion.p
              className="text-lg mb-8 lg:text-xl max-w-xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              Com a formação do Grupo Akiyama, a <span className="font-bold">OpenBio se consolida como líder em soluções de identificação biométrica</span>, oferecendo tecnologias avançadas e inovadoras.
            </motion.p>
          </div>

          {/* Company Info Grid */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 text-left mx-auto w-10/12">
            <AnimatedSection animation="slideUp" delay={0.1}>
              <p className="text-gray-300 xl:text-lg 2xl:text-2xl leading-relaxed border-t pt-5 border-gray-600">
                <strong className="text-white">
                  Especializados no desenvolvimento de hardware e software
                </strong>{' '}
                proprietários, proporcionamos desde leitores biométricos até sistemas completos de identificação digital, aplicados em setores como eleições, segurança pública, bancos e acessos corporativos.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" delay={0.2}>
              <p className="text-gray-300 xl:text-lg 2xl:text-2xl leading-relaxed border-t pt-5 border-gray-600">
                <strong className="text-white">
                  Nossa missão é garantir processos mais seguros, eficientes e confiáveis
                </strong>{' '}
                sempre alinhados às normas internacionais e às necessidades do mercado.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" delay={0.3}>
              <p className="text-gray-300 xl:text-lg 2xl:text-2xl leading-relaxed border-t pt-5 border-gray-600">
                <strong className="text-white">
                  Com sede em Curitiba e unidade fabril em Pato Branco
                </strong>{' '}
                estamos presentes em diversos estados brasileiros e prestamos suporte técnico em milhares de municípios.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" delay={0.4}>
              <p className="text-gray-300 xl:text-lg 2xl:text-2xl leading-relaxed border-t pt-5 border-gray-600">
                <strong className="text-white">
                  Na OpenBio, transformamos a complexidade da biometria em soluções acessíveis, descomplicadas e precisas
                </strong>{' '}
                conectando pessoas e protegendo identidades com a segurança e inovação que nossos clientes merecem.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Timeline />


      {/* CEO Section */}
      <section className="bg-white py-16 px-5 lg:py-24">
        <div className="w-10/12 mx-auto">
          <AnimatedSection animation="fadeIn">
            <h2 className="text-black font-bold text-2xl mb-12 lg:text-4xl text-start">
              Conheça nosso CEO
            </h2>
          </AnimatedSection>

          <div className="gap-12 items-center flex flex-col sm:flex-row">
            <AnimatedSection animation="slideRight" className='w-full'>
              <div className="w-fit text-center">
                <img
                  src="/lovable-uploads/c94f03e6-5f77-4d2e-a259-8a140e589c9f.png"
                  alt="Ismael Akiyama - CEO"
                  className="h-100 rounded-lg mx-auto mb-4 object-cover"
                />
                <h3 className="font-medium text-2xl text-black text-start">Ismael Akiyama</h3>
                <p className="text-[#7918f9] text-lg text-start">CEO do Grupo Akiyama</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideLeft" delay={0.2} className="text-gray-600 xl:text-sm 2xl:text-xl items-start justify-start flex flex-col border-t pt-5 border-gray-400">
              <p className="mb-10">
                Ismael Akiyama é o fundador e CEO do Grupo Akiyama, um
                ecossistema de empresas especializadas em identificação
                biométrica e segurança digital, composto pela OpenBio,
                Neoyama, Infant ID e Akiyama ID
              </p>
              <p className="mb-10">
                Com visão estratégica e foco em inovação, ele impulsiona
                o desenvolvimento de tecnologias avançadas para
                reconhecimento, autenticação e gestão de identidades.
              </p>
              <p>
                Sob sua liderança, o grupo se consolidou como referência
                no setor, fornecendo soluções para governos, instituições
                financeiras e diversas outras áreas que demandam
                segurança e precisão na identificação de pessoas
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Operations Section */}
      <section className="bg-black py-16 px-5 lg:py-24">
        <div className="w-10/12 mx-auto text-center">
          <AnimatedSection animation="fadeIn">
            <h2 className="text-white font-bold text-2xl mb-6 lg:text-4xl">
              Operação de norte a sul
            </h2>
          </AnimatedSection>

          <AnimatedCard delay={0.2}>
            <div className="bg-gray-800 rounded-lg my-16">
              <video
                className="w-full rounded-lg object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/lovable-uploads/realistic-earth-orbit-and-zoom-glowing-borders-bra-2023-12-26-10-15-04-utc.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos HTML5.
              </video>
            </div>
          </AnimatedCard>

          <AnimatedSection animation="slideUp" delay={0.4}>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Nossa presença se estende por todo o território nacional, garantindo suporte e soluções biométricas de alta qualidade em todas as regiões do Brasil, do Norte ao Sul.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* News Section */}
      <section className="bg-gray-100 py-10 px-5 lg:py-20">
        <div className="mx-auto w-10/12">
          <AnimatedSection
            animation="slideUp"
            className="flex justify-between items-center mb-6 lg:mb-12"
          >
            <h2 className="text-[#7918f9] font-medium text-lg lg:text-3xl">
              Últimas Notícias
            </h2>
            {/* Os botões de navegação vão dentro do Carousel mais abaixo */}
          </AnimatedSection>
      
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            {/* padding negativo à esquerda para “colar” os cards e permitir o peek */}
            <CarouselContent className="-ml-3">
              {noticias.map((n) => (
                <CarouselItem
                  key={n.slug}
                  // 1 card no mobile, 2 no tablet, 3 no desktop,
                  // e 'peek' do próximo card graças ao padding (pl-3) e bases abaixo
                  className="pl-3 basis-[85%] sm:basis-[55%] lg:basis-[33%] xl:basis-[30%]"
                >
                  <NoticiaCard noticia={n} />
                </CarouselItem>
              ))}
            </CarouselContent>
      
            {/* Controles à direita no desktop; abaixo no mobile */}
            <div className="mt-6 flex justify-end gap-2">
              <CarouselPrevious className="rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 w-9 h-9" />
              <CarouselNext className="rounded-full bg-[#7918f9] text-white hover:bg-[#5e13c6] w-9 h-9" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        className="relative py-32 px-5 lg:py-40 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/98097686-c442-4f38-9425-abe923adb251.png)'
        }}
      >
        <div className="relative z-10 max-w-lg mx-auto text-center lg:max-w-4xl">
          <motion.h2
            className="text-white font-medium text-2xl mb-6 lg:text-4xl lg:mb-12"
            style={{ textShadow: '0px 2px 10px rgb(0,0,0,1)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Transformamos tecnologia em segurança
          </motion.h2>
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
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;

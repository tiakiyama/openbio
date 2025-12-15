import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { StatBox } from '@/components/StatBox';
import { NewsCard } from '@/components/NewsCard';
import { Logo } from '@/components/Logo';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/motion/AnimatedSection';
import { AnimatedCard } from '@/components/motion/AnimatedCard';
import { AnimatedButton } from '@/components/motion/AnimatedButton';
import { useEffect, useRef, useState } from "react";
import SecaoInstituicoes from "@/components/SecaoInstituicoes";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { noticias } from "@/data/noticias";
import { NoticiaCard } from "@/components/NoticiaCard";

const items = [
  "Mais de 20 mil kits de cadastramento biométrico integrados ao TSE",
  "Presença em todos os estados brasileiros",
  "Mais de 140 milhões de brasileiros cadastrados com nossas soluções biométricas",
  "1.9 milhão de equipamentos entregues em 2024",
  "Mais de 950 soluções operando pela Polícia Federal no controle de fronteiras do Brasil",
];

const Index = () => {
  const [partnersCarouselApi, setPartnersCarouselApi] = useState<any>(null);
  const [statsApi, setStatsApi] = useState<any>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!statsApi) return;
    const onSelect = () => setSelectedIndex(statsApi.selectedScrollSnap());
    statsApi.on('select', onSelect);
    onSelect();
    return () => statsApi.off('select', onSelect);
  }, [statsApi]);

  // Autoplay para o carousel de stats
  useEffect(() => {
    if (!statsApi) return;
    const interval = setInterval(() => {
      statsApi.scrollNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [statsApi]);

  return (
    <div className="min-h-screen bg-black text-white font-objective">
      <NavBar />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/bg1.jpg)'
        }}
      >
        <div className="w-10/12 relative z-10 text-center mx-auto items-center justify-center sm:items-start sm:justify-start flex flex-col">
          <div className='w-full flex items-center justify-center sm:items-start sm:justify-start'>
            <motion.h1
              className="w-full sm:w-7/12 font-medium mb-6 leading-tight text-4xl lg:text-5xl 2xl:text-7xl lg:mb-8 text-center sm:text-left"
              style={{ textShadow: '0px 2px 10px rgb(0,0,0,1)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Protegendo o presente para construir o futuro
            </motion.h1>
          </div>
          <a href="/contato">
            <button
              className="mt-4 rounded-full bg-[#7918f9] text-white px-6 py-2 2xl:px-10 2xl:py-3 font-medium xl:text-lg 2xl:text-3xl shadow-lg hover:bg-[#5e13c6] transition-colors"
            >
              Fale conosco
            </button>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full bg-white py-10 px-5 lg:py-20">
        <div className="mx-auto w-10/12">
          <div className="items-center w-full justify-center flex flex-col">
            <AnimatedSection animation="slideRight" className="flex flex-col items-center w-full sm:w-8/12">
              <h2 className="text-[#7918f9] font-medium tracking-tight text-4xl xl:text-4xl 2xl:text-6xl text-center mb-3 lg:mb-6 w-full sm:w-2/3">
                Defendemos o que te torna singular
              </h2>
              <p className="text-black text-base xl:text-[14px] 2xl:text-2xl mb-4 lg:mb-6 lg:leading-relaxed text-center">
                Tecnologia é identidade digital única. <span className="font-bold">Soluções biométricas garantem que sua identificação seja precisa, segura e sem complicações.</span> Este é o princípio fundamental na nossa abordagem de segurança: entrelaçamos recursos avançados de autenticação para garantir que sua identidade digital seja única e protegida.
              </p>
              <div className="w-full flex justify-center sm:justify-center">
                <a href="/quem-somos">
                  <AnimatedButton className="mt-4 lg:mt-6">Saiba mais</AnimatedButton>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="relative py-16 bg-[#01010b] px-5 lg:py-24 bg-cover"
        style={{
          backgroundImage: 'url(/lovable-uploads/f28d5639-f76a-440c-9bbf-658384e67857.png)',
        }}
      >
        <div className="relative z-10 lg:max-w-6xl 2xl:max-w-7xl mx-auto">
          <AnimatedSection animation="fadeIn" className="text-center mb-12 lg:mb-[60px]">
            <h2 className="text-white font-bold text-2xl mb-4 lg:text-4xl lg:mb-6">
              Números que sustentam decisões
            </h2>
            <p className="text-gray-300 text-base lg:text-xl max-w-2xl mx-auto">
              Inovação que move o <span className="font-bold">Brasil</span> para quem mais importa:
            </p>
            <div className='flex items-center justify-center'>
              <motion.img
                src="/lovable-uploads/Icone-Voce╠é.png"
                alt="Team working"
                className="h-17 object-cover rounded-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </div>
          </AnimatedSection>

          <Carousel
            orientation="vertical"
            opts={{ align: "center", loop: true }}
            setApi={setStatsApi}
            className="w-full max-w-5xl mx-auto h-60 lg:h-36"
          >
            <CarouselContent className="h-60 lg:h-36 flex flex-col">
              {items.map((text, i) => {
                let opacity = 0.25;
                if (i === selectedIndex) opacity = 1;
                else if (i === (selectedIndex + 1) % items.length || i === (selectedIndex - 1 + items.length) % items.length) opacity = 0.5;
                return (
                  <CarouselItem key={i} className="flex items-center justify-center basis-1/3 transition-opacity duration-300" style={{ opacity }}>
                    <p className="text-white text-lg lg:text-xl font-regular text-center w-full px-4">
                      {text}
                    </p>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      <SecaoInstituicoes />

      {/* Partners Section */}
      {/* <section className="bg-gray-100 py-12 px-5 lg:py-20">
  <div className="mx-auto w-10/12">
    <AnimatedSection animation="fadeIn">
      <h3 className="text-center text-black text-lg mb-8 lg:mb-12 lg:text-2xl font-bold">
        Instituições que confiam em nós
      </h3>
    </AnimatedSection>

    <AnimatedSection animation="slideUp" delay={0.2}>
      <div className="w-full max-w-6xl 2xl:max-w-7xl mx-auto overflow-hidden relative">

        {}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-gray-100 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-gray-100 to-transparent" />

        {}
        <div className="flex gap-0 animate-scroll-continuous will-change-transform">
          
          {}
          <div className="flex gap-8 lg:gap-16 min-w-max">
            {}
            <div className="flex-none flex justify-center items-center h-16 lg:h-20 min-w-[120px] lg:min-w-[160px]">
              <img src="/lovable-uploads/ed866ebc-7aa2-4835-b2e6-2f39a991d949.png" alt="Politec"
                   className="h-14 lg:h-14 object-contain transition-all duration-300" />
            </div>
            <div className="flex-none flex justify-center items-center h-16 lg:h-20 min-w-[120px] lg:min-w-[160px]">
              <img src="/lovable-uploads/7a019f42-12fc-4269-98f4-6994a333ef39.png" alt="Justiça e Segurança Pública"
                   className="h-14 lg:h-14 object-contain transition-all duration-300" />
            </div>
            <div className="flex-none flex justify-center items-center h-16 lg:h-20 min-w-[120px] lg:min-w-[160px]">
              <img src="/lovable-uploads/48b301b1-fdf5-45a4-8b07-ebd5e7d5437e.png" alt="Tribunal Superior Eleitoral"
                   className="h-14 lg:h-14 object-contain transition-all duration-300" />
            </div>
            <div className="flex-none flex justify-center items-center h-16 lg:h-20 min-w-[120px] lg:min-w-[160px]">
              <img src="/lovable-uploads/9a6cbc5b-e546-4b4e-a323-a7ec9e93c2dc.png" alt="Polícia Militar"
                   className="h-16 lg:h-20 object-contain transition-all duration-300" />
            </div>
            <div className="flex-none flex justify-center items-center h-16 lg:h-20 min-w-[120px] lg:min-w-[160px]">
              <img src="/lovable-uploads/12db20ef-2f01-460d-87f4-83d899de7d4c.png" alt="Polícia Federal"
                   className="h-16 lg:h-20 object-contain transition-all duration-300" />
            </div>
            <div className="flex-none flex justify-center items-center h-16 lg:h-20 min-w-[120px] lg:min-w-[160px]">
              <img src="/lovable-uploads/53186af8-5ef3-43a3-bb4b-e8804f209203.png" alt="PGE Amapá"
                   className="h-14 lg:h-14 object-contain transition-all duration-300" />
            </div>
            <div className="flex-none flex justify-center items-center h-16 lg:h-20 min-w-[120px] lg:min-w-[160px]">
              <img src="/lovable-uploads/e8218c3a-9da8-4ddf-b504-a752426b6b10.png" alt="Polícia Rodoviária"
                   className="h-16 lg:h-20 object-contain transition-all duration-300" />
            </div>
            <div className="flex-none flex justify-center items-center h-16 lg:h-20 min-w-[120px] lg:min-w-[160px]">
              <img src="/lovable-uploads/aac75425-099b-451c-a45e-2251e27b4b05.png" alt="Polícia Civil"
                   className="h-16 lg:h-20 object-contain transition-all duration-300" />
            </div>
            <div className="flex-none flex justify-center items-center h-16 lg:h-20 min-w-[120px] lg:min-w-[160px]">
              <img src="/lovable-uploads/7295f75e-74c3-4c4d-8a2b-dcbc7a961a25.png" alt="Esporte e Lazer"
                   className="h-16 lg:h-20 object-contain transition-all duration-300" />
            </div>
            <div className="flex-none flex justify-center items-center h-16 lg:h-20 min-w-[120px] lg:min-w-[160px]">
              <img src="/lovable-uploads/dfe1f531-c15f-44f9-99ae-c52156488e7f.png" alt="Brasão Nacional"
                   className="h-16 lg:h-20 object-contain transition-all duration-300" />
            </div>
            <div className="flex-none flex justify-center items-center h-16 lg:h-20 min-w-[120px] lg:min-w-[160px]">
              <img src="/lovable-uploads/Logo ITEP.png" alt="ITEP"
                   className="h-16 lg:h-20 object-contain transition-all duration-300" />
            </div>
            <div className="flex-none flex justify-center items-center h-16 lg:h-20 min-w-[120px] lg:min-w-[160px]">
              <img src="/lovable-uploads/LogoInsti.png" alt="Instituto"
                   className="h-14 lg:h-14 object-contain transition-all duration-300" />
            </div>
            <div className="flex-none flex justify-center items-center h-16 lg:h-20 min-w-[120px] lg:min-w-[160px]">
              <img src="/lovable-uploads/catorio.png" alt="Cartório"
                   className="h-14 lg:h-14 object-contain transition-all duration-300" />
            </div>
          </div>

          {}
          <div className="flex gap-8 lg:gap-16 min-w-max" aria-hidden="true">
            {}
            <div className="flex-none flex justify-center items-center h-16 lg:h-20 min-w-[120px] lg:min-w-[160px]">
              <img src="/lovable-uploads/ed866ebc-7aa2-4835-b2e6-2f39a991d949.png" alt=""
                   className="h-14 lg:h-14 object-contain transition-all duration-300" />
            </div>
            <div className="flex-none flex justify-center items-center h-16 lg:h-20 min-w-[120px] lg:min-w-[160px]">
              <img src="/lovable-uploads/7a019f42-12fc-4269-98f4-6994a333ef39.png" alt=""
                   className="h-14 lg:h-14 object-contain transition-all duration-300" />
            </div>
            <div className="flex-none flex justify-center items-center h-16 lg:h-20 min-w-[120px] lg:min-w-[160px]">
              <img src="/lovable-uploads/48b301b1-fdf5-45a4-8b07-ebd5e7d5437e.png" alt=""
                   className="h-14 lg:h-14 object-contain transition-all duration-300" />
            </div>
            <div className="flex-none flex justify-center items-center h-16 lg:h-20 min-w-[120px] lg:min-w-[160px]">
              <img src="/lovable-uploads/9a6cbc5b-e546-4b4e-a323-a7ec9e93c2dc.png" alt=""
                   className="h-16 lg:h-20 object-contain transition-all duration-300" />
            </div>
            <div className="flex-none flex justify-center items-center h-16 lg:h-20 min-w-[120px] lg:min-w-[160px]">
              <img src="/lovable-uploads/12db20ef-2f01-460d-87f4-83d899de7d4c.png" alt=""
                   className="h-16 lg:h-20 object-contain transition-all duration-300" />
            </div>
            <div className="flex-none flex justify-center items-center h-16 lg:h-20 min-w-[120px] lg:min-w-[160px]">
              <img src="/lovable-uploads/53186af8-5ef3-43a3-bb4b-e8804f209203.png" alt=""
                   className="h-14 lg:h-14 object-contain transition-all duration-300" />
            </div>
            <div className="flex-none flex justify-center items-center h-16 lg:h-20 min-w-[120px] lg:min-w-[160px]">
              <img src="/lovable-uploads/e8218c3a-9da8-4ddf-b504-a752426b6b10.png" alt=""
                   className="h-16 lg:h-20 object-contain transition-all duration-300" />
            </div>
            <div className="flex-none flex justify-center items-center h-16 lg:h-20 min-w-[120px] lg:min-w-[160px]">
              <img src="/lovable-uploads/aac75425-099b-451c-a45e-2251e27b4b05.png" alt=""
                   className="h-16 lg:h-20 object-contain transition-all duration-300" />
            </div>
            <div className="flex-none flex justify-center items-center h-16 lg:h-20 min-w-[120px] lg:min-w-[160px]">
              <img src="/lovable-uploads/7295f75e-74c3-4c4d-8a2b-dcbc7a961a25.png" alt=""
                   className="h-16 lg:h-20 object-contain transition-all duration-300" />
            </div>
            <div className="flex-none flex justify-center items-center h-16 lg:h-20 min-w-[120px] lg:min-w-[160px]">
              <img src="/lovable-uploads/dfe1f531-c15f-44f9-99ae-c52156488e7f.png" alt=""
                   className="h-16 lg:h-20 object-contain transition-all duration-300" />
            </div>
            <div className="flex-none flex justify-center items-center h-16 lg:h-20 min-w-[120px] lg:min-w-[160px]">
              <img src="/lovable-uploads/Logo ITEP.png" alt=""
                   className="h-16 lg:h-20 object-contain transition-all duration-300" />
            </div>
            <div className="flex-none flex justify-center items-center h-16 lg:h-20 min-w-[120px] lg:min-w-[160px]">
              <img src="/lovable-uploads/LogoInsti.png" alt=""
                   className="h-14 lg:h-14 object-contain transition-all duration-300" />
            </div>
            <div className="flex-none flex justify-center items-center h-16 lg:h-20 min-w-[120px] lg:min-w-[160px]">
              <img src="/lovable-uploads/catorio.png" alt=""
                   className="h-14 lg:h-14 object-contain transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>

    
  </div>
</section> */}

      {/* Team Section */}
      <section className="bg-gray-100 py-10 px-5 lg:py-20">
        <div className="mx-auto w-10/12">
          <AnimatedCard>
            <div className="bg-[#1A1A1A] rounded-2xl p-10 lg:p-12 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center h-[350px] xl:h-[450px] 2xl:h-[650px]"
              style={{
                backgroundImage: 'url(/lovable-uploads/bgcard_pghome.png)',
                backgroundPosition: 'center right',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
              }}
            >
              <div className="mb-4 lg:mb-0 h-[450px]">
                <motion.h2
                  className="w-full sm:w-8/12 text-white font-regular text-2xl mb-2 lg:text-3xl 2xl:text-5xl lg:mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Temos uma equipe preparada para falar com você!
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                  <a href="/contato">
                    <AnimatedButton className="mx-auto">Fale conosco</AnimatedButton>
                  </a>
                </motion.div>
              </div>
            </div>
          </AnimatedCard>
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


      <section
        id="contato"
        className="relative py-32 px-5 lg:py-40 bg-cover bg-center bg-no-repeat scroll-mt-20"
        style={{
          backgroundImage: 'url(/lovable-uploads/98097686-c442-4f38-9425-abe923adb251.png)'
        }}
      >
        <div className="relative z-10 max-w-lg mx-auto text-center lg:max-w-4xl">
          <motion.h2
            className="text-white font-medium text-2xl mb-6 lg:text-4xl lg:mb-8"
            style={{ textShadow: '0px 2px 10px rgb(0,0,0,1)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Transformamos tecnologia em segurança
          </motion.h2>

          <motion.p
            className="text-white text-lg lg:text-xl mb-6"
            style={{ textShadow: '0px 1px 8px rgba(0,0,0,0.8)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Entre em contato com nossa equipe pelo telefone:<br />
            <a href="tel:+554130280222" className="text-[#7918f9] font-bold text-2xl mt-2 inline-block">
              (41) 3028-0222
            </a>
          </motion.p>
        </div>
      </section>


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;

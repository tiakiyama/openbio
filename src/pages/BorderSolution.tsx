
import React from 'react';
import { motion } from 'framer-motion';
import { NavBar } from '@/components/NavBar';
import { Button } from '@/components/Button';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { TimelineItem } from '@/components/TimelineItem';
import { FeatureCard } from '@/components/FeatureCard';
import { AnimatedSection } from '@/components/motion/AnimatedSection';
import { useImagePreloader } from '@/hooks/useImagePreloader';

const BorderSolution = () => {
  // Preload critical hero image
  useImagePreloader([
    '/lovable-uploads/Bg_pag_PF_Mobile.png'
  ]);

  return (
    <div className="min-h-screen bg-black text-white font-objective">
      <NavBar />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center px-5 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/lovable-uploads/Bg_pag_PF_Mobile.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl font-bold mb-6 leading-tight lg:text-6xl lg:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Solução para Controle de Fronteiras | Polícia Federal
          </motion.h1>
          <motion.p
            className="text-lg mb-8 lg:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Ao contrário das soluções tradicionais baseadas em kits de equipamentos burocráticos,
            esta projeta de modelo e implementação de uma tecnologia exclusiva para apoio à
            Polícia Federal no controle do tráfico de pessoas nas fronteiras. A solução oferece uma
            certificação precisa e ágil na autenticidade dos documentos de imigração, reduzindo
            significativamente o tempo de processamento e aumentando a segurança nas fronteiras.
          </motion.p>
        </div>
      </section>

      {/* RealPass Section */}
      <section className="bg-white text-black py-16 px-6">
        <div className="w-10/12 mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold  text-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            RealPass
          </motion.h2>
          <motion.h3
            className="text-lg md:text-xl text-gray-600 mb-8 text-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Leitor de Documentos
          </motion.h3>
          <motion.p
            className="text-sm md:text-base text-gray-700 mb-8 mx-auto leading-relaxed text-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className='max-w-3xl'>
              O RealPass é um dispositivo inovador de leitura de documentos, projetado
              para oferecer máxima precisão em diferentes comprimentos de
              ondas visíveis, UV e IVA, garantindo uma solução confiável e precisa para a
              autenticação e autenticação de documentos.
            </div>

          </motion.p>
          <motion.h4
            className="text-lg md:text-xl font-semibold mb-12 text-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Segurança e Inovação em um único dispositivo.
          </motion.h4>

          {/* Device Images */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6  mx-auto">
            {/* Device Image 1 */}
            <motion.div
              className=" rounded-lg items-center justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-lg overflow-hidden h-[360px] md:h-[480px] lg:h-[600px] bg-cover bg-center bg-black" style={{
                backgroundImage: 'url(/lovable-uploads/realpass.png)',
                backgroundPosition: 'center top',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
              }}></div>
              <h2 className='text-lg md:text-xl  text-black  font-semibold pt-3 pb-3 rounded-lg mt-4'>Leitor de Documentos</h2>
            </motion.div>

            {/* Device Image 2 */}
            <motion.div
              className=" rounded-lg items-center justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-lg overflow-hidden h-[360px] md:h-[480px] lg:h-[600px] bg-cover bg-center bg-black" style={{
                backgroundImage: 'url(/lovable-uploads/realpass2.png)',
                backgroundPosition: 'center top',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
              }}></div>
               <h2 className='text-lg md:text-xl  text-black  font-semibold pt-3 pb-3 rounded-lg mt-4'>Leitor de Documentos</h2>
            </motion.div>

            {/* Device Image 3 */}
            <motion.div
              className=" rounded-lg items-center justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-lg overflow-hidden h-[360px] md:h-[480px] lg:h-[600px] bg-cover bg-center bg-black" style={{
                backgroundImage: 'url(/lovable-uploads/realpass3.png)',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
              }}></div>
               <h2 className='text-lg md:text-xl  text-black  font-semibold pt-3 pb-3 rounded-lg mt-4 '>Leitor de Documentos</h2>
            </motion.div>
          </div>
        </div>
      </section >

      <CTASection
        title="Saiba como podemos otimizar seus processos
            com soluções inovadoras"
        buttonText="Fale conosco"
      />

      <Footer />
    </div >
  );
};

export default BorderSolution;

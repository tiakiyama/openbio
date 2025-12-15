import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { useImagePreloader } from "@/hooks/useImagePreloader";

// dados centralizados
import { noticias } from "@/data/noticias";

const Noticias = () => {
  useImagePreloader([
    "/lovable-uploads/e625b5bd-15a9-4732-8d2e-a00d5d3bbe87.png",
  ]);

  const [limite, setLimite] = useState(6);
  const verMais = () => setLimite((p) => Math.min(p + 6, noticias.length));

  return (
    <div className="min-h-screen bg-black text-white font-objective">
      <NavBar />

      {/* Hero */}
      <section
        className="relative alturatopoblog flex items-center justify-center px-5 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/lovable-uploads/e625b5bd-15a9-4732-8d2e-a00d5d3bbe87.png)",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="relative z-10 text-center max-w-7xl mx-auto">
          <motion.h1
            className="text-4xl font-medium mb-6 leading-tight lg:text-5xl 2xl:text-7xl lg:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Blog OpenBio
          </motion.h1>
          <div className="w-full flex items-center justify-center">
            <motion.p
              className="w-full 2xl:w-2/3 text-lg mb-8 lg:text-xl 2xl:text-3xl xl:max-w-lg 2xl:max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Confira mais notícias sobre nós.
            </motion.p>
          </div>
          <a href="#confirablog">
            <button className="mt-4 rounded-full bg-[#7918f9] text-white px-6 py-2 font-medium text-xl shadow-lg hover:bg-[#5e13c6] transition-colors">
              Confira
            </button>
          </a>
        </div>
      </section>

      {/* Lista de notícias */}
      <section className="bg-gray-100 py-16 px-5 lg:py-24" id="confirablog">
        <div className="w-10/12 mx-auto">
          <AnimatedSection animation="slideRight" className="mb-8">
            <h2 className="text-[#7918f9] text-center font-medium text-lg lg:text-3xl">
              Principais Notícias
            </h2>
          </AnimatedSection>

          {/* grid sem “buracos” entre as linhas */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 items-stretch justify-items-center">
            {noticias.slice(0, limite).map((n) => (
              <article
                key={n.slug}
                className="flex flex-col h-full rounded-2xl bg-white text-black shadow-lg overflow-hidden border transition-all duration-300 hover:shadow-2xl w-full"
              >
                {/* imagem 16:9 */}
                <div
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: "16 / 9" }}
                >
                  <img
                    src={n.capa}
                    alt={n.titulo}
                    className="absolute inset-0 h-full w-full object-cover transition-transform hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                {/* conteúdo com alturas padronizadas */}
                <div className="p-5 text-center flex flex-col flex-1">
                  <time className="text-xs text-gray-500 block">
                    {new Date(n.data).toLocaleDateString()}
                  </time>

                  {/* título e resumo com altura mínima para alinhar os cards */}
                  <h3 className="mt-2 text-lg font-semibold leading-snug line-clamp-3 ">
                    {n.titulo}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-3 ">
                    {n.resumo}
                  </p>

                  {/* botão fixado no rodapé do card */}
                  <a
                    href={`/noticias/${n.slug}`}
                    className="mt-auto inline-flex items-center justify-center marginbotaoblog rounded-full bg-[#7918f9] text-white px-5 py-2 text-sm font-medium hover:bg-[#5e13c6] transition-colors shadow" 
                    aria-label={`Saiba mais sobre: ${n.titulo}`}
                  >
                    Saiba mais
                    <span className="ml-2">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* botão "ver mais" */}
          {limite < noticias.length && (
            <div className="mt-10 flex justify-center">
              <button
                onClick={verMais}
                className="h-12 w-12 rounded-full bg-[#7918f9] text-white shadow-lg hover:bg-[#5e13c6] transition-colors grid place-items-center"
                aria-label="Ver mais notícias"
                title="Ver mais notícias"
              >
                ↓
              </button>
            </div>
          )}
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Noticias;

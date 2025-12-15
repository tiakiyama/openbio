// src/pages/NoticiaDetalhe.tsx
import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { getBySlug, getPrevNext } from "@/data/noticias";
import { ArrowLeft, ArrowRight } from "lucide-react";

const NoticiaDetalhe = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    // sobe a página ao trocar de post
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!slug) return null;
  const noticia = getBySlug(slug);

  if (!noticia) {
    // se não achar a notícia, manda para a listagem
    navigate("/noticias");
    return null;
  }

  const { prev, next } = getPrevNext(slug);

  return (
    <div className="min-h-screen bg-black text-white font-objective">
      <NavBar />

      {/* HERO: imagem à esquerda e faixa roxa com título à direita */}
      <section className="bg-black">
        <div className="mx-auto largurainternablog grid md:grid-cols-2 gap-0 items-stretch pt-8 md:pt-16">
          {/* Imagem */}
          <div className="bg-black/60 relative overflow-hidden bordrradius0 border border-white/10">
            <img
              src={noticia.capa}
              alt={noticia.titulo}
              className="w-full h-full object-cover md:min-h-[380px]"
            />
            {/* filete inferior roxo */}
            
          </div>

          {/* Faixa roxa com título */}
          <div className="bg-[#7A18F9]  px-6 md:px-10 py-10 flex items-center">
            <h1 className="text-3xl md:text-4xl leading-tight">
              {noticia.titulo}
            </h1>
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="bg-gray-100 text-black">
        <div className="mx-auto w-11/12 max-w-5xl py-10 md:py-14">
          {/* meta (autor/data) */}
          <div className="marginmarcadosblog bottom-0 left-0 h-1 w-24 bg-[#7918f9]" />
          <div className="flex flex-wrap items-center gap-6 text-xs text-gray-500">
            {noticia.autor && (
              <div>
                <span className="block">Escrito por</span>
                <span className="font-medium text-gray-800">{noticia.autor}</span>
              </div>
            )}
            <div>
              <span className="block">Publicado em</span>
              <time className="font-medium text-gray-800">
                {new Date(noticia.data).toLocaleDateString()}
              </time>
            </div>
          </div>

          {/* título interno (repetido menor, igual ao seu layout) */}
          <h2 className="mt-6 text-2xl md:text-3xl font-semibold">
            {noticia.subtitulo}
          </h2>

          {/* corpo */}
          <article
            className="prose prose-neutral max-w-none mt-4 text-base leading-relaxed textosinternoblog
                       [&_a]:text-[#7918f9] dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: noticia.conteudoHtml }}
          />

          {/* fonte */}
          {noticia.fonteUrl && (
            <p className="mt-6 text-sm">
              <a
                href={noticia.fonteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-[#7918f9] font-medium"
              >
                {noticia.fonteTitulo ?? "Fonte"}
              </a>
            </p>
          )}

          {/* navegação Anterior / Próxima */}
          <div className="mt-12 pt-8 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4">
  {/* Anterior */}
  {prev ? (
    <Link
      to={`/noticias/${prev.slug}`}
      className="group flex items-center gap-4 p-4 rounded-xl bg-white text-black border border-gray-200 shadow-sm hover:shadow-md hover:border-[#7A18F9]/30 transition"
    >
      <span className="shrink-0 grid place-items-center w-10 h-10 rounded-full bg-gray-100 text-[#7A18F9] group-hover:bg-[#7A18F9]/10">
        <ArrowLeft size={18} />
      </span>
      <div className="min-w-0">
        <span className="text-xs text-[#7A18F9]">Anterior</span>
        <p className="text-sm font-medium leading-snug line-clamp-2">
          {prev.titulo}
        </p>
      </div>
    </Link>
  ) : (
    <div className="p-4 rounded-xl border border-dashed border-gray-300 text-gray-400">
      Sem anterior
    </div>
  )}

  {/* Próxima */}
  {next ? (
    <Link
      to={`/noticias/${next.slug}`}
      className="group flex items-center gap-4 p-4 rounded-xl bg-white text-black border border-gray-200 shadow-sm hover:shadow-md hover:border-[#7A18F9]/30 transition md:justify-end"
    >
      <div className="min-w-0 text-right">
        <span className="text-xs text-[#7A18F9]">Próxima</span>
        <p className="text-sm font-medium leading-snug line-clamp-2">
          {next.titulo}
        </p>
      </div>
      <span className="shrink-0 grid place-items-center w-10 h-10 rounded-full bg-gray-100 text-[#7A18F9] group-hover:bg-[#7A18F9]/10">
        <ArrowRight size={18} />
      </span>
    </Link>
  ) : (
    <div className="p-4 rounded-xl border border-dashed border-gray-300 text-gray-400 md:justify-self-end">
      Sem próxima
    </div>
  )}
</div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default NoticiaDetalhe;

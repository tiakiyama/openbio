import React from "react";
import { Noticia } from "@/data/noticias";

export const NoticiaCard = ({ noticia }: { noticia: Noticia }) => (
  <article className="group rounded-2xl bg-white text-black shadow-lg overflow-hidden border transition-all duration-300 hover:shadow-2xl w-full">
    <a href={`/noticias/${noticia.slug}`} className="block h-full">
      {/* imagem 16:9 */}
      <div
        className="relative w-full overflow-hidden rounded-t-2xl"
        style={{ aspectRatio: "16 / 9" }}
      >
        <img
          src={noticia.capa}
          alt={noticia.titulo}
          className="absolute inset-0 h-full w-full object-cover transition-transform group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>

      {/* conteúdo */}
      <div className="p-5 text-center flex flex-col h-full">
        <time className="text-xs text-gray-500 block">
          {new Date(noticia.data).toLocaleDateString()}
        </time>
        <h3 className="mt-2 text-lg font-semibold leading-snug line-clamp-3 min-h-[72px]">
          {noticia.titulo}
        </h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-3 min-h-[60px]">
          {noticia.resumo}
        </p>
        <span className="mt-auto inline-block text-[#7918f9] text-sm font-medium underline underline-offset-4">
          Saiba mais →
        </span>
      </div>
    </a>
  </article>
);

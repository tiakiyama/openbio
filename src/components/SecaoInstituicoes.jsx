import InfiniteLogosTrack from "./InfiniteLogosTrack";
import { AnimatedSection } from "@/components/motion/AnimatedSection";

function LogoItem({ src, alt, tall = false }) {
  return (
    <div className="flex-none flex justify-center items-center h-16 lg:h-20 min-w-[120px] lg:min-w-[160px]">
      <img
        src={src}
        alt={alt}
        className={`${tall ? "h-16 lg:h-20" : "h-14 lg:h-14"} object-contain`}
        loading="eager"
        decoding="async"
      />
    </div>
  );
}

export default function SecaoInstituicoes() {
  const logos = [
    { src: "/lovable-uploads/ed866ebc-7aa2-4835-b2e6-2f39a991d949.png", alt: "Politec" },
    { src: "/lovable-uploads/7a019f42-12fc-4269-98f4-6994a333ef39.png", alt: "Justiça e Segurança Pública" },
    { src: "/lovable-uploads/48b301b1-fdf5-45a4-8b07-ebd5e7d5437e.png", alt: "Tribunal Superior Eleitoral" },
    { src: "/lovable-uploads/9a6cbc5b-e546-4b4e-a323-a7ec9e93c2dc.png", alt: "Polícia Militar", tall: true },
    { src: "/lovable-uploads/12db20ef-2f01-460d-87f4-83d899de7d4c.png", alt: "Polícia Federal", tall: true },
    { src: "/lovable-uploads/53186af8-5ef3-43a3-bb4b-e8804f209203.png", alt: "PGE Amapá" },
    { src: "/lovable-uploads/e8218c3a-9da8-4ddf-b504-a752426b6b10.png", alt: "Polícia Rodoviária", tall: true },
    { src: "/lovable-uploads/aac75425-099b-451c-a45e-2251e27b4b05.png", alt: "Polícia Civil", tall: true },
    { src: "/lovable-uploads/7295f75e-74c3-4c4d-8a2b-dcbc7a961a25.png", alt: "Esporte e Lazer", tall: true },
    { src: "/lovable-uploads/dfe1f531-c15f-44f9-99ae-c52156488e7f.png", alt: "Brasão Nacional", tall: true },
    { src: "/lovable-uploads/Logo ITEP.png", alt: "ITEP", tall: true },
    { src: "/lovable-uploads/LogoInsti.png", alt: "Instituto" },
    { src: "/lovable-uploads/catorio.png", alt: "Cartório" },
  ];

  return (
    <section className="bg-gray-100 py-12 px-5 lg:py-20">
      <div className="mx-auto w-10/12">
        <AnimatedSection animation="fadeIn">
          <h3 className="text-center text-black text-lg mb-8 lg:mb-12 lg:text-2xl font-bold">
            Instituições que confiam em nós
          </h3>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={0.2}>
          <div className="w-full max-w-6xl 2xl:max-w-7xl mx-auto">
            {/* 140–220 costuma ficar perfeito; ajuste se quiser mais rápido/lento */}
            <InfiniteLogosTrack speed={80}>
              {logos.map((l, i) => (
                <LogoItem key={i} {...l} />
              ))}
            </InfiniteLogosTrack>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

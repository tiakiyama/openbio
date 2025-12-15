import { useEffect, useRef, useState } from "react";

/**
 * Trilho infinito com deslocamento contínuo em px (sem “salto”).
 * @param {number} speed - pixels por segundo (ex.: 80 lento, 140–220 rápido).
 * @param {React.ReactNode} children - itens do trilho (logos).
 */
export default function InfiniteLogosTrack({ speed = 180, children }) {
  const wrapRef = useRef(null);
  const trackRef = useRef(null);
  const [trackWidth, setTrackWidth] = useState(1);

  useEffect(() => {
    if (!wrapRef.current || !trackRef.current) return;

    const measure = () => {
      const w = trackRef.current.getBoundingClientRect().width || 1;
      setTrackWidth(w);
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(trackRef.current);
    window.addEventListener("resize", measure);

    let rafId;
    let last = performance.now();
    let offset = 0;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const step = (now) => {
      const dt = (now - last) / 1000;
      last = now;

      offset = (offset + (prefersReduced ? 0 : speed) * dt) % trackWidth;

      if (wrapRef.current) {
        wrapRef.current.style.transform = `translate3d(${-offset}px,0,0)`;
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [speed, trackWidth]);

  return (
    <div className="relative overflow-hidden">
      {/* gradientes nas bordas (opcional) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-gray-100 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-gray-100 to-transparent z-10" />

      {/* wrapper que se move */}
      <div
        ref={wrapRef}
        className="flex will-change-transform select-none"
        style={{ transform: "translate3d(0,0,0)" }}
        aria-hidden="true"
      >
        {/* Trilho base (medido) */}
        <div ref={trackRef} className="flex gap-8 lg:gap-16 flex-none min-w-max">
          {children}
        </div>
        {/* Clones para cobrir o viewport continuamente */}
        <div className="flex gap-8 lg:gap-16 flex-none min-w-max">{children}</div>
        <div className="flex gap-8 lg:gap-16 flex-none min-w-max">{children}</div>
      </div>
    </div>
  );
}

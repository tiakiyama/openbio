import React, { useEffect, useState } from "react";

const clamp = (n: number, min = 0, max = 100) => Math.min(max, Math.max(min, n));

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calcProgress = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const total = scrollHeight - clientHeight;
      const pct = total > 0 ? (scrollTop / total) * 100 : 0;
      setProgress(clamp(pct));
    };

    // calcula no mount e ao rolar/redimensionar
    calcProgress();
    window.addEventListener("scroll", calcProgress, { passive: true });
    window.addEventListener("resize", calcProgress);

    return () => {
      window.removeEventListener("scroll", calcProgress);
      window.removeEventListener("resize", calcProgress);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[100] h-1 w-full bg-transparent"
    >
      {/* trilho opcional (quase invisível) */}
      {/* <div className="absolute inset-0 bg-black/10" /> */}
      <div
        className="h-full transition-[width] duration-75 ease-linear
                   bg-gradient-to-r from-[#7A18F9] via-[#9a6bff] to-[#7A18F9]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import assets from "../assets/assets";

const SpecialtiesCarousel = () => {
  const specialties = useMemo(
    () => [
      { image: assets.mangaGastro, label: "MANGA GÁSTRICA" },
      { image: assets.colicistectomia, label: "COLECISTECTOMÍA" },
      { image: assets.apendicectomia, label: "APENDICECTOMÍA" },
      { image: assets.hernias, label: "HERNIAS" },
      { image: assets.tumor, label: "TUMORES" },
      { image: assets.urgencias, label: "URGENCIAS" },
      { image: assets.ecografia, label: "ECOGRAFÍAS" },
      { image: assets.virtual, label: "CONSULTA VIRTUAL" },
    ],
    []
  );

  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [cardOffset, setCardOffset] = useState(260);
  const timerRef = useRef(null);
  const total = specialties.length;

  useEffect(() => {
    const computeOffset = () => {
      const width = window.innerWidth;
      if (width >= 1280) return 320; // 300 + margen
      if (width >= 1024) return 280; // 260 + margen
      return 250; // 230 + margen
    };

    const handler = () => setCardOffset(computeOffset());
    handler();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const stopAutoPlay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const startAutoPlay = () => {
    stopAutoPlay();
    if (isHovered) return;
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 4200);
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total, isHovered]);

  const goTo = (nextIndex) => {
    setCurrent(nextIndex);
    startAutoPlay();
  };

  const handlePrev = () => goTo((current - 1 + total) % total);
  const handleNext = () => goTo((current + 1) % total);

  const getOffset = (index) => {
    const raw = (index - current + total) % total;
    return raw > total / 2 ? raw - total : raw;
  };

  return (
    <div
      id="specialties"
      className="relative w-full bg-gradient-to-r from-[#1e3a5f] via-[#2c5282] to-[#1e3a5f] dark:from-[#07334a] dark:via-[#0b506f] dark:to-[#07334a] py-8 sm:py-10 lg:py-12 overflow-hidden"
      onMouseEnter={() => {
        setIsHovered(true);
        stopAutoPlay();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        startAutoPlay();
      }}
    >
      {/* Gradient fades */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-[#1e3a5f] via-[#1e3a5f]/50 to-transparent dark:from-[#07334a] dark:via-[#07334a]/50 z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-[#1e3a5f] via-[#1e3a5f]/50 to-transparent dark:from-[#07334a] dark:via-[#07334a]/50 z-10 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-5">
        <div className="relative h-[300px] sm:h-[330px] lg:h-[380px]">
          {specialties.map((specialty, index) => {
            const offset = getOffset(index);
            const distance = Math.abs(offset);
            const translateX = offset * cardOffset;
            const scale = Math.max(0.8, 1 - distance * 0.08);
            const opacity = distance === 0 ? 1 : distance === 1 ? 0.82 : 0.55;

            return (
              <motion.div
                key={`${specialty.label}-${index}`}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                animate={{ x: translateX, scale, opacity }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                style={{ zIndex: total - distance }}
              >
                <div
                  className={`pointer-events-auto relative w-[230px] sm:w-[260px] lg:w-[300px] h-[280px] sm:h-[320px] lg:h-[360px] rounded-3xl border border-white/25 dark:border-[#36c9fa]/25 bg-white/10 dark:bg-white/10 shadow-2xl overflow-hidden backdrop-blur ${
                    distance >= 2 ? "blur-[0.5px] sm:blur-[1px]" : ""
                  } ${distance > 0 ? "saturate-80" : ""}`}
                  onClick={() => setCurrent(index)}
                >
                  <img
                    src={specialty.image}
                    alt={specialty.label}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300"
                    style={{ minWidth: "100%", minHeight: "100%" }}
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/35" />

                  <div className="absolute inset-x-4 bottom-4 rounded-2xl overflow-hidden shadow-lg shadow-black/25">
                    <div className="bg-gradient-to-r from-[#0095d0] via-[#0cb3eb] to-[#36c9fa] px-3 py-3 sm:px-4 sm:py-3.5 text-center">
                      <p className="text-white text-sm sm:text-base lg:text-lg font-semibold tracking-wide drop-shadow">
                        {specialty.label}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation buttons */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2 sm:px-4">
          <button
            type="button"
            onClick={handlePrev}
            className="pointer-events-auto w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white text-[#0095d0] shadow-lg shadow-black/10 hover:scale-105 transition-transform"
            aria-label="Anterior"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="pointer-events-auto w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white text-[#0095d0] shadow-lg shadow-black/10 hover:scale-105 transition-transform"
            aria-label="Siguiente"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex items-center justify-center gap-3">
          {specialties.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full border border-white/70 dark:border-white/60 transition-all ${
                current === index
                  ? "bg-white shadow-md shadow-black/10 scale-125"
                  : "bg-white/25 hover:bg-white/50"
              }`}
              aria-label={`Ir a ${specialties[index].label}`}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#36c9fa] to-transparent" />
    </div>
  );
};

export default SpecialtiesCarousel;

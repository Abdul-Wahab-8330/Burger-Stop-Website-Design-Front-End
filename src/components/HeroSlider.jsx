import { useState } from "react";
import { ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import slide1 from "../assets/hero-slide-1.png";
import slide2 from "../assets/hero-slide-2.png";
import slide3 from "../assets/hero-slide-3.png";

const slides = [
  { id: 1, image: slide1, text: "ORDER", subtext: "", type: "overlay" },
  { id: 2, image: slide2, text: "MENU", subtext: "", type: "solid" },
  { id: 3, image: slide3, text: "LOCATE", subtext: "", type: "overlay" },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = slides.length;

  const prev = () => { setDirection(-1); setIndex((i) => (i - 1 + total) % total); };
  const next = () => { setDirection(1);  setIndex((i) => (i + 1) % total); };

  const getSlide = (offset) => slides[(index + offset + total) % total];

  return (
    <section className="relative w-full bg-white overflow-hidden z-0" style={{ height: "875px" }}>
      <div className="flex w-full h-full" style={{ gap: "14px", padding: "14px" }}>
        {[0, 1, 2].map((offset) => {
          const slide = getSlide(offset);
          const isOverlay = slide.type === "overlay";
          return (
            <div
              key={offset}
              className={`relative flex-1 h-full overflow-hidden
                ${offset === 1 ? "slider-panel-hide-tablet" : ""}
                ${offset === 2 ? "slider-panel-hide-mobile" : ""}
              `}
              style={{ borderRadius: "17px" }}
            >
              <AnimatePresence mode="popLayout" custom={direction}>
                <motion.div
                  key={slide.id + "-" + offset}
                  className="absolute inset-0 w-full h-full"
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -30 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                >
                  {/* Image */}
                  <img src={slide.image} alt={slide.text} className="absolute inset-0 w-full h-full object-cover" style={{ filter: !isOverlay ? "brightness(1) saturate(1)" : "none" }} />

                  {/* Teal overlay */}
                  {isOverlay && <div className="absolute inset-0" style={{ backgroundColor: "#00B4C5", mixBlendMode: "multiply" }} />}

                  {/* Dark overlay for solid */}
                  {!isOverlay && <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)", mixBlendMode: "multiply" }} />}

                  {/* Text */}
                  <div className="absolute inset-0 flex flex-col items-start left-0 justify-end gap-2 pb-9">
                    <span className="font-spatial-black uppercase text-center" style={{ fontSize: isOverlay ? "84px" : "120px", letterSpacing: "2px", color: isOverlay ? "transparent" : "#ffffff", WebkitTextStroke: isOverlay ? "2px #ffffff" : "4px #ffffff", textAlign: "left", writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
                      {slide.text}
                    </span>
                    {/* {slide.subtext && (
                      <span className="font-spatial-black uppercase text-center" style={{ fontSize: "clamp(48px, 6vw, 104px)", letterSpacing: "6px", color: isOverlay ? "transparent" : "#fff", WebkitTextStroke: isOverlay ? "2px #fff" : "none" }}>
                        {slide.subtext}
                      </span>
                    )} */}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Left Arrow */}
      <button onClick={prev} aria-label="Previous" className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-20 h-20 flex items-center justify-center rounded-full transition-all">
        <ChevronUp size={75} color="#fff" strokeWidth={1.2} style={{ transform: "rotate(-90deg)" }} />
      </button>

      {/* Right Arrow */}
      <button onClick={next} aria-label="Next" className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-20 h-20 flex items-center justify-center rounded-full transition-all">
        <ChevronUp size={75} color="#fff" strokeWidth={1.2} style={{ transform: "rotate(90deg)" }} />
      </button>
    </section>
  );
}
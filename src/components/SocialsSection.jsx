import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import social1 from "../assets/social-1.png";
import social2 from "../assets/social-2.png";
import social3 from "../assets/social-3.png";
import social4 from "../assets/social-4.png";

const socialImages = [social1, social2, social3, social4];

export default function SocialsSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-white pt-1 pb-14 px-3 md:px-6 lg:px-9">
      <div className="w-full mx-auto flex flex-col md:flex-row gap-6 lg:gap-8 items-stretch">
        
        {/* Vertical Title - Desktop */}
        <div className="hidden md:flex items-center">
          <h2 
            className="font-spatial-black text-secondary text-4xl md:text-5xl uppercase tracking-tight leading-none"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Socials
          </h2>
        </div>

        {/* Mobile Header */}
        <div className="flex md:hidden -mb-4 w-full justify-between items-center">
          <h2 className="font-spatial-black text-secondary text-3xl lg:text-4xl uppercase">Socials</h2>
          <div className="flex gap-2">
            <button onClick={() => scroll("left")} className="p-1 border border-0.5 rounded-full text-secondary border-secondary ">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => scroll("right")} className="p-1 border border-0.5 rounded-full text-secondary border-secondary">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Images Container */}
        <div 
          ref={scrollRef}
          className="flex-1 flex gap-4 overflow-x-auto md:overflow-x-hidden no-scrollbar snap-x snap-mandatory"
        >
          {socialImages.map((img, idx) => (
            <div 
              key={idx} 
              className="
                shrink-0 snap-center
                /* Mobile: Show 2 images (each 50% minus half the gap) */
                w-[calc(45%-8px)] 
                /* Tablet: Show 2 images clearly */
                md:w-[calc(40%-8px)] 
                /* Large PC: Show all 4 perfectly */
                lg:w-[calc(25%-12px)] 
              "
            >
              <img 
                src={img} 
                alt={`Social post ${idx + 1}`} 
                className="w-full aspect-square object-cover rounded-[7px] shadow-sm hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
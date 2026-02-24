import uberEats from "../assets/ubereats-logo.png";
import clickCollect from "../assets/click-collect-logo.png";

/**
 * OrderOnlineBar
 * Full width black bar with ORDER ONLINE text left, logos right
 * Figma: 1440x267, pt-51 pb-51, bg #1E1E1C
 */
export default function OrderOnlineBar() {
  return (
  <section 
    className="w-full bg-secondary flex flex-col lg:flex-row items-center justify-center md:justify-between px-6 py-12 md:py-20 md:px-12 lg:px-20 gap-6 md:gap-4" 
    style={{ minHeight: "200px", height: "auto" }} // Auto height for mobile wrapping
  >
    
    {/* LEFT — ORDER ONLINE text */}
    <div className="flex items-center md:items-baseline gap-2 md:gap-4 text-center md:text-left">
      <span 
        className="font-spatial-black text-white uppercase leading-none" 
        style={{ 
          fontSize: "clamp(40px, 8vw, 72px)", 
          letterSpacing: "0px", 
          transform: 'scaleY(0.9)',
          marginBottom:'2px',
          display: 'block'
        }}
      >
        ORDER
      </span>
      <span 
        className="font-compact-medium text-white uppercase leading-none" 
        style={{ 
          fontSize: "clamp(36px, 7vw, 64px)", 
          letterSpacing: "0px", 
          WebkitTextStroke: '1px #fff',
          opacity: 0.9
        }}
      >
        ONLINE
      </span>
    </div>

    {/* RIGHT — Logos */}
    <div className="flex items-center justify-center gap-8 md:gap-10 lg:gap-14">
      <a  target="_blank" rel="noopener noreferrer" className="transition-transform active:scale-95">
        <img 
          src={uberEats} 
          alt="UberEats" 
          className="object-contain h-7 sm:h-8 md:h-10 lg:h-11" 
        />
      </a>
      <a  className="transition-transform active:scale-95">
        <img 
          src={clickCollect} 
          alt="Click + Collect" 
          className="object-contain h-8 sm:h-9 md:h-11 lg:h-12" 
        />
      </a>
    </div>

  </section>
);
}
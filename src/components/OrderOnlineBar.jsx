import uberEats from "../assets/ubereats-logo.png";
import clickCollect from "../assets/click-collect-logo.png";
import uberEatsBlack from "../assets/ubereatsblack.png";
import clickCollectBlack from "../assets/click-collect-black.png";

/**
 * OrderOnlineBar
 * Full width bar with ORDER ONLINE text left, logos right
 * Figma: 1440x267, pt-51 pb-51, bg #1E1E1C
 * @param {boolean} transparent - If true, sets bg to white and text/logos to black.
 */
export default function OrderOnlineBar({ transparent = false }) {
  // Determine colors based on transparency prop
  const textColor = transparent ? "text-secondary" : "text-white";
  const borderColor = transparent ? "border-secondary" : "border-white";
  const currentUberEats = transparent ? uberEatsBlack : uberEats;
  const currentClickCollect = transparent ? clickCollectBlack : clickCollect;

  return (
    <section
      className={`w-full flex flex-col lg:flex-row items-center justify-center md:justify-between px-6 py-12 md:py-16 md:px-12 lg:px-20 gap-6 md:gap-4 transition-colors duration-300 ${
        transparent ? "bg-primary" : "bg-secondary"
      }`}
      style={{ minHeight: "200px", height: "auto" }}
    >
      {/* LEFT — ORDER ONLINE text */}
      <div className="flex items-center md:items-baseline gap-2 md:gap-4 text-center md:text-left">
        <span
          className={`font-spatial-black uppercase leading-none ${textColor}`}
          style={{
            fontSize: "clamp(40px, 8vw, 72px)",
            letterSpacing: "0px",
            transform: "scaleY(0.9)",
            marginBottom: "2px",
            display: "block",
          }}
        >
          ORDER
        </span>
        <span
          className={`font-compact-medium uppercase leading-none ${textColor}`}
          style={{
            fontSize: "clamp(36px, 7vw, 64px)",
            letterSpacing: "0px",
            WebkitTextStroke: transparent ? '1px #000' : '1px #fff',
            opacity: 0.9,
          }}
        >
          ONLINE
        </span>
      </div>

      {/* RIGHT — Logos */}
      <div className="flex items-center justify-center gap-8 md:gap-10 lg:gap-14">
        <a href="https://burger-stop-2.deliverectdirect.com/" target="_blank" rel="noopener noreferrer" className="transition-transform active:scale-95">
          <img
            src={currentUberEats}
            alt="UberEats"
            className="object-contain h-7 sm:h-8 md:h-10 lg:h-11"
          />
        </a>
        <a href="https://burger-stop-2.deliverectdirect.com/" target="_blank" className="transition-transform active:scale-95">
          <img
            src={currentClickCollect}
            alt="Click + Collect"
            className="object-contain h-8 sm:h-9 md:h-11 lg:h-12"
          />
        </a>
      </div>
    </section>
  );
}
import angusBurgerImg from "../assets/angus-burger-large.png"; 
import turboChargedBadge from "../assets/turbo-charged-delivery.png";
import { Link } from "react-router-dom";

export default function PremiumAngusSection() {
    return (
        <section className="w-full relative overflow-hidden md:h-[595px] h-[280px] bg-white">
            {/* Background Overlay — Flipped to the Right Side */}
            <div
                className="absolute inset-0 bg-primary z-10"
                style={{ 
                    // Flipped clipPath: Starts further right and slants back to the center
                    clipPath: window.innerWidth < 768 
                        ? "polygon(40% 0, 100% 0, 100% 100%, 30% 100%)" 
                        : "polygon(36% 0, 100% 0, 100% 100%, 46% 100%)" 
                }}
            />

            <div className="flex items-center justify-end w-full h-full relative px-5 py-12 md:px-10 lg:px-14.5">

                {/* LEFT — Burger Image (Positioned absolutely on the left side) */}
                <div className="absolute left-0 top-0 h-full w-[60%] md:w-[55%] z-0">
                    <img
                        src={angusBurgerImg}
                        alt="100% Premium Angus Beef"
                        className="absolute left-0 bottom-0 h-full object-contain object-left-bottom"
                        style={{ maxWidth: "none" }}
                    />
                </div>

                {/* RIGHT — Text Content (Pushed to the teal area) */}
                <div className="flex flex-col md:gap-4 lg:gap-6 gap-3 z-20 max-w-[55%] md:max-w-[50%] lg:max-w-[48%] items-start">

                    {/* Heading - Mix of Host Grotesk Medium and Spatial Black */}
                    <div className="flex flex-col leading-none">
                        <h2 className="font-spatial-black text-white uppercase leading-none text-[20px] md:text-[40px] xl:text-[80px] 2xl:text-[82px] tracking-tighter font-bold" style={{transform:'scaleY(0.9'}}>
                            100% PREMIUM
                        </h2>
                        <h2 className="font-medium text-white uppercase italic leading-none tracking-tight text-[30px] md:text-[60px] xl:text-[100px] 2xl:text-[110px] font-bold" style={{transform:'scaleY(1.1)'}}>
                            ANGUS BEEF
                        </h2>
                    </div>

                    {/* Description - Host Grotesk Medium */}
                    <p className="font-host-grotesk text-white text-[9px] md:text-sm lg:text-base xl:text-lg leading-relaxed max-w-md">
                        Burger Stop is proud to be the best in Manchester when it comes to serving juicy smash burgers 
                        made with 100% premium Angus beef, sourced from grass-fed cattle for the perfect balance 
                        of tenderness and rich flavour.
                    </p>

                    {/* CTA Button */}
                    <Link
                        to="/order"
                        className="inline-flex items-center font-spatial-black justify-center bg-secondary rounded-full text-white uppercase text-[10px] md:text-base md:px-10 md:py-3 px-4 py-2 transition-opacity hover:opacity-80 w-fit mt-2"
                    >
                        ORDER ONLINE
                    </Link>
                </div>

                {/* TURBO CHARGED Badge — Floating near the center overlap */}
                <div className="absolute top-[50%] left-[26%] md:left-[33%]  transform -translate-y-1/2 z-30">
                    <img
                        src={turboChargedBadge}
                        alt="Turbo Charged Delivery"
                        className="w-[80px] h-[80px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] object-contain drop-shadow-xl"
                    />
                </div>

            </div>
        </section>
    );
}
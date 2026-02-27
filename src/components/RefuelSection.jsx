import refuelImage from "../assets/refuel-burger-spread.png"; // Your new spread image
import refuelBadge from "../assets/refuel-badge.png"; // The rectangular "REFUEL" sticker
import { Link } from "react-router-dom";

export default function RefuelSection() {
    return (
        <section className="w-full relative overflow-hidden md:h-[595px] h-[320px] bg-white">
            {/* Background Overlay — Teal slant on the right side */}
            <div
                className="absolute inset-0 bg-primary z-10"
                style={{ 
                    clipPath: window.innerWidth < 768 
                        ? "polygon(30% 0, 100% 0, 100% 100%, 45% 100%)" 
                        : "polygon(38% 0, 100% 0, 100% 100%, 50% 100%)" 
                }}
            />

            <div className="flex items-center justify-end w-full h-full relative px-5 py-12 md:px-10 lg:px-14.5">

                {/* LEFT — Food Spread Image (Positioned on the left side) */}
                <div className="absolute left-0 top-0 h-full w-[65%] md:w-[60%] z-0">
                    <img
                        src={refuelImage}
                        alt="Burger spread"
                        className="absolute left-0 bottom-0 h-full object-contain object-left-bottom"
                        style={{ maxWidth: "none" }}
                    />
                </div>

                {/* RIGHT — Text Content (In the teal area) */}
                <div className="flex flex-col md:gap-4 px-1 lg:gap-6 gap-3 z-20 max-w-[55%] md:max-w-[50%] lg:max-w-[50%] items-start text-white">

                    {/* Heading: Mix of Host Grotesk and Spatial Black */}
                    <div className="flex flex-col leading-none">
                        <div className="flex items-center">
                            <h2 className="text-nowrap font-medium uppercase leading-none tracking-tight text-[22px] md:text-[45px] xl:text-[95px] font-light" style={{ transform: 'scaleY(1.1)', transformOrigin: 'left' }}>
                            READY FOR
                        </h2>
                        <h2 className=" ml-4 font-spatial-black uppercase leading-none tracking-tight text-[28px] md:text-[55px] xl:text-[95px] font-bold" style={{ transform: 'scaleX(1.1)', transformOrigin: 'left' }}>
                            BIG
                        </h2>
                        </div>
                        <h2 className="font-medium italic uppercase leading-none  text-[28px] md:text-[55px] xl:text-[95px] font-bold" style={{ transform: 'scaleX(1.1)', transformOrigin: 'left' }}>
                            FLAVOURS?
                        </h2>
                    </div>

                    {/* Description: Host Grotesk Medium */}
                    <p className="font-medium text-[9px] md:text-sm lg:text-base xl:text-lg leading-relaxed max-w-lg">
                        As the proud titleholder of Manchester's No.1 burger place, 
                        Burger Stop invites you to experience the epitome of burger excellence.
                    </p>

                    {/* CTA Button */}
                    <Link
                        to="/order"
                        className="inline-flex items-center font-spatial-black justify-center bg-secondary rounded-full text-white uppercase text-[10px] md:text-base md:px-10 md:py-3 px-4 py-2 transition-opacity hover:opacity-80 w-fit mt-2 ml-2"
                    >
                        ORDER ONLINE
                    </Link>
                </div>

                {/* REFUEL Badge — Overlapping the image/teal boundary */}
                <div className="absolute top-[35%] left-[18%] md:left-[27%] transform -translate-y-1/2 z-30">
                    <img
                        src={refuelBadge}
                        alt="Refuel"
                        className="w-[100px] md:w-[220px] lg:w-[280px] object-contain drop-shadow-xl"
                    />
                </div>

            </div>
        </section>
    );
}
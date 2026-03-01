import pitStopSticker from "../assets/pit-stop-sticker.png";
import pitStopBurger from "../assets/pit-stop-burger2.png";
import { Link } from "react-router-dom";

/**
 * PitStopBurger
 * - Teal bg with large italic heading left
 * - Burger image bleeding from right side
 * - Description text + SEE THE MENU black button
 * - ZERO TO TASTY badge bottom right
 */

export default function PitStopBurger() {
    return (
        <section className="w-full relative overflow-hidden md:h-[595px] h-[250px]" >
            <div
                className="absolute inset-0 bg-primary z-10"
                style={{ clipPath: "polygon(0 0, 48% 0, 69% 100%, 0 100%)" }}
            />
            <div className="flex items-center w-full h-full relative px-2 py-12 md:px-7 lg:px-12" >

                {/* LEFT — Text Content */}
                <div className="flex flex-col md:gap-3 lg:gap-3 gap-3 z-10 max-w-[60%] md:max-w-[50%] lg:max-w-[50%]">

                    {/* Heading */}
                    <div className="flex flex-col leading-none">
                        <h2 className="font-compact-black text-white uppercase leading-none tracking-tight text-[32px] md:text-[70px] xl:text-[110px]">
                            WHERE THE
                        </h2>
                        <h2 className="font-spatial-black text-white uppercase leading-none tracking-tight text-[35px] md:text-[75px] xl:text-[120px]">
                            FLAVOUR
                        </h2>
                        <h2 className="font-medium text-white uppercase italic leading-none tracking-tight text-[27px] md:text-[60px] xl:text-[95px]">
                            HITS TOP GEAR
                        </h2>
                    </div>

                    {/* Description */}
                    <p className="font-medium text-white text-[9px] md:text-base lg:text-lg leading-relaxed max-w-lg">
                        When you enjoy a meal with us, you can be confident that it’s made with the same quality and care we bring to our own homes.
                    </p>

                    {/* CTA Button */}
                    <Link
                        to="/menu"
                        className="inline-flex items-center font-spatial-black justify-center bg-secondary rounded-full text-white uppercase text-[10px] md:text-base md:px-7 md:py-3 px-3 py-2 transition-opacity hover:opacity-80 w-fit"
                        
                    >
                        SEE THE MENU
                    </Link>

                </div>

                {/* RIGHT — Burger Image (bleeds out) */}
                <div className="absolute right-0 top-0 h-full w-[50%] md:w-[55%] z-0">
                    <img
                        src={pitStopBurger}
                        alt="Pit Stop Burger"
                        className="absolute right-0 bottom-0 h-full object-contain object-right-bottom"
                        style={{ maxWidth: "none" }}
                    />
                </div>

                {/* ZERO TO TASTY Badge — bottom right of left content area */}
                <div className="absolute bottom-[6%] md:bottom-[11%] right-[12%] md:right-[27%] z-20">
                    <img
                        src={pitStopSticker}
                        alt="Pit Stop Sticker"
                        className="w-[150px] h-[150px] md:w-[230px] md:h-[230px] lg:w-[290px] lg:h-[290px] object-contain"
                    />
                </div>

            </div>

        </section>
    );
}
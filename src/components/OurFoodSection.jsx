import ourFoodImage from "../assets/our-food-craft.png";
import { Link } from "react-router-dom";

/**
 * OurFoodSection
 * - "OUR FOOD IS OUR CRAFT" heading
 * - No badge
 */

export default function OurFoodSection() {
    return (
        <section className="w-full relative overflow-hidden md:h-[590px]  h-[270px]">
            <div
                className="absolute inset-0 bg-primary z-10"
                style={{ clipPath: "polygon(0 0, 52% 0, 72% 100%, 0 100%)" }}
            />
            <div className="flex items-center w-full h-full relative px-2 py-12 md:px-7 lg:px-12">

                {/* LEFT — Text Content */}
                <div className="flex flex-col md:gap-3 lg:gap-3 gap-3 px-2 z-10 max-w-[60%] md:max-w-[50%] lg:max-w-[50%]">

                    {/* Heading */}
                    <div className="flex flex-col leading-none">
                        <h2 className="font-medium text-white uppercase italic leading-none tracking-tight text-[27px] md:text-[60px] xl:text-[95px]">
                            OUR FOOD
                        </h2>
                        <h2 className="font-spatial-black text-white uppercase leading-none tracking-tight text-[32px] md:text-[70px] xl:text-[110px]">
                            IS OUR
                        </h2>
                        <h2 className="font-spatial-black text-white uppercase leading-none tracking-tight text-[32px] md:text-[70px] xl:text-[110px]">
                            CRAFT
                        </h2>
                    </div>

                    {/* Description */}
                    <p className="font-compact-black font-bold text-secondary text-[10px] md:text-sm lg:text-base xl:text-lg leading-relaxed max-w-md">
                        At Burger Stop, our food is our craft, and our team is the pit crew making it happen. Every burger is prepared with precision, care, and speed, ensuring it reaches you fresh, hot, and full of flavour ready to fuel your day.
                    </p>

                    {/* CTA Button */}
                    <Link
                        to="/menu"
                        className="inline-flex items-center font-spatial-black justify-center bg-secondary rounded-full text-white uppercase text-[10px] md:text-base md:px-7 md:py-3 px-6 py-2 transition-opacity hover:opacity-80 mt-2 w-fit"
                    >
                        SEE THE MENU
                    </Link>

                </div>

                {/* RIGHT — Food Image */}
                <div className="absolute right-0 top-0 h-full w-[55%] md:w-[58%] z-0">
                    <img
                        src={ourFoodImage}
                        alt="Our food is our craft"
                        className="w-full h-full object-cover"
                        style={{ maxWidth: "none" }}
                    />
                </div>

            </div>
        </section>
    );
}
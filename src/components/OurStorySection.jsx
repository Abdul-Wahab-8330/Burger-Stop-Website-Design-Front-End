import storyImage from "../assets/story-cups.png"; 
import { Link } from "react-router-dom";

export default function OurStorySection() {
    return (
        <section className="w-full relative overflow-hidden md:h-[550px] lg:h-[659px] h-[400px] bg-white">
            
            {/* Background Overlay — Adjusted slant to prevent overlap */}
            <div
                className="absolute inset-0 bg-primary z-10"
                style={{ 
                    clipPath: window.innerWidth < 768 
                        ? "polygon(45% 0, 100% 0, 100% 100%, 25% 100%)" 
                        : "polygon(35% 0, 100% 0, 100% 100%, 50% 100%)" 
                }}
            />

            <div className="flex items-center justify-end w-full h-full relative px-6 md:px-12 lg:px-[120px]">

                {/* LEFT — Brand Imagery */}
                <div className="absolute left-0 top-0 h-full w-[55%] md:w-[50%] z-0">
                    <img
                        src={storyImage}
                        alt="Burger Stop Cups"
                        className="absolute left-0 bottom-0 h-full object-contain object-left-bottom"
                        style={{ maxWidth: "none" }}
                    />
                </div>

                {/* RIGHT — Text Content with extra spacing from the slant */}
                <div className="flex flex-col md:gap-4 lg:gap-6 gap-3 z-20 max-w-[50%] md:max-w-[50%] lg:max-w-[55%] items-start text-white md:pl-10 lg:pl-14">

                    {/* Heading */}
                    <div className="flex flex-wrap items-baseline gap-2 leading-none mb-2">
                        <h2 className="font-medium uppercase italic leading-none tracking-tight text-[28px] md:text-[60px] lg:text-[70px] xl:text-[85px]">
                            OUR
                        </h2>
                        <h2 className="font-spatial-black md:ml-2 ml-1 uppercase leading-none tracking-tight text-[28px] md:text-[68px] lg:text-[75px] xl:text-[90px]">
                            STORY
                        </h2>
                    </div>

                    {/* Description */}
                    <div className="flex flex-col gap-1">
                        <p className="font-medium text-[10px] md:text-sm lg:text-base leading-relaxed">
                            Burger Stop was born from the passion of three brothers - a lawyer, an accountant, and a handyman. Together, their skills mixed into something extraordinary: burger experts. 
                        </p>
                        <p className="font-medium text-[10px] md:text-sm lg:text-base leading-relaxed">
                            The lawyer brought innovation, the accountant ensured the quality, but it was the handyman who turned ideas into reality. Mix the three together and we now have Burger Experts.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <Link
                        to="/menu"
                        className="inline-flex items-center font-spatial-black justify-center ml-2 bg-secondary rounded-full text-white uppercase text-[10px] md:text-base md:px-10 md:py-3 px-5 py-2 transition-opacity hover:opacity-80 w-fit mt-4"
                    >
                        SEE THE MENU
                    </Link>

                </div>
            </div>
        </section>
    );
}
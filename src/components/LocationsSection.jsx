import { useRef, useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

import location1 from "../assets/location-sale.png";
import location2 from "../assets/location-salford.png";
import location3 from "../assets/location-manchester.png";
import location4 from "../assets/location-liverpool.png";
import { Link } from "react-router-dom";

/**
 * LocationsSection
 * - "LOCATIONS TO REFUEL" heading
 * - 4 location cards with teal multiply overlay (same as HeroSlider)
 * - Vertical text bottom-left on each card
 * - Second card has special "LETS GO! GO! GO!" text box design
 * - Horizontally scrollable on smaller screens
 * - Maps from array — add more locations easily
 */

const locations = [
    {
        id: 1,
        image: location1,
        name: "SALE",
        type: "normal",
        isMobileSpecial: true,
        comingSoon: false,
        slug: "sale", // for linking to individual location page in future
    },
    {
        id: 2,
        image: location2,
        name: "SALFORD",
        type: "special", // has LETS GO! GO! GO! box
        comingSoon: false,
        slug: "salford",
    },
    {
        id: 3,
        image: location3,
        name: "MANCHESTER\nCITY CENTRE",
        type: "normal",
        comingSoon: false,
        slug: "manchester-city-centre",
    },
    {
        id: 4,
        image: location4,
        name: "LIVERPOOL\nCOMING SOON",
        type: "normal",
        comingSoon: true,
        slug: "liverpool"
    },
];

export default function LocationsSection() {
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const checkScroll = () => {
        const el = scrollRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 0);
        setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    };

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        checkScroll();
        el.addEventListener("scroll", checkScroll);
        window.addEventListener("resize", checkScroll);
        return () => {
            el.removeEventListener("scroll", checkScroll);
            window.removeEventListener("resize", checkScroll);
        };
    }, []);

    const scroll = (dir) => {
        scrollRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
    };

    return (
        <section className="w-full bg-white pt-4 md:py-8 py-4">

            {/* Heading */}
            <div className="px-5 md:px-7 lg:px-9 mb-2 mt-3">
                <h2 className="font-compact-medium font-extrabold text-secondary uppercase text-3xl md:text-4xl lg:text-5xl">
                    LOCATIONS TO{" "}
                    <span className="font-spatial-black text-3xl md:text-4xl lg:text-5xl">REFUEL</span>
                </h2>
            </div>

            {/* Cards wrapper — relative for arrows */}
            <div className="relative px-0">

                {/* Left Arrow */}
                {canScrollLeft && (
                    <button
                        onClick={() => scroll(-1)}
                        aria-label="Scroll left"
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center"
                    >
                        <ChevronUp size={50} color="#fff" strokeWidth={1.5} style={{ transform: "rotate(-90deg)" }} />
                    </button>
                )}

                {/* Scrollable Cards */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-3 px-2 pb-3 md:px-5 lg:px-7"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {locations.map((loc) => (
                        <LocationCard key={loc.id} location={loc} />
                    ))}
                </div>

                {/* Right Arrow */}
                {canScrollRight && (
                    <button
                        onClick={() => scroll(1)}
                        aria-label="Scroll right"
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center"
                    >
                        <ChevronUp size={50} color="#fff" strokeWidth={1.5} style={{ transform: "rotate(90deg)" }} />
                    </button>
                )}

            </div>
        </section>
    );
}

/* ── Individual Location Card ─────────────────────────────── */

function LocationCard({ location }) {
    const isSpecial = location.type === "special";
    const isMobileSpecial = location.isMobileSpecial;

    return (
        <Link>
            <div
                className="relative shrink-0 overflow-hidden cursor-pointer group"
                style={{ width: "400px", height: "490px", borderRadius: "5px" }}
            >
                {/* Background Image */}
                <img
                    src={location.image}
                    alt={location.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Teal multiply overlay — same as HeroSlider */}
                <div
                    className="absolute inset-0"
                    style={{ backgroundColor: "#00B4C5", mixBlendMode: "multiply" }}
                />

                {isMobileSpecial && (
                    <div className=" md:hidden absolute top-6 right-6 flex items-center justify-center">
                        <div
                            className="border-8 border-primary bg-secondary px-4 py-3 text-center "
                            style={{ borderRadius: "16px" }}
                        >
                            <p
                                className="font-spatial-black text-primary uppercase -my-2 leading-tight"
                                style={{ fontSize: "40px", letterSpacing: "1px" }}
                            >
                                LETS
                            </p>
                            <p
                                className="font-spatial-black text-white uppercase -my-4 leading-tight"
                                style={{ fontSize: "55px", letterSpacing: "2px" }}
                            >
                                GO!
                            </p>
                            <p
                                className="font-spatial-black text-white uppercase leading-tight -my-4"
                                style={{ fontSize: "55px", letterSpacing: "2px" }}
                            >
                                GO!
                            </p>
                            <p
                                className="font-spatial-black text-white uppercase -my-4 leading-tight"
                                style={{ fontSize: "55px", letterSpacing: "2px" }}
                            >
                                GO!
                            </p>
                        </div>
                    </div>
                )}

                {/* Special card — LETS GO! GO! GO! box center */}
                {isSpecial && (
                    <div className="hidden md:flex absolute top-6 right-6 items-center justify-center">
                        <div
                            className="border-8 border-primary bg-secondary px-4 py-3 text-center "
                            style={{ borderRadius: "16px" }}
                        >
                            <p
                                className="font-spatial-black text-primary uppercase -my-2 leading-tight"
                                style={{ fontSize: "40px", letterSpacing: "1px" }}
                            >
                                LETS
                            </p>
                            <p
                                className="font-spatial-black text-white uppercase -my-4 leading-tight"
                                style={{ fontSize: "55px", letterSpacing: "2px" }}
                            >
                                GO!
                            </p>
                            <p
                                className="font-spatial-black text-white uppercase leading-tight -my-4"
                                style={{ fontSize: "55px", letterSpacing: "2px" }}
                            >
                                GO!
                            </p>
                            <p
                                className="font-spatial-black text-white uppercase -my-4 leading-tight"
                                style={{ fontSize: "55px", letterSpacing: "2px" }}
                            >
                                GO!
                            </p>
                        </div>
                    </div>
                )}

                {/* Vertical text — bottom left — same as HeroSlider */}
                <div
                    className="absolute inset-0 flex items-end justify-start"
                    style={{ padding: "0 0 16px 20px" }}
                >
                    <span
                        className="font-spatial-black text-white uppercase leading-none"
                        style={{
                            fontSize: "51px",
                            letterSpacing: "0px",
                            writingMode: "vertical-rl",
                            transform: "rotate(180deg) scaleY(0.9)",
                            WebkitTextStroke: "0px #ffffff",
                            whiteSpace: "pre-line",
                        }}
                    >
                        {location.name}
                    </span>
                </div>

            </div>
        </Link>
    );
}
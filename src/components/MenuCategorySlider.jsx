import { useRef, useState, useEffect } from "react";
import { ChevronUp, ForkKnifeCrossed } from "lucide-react";

// Replace with actual burger images from Figma assets
import burger1 from "../assets/burger-beef-classic.png";
import burger2 from "../assets/burger-kansas-original.png";
import burger3 from "../assets/burger-double-angus.png";
import burger4 from "../assets/burger-chicken-classic.png";
import burger5 from "../assets/burger-double-classic.png";
import { Link } from "react-router-dom";

/**
 * MenuCategorySlider
 * - Category tabs on top left, "VIEW OUR MENU" link on top right
 * - Horizontally scrollable burger cards
 * - Arrows auto-hide at scroll limits
 * - Touch/finger scroll supported natively
 * - Add more items to `menuItems` array to extend in future
 */

const categories = ["BURGERS", "TENDERS", "HOT WINGS", "WRAPS", "BOXED MEALS", "KIDS MEALS", "LOADED FRIES", "FRIES", "DIPS", "DESSERTS", "SHAKES"];

const menuItems = [
    { id: 1, image: burger1, name: "BEEF\nCLASSIC", category: "BURGERS" },
    { id: 2, image: burger2, name: "KANSAS\nORIGINAL", category: "BURGERS" },
    { id: 3, image: burger3, name: "DOUBLE\nANGUS", category: "BURGERS" },
    { id: 4, image: burger4, name: "CHICKEN\nCLASSIC", category: "BURGERS" },
    { id: 5, image: burger5, name: "DOUBLE\nCLASSIC", category: "BURGERS" },
];

export default function MenuCategorySlider() {
    const [activeCategory, setActiveCategory] = useState("BURGERS");
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const scrollRef = useRef(null);

    // Check scroll position and update arrow visibility
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
        return () => el.removeEventListener("scroll", checkScroll);
    }, []);

    const scrollBy = (dir) => {
        scrollRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
    };

    const filtered = menuItems.filter((item) => item.category === activeCategory);

    return (
        <section className="w-full bg-white py-6 px-2 md:px-4 lg:px-5">

            {/* Top Row — Categories left, View Menu right */}
            <div className="flex items-center justify-between mb-5 overflow-x-auto scrollbar-hide px-1">
                <div className="flex items-center gap-4 md:gap-4 flex-nowrap ">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className="font-compact-black text-md md:text-lg whitespace-nowrap transition-colors scrollbar-hide"
                            style={{ color: activeCategory === cat ? "#00B4C5" : "#1E1E1C" }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                <Link to="/menu"

                    className="font-compact-black cursor-pointer text-md md:text-lg tracking-normal whitespace-nowrap ml-6 transition-opacity hover:opacity-70"
                    style={{ color: "#00B4C5" }}
                >
                    VIEW OUR MENU
                </Link>
            </div>

            {/* Cards Row with arrows */}
            <div className="relative">

                {/* Left Arrow */}
                {canScrollLeft && (
                    <button
                        onClick={() => scrollBy(-1)}
                        aria-label="Scroll left"
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 flex items-center justify-center bg-transparent transition-all "
                    >
                        <ChevronUp size={40} color="#ffffff" strokeWidth={2} style={{ transform: "rotate(-90deg)", borderRadius: "50%" }} />
                    </button>
                )}

                {/* Scrollable Cards */}
                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto scroll-smooth p-1"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {filtered.length > 0 ? filtered.map((item) => (
                        <div
                            key={item.id}
                            className="shrink-0 overflow-hidden cursor-pointer group transition-transform hover:scale-[1.02] md:py-2 py-0 px-4"
                            style={{ width: "320px", borderRadius: "6px", backgroundColor: "#00B4C5" }}
                        >
                            {/* Burger Image */}
                            <div className="w-full flex items-center md:mb-0 -mb-4 justify-center group-hover:scale-105 transition-transform duration-300" style={{ height: "280px" }}>
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>

                            {/* Name */}
                            <div className="px-4 py-4">
                                <p
                                    className="font-spatial-black text-white uppercase leading-10 tracking-tight text-center group-hover:tracking-wide transition-all "
                                    style={{ fontSize: "50px", whiteSpace: "pre-line", transform: 'scaleY(0.9)', }}
                                >
                                    {item.name}
                                </p>
                            </div>
                        </div>
                    )
                    ) : (
                        <div className="w-full flex flex-col items-center justify-center gap-3 py-16">
                            <span style={{ fontSize: "48px", color:"gray" }}><ForkKnifeCrossed style={{ fontSize: "48px", color:"gray" }}/></span>
                            <p className="font-spatial-black text-secondary uppercase tracking-widest opacity-30" style={{ fontSize: "20px" }}>
                                Nothing here yet
                            </p>
                            <p className="font-medium text-secondary opacity-20 text-sm">
                                Check back soon for new items
                            </p>
                        </div>
                    )}
                </div>

                {/* Right Arrow */}
                {canScrollRight && (
                    <button
                        onClick={() => scrollBy(1)}
                        aria-label="Scroll right"
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 flex items-center justify-center bg-transparent transition-all "
                    >
                        <ChevronUp size={40} color="#ffffff" strokeWidth={2}  style={{ transform: "rotate(90deg)", borderRadius: "50%" }} />
                    </button>
                )}

            </div>
        </section>
    );
}
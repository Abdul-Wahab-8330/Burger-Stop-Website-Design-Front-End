import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Placeholder images - replace with your actual assets
import tendersImg from "../assets/tenders-wings.png";
import burgersImg from "../assets/burgers-category.png";

const categoryData = [
    { name: "BURGERS", img: burgersImg },
    { name: "TENDERS", img: tendersImg },
    { name: "HOT WINGS", img: tendersImg },
    { name: "WRAPS", img: burgersImg },
    { name: "BOXED MEALS", img: tendersImg },
    { name: "KIDS MEALS", img: burgersImg },
    { name: "LOADED FRIES", img: tendersImg },
    { name: "FRIES", img: burgersImg },
    { name: "DIPS", img: tendersImg },
    { name: "DESSERTS", img: burgersImg },
    { name: "SHAKES", img: tendersImg },
];

export default function CategorySlider2() {
    const scrollRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setShowLeftArrow(scrollLeft > 10);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        const currentRef = scrollRef.current;
        if (currentRef) {
            currentRef.addEventListener("scroll", checkScroll);
            // Initial check
            checkScroll();
        }
        return () => currentRef?.removeEventListener("scroll", checkScroll);
    }, []);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 350; // Adjust based on card width
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="w-full bg-primary py-4 relative group">
            <div className="max-w-[1440px] mx-auto px-6 md:px-20 lg:px-[120px] relative">

                {/* Left Arrow */}
                {showLeftArrow && (
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-4 lg:left-17 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full shadow-xs transition-all"
                    >
                        <ChevronLeft size={32} className="text-secondary" />
                    </button>
                )}

                {/* Scroll Container */}
                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4"
                >
                    {categoryData.map((cat, idx) => (
                        <div
                            key={idx}
                            className="
    flex-shrink-0 snap-start relative 
    /* MOBILE: Width percentage to show a peek of the next card */
    w-[85%] 
    /* TABLET/DESKTOP: Fixed width logic */
    md:w-[50%] lg:w-[55%]
    /* ASPECT RATIO: Horizontal rectangle */
    aspect-[16/10] 
    rounded-[3px] overflow-hidden 
    /* ALL-SIDES SHADOW: Soft gradient feel */
    shadow-[0_0_20px_rgba(0,0,0,0.2)]
    cursor-pointer hover:brightness-110 transition-all
  "            >
                            {/* Image */}
                            <img
                                src={cat.img}
                                alt={cat.name}
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay Gradient for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent " />

                            {/* Category Name */}
                            <div className="absolute bottom-6 left-6">
                                <h3 className="font-spatial-black text-white text-4xl md:text-4xl lg:text-6xl uppercase leading-tighter tracking-tighter" style={{ transform: 'scaleY(0.9)' }}>
                                    {cat.name.split(' ').map((word, i) => (
                                        <span key={i} className="block">{word}</span>
                                    ))}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                {showRightArrow && (
                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-4 lg:right-17 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full shadow-sm transition-all"
                    >
                        <ChevronRight size={32} className="text-secondary" />
                    </button>
                )}
            </div>

            <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
        </section>
    );
}
import heroImg from "@/assets/news-hero.png";

function NewsHero() {
    return (
        <section className="w-full bg-white px-6 md:px-16 pb-7">

            {/* HERO IMAGE — overlaps blue bar */}
            <div
                className="
            relative
            w-full
            overflow-hidden
            rounded-sm
            z-10
            -mt-20
            md:-mt-28
          "
                style={{ height: "clamp(360px, 48vw, 560px)" }}
            >
                {/* Image */}
                <img
                    src={heroImg}
                    alt="Lunch done right"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Teal multiply overlay (same system) */}
                <div
                    className="absolute inset-0"
                    style={{
                        mixBlendMode: "multiply",
                    }}
                />

                {/* TOP-LEFT META */}
                <div className="absolute top-6 left-6 md:top-8 md:left-8 text-white">
                    <span className="block font-semibold text-sm opacity-90">
                        Food news
                    </span>
                </div>
                {/* BOTTOM-LEFT TEXT GROUP */}
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-8 text-white">

                    {/* DATE — now tied to headline */}
                    <span className="block font-compact-black text-sm tracking-widest uppercase mb-2 opacity-90">
                        SEPT 25
                    </span>

                    {/* HEADLINE */}
                    <h1 className="font-spatial-black uppercase leading-[0.9] tracking-tight text-[40px] md:text-[64px]">
                        <span className="block">LUNCH</span>
                        <span className="block">DONE</span>
                        <span className="block">RIGHT</span>
                    </h1>

                </div>
            </div>


        </section>
    );
}

export default NewsHero;
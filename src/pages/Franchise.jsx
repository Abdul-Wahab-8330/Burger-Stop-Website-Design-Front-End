import Footer from "@/components/Footer"
import FranchiseIgniteSection from "@/components/FranchiseIgniteSection"
import Navbar from "@/components/Navbar"
import NewsGridSection from "@/components/NewsGridSection"
import WhatMakesBurgerStopSection from "@/components/WhatMakesBurgerStopSection"

function Franchise() {
    return (
        <>
            <Navbar transparent={false}/>
            <div className="w-full bg-primary px-6 md:px-18 md:py-8 py-6">
                <h2 className=" text-4xl md:text-8xl uppercase">
                    <span className="text-white md:ml-8 ml-3 font-spatial-black tracking-tight" style={{ WebkitTextStroke: "0.5px #ffffff", transform: "scaleX(1.1)", display: "inline-block" }}>FRANCHISE</span>
                </h2>
            </div>
            <FranchiseIgniteSection />

            <section className="w-full bg-primary">
                <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

                    {/* TEXT BLOCK */}
                    <h2 className="uppercase leading-[0.7]">
                        {/* IT'S MORE THAN */}
                        <span className="block font-compact-black font-extrabold text-white text-[44px] md:text-[79px]">
                            IT’S MORE THAN
                        </span>

                        {/* BUILDING */}
                        <span className="block tracking-tighter font-spatial-black text-white text-[56px] md:text-[106px] leading-[0.9]">
                            BUILDING
                        </span>

                        {/* A BUSINESS */}
                        <span className="block font-bold italic text-secondary text-[40px] md:text-[79px] leading-[0.7]">
                            A BUSINESS
                        </span>
                    </h2>

                    {/* CTA */}
                    <div className="shrink-0 ">
                        <button
                            className="
              bg-secondary
              text-white
              font-spatial-black
              uppercase
              text-xs
              md:text-sm
              px-8
              py-3
              rounded-full
              hover:opacity-80
              transition
            "
                        >
                            APPLY NOW
                        </button>
                    </div>

                </div>
            </section>

            <WhatMakesBurgerStopSection/>

            <div className="w-full bg-white px-10 md:px-20 lg:px-28 md:py-8 py-6">
                <h2 className=" text-4xl md:text-8xl uppercase flex flex-col">
                    <span className="text-primary font-spatial-black tracking-tighter" style={{ WebkitTextStroke: "0.5px #00B4C5", transform: "scaleX(1.1)", display: "inline-block" }}>FRANCHISE</span>
                    <span className="text-primary font-medium italic font-extrabold tracking-tighter " style={{ letterSpacing: "-0.005em", display: "inline-block", transform: "scaleX(1.1)" }}>NEWS</span>
                </h2>
            </div>

            <NewsGridSection limit={3} />
            <Footer/>

        </>
    )
}
export default Franchise

import CareersHeroSection from '@/components/CareersHeroSection'
import FastLaneSection from '@/components/FastLaneSection'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import PitStopCareers from '@/components/PitStopCareers'
import React from 'react'

function Careers() {
    return (
        <>
            <Navbar transparent={false} />
            <div className="w-full bg-primary px-6 md:px-16 md:py-8 py-6">
                <h2 className=" text-4xl md:text-8xl uppercase">
                    <span className="text-white font-spatial-black tracking-tight" style={{ WebkitTextStroke: "0.5px #ffffff", transform: "scaleX(1.1)", display: "inline-block" }}>CAREERS</span>
                </h2>
            </div>
            <CareersHeroSection />

            <section className="w-full bg-primary">
                <div className="max-w-7xl mx-auto px-10 py-12 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

                    {/* TEXT BLOCK */}
                    <h2 className="uppercase leading-[0.7]">
                        {/* IT'S MORE THAN */}
                        <span className="block font-compact-black font-extrabold text-white text-[44px] md:text-[79px]">
                            SINK YOUR TEETH
                        </span>

                        {/* BUILDING */}
                        <span className="block tracking-tighter font-spatial-black text-white text-[56px] md:text-[106px] leading-[0.9]">
                            INTO A
                        </span>

                        {/* A BUSINESS */}
                        <span className="block font-bold italic text-secondary text-[40px] md:text-[79px] leading-[0.7]">
                            NEW CAREER
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

            <FastLaneSection />

            <section className="w-full bg-secondary">
                <div className="max-w-7xl mx-auto px-10 py-8 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

                    {/* TEXT BLOCK */}
                    <h2 className="uppercase leading-[0.7]">
                        {/* IT'S MORE THAN */}
                        <span className="block font-compact-black font-extrabold text-white text-[44px] md:text-[79px]">
                            STEP INTO
                        </span>

                        {/* BUILDING */}
                        <span className="block tracking-tighter font-spatial-black text-primary text-[56px] md:text-[106px] leading-[0.9]">
                            SUCCESS
                        </span>

                        {/* A BUSINESS */}
                        <span className="block font-bold italic text-white text-[40px] md:text-[79px] leading-[0.7]">
                           AT BURGER STOP
                        </span>
                    </h2>

                </div>
            </section>

            <PitStopCareers/>
            <Footer/>

        </>
    )
}

export default Careers

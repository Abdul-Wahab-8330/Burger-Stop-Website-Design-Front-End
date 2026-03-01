import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import NewsGridSection from '@/components/NewsGridSection'
import NewsHero from '@/components/NewsHero'
import React from 'react'

function News() {
    return (
        <>
            <Navbar transparent={false} />

            <div className="w-full relative z-0 bg-primary px-6 md:px-16 h-[150px] md:h-[250px] pt-2 flex items-start">
                <h2 className=" text-4xl md:text-8xl uppercase">
                    <span className="text-white font-spatial-black tracking-tight" style={{ WebkitTextStroke: "0px #ffffff", transform: "scaleX(1.1)", display: "inline-block" }}>NEWS</span>
                </h2>
            </div>

            <NewsHero/>
            <NewsGridSection/>

            <Footer />
        </>
    )
}

export default News

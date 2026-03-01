import Footer from '@/components/Footer'
import GetInTouchSection from '@/components/GetInTouchSection'
import Navbar from '@/components/Navbar'
import React from 'react'

function Contact() {
    return (
        <>
            <Navbar transparent={false} />
            <div className="w-full bg-primary px-6 md:px-18 md:py-8 py-6">
                <h2 className=" text-4xl md:text-8xl uppercase">
                    <span className="text-secondary font-medium italic font-extrabold tracking-tighter" style={{ letterSpacing: "-0.005em", display: "inline-block" }}>CONTACT</span>
                    <span className="text-secondary md:ml-8 ml-3 font-spatial-black tracking-tighter" style={{ WebkitTextStroke: "0.5px #1E1E1C", transform: "scaleX(1.1)", display: "inline-block" }}>US</span>
                </h2>
            </div>
            <GetInTouchSection />

            <Footer />
        </>
    )
}

export default Contact

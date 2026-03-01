import Footer from '@/components/Footer'
import LocationsSection from '@/components/LocationsSection'
import Navbar from '@/components/Navbar'
import React from 'react'

function Locations() {
    return (
        <>
            <Navbar transparent={false} />
            <div className="w-full bg-white px-6 md:px-12 md:py-1 py-4 -mb-8">
                <h2 className=" text-4xl md:text-6xl uppercase">
                    <span className="text-primary font-spatial-black tracking-tight" style={{ WebkitTextStroke: "0.5px #00B4C5", transform: "scaleX(1.1)", display: "inline-block" }}>LOCATIONS</span>
                </h2>
            </div>
            <LocationsSection heading={false} />
            <Footer />
        </>
    )
}

export default Locations

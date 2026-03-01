import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import OrderLocations from '@/components/OrderLocations'
import PitStopBurger from '@/components/PitStopBurger'
import React from 'react'

function Order() {
    return (
        <>
            <Navbar transparent={false} />
            <div className="w-full bg-white px-6 md:px-18 md:py-8 py-6">
                <h2 className=" text-4xl md:text-8xl uppercase">
                    <span className="text-primary  font-spatial-black tracking-tighter" style={{ WebkitTextStroke: "0.5px #00B4C5", transform: "scaleX(1.1)", display: "inline-block" }}>ORDER</span>
                    <span className="text-primary md:ml-8 ml-3 font-medium italic font-extrabold tracking-tighter" style={{ letterSpacing: "-0.005em", display: "inline-block" }}>ONLINE</span>
                </h2>
            </div>
            <OrderLocations/>
            <PitStopBurger/>
            <Footer />
        </>
    )
}

export default Order

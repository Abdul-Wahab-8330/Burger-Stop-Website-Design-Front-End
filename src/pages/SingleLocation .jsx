import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import OrderOnlineBar from '@/components/OrderOnlineBar'
import { locations } from '@/config/constants'
import React from 'react'
import { useParams } from 'react-router-dom'
import ubereatslogo from '../assets/ubereats-black-green.png'
import clickcollectlogo from '../assets/click-collect-black.png'

function SingleLocation() {


    const { slug } = useParams();
    const location = locations.find((l) => l.slug === slug);

    if (!location) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-2xl font-bold">Location not found.</p>
            </div>
        );
    }



    return (
        <>
            <Navbar transparent={false} />
            <OrderOnlineBar />

            {/* LOCATION NAME HEADING */}
            <div className="px-6 md:px-10 pt-8 pb-2">
                <h1 className="font-spatial-black text-primary uppercase text-4xl md:text-6xl md:ml-9 ml-4" style={{transform:'scaleX(1.1) scaleY(1.25)'}}>
                    {location.name}
                </h1>
            </div>

            {/* HERO IMAGE */}
            <div className="w-full h-[260px] md:h-[380px] overflow-hidden relative">
                <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover"
                />
                <div
                    className="absolute inset-0"
                    style={{ backgroundColor: "#00B4C5", mixBlendMode: "multiply" }}
                />
            </div>

            {/* MAP + DETAILS */}
            <div className="flex flex-col md:flex-row w-full">

                {/* MAP */}
                <div className="w-full md:w-1/2 h-[300px] md:h-[380px]">
                    <iframe
                        src={location.mapEmbedUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Map of ${location.name}`}
                    />
                </div>

                {/* DETAILS */}
                <div className="w-full md:w-1/2 px-4 md:px-8 py-8 flex flex-col justify-between">
                    <div>
                        {/* Location name */}
                        <h2 className="font-spatial-black text-primary uppercase text-xl md:text-4xl leading-tight mb-1 ml-4 md:ml-6" style={{transform:'scaleX(1.1) scaleY(1.25)'}}>
                            {location.name}
                        </h2>
                        <h3 className="font-spatial-black text-primary uppercase text-xl md:text-4xl leading-7 mb-6 ml-4 md:ml-6" style={{transform:'scaleX(1.1) scaleY(1.25)'}}>
                            {location.subtitle}
                        </h3>

                        {/* Address & Phone */}
                        <p className="text-secondary font-bold text-sm md:text-base ">{location.address}</p>
                        <p className="text-secondary font-bold text-sm md:text-base mb-6">{location.phone}</p>

                        {/* Opening Times */}
                        <p className="text-secondary font-bold text-sm md:text-base ">Opening Times:</p>
                        <p className="text-secondary font-extrabold text-sm md:text-base">{location.openingTimes}</p>
                    </div>

                    {/* Logos */}
                    <div className="flex items-center gap-8 mt-8">
                        <img src={ubereatslogo} alt="Uber Eats" className="h-6 md:h-8" />
                        <img src={clickcollectlogo} alt="Click + Collect" className="h-6 md:h-8" />
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default SingleLocation 

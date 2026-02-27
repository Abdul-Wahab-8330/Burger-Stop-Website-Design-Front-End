import React from 'react'
import Navbar from '../components/Navbar'
import OrderOnlineBar from '../components/OrderOnlineBar'
import OurFoodSection from '@/components/OurFoodSection'
import { Link } from 'react-router-dom'
import SocialsSection from '@/components/SocialsSection'
import OurStorySection from '@/components/OurStorySection'
import LocationsSection from '@/components/LocationsSection'
import RefuelSection from '@/components/RefuelSection'
import Footer from '@/components/Footer'

function AboutUs() {
    return (
        <>
            <Navbar transparent={false} />
            <OrderOnlineBar />

            <div className="w-full bg-primary px-6 md:px-18 md:py-8 py-6">
                <h2 className=" text-4xl md:text-7xl uppercase">
                    <span className="text-secondary font-medium italic font-extrabold tracking-tighter" style={{ letterSpacing: "-0.005em", display: "inline-block" }}>ABOUT</span>
                    <span className="text-secondary md:ml-5 ml-3 font-spatial-black tracking-tighter" style={{ WebkitTextStroke: "0.5px #1E1E1C", transform: "scaleX(1.1)", display: "inline-block" }}>US</span>
                </h2>
            </div>

            <OurFoodSection />

            <div className="w-full px-10 md:px-18 py-14 md:py-20 flex items-center justify-center" style={{ backgroundColor: "#EAF4F6" }}>
                <p className="font-compact-black text-secondary text-[11px] md:text-xl lg:text-2xl leading-relaxed max-w-4xl text-left" style={{ transform: "scaleY(1.2)", lineHeight: 1.2 }}>
                    Our 100% grass-fed Angus beef is the heart of our menu, delivering juicy, rich, and perfectly smashed burgers that set us apart in the Burger race! Every ingredient is carefully selected, and every meal is made to order, making Burger Stop the ultimate destination for the best burgers in Manchester.
                </p>
            </div>

            <section className="w-full bg-white px-6 md:px-18 py-14 md:py-18">
                <div className="max-w-7xl">

                    {/* Heading */}
                    <div className="flex flex-col leading-none mb-4 md:mb-6">
                        <h2 className="font-medium text-primary uppercase italic font-bold leading-none tracking-tight text-[32px] md:text-[60px] xl:text-[80px]">
                            WHY CHOOSE
                        </h2>
                        <h2 className="font-spatial-black text-primary uppercase leading-none tracking-tight text-[38px] md:text-[70px] xl:text-[95px]">
                            BURGER STOP?
                        </h2>
                    </div>

                    {/* Description */}
                    <p className="font-compact-black text-secondary text-[11px] md:text-xl lg:text-3xl leading-relaxed max-w-7xl mb-6 md:mb-8" style={{ lineHeight: 1.2 }}>
                        Our pit crew serves up turbo-charged smash burgers made with 100% grass-fed Angus beef, fresh and packed with flavour. Fast, precise, and full of care - we keep you fuelled up with the best burgers in Manchester.
                    </p>

                    {/* CTA Button */}
                    <Link
                        to="/order"
                        className="inline-flex items-center font-spatial-black justify-center bg-secondary rounded-full text-white uppercase text-[10px] md:text-base md:px-7 md:py-3 px-6 py-2 transition-opacity hover:opacity-80 w-fit"
                    >
                        ORDER ONLINE
                    </Link>

                </div>
            </section>

            <SocialsSection />
            <OurStorySection />

            <section className="w-full bg-white px-8 md:px-18 py-14 md:pt-24 pb-10 lg:px-[110px]">
                <div className="max-w-7xl">

                    {/* Heading - Teal color with mixed font styles */}
                    <div className="flex flex-col leading-none mb-3 md:mb-8">
                        <h2 className="font-medium text-primary uppercase italic leading-none tracking-tight text-[22px] md:text-[40px] lg:text-[65px] xl:text-[80px]">
                            THANK YOU FOR
                        </h2>
                        <div className='flex gap-5 items-center'>
                            <h2 className="font-medium text-primary uppercase italic  leading-none tracking-tight text-[22px] md:text-[40px] lg:text-[65px] xl:text-[80px]">
                            CHOOSING
                        </h2>
                        <h2 className="font-spatial-black text-nowrap text-primary uppercase leading-none tracking-tight text-[22px] md:text-[40px] lg:text-[65px] xl:text-[80px]">
                            BURGER STOP!
                        </h2>
                        </div>
                    </div>

                    {/* Description - Host Grotesk / Right Grotesk style */}
                    <div className="flex flex-col gap-4 max-w-7xl">
                        <p className="font-compact-black text-secondary text-[11px] md:text-xl lg:text-2xl leading-relaxed max-w-7xl mb-6 md:mb-8" style={{ lineHeight: 1.2 }}>
                            We truly appreciate all the support from our amazing customers. Thanks to you, we're ever-growing, welcoming more people into our Burger Stop family every day. Your loyalty and love for our food inspire us to keep delivering the best burgers in Manchester, and we can't wait to serve you again!
                        </p>
                    </div>

                </div>
            </section>

            <LocationsSection/>
            <RefuelSection/>
            <Footer/>
        </>
    )
}

export default AboutUs

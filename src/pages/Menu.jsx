import AllergyDownloadModal from '@/components/AllergyDownloadModal'
import BurgersSection from '@/components/BurgersSection'
import CategorySlider2 from '@/components/CategorySlider2'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import OrderOnlineBar from '@/components/OrderOnlineBar'
import TendersSection from '@/components/TendersSection'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Menu() {

    const [showAllergies, setShowAllergies] = useState(false);

    return (
        <>
            <Navbar transparent={false} />
            <OrderOnlineBar />

            <div className="w-full bg-primary px-6 md:px-18 md:py-8 py-6">
                <h2 className=" text-4xl md:text-8xl uppercase">
                    <span className="text-secondary font-medium italic font-extrabold tracking-tighter" style={{ letterSpacing: "-0.005em", display: "inline-block" }}>OUR</span>
                    <span className="text-secondary md:ml-8 ml-3 font-spatial-black tracking-tighter" style={{ WebkitTextStroke: "0.5px #1E1E1C", transform: "scaleX(1.1)", display: "inline-block" }}>MENU</span>
                </h2>
            </div>

            <CategorySlider2 />
            <OrderOnlineBar transparent={true} />

            <section
                className="w-full bg-[#00B4C5B2] flex flex-col md:flex-row items-center justify-center md:justify-between px-6 py-6 md:px-20 md:py-0 lg:px-[87px] h-auto md:h-[123px] gap-4 md:gap-0"
            >
                {/* LEFT - Container for Text and Buttons */}
                <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5 w-full md:w-auto text-center md:text-left">

                    {/* DOWNLOAD Text - Moves to top on mobile */}
                    <div className="text-secondary font-spatial-black text-[12px] md:text-lg uppercase md:mr-2">
                        DOWNLOAD
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3">
                        <Link to="/menu" className="bg-transparent text-secondary border border-secondary font-spatial-black text-[10px] md:text-sm px-5 py-2.5 rounded-full uppercase hover:opacity-90 transition-opacity">
                            MENU
                        </Link>
                        <Link onClick={() => setShowAllergies(true)} className="bg-transparent text-secondary border border-secondary font-spatial-black text-[10px] md:text-sm px-5 py-2.5 rounded-full uppercase hover:opacity-90 transition-opacity">
                            ALLERGIES
                        </Link>
                    </div>
                </div>

                {/* RIGHT - Location Button */}
                <Link to="/locations" className="bg-transparent text-secondary border border-secondary font-spatial-black text-[10px] md:text-sm px-5 py-2.5 rounded-full uppercase hover:opacity-90 transition-opacity">
                    LOCATE US
                </Link>
            </section>

            <BurgersSection />
            <TendersSection />
            <Footer />

            {/* The Modal */}
            <AllergyDownloadModal isOpen={showAllergies} onClose={() => setShowAllergies(false)} />

        </>
    )
}

export default Menu

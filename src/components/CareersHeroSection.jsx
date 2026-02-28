import React from 'react'
import igniteImg from "../assets/ignite-future.png"; // ← your imported image


function CareersHeroSection() {
    return (
        <>
            <section className="w-full bg-secondary">
                <div className="max-w-7xl min-h-[600px] mx-auto  flex flex-col md:flex-row">

                    {/* LEFT — TEXT */}
                    <div className="w-full md:w-1/2 flex items-center">
                        <div className="px-4 py-8 md:px-8 md:py-20 text-white">

                            {/* Heading */}
                            <h2 className="uppercase tracking-tight leading-[0.95] text-white">
                                <span className="block font-bold italic text-[32px] md:text-[44px]">
                                    LOOKING FOR AN EXCITING
                                </span>

                                <span className="block font-bold italic text-[32px] md:text-[44px]">
                                    ROLE WITH <span className='font-spatial-black non-italic text-[32px] md:text-[56px] tracking-tight'>REAL</span>
                                </span>

                                <span className="block tracking-tight font-spatial-black text-[32px] md:text-[56px] leading-[0.9]">
                                    OPPORTUNITIES
                                </span>

                                <span className="block tracking-tight font-spatial-black text-[32px] md:text-[56px]">
                                    FOR GROWTH?
                                </span>
                            </h2>

                            {/* Body */}
                            <p className="font-medium text-sm md:text-base leading-relaxed mt-4 max-w-md opacity-90 ">
                                At Burger Stop, we’re on the lookout for enthusiastic individuals who thrive in a fun, fast-paced environment. We believe work should be both practical and enjoyable. That’s why we offer hands-on training and clear development opportunities to help you build a successful career with our growing brand. If you bring teamwork, drive, and efficiency to the table — you could be the perfect fit for the Burger Stop team.
                            </p>

                            {/* CTA */}
                            <button
                                className="
    mt-8
    inline-flex
    items-center
    justify-center
    bg-primary
    text-secondary
    font-spatial-black
    uppercase
    text-xs
    md:text-sm
    px-6
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

                    {/* RIGHT — IMAGE */}
                    <div className=" w-full md:w-1/2 md:-mt-9 mt-0 md:h-[610px] h-[500px]">
                        <img
                            src={igniteImg}
                            alt="Burger Stop franchise counter"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>
            </section>
        </>
    )
}

export default CareersHeroSection

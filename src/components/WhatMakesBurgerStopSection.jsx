import staffImg from "../assets/burgerstop-staff-1.png"; // your image

export default function WhatMakesBurgerStopSection() {
  return (
    <section className="w-full bg-secondary">
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-12 flex flex-col md:flex-row items-center gap-10">

        {/* LEFT — IMAGE */}
        <div className="w-full md:w-1/2 h-[420px] md:h-[620px]">
          <img
            src={staffImg}
            alt="Burger Stop staff"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT — CONTENT */}
        <div className="w-full md:w-1/2 text-white">

          {/* Heading */}
          <h2 className="uppercase leading-[1.1] mb-6">
            <span className="block font-medium italic text-[35px] md:text-[45px]" style={{transform:'scaleY(1.2)'}}>
              WHAT MAKES
            </span>

            <span className="block font-spatial-black text-primary text-[44px] md:text-[64px] tracking-tight leading-[0.85]">
              BURGER STOP
            </span>

            <span className="block font-medium mt-1 md:mt-0 text-[35px] md:text-[44px]" style={{transform:'scaleY(1.1)'}}>
              DIFFERENT FROM THE REST?
            </span>
          </h2>

          {/* Body */}
          <p className="font-medium text-sm md:text-base leading-relaxed w-full opacity-90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>

          {/* CTA */}
          <button
            className="
              mt-14
              inline-flex
              items-center
              justify-center
              bg-primary
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
            APPLY TODAY
          </button>
        </div>

      </div>
    </section>
  );
}
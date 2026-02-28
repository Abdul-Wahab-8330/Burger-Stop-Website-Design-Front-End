import igniteImg from "../assets/ignite-future.png"; // ← your imported image

export default function FranchiseIgniteSection() {
  return (
    <section className="w-full bg-secondary">
      <div className="max-w-7xl min-h-[590px] mx-auto flex flex-col md:flex-row">

        {/* LEFT — TEXT */}
        <div className="w-full md:w-1/2 flex items-center">
          <div className="px-6 py-12 md:px-12 md:py-20 text-white">

            {/* Heading */}
            <h2 className="font-spatial-black uppercase leading-[0.95] tracking-tight">
              <span className="block font-compact-black text-[36px] md:text-[52px]">
                IGNITING YOUR
              </span>
              <span className="block font-medium italic text-[36px] md:text-[52px] italic">
                FUTURE WITH
              </span>
              <span className="block text-[40px] md:text-[64px]">
                BURGER STOP
              </span>
            </h2>

            {/* Body */}
            <p className="font-medium text-sm md:text-base leading-relaxed mt-6 max-w-md opacity-90">
              Ready to run your own business… lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
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
              START HERE
            </button>
          </div>
        </div>

        {/* RIGHT — IMAGE */}
        <div className="w-full md:w-1/2 md:h-[590px] h-[430px]">
          <img
            src={igniteImg}
            alt="Burger Stop franchise counter"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
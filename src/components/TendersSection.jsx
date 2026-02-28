import { Link } from "react-router-dom";
import tenderImg from "../assets/tender.png";

const tenderData = [
  {
    name: "DOUBLE ANGUS",
    description:
      "Smashed Angus Pattie, topped with fresh cut lettuce, American cheese, house sauce, pickles, caramelised red onions on a soft sesame seed bun.",
    image: tenderImg,
  },
  {
    name: "DOUBLE ANGUS",
    description:
      "Smashed Angus Pattie, topped with fresh cut lettuce, American cheese, house sauce, pickles, caramelised red onions on a soft sesame seed bun.",
    image: tenderImg,
  },
  {
    name: "DOUBLE ANGUS",
    description:
      "Smashed Angus Pattie, topped with fresh cut lettuce, American cheese, house sauce, pickles, caramelised red onions on a soft sesame seed bun.",
    image: tenderImg,
  },
];

export default function TendersSection() {
  return (
    <section className="w-full bg-white px-6 md:px-28 pb-8 mb-9 md:pb-10 mt-[-16px]">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="font-spatial-black text-secondary uppercase text-[42px] md:text-[80px] leading-none tracking-tight mb-12">
          TENDERS
        </h2>

        {/* List */}
        <div className="flex flex-col gap-8">
          {tenderData.map((tender, index) => (
            <div
              key={index}
              className="border border-primary rounded-md overflow-hidden bg-white"
            >
              <div className="flex flex-col md:flex-row">

                {/* IMAGE — touches borders */}
                <div
                  className="
                    w-full
                    md:w-[280px]
                    bg-primary
                    flex
                    items-center
                    justify-center
                    h-[220px]
                    md:h-auto
                  "
                >
                  <img
                    src={tender.image}
                    alt={tender.name}
                    className="max-w-[100%] max-h-[100%] object-contain"
                  />
                </div>

                {/* TEXT — padded separately */}
                <div className="flex flex-col md:flex-row items-center w-full p-6 md:p-8 gap-6">

                  {/* TITLE — centered, stacked */}
                  <div className="md:w-2/5 flex justify-center">
                    <h3
                      className="
                        font-spatial-black
                        uppercase
                        text-primary
                        text-center
                        leading-[0.75]
                        text-[32px]
                        md:text-[44px]
                        tracking-tight
                      "
                      style={{ transform: "scaleX(1.05) scaleY(1.3)" }}
                    >
                      <span className="block text-primary text-sm tracking-wider">
                        THE
                      </span>
                      {tender.name.split(" ").map((word, i) => (
                        <span key={i} className="block">
                          {word}
                        </span>
                      ))}
                    </h3>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="md:w-3/5 text-secondary font-host-grotesk text-sm md:text-base leading-relaxed">
                    {tender.description}
                  </p>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16">
          <Link
            to="/order"
            className="font-spatial-black uppercase bg-secondary text-white px-10 py-4 rounded-full text-sm md:text-base hover:opacity-80 transition"
          >
            ORDER ONLINE
          </Link>
        </div>

      </div>
    </section>
  );
}
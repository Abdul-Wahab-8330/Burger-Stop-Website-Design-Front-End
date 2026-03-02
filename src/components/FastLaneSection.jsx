import fastLaneSticker from "../assets/fast-lane-sticker.png";
import lightningIcon from "../assets/lightning.png";
import fastLaneImg from "../assets/fastlane-image.png";
import { careerUrl } from "@/config/constants";

export default function FastLaneSection() {
    return (
        <section className="w-full ">
            <div className="">

                <style>{`
         .white-panel {
  display: none;
}
@media (min-width: 1024px) {
  .white-panel {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    background: white;
    width: 65%;
    bottom: 0;
    clip-path: polygon(0 0, 100% 0, 82% 100%, 0 100%);
  }
}

          /* Sticker: inline on mobile, absolute on desktop */
          .fast-lane-sticker {
            width: 200px;
            display: block;
            margin-bottom: 10px;
          }
          @media (min-width: 1024px) {
            .fast-lane-sticker {
              position: absolute;
              top: 5%;
              right: 40%;
              width: 310px;
              margin-bottom: 0;
            }
          }
        `}</style>

                {/* CARD WRAPPER */}
                <div className="relative overflow-hidden shadow-lg w-full bg-white lg:bg-primary" style={{ minHeight: '520px' }}>
                    <div className="white-panel" />

                    {/* Content layer */}
                    <div
                        className="relative z-10 flex flex-col lg:flex-row w-full"
                        style={{ minHeight: '520px' }}
                    >

                        {/* LEFT: text content */}
                        <div className="w-full lg:w-[90vw] p-8 md:p-12 flex flex-col justify-center">
                            <h3 className="uppercase leading-[0.95] mb-4">
                                <span className="block font-medium italic text-primary text-[34px] md:text-[55px] font-bold">
                                    JUMP INTO
                                </span>
                                <span className="block tracking-tight font-spatial-black text-primary text-[40px] md:text-[55px]">
                                    BURGER STOP'S
                                </span>
                            </h3>

                            <p className="font-medium text-secondary text-sm leading-relaxed max-w-sm mb-6">
                                Positions available as kitchen staff, front of house in Sale,
                                Manchester &amp; Salford.
                            </p>

                            <ul className="space-y-4 mb-8">
                                {[
                                    { title: "Great Team", desc: "Join a friendly, supportive team where respect and kindness make every shift enjoyable." },
                                    { title: "Free Meals on Shift", desc: "Enjoy a delicious free meal during every shift – our way of keeping you fuelled." },
                                    { title: "Opportunity to Grow", desc: "We believe in promoting from within, giving you real chances to learn and progress." },
                                    { title: "Performance-Based Rewards", desc: "Your hard work doesn't go unnoticed – we reward great performance." },
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <img src={lightningIcon} alt="" className="w-5 h-5 mt-0.5 shrink-0" />
                                        <div>
                                            <p className="font-spatial-black text-md text-primary">{item.title}</p>
                                            <p className="font-medium text-sm leading-relaxed text-primary">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div>
                                <a href={careerUrl} target="_blank" rel="noopener noreferrer" className="bg-secondary text-white font-spatial-black uppercase text-xs px-6 py-3 rounded-full hover:opacity-80 transition">
                                    APPLY TODAY
                                </a>
                            </div>
                        </div>

                        {/* RIGHT: teal area */}
                        <div className="hidden lg:flex w-full lg:w-[90%] flex flex-col items-center justify-center relative py-10 lg:py-0">

                            {/* Sticker — inline on mobile (sits at top of teal), absolute on desktop */}
                            <img
                                src={fastLaneSticker}
                                alt="Fast Lane"
                                className="fast-lane-sticker"
                            />

                            {/* Circle image */}
                            <div
                                className="rounded-full -mt-3 md:mt-0 overflow-hidden"
                                style={{ width: '390px', height: '390px', marginTop: '70px' }}
                            >
                                <img
                                    src={fastLaneImg}
                                    alt="Fast lane service"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
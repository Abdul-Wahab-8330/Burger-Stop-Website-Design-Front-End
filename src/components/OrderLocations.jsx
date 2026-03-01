import { Link } from "react-router-dom";
import { locations } from "@/config/constants";

import uberEatsLogo from "@/assets/ubereats-white.png";
import clickCollectLogo from "@/assets/click-collect-logo.png";
import { scale } from "framer-motion";

export default function OrderLocations() {
    return (
        <section className="w-full bg-white pb-20">


            {/* GRID */}
            <div className="max-w-full pt-2 mx-auto px-6 md:px-9 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {locations.map((location) => {
                    const isComingSoon = location.comingSoon;

                    return (
                        <div key={location.id} className="group">

                            {/* IMAGE CARD */}
                            <Link to={isComingSoon ? "#" : `/locations/${location.slug}`} className="block">
                                <div className="relative overflow-hidden rounded-md cursor-pointer aspect-[4/3]">

                                    {/* IMAGE */}
                                    <img
                                        src={location.image}
                                        alt={location.name}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />

                                    {/* TEAL MULTIPLY OVERLAY */}
                                    <div
                                        className="absolute inset-0"
                                        style={{
                                            backgroundColor: "#00B4C5",
                                            mixBlendMode: "multiply",
                                        }}
                                    />

                                    {/* COMING SOON OVERLAY */}
                                    {isComingSoon && (
                                        <div className="absolute top-4 left-5 flex items-center justify-center" style={{ transform: 'scaleY(1.1)' }}>
                                            <span className="font-spatial-black uppercase text-white text-3xl tracking-widest">
                                                COMING SOON
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </Link>

                            {/* LOCATION NAME */}
                            <h3 className="mt-3 font-spatial-black text-secondary uppercase text-3xl tracking-tight" style={{ transform: "scaleY(1.2)" }}>
                                {location.name}
                            </h3>

                            {/* ORDER BUTTONS */}
                            {!isComingSoon && (
                                <div className="flex gap-4 mt-3">

                                    {/* UBER EATS */}
                                    <a
                                        href={location.orderLinks?.uberEats || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-primary px-5 py-2 rounded-xl"
                                    >
                                        <img
                                            src={uberEatsLogo}
                                            alt="Uber Eats"
                                            className="h-6 w-auto"
                                        />
                                    </a>

                                    {/* CLICK & COLLECT */}
                                    <a
                                        href={location.orderLinks?.clickCollect || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-primary px-5 py-2 rounded-xl"
                                    >
                                        <img
                                            src={clickCollectLogo}
                                            alt="Click & Collect"
                                            className="h-6 w-auto"
                                        />
                                    </a>

                                </div>
                            )}

                        </div>
                    );
                })}

            </div>
        </section>
    );
}
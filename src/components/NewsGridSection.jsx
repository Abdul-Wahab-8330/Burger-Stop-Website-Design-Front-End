import { newsData } from "@/config/constants";
import news1 from "../assets/news-1.png";
import news2 from "../assets/news-2.png";
import news3 from "../assets/news-3.png";
import news4 from "../assets/news-4.png";
import news5 from "../assets/news-5.png";
import news6 from "../assets/news-6.png";
import { Link } from "react-router-dom";


export default function NewsGridSection({ limit = 6 }) {
    const items = typeof limit === "number"
        ? newsData.slice(0, limit)
        : newsData;
    return (
        <section className="w-full bg-white pb-20">
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-6">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item) => (
                        <article key={item.id} className="group cursor-pointer">
                            <Link key={item.id}
                                to={`/news/${item.slug}`}
                                className="group cursor-pointer">
                                {/* IMAGE */}
                                <div
                                    className="relative overflow-hidden rounded-xs"
                                    style={{ aspectRatio: "4 / 3" }}
                                >
                                    <img
                                        src={item.cardImage.url}
                                        alt={item.cardImage.alt}
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />

                                    {/* TEAL OVERLAY */}
                                    <div
                                        className="absolute inset-0"
                                        style={{
                                            backgroundColor: "#00B4C5",
                                            mixBlendMode: "multiply",
                                        }}
                                    />
                                </div>

                                {/* META */}
                                <div className="mt-4">
                                    <span className="block font-inter font-extrabold text-[11px] uppercase tracking-wider text-secondary">
                                        {item.publishLabel}
                                    </span>

                                    <h3 className="font-inter mt-1 font-extrabold text-md leading-snug text-secondary">
                                        {item.title}
                                    </h3>
                                </div>
                            </Link>

                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}
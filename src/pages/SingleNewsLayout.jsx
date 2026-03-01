import {
    Link as LinkIcon,
} from "lucide-react";

import Instagram from "@/assets/instagram-white.png";
import Facebook from "@/assets/facebook-white.png";
import { getRelatedNews } from "@/utils/getRelatedNews";
import { newsData } from "@/config/constants";
import bannerImg from "@/assets/burger-stop-news-banner.png";
import ArticleBodyRenderer from "../components/ArticleBodyRenderer";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import toast from "react-hot-toast";

export default function SingleNewsLayout({ article }) {
    const related = getRelatedNews(newsData, article.slug);

    const currentUrl = window.location.href;

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            toast("Link copied to clipboard!");
        } catch (err) {
            console.warn("Copy failed:", err);
        }
    };

    const shareOnFacebook = () => {
        const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            currentUrl
        )}`;
        window.open(fbUrl, "_blank", "noopener,noreferrer,width=900,height=500");
    };

    const shareOnInstagram = async () => {
        try {
            await navigator.clipboard.writeText(currentUrl);
            toast("Link copied! Paste it into Instagram 📸");
        } catch (err) {
            console.warn("Instagram share failed:", err);
        }
    };

    return (
        <>
            <Navbar transparent={false} />

            <section className="w-full bg-white pb-20 pt-10">

                {/* ================= ARTICLE HEADER + BRAND ================= */}
                <div className="w-full mx-auto">

                    <div className="mb-16">

                        {/* TOP GRID */}
                        <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] lg:gap-10 gap-2 items-start px-5 md:px-32">

                            {/* LEFT — CARD IMAGE + DATE */}
                            <div className="w-full flex flex-col">
                                <img
                                    src={article.cardImage.url}
                                    alt={article.cardImage.alt}
                                    className="w-full h-auto rounded-md object-cover"
                                />
                                <span className="font-inter font-bold text-xs text-gray-700 text-center mt-1 uppercase">
                                    {article.publishLabel}
                                </span>
                            </div>

                            {/* RIGHT — CATEGORY + TITLE */}
                            <div>
                                <span className="block font-medium text-sm mb-1">
                                    {article.category.name}
                                </span>

                                <h1 className="font-spatial-black text-primary uppercase tracking-tight leading-[1.1] text-[38px] md:text-[52px]">
                                    {article.title}
                                </h1>
                            </div>

                        </div>

                        {/* BRAND DIVIDER IMAGE */}
                        <div className="mt-14">
                            <img
                                src={bannerImg}
                                alt="Burger Stop"
                                className=" w-full mx-auto object-contain"
                            />
                        </div>

                    </div>
                </div>

                {/* ================= SIDEBAR + CONTENT ================= */}
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[80px_1fr] gap-10">

                    {/* DESKTOP SIDEBAR */}
                    <aside className="hidden lg:flex flex-col items-center gap-6 pt-2">

                        {/* SHARE */}
                        <button onClick={shareOnFacebook} className="h-10 w-10 flex justify-center items-center bg-primary text-white rounded-full">
                            <img className="w-3 h-5" src={Facebook} alt="Facebook" />
                        </button>
                        <button onClick={shareOnInstagram} className="h-10 w-10 flex justify-center items-center bg-primary text-white rounded-full">
                            <img className="w-5 h-5" src={Instagram} alt="Instagram" />
                        </button>
                        <button onClick={copyLink} className="bg-primary h-10 w-10 flex justify-center items-center text-white rounded-full">
                            <LinkIcon size={17} />
                        </button>

                        <div className="w-px h-10 bg-primary" />

                        {/* RELATED */}
                        {related.map((item) => (
                            <Link
                                key={item.id}
                                to={`/news/${item.slug}`}
                                className="text-center hover:opacity-80 transition"
                            >
                                <img
                                    src={item.cardImage.url}
                                    alt={item.title}
                                    className="w-20 h-20 object-cover rounded-md mx-auto mb-2"
                                />
                                <p className="text-xs font-medium text-secondary leading-tight">
                                    {item.title}
                                </p>
                            </Link>
                        ))}
                    </aside>

                    {/* ARTICLE CONTENT */}
                    <article className="max-w-3xl">

                        {/* HERO IMAGE */}
                        <div className="mb-10 rounded-lg overflow-hidden">
                            <img
                                src={article.heroImage.url}
                                alt={article.heroImage.alt}
                                className="w-full"
                            />
                        </div>

                        {/* MOBILE SHARE */}
                        <div className="flex gap-4 mb-8 lg:hidden">
                            <button onClick={shareOnFacebook} className="h-10 w-10 flex justify-center items-center bg-primary text-white rounded-full">
                                <img className="w-3 h-5" src={Facebook} alt="Facebook" />
                            </button>
                            <button onClick={shareOnInstagram} className="h-10 w-10 flex justify-center items-center bg-primary text-white rounded-full">
                                <img className="w-5 h-5" src={Instagram} alt="Instagram" />
                            </button>
                            <button onClick={copyLink} className="bg-primary h-10 w-10 flex justify-center items-center text-white rounded-full">
                                <LinkIcon size={17} />
                            </button>
                        </div>

                        {/* BODY */}
                        <ArticleBodyRenderer blocks={article.body} />

                    </article>
                </div>

            </section>

            <Footer />
        </>
    );
}
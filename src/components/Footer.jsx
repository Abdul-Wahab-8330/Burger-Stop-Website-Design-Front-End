import { Link } from "react-router-dom";
import logo from "../assets/logo-white.png";
import tiktokWhite from "../assets/tiktok-white.png";
import facebookWhite from "../assets/facebook-white.png";
import instagramWhite from "../assets/instagram-white.png";
import { facebookUrl, instagramUrl, tiktokUrl } from "@/config/constants";

/**
 * Footer Component
 * - Dark secondary bg
 * - Logo + tagline top left
 * - 4 columns: Company, Menu, Locations, Careers
 * - Bottom row: copyright left, social icons right
 * - Fully responsive — stacks on mobile
 */

const footerLinks = {
    company: {
        title: "COMPANY",
        links: [
            { label: "Contact Us", href: "/contact" },
            { label: "About Us", href: "/about" },
            { label: "Blog", href: "/blog" },
        ],
    },
    menu: {
        title: "MENU",
        links: [
            { label: "Order Online", href: "#" },
            { label: "Our Food", href: "#" },
            { label: "Limited Range", href: "#" },
            { label: "Gallery", href: "#" },
        ],
    },
    locations: {
        title: "LOCATIONS",
        links: [
            { label: "Sale", href: "/locations/sale" },
            { label: "Salford", href: "/locations/salford" },
            { label: "Manchester City Centre", href: "/locations/manchester-city-centre" },
        ],
    },
    careers: {
        title: "CAREERS",
        links: [
            { label: "How To Apply", href: "#" },
            { label: "Become A Franchisee", href: "#" },
            { label: "Contact Us", href: "/contact" },
        ],
    },
};

const socialLinks = [
    { name: "TikTok", href: tiktokUrl, icon: tiktokWhite },
    { name: "Facebook", href: facebookUrl, icon: facebookWhite },
    { name: "Instagram", href: instagramUrl, icon: instagramWhite },
];

export default function Footer() {
    return (
        <footer className="w-full bg-secondary">

            {/* Main Footer Content */}
            <div className="w-full px-5 pt-10 pb-6 md:px-10 lg:px-[58px] lg:pt-14 lg:pb-16">
                <div className="flex flex-col gap-6 md:flex-row md:gap-0 md:justify-between">

                    {/* LEFT — Logo + Tagline */}
                    <div className="flex flex-col gap-4 md:max-w-[220px]">
                        <Link to="/" aria-label="Burger Stop Home">
                            <img
                                src={logo}
                                alt="Burger Stop"
                                className="w-[160px] md:w-[210px] object-contain"
                            />
                        </Link>
                        <p className="font-compact-medium text-white opacity-60 text-sm md:text-base leading-relaxed">
                            The unrivalled destination for all burger enthusiasts
                        </p>
                    </div>

                    <hr className="border-white/10 md:hidden" />


                    {/* RIGHT — Link Columns */}
                    <div className="grid grid-cols-2 gap-8 md:flex md:flex-row md:gap-12 lg:gap-16">
                        {Object.values(footerLinks).map((section) => (
                            <div key={section.title} className="flex flex-col gap-3">

                                {/* Column Title */}
                                <h4 className="font-compact-medium font-bold text-white uppercase text-sm md:text-base tracking-wide">
                                    {section.title}
                                </h4>

                                {/* Links */}
                                <ul className="flex flex-col md:gap-2 gap-0.5">
                                    {section.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                to={link.href}
                                                className="font-inter text-white opacity-60 hover:opacity-100 transition-opacity text-xs md:text-[13px] "
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        ))}
                    </div>

                </div>
            </div>

            <hr className="border-white/10 md:hidden md:mt-0 mt-2" />

            {/* Bottom Bar — Copyright + Socials */}
            <div className="w-full px-5 py-4 md:px-10 lg:px-14.5 flex items-center justify-between gap-4">

                {/* Copyright */}
                <p className="font-inter text-white opacity-60 text-xs md:text-sm">
                    © Burger Stop 2025. All Rights Reserved
                </p>

                {/* Social Icons */}
                <div className="flex items-center md:gap-4 gap-3">
                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.name}
                            className="transition-opacity hover:opacity-90 opacity-100"
                        >
                            <img
                                src={social.icon}
                                alt={social.name}
                                className="md:w-[18px] md:h-[20px] w-[16px] h-[18px] object-contain"
                            />
                        </a>
                    ))}
                </div>

            </div>

        </footer>
    );
}
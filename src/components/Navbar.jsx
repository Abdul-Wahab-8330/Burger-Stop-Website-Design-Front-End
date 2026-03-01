import { useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import tiktokWhite from "../assets/tiktok-white.png";
import facebookWhite from "../assets/facebook-white.png";
import instagramWhite from "../assets/instagram-white.png";
import tiktokBlack from "../assets/tiktok-black.png";
import facebookBlack from "../assets/facebook-black.png";
import instagramBlack from "../assets/instagram-black.png";
import menuicon from "../assets/menu-icon.png";
import menuiconblack from "../assets/menu-icon-black.png";
import { facebookUrl, instagramUrl, tiktokUrl } from "@/config/constants";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "LOCATIONS", href: "/locations" },
  { label: "ORDER", href: "/order" },
  { label: "MENU", href: "/menu" },
  { label: "ABOUT", href: "/about" },
  { label: "FRANCHISE", href: "/franchise" },
  { label: "CAREERS", href: "/careers" },
  { label: "NEWS", href: "/news" },
  { label: "CONTACT", href: "/contact" },
];

const socialLinks = [
  { name: "FACEBOOK", href: facebookUrl, iconWhite: facebookWhite, iconBlack: facebookBlack },
  { name: "INSTAGRAM", href: instagramUrl, iconWhite: instagramWhite, iconBlack: instagramBlack },
  { name: "TIKTOK", href: tiktokUrl, iconWhite: tiktokWhite, iconBlack: tiktokBlack },
];

const Navbar = ({ transparent }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const iconColor = transparent ? "#FFFFFF" : "#1E1E1C";

  return (
    <>
      <nav className={` ${transparent ? "bg-transparent absolute" : "bg-white pb-6 mt-[-18px] relative"} w-full top-0 left-0 z-50`}>
        <div className={`w-full flex items-center justify-between ${transparent ? 'md:mt-13 mt-8 py-7' : 'mt-9 md:mt-13 md:py-7' }  md:px-18 px-8`}>

          {/* LEFT — Social Icons */}
          <div className="flex items-center md:gap-4 gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="transition-opacity hover:opacity-70"
              >
                <img
                  src={transparent ? social.iconWhite : social.iconBlack}
                  alt={social.name}
                  className="object-contain w-4.5 h-4.5 md:w-5 md:h-5.75 lg:w-6.5 lg:h-7"
                />
              </a>
            ))}
          </div>

          {/* CENTER — Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link to="/" aria-label="Burger Stop Home">
              <img
                src={logo}
                alt="Burger Stop"
                className="object-contain w-31.5 h-auto md:w-60 lg:w-75.5 lg:h-25.25 hover:scale-105 transition-transform duration-250  "
              />
            </Link>
          </div>

          {/* RIGHT — Menu icon (animated out when open, X animated in) */}
          <div className="relative z-[100]" style={{ width: "56px", height: "32px" }}>
            {/* Menu icon — animates out */}
            <motion.button
              key="menu-btn"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="absolute inset-0 flex items-center justify-end transition-opacity hover:opacity-70"
              initial={false}
              animate={menuOpen ? { opacity: 0, scale: 0.7, pointerEvents: "none" } : { opacity: 1, scale: 1, pointerEvents: "auto" }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {
                transparent ? (
                  <img src={menuicon} className="md:h-8 md:w-14 h-4 w-7 hover:opacity-70 duration-250" alt="Menu" />
                ) : (
                  <img src={menuiconblack} className="md:h-8 md:w-14 h-4 w-7 hover:opacity-70 duration-250" alt="Menu" />
                )
              }
            </motion.button>

            {/* X icon — animates in */}
            <motion.button
              key="close-btn"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="absolute inset-0 flex items-center justify-end transition-opacity hover:opacity-70"
              initial={false}
              animate={menuOpen ? { opacity: 1, scale: 1, rotate: 0, pointerEvents: "auto" } : { opacity: 0, scale: 0.7, rotate: -45, pointerEvents: "none" }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <X className="md:h-8 md:w-14 h-4 w-7" color={iconColor} strokeWidth={2} />
            </motion.button>
          </div>

        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[98] bg-black/40"
              onClick={() => setMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              key="sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              className="fixed top-0 right-0 z-[99] h-full bg-[#00B4C5] flex flex-col w-full md:w-[380px] lg:w-[420px]"
            >
              {/* Scrollable area */}
              <div className="flex-1 overflow-y-auto flex flex-col pb-10">

                {/* Logo at top of sidebar */}
                <div className="px-10 md:px-12 pt-10 pb-6 border-b border-black/10 flex items-center justify-between">
                  <Link to="/" onClick={() => setMenuOpen(false)}>
                    <img src={logo} alt="Burger Stop" className="w-36 md:w-44 h-auto object-contain hover:scale-105 transition-transform duration-250" />
                  </Link>
                  <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="transition-opacity hover:opacity-60">
                    <X size={30} color="#1E1E1C" strokeWidth={2} />
                  </button>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col px-10 md:px-12 pt-2">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + i * 0.04, duration: 0.3, ease: "easeOut" }}
                    >
                      <Link
                        to={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="block font-spatial-black text-[#1E1E1C] uppercase
                          text-2xl md:text-3xl leading-snug tracking-tight
                          py-3 border-b border-black/10
                          transition-opacity hover:opacity-50"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Socials */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.52, duration: 0.3 }}
                  className="flex gap-6 mt-8 mx-10 md:mx-12 pt-6 border-t border-black/10"
                >
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 transition-opacity hover:opacity-60"
                    >
                      <img src={social.iconBlack} alt={social.name} className="w-4.5 h-4.5 object-contain" />
                      <span className="font-spatial-black text-[#1E1E1C] text-xs tracking-widest uppercase">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </motion.div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
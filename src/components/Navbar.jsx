import { useState } from "react";
import { Menu, X } from "lucide-react";

// Replace with your actual asset paths once downloaded from Figma
import logo from "../assets/logo.png";
import tiktokWhite from "../assets/tiktok-white.png";
import facebookWhite from "../assets/facebook-white.png";
import instagramWhite from "../assets/instagram-white.png";
import tiktokBlack from "../assets/tiktok-black.png";
import facebookBlack from "../assets/facebook-black.png";
import instagramBlack from "../assets/instagram-black.png";
import menuicon from "../assets/menu-icon.png";

/**
 * Navbar Component — Always transparent background
 * - transparent (bool):
 *     true  = white icons + white hamburger  (Homepage — sits over dark hero)
 *     false = black icons + black hamburger  (All other pages — sits over white/light bg)
 */
const Navbar = ({ transparent }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const iconColor = transparent ? "#FFFFFF" : "#1E1E1C";

  const socialLinks = [
    {
      name: "TikTok",
      href: "https://tiktok.com",
      iconWhite: tiktokWhite,
      iconBlack: tiktokBlack,
    },
    {
      name: "Facebook",
      href: "https://facebook.com",
      iconWhite: facebookWhite,
      iconBlack: facebookBlack,
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      iconWhite: instagramWhite,
      iconBlack: instagramBlack,
    },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50">
      <div className="w-full flex items-center justify-between mt-13 md:px-18 px-14 py-7">

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
                className=" object-contain w-4.5 h-4.5 md:w-5 md:h-5.75 lg:w-6.5 lg:h-7"
              />
            </a>
          ))}
        </div>

        {/* CENTER — Logo (centered relative to full navbar width) */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <a href="/" aria-label="Burger Stop Home">
            <img
              src={logo}
              alt="Burger Stop"
              className={`${`object-contain w-31.5 h-auto md:w-60 lg:w-75.5 lg:h-25.25`}`}
            />
          </a>
        </div>

        {/* RIGHT — Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="transition-opacity hover:opacity-70"
        >
          {menuOpen
            ? <X className="md:h-8 md:w-14 h-4 w-7" color={iconColor} strokeWidth={2} />
            // adjust for smaller screens

            : <img src={menuicon} className="md:h-8 md:w-14 h-4 w-7" color={iconColor} strokeWidth={2} />
          }
        </button>
      </div>

      {menuOpen && (
        <div className="
          w-full
          px-5 py-6
          md:px-10
          lg:px-14.5
          bg-secondary
          border-t border-white/10
        ">
          <p className="font-compact-medium text-sm tracking-wide text-white">
            Menu coming soon
          </p>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
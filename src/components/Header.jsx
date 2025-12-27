// -------------------------------------------------------------
// Header.jsx — Site Navigation Bar
// -------------------------------------------------------------
// ✅ Features:
// - Displays the CorePath Impact logo (left side)
// - Navigation links (center/right)
// - Responsive toggle button for mobile screens
// - Styled in CorePath colors (turquoise + gold hover effects)
// -------------------------------------------------------------

import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  // State to control mobile menu open/close
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Programs", link: "/programs" },
    { name: "Families", link: "/families" },
    { name: "Schools", link: "/schools" },
    { name: "Churches", link: "/churches" },
    { name: "Organizations", link: "/organizations" },
    { name: "VDC Toolkit", link: "/vdc-toolkit" },
    { name: "Courses", link: "/courses" },
  ];

  return (
    <header className="bg-turquoise text-white fixed w-full top-0 left-0 z-50 shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* ---------- LOGO SECTION ---------- */}
        <div className="flex items-center space-x-3">
          {/* ✅ LOGO IMAGE — make sure the path is correct */}
          <img
            src="/images/corepath-logo.png"
            alt="CorePath Impact Logo"
            className="h-10 w-auto"
          />
          <span className="font-extrabold text-lg tracking-wide">
            CorePath Impact
          </span>
        </div>

        {/* ---------- DESKTOP MENU ---------- */}
        <ul className="hidden md:flex space-x-6 text-sm font-semibold">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link to={item.link} className="hover:text-gold transition">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* ---------- MOBILE MENU BUTTON ---------- */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Hamburger icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              // Close (X) icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* ---------- MOBILE MENU DROPDOWN ---------- */}
      {isOpen && (
        <div className="md:hidden bg-turquoise/95 text-center pb-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className="block text-white hover:text-gold transition"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

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

  const solutionItems = [
    { name: "For Parents", link: "/solutions/parents" },
    { name: "For Teens & Adults", link: "/solutions/teens-adults" },
    { name: "For Schools", link: "/solutions/schools" },
    {
      name: "For Organizations & Workplaces",
      link: "/solutions/organizations-workplaces",
    },
    {
      name: "Discovery & Diagnostic",
      link: "/solutions/discovery-diagnostic",
    },
  ];

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Solutions", link: "/solutions", children: solutionItems },
    { name: "Products", link: "/products" },
    { name: "Courses", link: "/courses" },
    { name: "Resources", link: "/resources" },
  ];

  const authItems = [
    { name: "Login", link: "/login" },
    { name: "Get Started", link: "/get-started" },
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
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex space-x-6 text-sm font-semibold">
            {navItems.map((item) => {
              if (!item.children) {
                return (
                  <li key={item.name}>
                    <Link to={item.link} className="hover:text-gold transition">
                      {item.name}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={item.name} className="relative group">
                  <Link to={item.link} className="hover:text-gold transition">
                    {item.name}
                  </Link>
                  <div className="absolute left-0 top-full pt-2 hidden group-hover:block group-focus-within:block">
                    <div className="bg-turquoise text-white rounded shadow-md py-2 min-w-48">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.link}
                          className="block px-4 py-2 text-sm hover:text-gold transition"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <ul className="flex items-center gap-4 text-xs font-semibold">
            {authItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.link}
                  className={
                    item.name === "Get Started"
                      ? "px-3 py-1 rounded-full bg-white text-turquoise hover:opacity-90 transition"
                      : "hover:text-gold transition"
                  }
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

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
          {navItems.map((item) => {
            if (!item.children) {
              return (
                <Link
                  key={item.name}
                  to={item.link}
                  className="block text-white hover:text-gold transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              );
            }

            return (
              <div key={item.name}>
                <Link
                  to={item.link}
                  className="block text-white hover:text-gold transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
                <div className="mt-2 space-y-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      to={child.link}
                      className="block text-white/90 hover:text-gold transition"
                      onClick={() => setIsOpen(false)}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="pt-2 border-t border-white/20" />
          {authItems.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className="block text-white hover:text-gold transition text-sm"
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

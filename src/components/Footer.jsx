// -------------------------------------------------------------
// Footer.jsx — CorePath Impact Global Footer (Dark Theme w/ Light Top Boundary)
// -------------------------------------------------------------

import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUpCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100 pt-16 pb-6 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* --- Top Lighter Boundary (Soft Glow) --- */}
      <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-b from-teal-300/40 to-transparent shadow-[0_-8px_15px_rgba(13,148,136,0.3)]"></div>

      {/* --- Decorative Overlay (Faint Pattern) --- */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/pattern-bg.png)`,
        }}
      ></div>

      {/* --- Main Footer Content --- */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-4 gap-10 mb-10">
        {/* --- BRAND & MISSION --- */}
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/images/corepath-logo.png`}
            alt="CorePath Impact Logo"
            className="w-24 mb-4"
          />
          <p className="text-sm leading-relaxed text-gray-300">
            Making values teachable, trainable, and liveable across families,
            schools, communities, and organizations.
          </p>
        </div>

        {/* --- QUICK LINKS --- */}
        <div>
          <h4 className="text-teal-400 font-semibold text-lg mb-4 uppercase tracking-wide">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="/" className="hover:text-teal-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-teal-400 transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/toolkit-store"
                className="hover:text-teal-400 transition-colors"
              >
                Toolkit Store
              </a>
            </li>
            <li>
              <a
                href="/programs"
                className="hover:text-teal-400 transition-colors"
              >
                Programs
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-teal-400 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* --- CONTACT INFO --- */}
        <div>
          <h4 className="text-teal-400 font-semibold text-lg mb-4 uppercase tracking-wide">
            Contact Us
          </h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="text-teal-400 mt-[2px]" />
              <span>
                Nairobi, Kenya <br />
                Kampala, Uganda
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-teal-400" />
              <a
                href="tel:+254720979570"
                className="hover:text-teal-400 transition-colors"
              >
                +254 720 979 570
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-teal-400" />
              <a
                href="mailto:info@corepathimpact.com"
                className="hover:text-teal-400 transition-colors"
              >
                info@corepathimpact.com
              </a>
            </li>
          </ul>
        </div>

        {/* --- CONNECT & CTA --- */}
        <div>
          <h4 className="text-teal-400 font-semibold text-lg mb-4 uppercase tracking-wide">
            Connect With Us
          </h4>

          {/* --- SOCIAL MEDIA ICONS --- */}
          <div className="flex gap-4 mb-6">
            {[
              { icon: Facebook, link: "https://facebook.com/corepathimpact" },
              { icon: Instagram, link: "https://instagram.com/corepathimpact" },
              {
                icon: Linkedin,
                link: "https://linkedin.com/company/corepathimpact",
              },
              { icon: Youtube, link: "https://youtube.com/@corepathimpact" },
            ].map(({ icon: Icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-teal-400 hover:text-black p-2 rounded-full transition-all duration-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          <a
            href="/partner"
            className="inline-block bg-teal-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-teal-300 transition-all duration-300 shadow-md"
          >
            Partner With Us
          </a>
        </div>
      </div>

      {/* --- SEPARATOR LINE + COPYRIGHT --- */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} CorePath Impact Ltd. All Rights Reserved.
        </p>
        <p className="text-xs mt-1">
          Designed with ❤️ by CorePath Impact |
          <a
            href="https://www.corepathimpact.com"
            className="hover:text-teal-400 ml-1"
          >
            www.corepathimpact.com
          </a>
        </p>
      </div>

      {/* --- SCROLL TO TOP BUTTON --- */}
      <a
        href="#top"
        className="absolute bottom-8 right-8 bg-teal-400 hover:bg-teal-300 text-black p-3 rounded-full shadow-lg transition-all duration-300"
        title="Back to Top"
      >
        <ArrowUpCircle size={24} />
      </a>
    </footer>
  );
}

// -------------------------------------------------------------
// UpcomingEvents.jsx — "Upcoming Programs & Events"
// -------------------------------------------------------------
// 🧭 Purpose:
// Displays upcoming CorePath Impact trainings, bootcamps, and
// community events. Includes fallback demo data if backend is offline.
// -------------------------------------------------------------

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";

// 🌿 Fallback events (for demo / when backend not ready)
const FALLBACK_EVENTS = [
  {
    id: 1,
    date: "30th Oct 2025",
    title: "VDP Coach Certification – Cohort 2",
    location: "🌐 Virtual / Global",
    description:
      "Train to become a Certified Values-Driven Parenting Coach and transform families through structured mentorship and accountability.",
    link: "/vdp-cc",
  },
  {
    id: 2,
    date: "8th–12th Dec 2025",
    title: "Teen Bootcamp: “Becoming”",
    location: "🏫 Rockfield Senior School, Kiserian",
    description:
      "A 5-day residential bootcamp guiding teens through purpose discovery, discipline, and identity formation.",
    link: "/teen-bootcamp",
  },
  {
    id: 3,
    date: "Continuous",
    title: "Parenting Accountability Groups (PAGs)",
    location: "🕊 Nationwide (Church-based)",
    description:
      "Join small accountability circles of parents who grow together, reflect weekly, and reinforce value-based parenting at home.",
    link: "/pag",
  },
];

function UpcomingEvents() {
  const [events, setEvents] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // ⚙️ Fetch events from backend or fallback gracefully
  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch("https://your-backend-url.com/api/events");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.warn("⚠️ Backend not available, using fallback data:", error);
        setEvents(FALLBACK_EVENTS);
      } finally {
        setIsLoaded(true);
      }
    }
    fetchEvents();
  }, []);

  // 🎨 UI Render
  return (
    <section className="bg-white text-gray-800 py-24 px-6 md:px-12 lg:px-20">
      {/* --- HEADER --- */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-teal-800 mb-4">
          Upcoming Programs & Events
        </h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Join our upcoming training programs, bootcamps, and community
          initiatives designed to equip, empower, and multiply impact.
        </p>
      </div>

      {/* --- EVENT CARDS --- */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {isLoaded &&
          events.map((event, index) => (
            <motion.div
              key={event.id}
              className="bg-gradient-to-b from-teal-800 to-teal-900 text-white rounded-2xl shadow-lg p-8 flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.03] transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div>
                <div className="flex items-center gap-2 mb-3 text-yellow-300 font-semibold text-sm uppercase tracking-wide">
                  <CalendarDays size={18} />
                  <span>{event.date}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-yellow-100 leading-snug">
                  {event.title}
                </h3>
                <div className="flex items-center gap-2 mb-4 text-teal-100 text-sm">
                  <MapPin size={16} />
                  <span>{event.location}</span>
                </div>
                <p className="text-white/90 leading-relaxed mb-6">
                  {event.description}
                </p>
              </div>

              {/* --- CTA Button --- */}
              <Link
                to={event.link}
                className="mt-auto inline-flex items-center gap-2 bg-yellow-400 text-teal-900 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-300 hover:scale-105 transition-all duration-300"
              >
                Learn More <ArrowRight size={18} />
              </Link>
            </motion.div>
          ))}
      </div>

      {/* --- FOOTER CTA --- */}
      <div className="text-center mt-20">
        <Link
          to="/events"
          className="inline-block bg-teal-900 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-teal-700 transition-all duration-300"
        >
          View All Events
        </Link>
      </div>
    </section>
  );
}

export default UpcomingEvents;

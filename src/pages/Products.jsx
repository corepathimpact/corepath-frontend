import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const items = [
    { name: "VDP", note: "Values-Driven Parenting" },
    { name: "VDL", note: "Values-Driven Life & Leadership" },
    { name: "VIE", note: "Values-Ingrained Education" },
    { name: "VDO", note: "Values-Driven Organizations" },
    { name: "Pathfinder", note: "" },
    { name: "Character Booth", note: "" },
    { name: "VDC Toolkit", note: "", link: "/vdc-toolkit" },
  ];

  return (
    <section className="bg-white text-gray-800 font-inter">
      <div className="bg-gradient-to-r from-teal-900 to-teal-700 text-white py-20 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight">
            Products
          </h1>
          <p className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
            Explore CorePath Impact products. Each solution page maps to the
            right products for its audience.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6">
          Product List
        </h2>
        <ul className="space-y-3 text-gray-700 text-lg">
          {items.map((p) => (
            <li key={p.name} className="flex flex-wrap gap-x-3">
              {p.link ? (
                <Link
                  to={p.link}
                  className="font-semibold text-teal-700 hover:underline"
                >
                  {p.name}
                </Link>
              ) : (
                <span className="font-semibold">{p.name}</span>
              )}
              {p.note ? (
                <span className="text-gray-600">— {p.note}</span>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

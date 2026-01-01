import React, { useEffect } from "react";

export default function Resources() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-white text-gray-800 font-inter">
      <div className="bg-gradient-to-r from-teal-900 to-teal-700 text-white py-20 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight">
            Resources
          </h1>
          <p className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
            Guides, tools, and materials to support families, schools,
            organizations, and communities.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-gray-700 text-lg">
          Resources will be published here.
        </p>
      </div>
    </section>
  );
}

import React from "react";
import Card from "../../components/ui/Card";
import SectionHeader from "../../components/ui/SectionHeader";

const SECTIONS = [
  "What is CorePath Impact",
  "What You Have Enrolled Into",
  "Maintaining Consistent Learning",
  "Growing My Impact",
  "Trainings",
  "Product Highlights",
  "Marketing Resources",
  "Events & Recognition",
];

export default function WelcomePage() {
  return (
    <div>
      <SectionHeader
        title="Welcome"
        subtitle="Vertical overview (placeholder content; API-backed later)."
      />

      <div className="mt-6 space-y-4">
        {SECTIONS.map((title) => (
          <Card
            key={title}
            title={title}
            subtitle="Placeholder text blocks — do not infer business logic."
          >
            <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
              <p>
                This section is intentionally placeholder-only until the
                backoffice APIs are connected. Content and sequencing will be
                driven by governed orchestration and user state.
              </p>
              <p className="text-slate-600">
                Replace with structured copy from product/governance docs and
                server-provided modules.
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}



import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/ui/Card";
import SectionHeader from "../../components/ui/SectionHeader";
import StatCard from "../../components/ui/StatCard";
import { mockCarouselSlides, mockMonthTabs, mockQuickTiles } from "./mock/backofficeMock";
import { useBackoffice } from "../../context/BackofficeContext";

function HeroCarousel() {
  const [idx, setIdx] = useState(0);
  const [nextIdx, setNextIdx] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const slides = mockCarouselSlides;

  const slide = slides[idx] || slides[0];
  const nextSlide =
    nextIdx !== null && nextIdx !== undefined ? slides[nextIdx] || slides[0] : null;

  const advanceTo = (targetIdx) => {
    if (!Array.isArray(slides) || slides.length === 0) return;
    if (isAnimating) return;
    const safeTarget = ((targetIdx % slides.length) + slides.length) % slides.length;
    if (safeTarget === idx) return;

    setNextIdx(safeTarget);
    // Render the next image off-screen first, then trigger the transition.
    setTimeout(() => setIsAnimating(true), 20);

    // Match Tailwind transition duration below (500ms)
    setTimeout(() => {
      setIdx(safeTarget);
      setNextIdx(null);
      setIsAnimating(false);
    }, 520);
  };

  useEffect(() => {
    if (!Array.isArray(slides) || slides.length <= 1) return undefined;

    const id = setInterval(() => {
      if (isAnimating) return;
      advanceTo((idx + 1) % slides.length);
    }, 6000);

    return () => clearInterval(id);
  }, [slides.length, idx, isAnimating]);

  return (
    <Card
      className="h-full"
      title="Hero Carousel"
      subtitle="Placeholder slides — replace with orchestrator-driven content when APIs are connected."
      actions={
        <div className="flex items-center gap-2">
          <button
            onClick={() => advanceTo((idx - 1 + slides.length) % slides.length)}
            className="h-9 px-3 rounded-xl border border-slate-200 text-sm font-bold hover:bg-slate-50"
          >
            Prev
          </button>
          <button
            onClick={() => advanceTo((idx + 1) % slides.length)}
            className="h-9 px-3 rounded-xl border border-slate-200 text-sm font-bold hover:bg-slate-50"
          >
            Next
          </button>
        </div>
      }
    >
      <div className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden min-h-[320px]">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 p-6 flex flex-col justify-between min-h-[320px]">
            <div>
              <div className="text-xs uppercase tracking-widest font-bold text-slate-500">
                Slide {idx + 1} / {slides.length}
              </div>
              <div className="mt-2 text-2xl md:text-3xl font-extrabold text-slate-900">
                {slide.title}
              </div>
              <div className="mt-2 text-sm text-slate-600 max-w-2xl">
                {slide.subtitle}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/my-office"
                className="px-5 py-2 rounded-full bg-teal-900 text-white font-semibold hover:bg-teal-800 text-sm"
              >
                Go to My Office
              </Link>
              <Link
                to="/welcome"
                className="px-5 py-2 rounded-full border border-slate-300 text-slate-800 font-semibold hover:bg-slate-50 text-sm"
              >
                Learn more
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-200 relative overflow-hidden min-h-[220px]">
            {/* Current image */}
            {slide.imageSrc ? (
              <img
                src={slide.imageSrc}
                alt={slide.imageAlt || slide.title || "Slide image"}
                className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out ${
                  isAnimating ? "-translate-x-full" : "translate-x-0"
                }`}
                loading="lazy"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-sm text-slate-600">
                Image placeholder
              </div>
            )}

            {/* Next image (slides in from right, ending at 0) */}
            {nextIdx !== null && nextSlide && nextSlide.imageSrc ? (
              <img
                src={nextSlide.imageSrc}
                alt={nextSlide.imageAlt || nextSlide.title || "Next slide image"}
                className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out ${
                  isAnimating ? "translate-x-0" : "translate-x-full"
                }`}
                loading="lazy"
              />
            ) : null}

            {/* If animating but next image is missing */}
            {nextIdx !== null && nextSlide && !nextSlide.imageSrc ? (
              <div
                className={`absolute inset-0 flex items-center justify-center text-sm text-slate-600 transition-transform duration-500 ease-in-out ${
                  isAnimating ? "translate-x-0" : "translate-x-full"
                }`}
              >
                Image placeholder
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </Card>
  );
}

function QuickAccessTiles() {
  return (
    <Card title="Quick Access" subtitle="Shortcuts (placeholder)">
      <div className="grid grid-cols-2 gap-3">
        {mockQuickTiles.map((t) => (
          <Link
            key={t.title}
            to={t.to}
            className="rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 transition p-4"
          >
            <div className="text-sm font-extrabold text-slate-900">{t.title}</div>
            <div className="mt-1 text-xs text-slate-600">Open</div>
          </Link>
        ))}
      </div>
    </Card>
  );
}

function PerformanceDashboard() {
  const { performance, training, derived } = useBackoffice() || {};
  const [tab, setTab] = useState(mockMonthTabs[0]);
  const tabs = useMemo(() => mockMonthTabs, []);
  const apatToday = performance?.apatToday ?? 0;
  const apatAverage = performance?.apatAverage ?? 0;
  const onTrack = apatToday >= 60;
  const completed = derived?.trainingCompletionPct === 100;

  return (
    <div className="mt-8">
      <SectionHeader
        title="Performance Dashboard"
        subtitle="APAT-aware surfaces will connect here later (no business logic embedded)."
        right={
          <div className="flex items-center gap-2">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`h-9 px-3 rounded-xl text-xs font-extrabold tracking-wide transition ${
                  tab === t ? "bg-teal-900 text-white" : "border border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        }
      />

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card
          title={`APAT Trend (${tab})`}
          subtitle={onTrack ? "You’re on track" : "Catch up today"}
        >
          <div className="h-40 rounded-2xl border border-dashed border-slate-300 bg-slate-50 flex items-center justify-center text-sm text-slate-500">
            Chart placeholder
          </div>
        </Card>
        <Card title="View My Performance" subtitle="Placeholder">
          <div className="grid grid-cols-2 gap-3">
            <StatCard
              label="APAT Today"
              value={apatToday}
              tone={apatToday < 60 ? "warn" : "good"}
            />
            <StatCard label="APAT Average" value={apatAverage} />
          </div>
          {apatToday < 60 ? (
            <div className="mt-3 text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2">
              Low APAT warning (UI-only): try completing today’s practices.
            </div>
          ) : null}
        </Card>
        <Card title="My Financials" subtitle="Placeholder">
          <StatCard label="Wallet" value="—" />
        </Card>
        <Card title="View PAG" subtitle="Placeholder">
          <StatCard label="PAG Status" value="—" />
        </Card>
        <Card title="Leaderboard" subtitle="Placeholder">
          <div className="space-y-2 text-sm text-slate-700">
            <div className="flex items-center justify-between">
              <span>1. Member A</span>
              <span className="font-bold">—</span>
            </div>
            <div className="flex items-center justify-between">
              <span>2. Member B</span>
              <span className="font-bold">—</span>
            </div>
            <div className="flex items-center justify-between">
              <span>3. Member C</span>
              <span className="font-bold">—</span>
            </div>
          </div>
        </Card>
        <Card title="Training Summary" subtitle="Placeholder">
          <div className="grid grid-cols-2 gap-3">
            <StatCard label="Current Value" value={training?.currentValue || "—"} />
            <StatCard
              label="Values Completion"
              value={`${derived?.trainingCompletionPct ?? 0}%`}
              tone={completed ? "good" : "neutral"}
            />
          </div>
          {completed ? (
            <div className="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-xl px-3 py-2">
              Completion state (UI-only): all values covered.
            </div>
          ) : null}
        </Card>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div>
      <SectionHeader
        title="Home"
        subtitle="VDP/VDL Parent Backoffice (frontend generation)."
      />

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-4 min-h-[70vh]">
        <div className="lg:col-span-9">
          <HeroCarousel />
        </div>
        <div className="lg:col-span-3">
          <QuickAccessTiles />
        </div>
      </div>

      <PerformanceDashboard />
    </div>
  );
}



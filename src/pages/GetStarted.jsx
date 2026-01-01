import React, { useEffect } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { isAuthenticated } from "../services/authStorage";

function ScrollTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

function GetStartedGateway() {
  return (
    <div
      className="bg-slate-50 text-slate-900 leading-snug"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <ScrollTopOnMount />

      <header className="bg-gradient-to-br from-teal-950 via-teal-800 to-teal-700 text-white pt-16 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
            Get Started with CorePath
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-teal-100 max-w-3xl opacity-90 font-medium leading-snug">
            Choose the path that best fits your current context. CorePath
            supports individuals, families, schools, and organizations through
            structured, values-driven systems.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-[2.5rem] border border-slate-200 bg-white shadow-sm p-7 sm:p-8">
            <div className="inline-block px-3 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold uppercase tracking-widest mb-3">
              Individual / Family
            </div>
            <p className="text-slate-700 text-sm sm:text-base leading-snug mb-6">
              For parents, individuals, and households.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                to="/login?next=%2Fget-started%2Findividual-family"
                className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-slate-950 text-white font-bold hover:bg-slate-800 transition text-sm"
              >
                Sign In
              </Link>
              <Link
                to="/create-account?next=%2Fget-started%2Findividual-family"
                className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-teal-800 text-white font-bold hover:bg-teal-700 transition text-sm"
              >
                Create Account
              </Link>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-slate-200 bg-white shadow-sm p-7 sm:p-8">
            <div className="inline-block px-3 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold uppercase tracking-widest mb-3">
              Organization / School
            </div>
            <p className="text-slate-700 text-sm sm:text-base leading-snug mb-6">
              For schools, churches, NGOs, and organizations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                to="/login?next=%2Fget-started%2Forganization-school"
                className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-slate-950 text-white font-bold hover:bg-slate-800 transition text-sm"
              >
                Sign In
              </Link>
              <Link
                to="/create-account?next=%2Fget-started%2Forganization-school"
                className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-emerald-700 text-white font-bold hover:bg-emerald-600 transition text-sm"
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500 leading-snug">
            This page helps you choose the right path. Pricing and platform
            access come later.
          </p>
        </div>
      </main>
    </div>
  );
}

function GetStartedLoginGate({
  badge,
  title,
  description,
  gradientClass,
  accentButtonClass,
  nextPath,
}) {
  const nextParam = encodeURIComponent(nextPath);

  return (
    <div
      className="bg-slate-50 text-slate-900 leading-snug"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <ScrollTopOnMount />

      <header
        className={`${gradientClass} text-white pt-16 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-6`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="inline-block px-3 py-0.5 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest mb-3">
            {badge}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
            {title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl opacity-90 font-medium leading-snug">
            {description}
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm p-7 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
            Please sign in to continue
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-snug mb-6">
            This page is available after login.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              to={`/login?next=${nextParam}`}
              className="bg-slate-950 text-white px-6 py-4 rounded-2xl font-black hover:bg-slate-800 transition shadow-lg text-base text-center"
            >
              I Have an Account
              <span className="block text-sm font-semibold opacity-90 mt-1">
                Sign In
              </span>
            </Link>
            <Link
              to={`/create-account?next=${nextParam}`}
              className={`${accentButtonClass} px-6 py-4 rounded-2xl font-black transition shadow-lg text-base text-center`}
            >
              I’m New
              <span className="block text-sm font-semibold opacity-90 mt-1">
                Create Account
              </span>
            </Link>
          </div>

          <div className="mt-6">
            <Link
              to="/get-started"
              className="block text-sm font-semibold text-slate-700 hover:text-slate-900"
            >
              Back to Get Started
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

function GetStartedIndividualFamily() {
  if (!isAuthenticated()) {
    return (
      <GetStartedLoginGate
        badge="Individual / Family"
        title="For parents, individuals, and households"
        description="Sign in or create an account to access the Individual / Family onboarding content."
        gradientClass="bg-gradient-to-br from-teal-950 via-teal-800 to-teal-700"
        accentButtonClass="bg-teal-500 text-teal-950 hover:bg-teal-400"
        nextPath="/get-started/individual-family"
      />
    );
  }

  return (
    <div
      className="bg-slate-50 text-slate-900 leading-relaxed"
      style={{ fontFamily: "'Inter', sans-serif", scrollBehavior: "smooth" }}
    >
      <ScrollTopOnMount />

      <header className="bg-gradient-to-br from-teal-950 via-teal-800 to-teal-700 text-white pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                Get Started with Values-Driven Parenting (VDP)
              </h1>
              <p className="text-xl md:text-2xl text-teal-100 mb-10 max-w-2xl opacity-90 font-medium">
                Begin a structured, values-driven approach to character
                formation at home — designed for real families, real schedules,
                and real challenges.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#entry"
                  className="bg-teal-400 text-teal-950 px-10 py-4 rounded-2xl font-black hover:bg-white transition shadow-xl text-lg"
                >
                  Continue
                </a>
                <a
                  href="#journey"
                  className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-10 py-4 rounded-2xl font-bold hover:bg-white/20 transition text-lg"
                >
                  View the 8-Step Journey
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-24">
            <section id="about">
              <div className="inline-block px-4 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-widest mb-4">
                The Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8">
                What You’re Starting
              </h2>
              <div className="space-y-6 text-xl text-slate-700 leading-relaxed">
                <p className="border-l-4 border-teal-500 pl-6 italic">
                  Values-Driven Parenting (VDP) is a structured parenting system
                  that helps parents intentionally train values at home through
                  daily practices, consistent reinforcement, and clear
                  accountability.
                </p>
                <p>
                  VDP moves parenting beyond reaction and correction into
                  intentional character formation — helping children develop
                  habits that shape identity and long-term life outcomes.
                </p>
              </div>
            </section>

            <section id="journey" className="space-y-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
                  What Happens When You Enroll
                </h2>
                <p className="text-teal-600 font-bold uppercase tracking-widest text-sm">
                  Your VDP Journey Includes
                </p>
              </div>

              <div className="space-y-8">
                <div className="group relative flex gap-6 p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center font-black text-xl text-slate-400 group-hover:bg-teal-500 group-hover:text-white transition">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                      Step 1: Create or Sign In to Your CorePath Account
                    </h4>
                    <p className="text-slate-600">
                      Set up your secure parent profile and access the VDP
                      platform.
                    </p>
                  </div>
                </div>

                <div className="group relative flex gap-6 p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center font-black text-xl text-slate-400 group-hover:bg-teal-500 group-hover:text-white transition">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                      Step 2: Set Up Your Family &amp; Child Profiles
                    </h4>
                    <p className="text-slate-600">
                      Add your children and establish your home’s
                      values-training context.
                    </p>
                  </div>
                </div>

                <div className="group relative flex gap-6 p-8 bg-teal-50 rounded-3xl border-2 border-teal-200 shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-500 rounded-2xl flex items-center justify-center font-black text-xl text-white">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-teal-900 mb-2">
                      Step 3: Discover Your Child’s Natural Predisposition{" "}
                      <span className="ml-2 text-xs bg-teal-200 text-teal-800 px-2 py-1 rounded">
                        RECOMMENDED
                      </span>
                    </h4>
                    <p className="text-teal-800">
                      Gain insight into how your child is naturally wired so
                      values training and discipline are personalized and fair
                      from the start.
                    </p>
                  </div>
                </div>

                <div className="group relative flex gap-6 p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center font-black text-xl text-slate-400 group-hover:bg-teal-500 group-hover:text-white transition">
                    4
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                      Step 4: Begin Your First Value Training Cycle
                    </h4>
                    <p className="text-slate-600">
                      Engage in daily, practical values training supported by
                      clear practices, reflections, and reinforcement tools.
                    </p>
                  </div>
                </div>

                <div className="group relative flex gap-6 p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center font-black text-xl text-slate-400 group-hover:bg-teal-500 group-hover:text-white transition">
                    5
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                      Step 5: Track Growth and Reinforce Progress
                    </h4>
                    <p className="text-slate-600">
                      Monitor habit formation, behavior shifts, and consistency
                      over time — focusing on progress, not perfection.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-slate-900 text-white p-12 rounded-[3rem] shadow-2xl space-y-12">
              <h2 className="text-3xl font-extrabold text-center">
                Built-In Support That Keeps You Consistent
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center font-black text-slate-950 text-sm">
                      6
                    </span>
                    <h3 className="text-xl font-bold">
                      Personal Accountability Group (PAG)
                    </h3>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    You are connected to a small group of fellow parents walking
                    the same journey. PAGs provide encouragement, shared
                    learning, accountability, and motivation — helping parents
                    stay consistent when parenting gets challenging.
                  </p>
                  <p className="text-teal-400 font-bold italic">
                    "Transformation happens faster in community."
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center font-black text-slate-950 text-sm">
                      7
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      Parenting Coach Access
                    </h3>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Each PAG is supported by a trained Parenting Coach who
                    provides guidance, clarification, and encouragement —
                    helping parents confidently apply VDP principles in
                    real-life parenting situations.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-amber-50 border-2 border-amber-100 p-12 rounded-[3rem]">
              <h2 className="text-3xl font-extrabold text-amber-950 mb-8 leading-tight">
                Growth, Contribution, and Impact Sharing (Optional)
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Step 8: Grow Consistently and Multiply Impact Through
                    Sharing
                  </h3>
                  <p className="text-slate-700 text-lg mb-6">
                    CorePath recognizes that sustained growth and responsible
                    sharing strengthen families and communities. As you
                    consistently complete your learning, apply it at home, and
                    share VDP, you become eligible for rewards.
                  </p>
                </div>

                <div className="bg-white p-10 rounded-3xl border border-amber-200 shadow-sm text-center">
                  <p className="text-slate-500 text-sm uppercase font-black tracking-widest mb-6">
                    The CorePath Motto
                  </p>
                  <div className="space-y-4">
                    <p className="text-4xl font-black text-slate-900 tracking-tight leading-none">
                      You grow by learning.
                    </p>
                    <p className="text-4xl font-black text-teal-600 tracking-tight leading-none">
                      You earn by helping others grow.
                    </p>
                  </div>
                  <p className="mt-8 text-slate-500 text-sm max-w-lg mx-auto italic">
                    Participation in impact sharing is optional and never
                    replaces the core purpose of parenting transformation.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <aside className="lg:col-span-4">
            <div
              className="space-y-8"
              style={{ position: "sticky", top: "2rem" }}
            >
              <div
                id="entry"
                className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-200 ring-4 ring-slate-100"
              >
                <h3 className="text-2xl font-black text-slate-900 mb-6 text-center">
                  Continue in CorePath
                </h3>
                <div className="space-y-4">
                  <Link
                    to="/activate"
                    className="block w-full py-5 bg-slate-950 text-white rounded-2xl font-black text-center hover:bg-slate-800 transition shadow-lg"
                  >
                    <span className="block text-[10px] opacity-50 font-bold uppercase tracking-widest mb-1">
                      Next Step
                    </span>
                    Go to Activation Hub
                  </Link>
                </div>
                <p className="text-center text-slate-400 text-xs mt-6">
                  You’re signed in. Continue when you’re ready.
                </p>
              </div>

              <div className="bg-teal-900 text-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-teal-400 mb-6">
                  VDP Is Designed For
                </h3>
                <ul className="space-y-4 font-medium">
                  <li className="flex gap-3 items-start">
                    <span className="text-teal-400">✔</span> Parents/Caregivers
                    (Ages 4-18)
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-teal-400">✔</span> Structure Without
                    Harshness
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-teal-400">✔</span> Consistency, Not
                    Guesswork
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-teal-400">✔</span> Intentional Value
                    Training
                  </li>
                </ul>
                <div className="mt-8 pt-6 border-t border-teal-800 text-teal-200 text-sm italic">
                  "You don’t need to be perfect — just intentional."
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-200">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 text-center">
                  Why It Works
                </h3>
                <ul className="space-y-3 text-sm text-slate-700 font-semibold">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500">✔</span> Supported, Not
                    Isolated
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500">✔</span> Growth Before
                    Earning
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500">✔</span> Real Enrollments
                    Only
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500">✔</span> Relational
                    Sharing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500">✔</span> Parenting
                    Priority
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <Link
                  to="/get-started"
                  className="block text-sm font-semibold text-slate-700 hover:text-slate-900"
                >
                  Back to Get Started
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

function GetStartedOrganizationSchool() {
  if (!isAuthenticated()) {
    return (
      <GetStartedLoginGate
        badge="Organization / School"
        title="For schools, churches, NGOs, and organizations"
        description="Sign in or create an account to access the Organization / School onboarding content."
        gradientClass="bg-gradient-to-br from-emerald-950 via-emerald-800 to-emerald-700"
        accentButtonClass="bg-emerald-600 text-white hover:bg-emerald-500"
        nextPath="/get-started/organization-school"
      />
    );
  }

  return (
    <div
      className="bg-slate-50 text-slate-900 leading-snug"
      style={{ fontFamily: "'Inter', sans-serif", scrollBehavior: "smooth" }}
    >
      <ScrollTopOnMount />

      <header className="bg-gradient-to-br from-emerald-950 via-emerald-800 to-emerald-700 text-white pt-16 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block px-3 py-0.5 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest mb-3">
            Get Started — Organization &amp; School
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
            Deploy Values-Driven Systems at Scale
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-emerald-100 max-w-3xl opacity-90 font-medium leading-snug">
            Structured solutions for schools, churches, NGOs, and organizations
            seeking to intentionally shape culture, character, and values across
            people and teams.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-12">
            <section id="starting">
              <div className="inline-block px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-900 text-[10px] font-bold uppercase tracking-widest mb-2">
                The Foundation
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
                What You’re Starting
              </h2>
              <div className="space-y-3 text-base sm:text-lg text-slate-700 leading-snug">
                <p>The Organization &amp; School path includes:</p>
                <p className="border-l-4 border-emerald-500 pl-4">
                  <span className="font-bold text-slate-900">
                    Values Ingrained Education (VIE)
                  </span>
                  {" — "}
                  for schools and learning institutions
                </p>
                <p className="border-l-4 border-emerald-500 pl-4">
                  <span className="font-bold text-slate-900">
                    Values-Driven Organization (VDO)
                  </span>
                  {" — "}
                  for churches, NGOs, and workplaces
                </p>
                <p>
                  These are organization-owned systems, deployed through
                  leadership, not individual subscriptions.
                </p>
              </div>
            </section>

            <section id="for" className="space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900">
                Who This Path Is For
              </h2>
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
                <ul className="space-y-3 text-sm sm:text-base text-slate-700 leading-snug">
                  <li className="flex gap-3">
                    <span className="mt-0.5 text-emerald-700 font-black">
                      •
                    </span>
                    <span>Schools and education leaders</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 text-emerald-700 font-black">
                      •
                    </span>
                    <span>Churches and faith institutions</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 text-emerald-700 font-black">
                      •
                    </span>
                    <span>NGOs and community organizations</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 text-emerald-700 font-black">
                      •
                    </span>
                    <span>Companies and leadership teams</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="access" className="space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mb-1">
                  How Organizational Access Works
                </h2>
              </div>

              <div className="space-y-4">
                <div className="group relative flex gap-4 p-5 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition">
                  <div className="flex-shrink-0 w-10 h-10 bg-slate-100 rounded-2xl flex items-center justify-center font-black text-base text-slate-400 group-hover:bg-emerald-600 group-hover:text-white transition">
                    1
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1 leading-snug">
                      Step 1: Create or Sign In to a CorePath Account
                    </h4>
                    <p className="text-slate-600 text-sm sm:text-base leading-snug">
                      An authorized representative begins setup.
                    </p>
                  </div>
                </div>

                <div className="group relative flex gap-4 p-5 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition">
                  <div className="flex-shrink-0 w-10 h-10 bg-slate-100 rounded-2xl flex items-center justify-center font-black text-base text-slate-400 group-hover:bg-emerald-600 group-hover:text-white transition">
                    2
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1 leading-snug">
                      Step 2: Create or Select an Organization Profile
                    </h4>
                    <p className="text-slate-600 text-sm sm:text-base leading-snug">
                      Define institution type, size, and structure.
                    </p>
                  </div>
                </div>

                <div className="group relative flex gap-4 p-5 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition">
                  <div className="flex-shrink-0 w-10 h-10 bg-slate-100 rounded-2xl flex items-center justify-center font-black text-base text-slate-400 group-hover:bg-emerald-600 group-hover:text-white transition">
                    3
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1 leading-snug">
                      Step 3: Choose the Solution to Activate
                    </h4>
                    <p className="text-slate-600 text-sm sm:text-base leading-snug">
                      VIE (Education) or VDO (Organization / Church /
                      Workplace).
                    </p>
                  </div>
                </div>

                <div className="group relative flex gap-4 p-5 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition">
                  <div className="flex-shrink-0 w-10 h-10 bg-slate-100 rounded-2xl flex items-center justify-center font-black text-base text-slate-400 group-hover:bg-emerald-600 group-hover:text-white transition">
                    4
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1 leading-snug">
                      Step 4: Review Institutional Subscription Plan
                    </h4>
                    <p className="text-slate-600 text-sm sm:text-base leading-snug">
                      Pricing is based on seats / learners / staff and cohorts
                      or departments.
                    </p>
                  </div>
                </div>

                <div className="group relative flex gap-4 p-5 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition">
                  <div className="flex-shrink-0 w-10 h-10 bg-slate-100 rounded-2xl flex items-center justify-center font-black text-base text-slate-400 group-hover:bg-emerald-600 group-hover:text-white transition">
                    5
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1 leading-snug">
                      Step 5: Activate &amp; Pay
                    </h4>
                    <p className="text-slate-600 text-sm sm:text-base leading-snug">
                      The organization subscribes and unlocks the system.
                    </p>
                  </div>
                </div>

                <div className="group relative flex gap-4 p-5 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition">
                  <div className="flex-shrink-0 w-10 h-10 bg-slate-100 rounded-2xl flex items-center justify-center font-black text-base text-slate-400 group-hover:bg-emerald-600 group-hover:text-white transition">
                    6
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1 leading-snug">
                      Step 6: Invite Teachers, Staff, or Teams
                    </h4>
                    <p className="text-slate-600 text-sm sm:text-base leading-snug">
                      Participants join under the organization license.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="proceed"
              className="bg-white rounded-[3rem] border border-slate-200 shadow-sm p-7 sm:p-8"
            >
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3">
                Proceed as an Organization
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  to="/activate"
                  className="bg-slate-950 text-white px-6 py-4 rounded-2xl font-black hover:bg-slate-800 transition shadow-lg text-base text-center"
                >
                  I Represent an Organization
                  <span className="block text-sm font-semibold opacity-90 mt-1">
                    Continue
                  </span>
                </Link>
                <Link
                  to="/resources"
                  className="bg-emerald-600 text-white px-6 py-4 rounded-2xl font-black hover:bg-emerald-500 transition shadow-lg text-base text-center"
                >
                  I Need to Learn More
                  <span className="block text-sm font-semibold opacity-90 mt-1">
                    Book a Demo
                  </span>
                </Link>
              </div>
            </section>
          </div>

          <aside className="lg:col-span-4">
            <div
              className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6 space-y-4"
              style={{ position: "sticky", top: "6.5rem" }}
            >
              <p className="text-slate-900 font-extrabold text-base">
                On this page
              </p>
              <div className="space-y-2 text-sm">
                <a
                  href="#starting"
                  className="block text-slate-700 hover:text-emerald-700"
                >
                  What You’re Starting
                </a>
                <a
                  href="#for"
                  className="block text-slate-700 hover:text-emerald-700"
                >
                  Who This Path Is For
                </a>
                <a
                  href="#access"
                  className="block text-slate-700 hover:text-emerald-700"
                >
                  How Access Works
                </a>
                <a
                  href="#proceed"
                  className="block text-slate-700 hover:text-emerald-700"
                >
                  Proceed
                </a>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <Link
                  to="/get-started"
                  className="block text-sm font-semibold text-slate-700 hover:text-slate-900"
                >
                  Back to Get Started
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default function GetStarted() {
  return (
    <Routes>
      <Route index element={<GetStartedGateway />} />
      <Route
        path="individual-family"
        element={<GetStartedIndividualFamily />}
      />
      <Route
        path="organization-school"
        element={<GetStartedOrganizationSchool />}
      />

      {/* Legacy query-param URLs or typos: fall back to the gateway */}
      <Route path="*" element={<Navigate to="/get-started" replace />} />
    </Routes>
  );
}

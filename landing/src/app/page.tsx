import Link from "next/link";
import {
  ArrowUpRight,
  PlayCircle,
  Check,
  Sparkles,
  Star,
} from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { label: "Avg. ROAS", value: "6.3x" },
  { label: "Revenue Driven", value: "$84M" },
  { label: "Growth Partners", value: "145+" },
  { label: "Campaign Tests / mo", value: "320" },
];

const services = [
  {
    title: "Paid Media Orchestration",
    description:
      "Omni-channel media buying across search, social, retail, and programmatic with creative that is built to convert.",
    highlights: ["Audience intelligence", "Conversion-first creative", "Always-on optimization"],
  },
  {
    title: "Lifecycle Automation",
    description:
      "Personalized lifecycle journeys across email, SMS, and in-app that nurture, convert, and retain high-value customers.",
    highlights: ["Dynamic segmentation", "AI-assisted copy", "Revenue attribution"],
  },
  {
    title: "Conversion Design Studio",
    description:
      "Design, copy, and UX sprints to launch high-performing landing experiences that turn traffic into customers.",
    highlights: ["Rapid experimentation", "UX research", "Full-funnel analytics"],
  },
];

const testimonials = [
  {
    quote:
      "Pulse Digital unlocked a 9.1x ROAS within 90 days. Their ability to connect creative messaging with data-backed media buying is unmatched.",
    name: "Alex Martin",
    role: "VP Growth, Northwind Gear",
  },
  {
    quote:
      "The team acts like a true partner—proactive insights, transparent reporting, and relentless testing. We scale confidently with them.",
    name: "Priya Shah",
    role: "Founder, Kindred Skincare",
  },
];

const processes = [
  {
    title: "Diagnose",
    detail: "We map the customer journey, audit your data stack, and surface needle-moving opportunities in the first 14 days.",
  },
  {
    title: "Design",
    detail: "Creative strategists and media specialists collaborate on campaigns aligned to quarterly revenue targets.",
  },
  {
    title: "Deploy",
    detail: "Experiments launch fast, backed by rigorous QA, predictive targets, and real-time performance dashboards.",
  },
  {
    title: "Dial In",
    detail: "Weekly growth sprints iterate on what works, automate the rest, and keep revenue ahead of forecast.",
  },
];

const plans = [
  {
    name: "Launch",
    price: "3.5K",
    cadence: "/mo",
    idealFor: "For funded startups validating channels",
    inclusions: [
      "Paid social & search activation",
      "Creative testing playbooks",
      "Monthly growth model review",
      "Live performance dashboard",
    ],
  },
  {
    name: "Scale",
    price: "6.0K",
    cadence: "/mo",
    idealFor: "For teams ready to dominate their category",
    inclusions: [
      "Full-funnel media management",
      "Lifecycle automation builds",
      "Dedicated CRO strategist",
      "Bi-weekly growth councils",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    idealFor: "For brands seeking a tailored growth engine",
    inclusions: [
      "Global market expansion",
      "Advanced attribution modeling",
      "In-house team enablement",
      "Always-on experiment lab",
    ],
  },
];

const insights = [
  {
    title: "The 2025 Paid Media Forecast",
    description: "Where to shift budget as cookies crumble and AI bidding dominates.",
    tag: "Report",
  },
  {
    title: "Design Systems For Conversion",
    description: "How modular landing pages double launch speed without sacrificing performance.",
    tag: "Playbook",
  },
  {
    title: "Lifecycle Benchmarks Across DTC",
    description: "See retention, repeat purchase, and LTV metrics across 26 sub-verticals.",
    tag: "Data Drop",
  },
];

export default function Home() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-x-1/2 top-[-10rem] z-0 h-[38rem] w-[72rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-sky-500/50 via-cyan-400/40 to-fuchsia-400/40 blur-3xl" />
      <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl backdrop-saturate-150">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg font-semibold text-sky-300">
              PD
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-200/70">
                Pulse Digital
              </p>
              <p className="text-xs text-slate-300/70">
                Full-service growth partner
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200/80 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-4 md:flex">
            <Link
              href="#contact"
              className="rounded-full border border-white/10 px-5 py-2 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10"
            >
              Book a Strategy Call
            </Link>
          </div>
          <button className="md:hidden">
            <span className="sr-only">Toggle navigation</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-32 pt-20 sm:pt-28 md:gap-32">
        <section className="grid gap-12 rounded-3xl border border-white/10 bg-white/5 p-10 shadow-[0_40px_120px_-60px_rgba(15,118,110,0.6)] backdrop-blur-2xl backdrop-saturate-150 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-sky-200/80">
              <Sparkles className="h-4 w-4 text-sky-300" />
              Modern marketing OS
            </span>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Multiply growth with a digital marketing team built for today.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-200/80">
              From media buying to lifecycle and conversion design, we build integrated campaigns that connect every stage of your funnel—so you can scale predictably, profitably, and fast.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Build My Growth Plan
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#approach"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
              >
                <PlayCircle className="h-5 w-5 text-sky-200" />
                Watch 60-second overview
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-6 sm:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label}>
                  <p className="text-2xl font-semibold text-white">{item.value}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-300/60">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative isolate flex h-full min-h-[320px] items-center justify-center">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-sky-400/30 via-cyan-500/20 to-transparent" />
            <div className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-slate-950/50 p-6 shadow-2xl">
              <p className="text-sm font-semibold text-sky-100">Weekly Growth Snapshot</p>
              <p className="mt-1 text-xs text-slate-400">
                Highlights from the Pulse operating dashboard.
              </p>
              <div className="mt-6 space-y-5">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-300">Spend</span>
                    <span className="text-base font-semibold text-white">$128K</span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-800">
                    <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-sky-400 to-cyan-300" />
                  </div>
                  <p className="mt-3 text-xs text-emerald-300/80">▲ 24% vs last week</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-300">Revenue</span>
                    <span className="text-base font-semibold text-white">$812K</span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-800">
                    <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-fuchsia-400 to-orange-300" />
                  </div>
                  <p className="mt-3 text-xs text-emerald-300/80">▲ 31% vs last week</p>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div>
                    <p className="text-xs font-medium text-slate-300">Top Winner</p>
                    <p className="text-sm text-white">UGC | 15 sec | Hook v3</p>
                  </div>
                  <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-200">
                    +54% ROAS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="space-y-12">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-200/70">
                Core services
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
                Full-funnel expertise, shipped as one integrated team.
              </h2>
            </div>
            <p className="max-w-2xl text-sm text-slate-300/80">
              We combine award-winning creative, performance media, and lifecycle automation to
              accelerate growth across every touchpoint. No silos. No handoffs. Just a cross-functional
              squad obsessed with your metrics.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:border-white/20 hover:bg-white/10"
              >
                <div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm text-slate-300/80">{service.description}</p>
                </div>
                <ul className="space-y-3 text-sm text-slate-200">
                  {service.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-sky-400/20 text-sky-200">
                        <Check className="h-4 w-4" />
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-sky-200 transition group-hover:gap-3"
                >
                  See how it works
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section
          id="approach"
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-slate-800/40 p-10"
        >
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-sky-300/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-fuchsia-400/10 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-200/70">
                Our method
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
                Proven growth sprints to outpace the market.
              </h2>
              <p className="mt-4 text-sm text-slate-300/80">
                Every engagement runs on our Pulse Operating System: a cadence that aligns teams,
                clarifies priorities, and synthesizes data into action. The result? Rapid learnings,
                compounding wins, and a consistent beat of revenue growth.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {processes.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_-40px_rgba(56,189,248,0.6)]"
                >
                  <span className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400/80">
                    Step {index + 1}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm text-slate-300/80">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="results" className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8 rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-10 backdrop-blur">
            <div className="flex items-center gap-3 text-emerald-200">
              <Star className="h-5 w-5" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em]">
                Outcomes
              </span>
            </div>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Growth numbers clients report after 120 days with Pulse.
            </h2>
            <ul className="grid gap-6 sm:grid-cols-2">
              <li className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-slate-200/80">
                  Venture-backed SaaS unified paid media & lifecycle to lift LTV.
                </p>
                <div className="mt-5 text-4xl font-semibold text-white">+78%</div>
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-slate-300/70">
                  Marketing-Sourced ARR
                </p>
              </li>
              <li className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-slate-200/80">
                  DTC apparel brand unlocked new audiences with modular creatives.
                </p>
                <div className="mt-5 text-4xl font-semibold text-white">+211%</div>
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-slate-300/70">
                  Net New Customers
                </p>
              </li>
              <li className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-slate-200/80">
                  Fintech leader introduced predictive experimentation pipeline.
                </p>
                <div className="mt-5 text-4xl font-semibold text-white">-32%</div>
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-slate-300/70">
                  Cost Per Acquisition
                </p>
              </li>
              <li className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-slate-200/80">
                  B2B marketplace rebuilt funnel analytics and lead scoring.
                </p>
                <div className="mt-5 text-4xl font-semibold text-white">4.5x</div>
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-slate-300/70">
                  Opportunity Velocity
                </p>
              </li>
            </ul>
          </div>
          <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-10">
            <h3 className="text-lg font-semibold text-white">
              Operators, not vendors.
            </h3>
            <p className="text-sm text-slate-300/80">
              You get a cross-functional team that thinks in revenue, speaks in experiments, and shows up with answers before you ask the question.
            </p>
            <div className="grid gap-6">
              {testimonials.map((item) => (
                <div key={item.name} className="space-y-4 rounded-2xl border border-white/10 bg-slate-950/40 p-6">
                  <p className="text-sm leading-relaxed text-slate-200/90">&ldquo;{item.quote}&rdquo;</p>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.name}</p>
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-300/60">
                      {item.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="space-y-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-200/70">
                Engagements
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
                Choose the partnership that fits your growth chapter.
              </h2>
            </div>
            <p className="max-w-2xl text-sm text-slate-300/80">
              All plans include weekly revenue war rooms, predictive reporting dashboards, and
              embedded collaboration via Slack + Notion. 90-day minimum. Cancel anytime after.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col gap-6 rounded-3xl border bg-white/5 p-8 ${
                  plan.featured
                    ? "border-sky-400/30 shadow-[0_40px_120px_-60px_rgba(56,189,248,0.8)]"
                    : "border-white/10"
                }`}
              >
                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300/70">
                    {plan.name}
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-semibold text-white">
                      {plan.price}
                    </span>
                    <span className="text-sm text-slate-400">{plan.cadence}</span>
                  </div>
                  <p className="text-sm text-slate-300/70">{plan.idealFor}</p>
                </div>
                <ul className="space-y-4 text-sm text-slate-200">
                  {plan.inclusions.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-sky-200">
                        <Check className="h-4 w-4" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className={`mt-auto inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                    plan.featured
                      ? "bg-sky-400 text-slate-950 hover:bg-sky-300"
                      : "border border-white/10 text-white hover:border-white/30 hover:bg-white/10"
                  }`}
                >
                  Start conversation
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section id="insights" className="rounded-3xl border border-white/10 bg-white/5 p-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-200/70">
                Insights
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
                Stay ahead with fresh intelligence from our team.
              </h2>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
            >
              See all research
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {insights.map((item) => (
              <article
                key={item.title}
                className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-slate-950/40 p-6"
              >
                <div className="space-y-4">
                  <span className="inline-flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">
                    {item.tag}
                  </span>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-slate-300/80">{item.description}</p>
                </div>
                <Link
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-200 transition hover:gap-3"
                >
                  Request the insight pack
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/20 via-cyan-500/10 to-fuchsia-500/20 p-10"
        >
          <div className="absolute -inset-1 rounded-[2.5rem] border border-white/10" />
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-950/70">
                Let&apos;s build
              </p>
              <h2 className="text-3xl font-semibold text-slate-950 md:text-4xl">
                Ready for predictable, compounding growth?
              </h2>
              <p className="text-sm text-slate-900/70">
                Drop us a note and we’ll send back a custom growth roadmap within 48 hours—complete
                with channel plays, investment ranges, and quick wins you can execute immediately.
              </p>
            </div>
            <form className="w-full max-w-md space-y-4 rounded-3xl border border-slate-900/10 bg-white/80 p-6 shadow-lg backdrop-blur">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Jordan Blake"
                  className="w-full rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:shadow-[var(--shadow-focus)] focus:border-sky-400"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
                  Work Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jordan@brand.com"
                  className="w-full rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:shadow-[var(--shadow-focus)] focus:border-sky-400"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="goal" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
                  Revenue Goal
                </label>
                <select
                  id="goal"
                  name="goal"
                  className="w-full appearance-none rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:shadow-[var(--shadow-focus)] focus:border-sky-400"
                  defaultValue="3"
                >
                  <option value="1">Pre-launch</option>
                  <option value="2">$0 - $1M ARR</option>
                  <option value="3">$1M - $10M ARR</option>
                  <option value="4">$10M+ ARR</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
                  What should we know?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Share your key growth challenges and timeline…"
                  className="w-full rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:shadow-[var(--shadow-focus)] focus:border-sky-400"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-900"
              >
                Get my roadmap
              </button>
              <p className="text-xs text-slate-600">
                We reply in under 2 business days. No pressure, no long-term contracts.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-300/80">
            © {new Date().getFullYear()} Pulse Digital. Growth is a rhythm—let’s set the tempo together.
          </p>
          <div className="flex gap-4 text-sm text-slate-400">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            <Link href="mailto:hello@pulsedigital.com">hello@pulsedigital.com</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const heroTags = ["Full-stack", "Systems thinker", "learner", "Internally screaming"];


export const Title: React.FunctionComponent = () => (
  <section className="relative isolate overflow-hidden rounded-[2.75rem] border border-white/50 bg-white/80 px-6 py-14 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:px-10 lg:px-14">
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-emerald-50" />
    <div className="pointer-events-none absolute -right-16 top-10 h-56 w-56 rounded-full bg-emerald-200/60 blur-3xl" />
    <div className="relative mx-auto flex max-w-4xl flex-col gap-8">
      <TypeAnimation
        role="heading"
        sequence={[
          `Hi, I'm Ben Simmers`,
          2000,
          `I'm a Comp Sci gradudate`,
          2000,
          `a full-stack software developer`,
          2000,
          `and Internally screaming`,
          2000,
        ]}
        wrapper="h1"
        cursor
        repeat={Infinity}
        className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl"
        aria-label="Animated introduction text"
      />
      <p className="mx-auto max-w-2xl text-base text-slate-600">
        Software Developer
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
        {heroTags.map((tag) => (
          <span key={tag} className="rounded-full border border-slate-200/80 bg-white/70 px-4 py-1">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/portfolio"
          className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
        >
          View work
        </Link>
      </div>
    </div>
  </section>
);

import React from "react";
import { useStore } from "../store/store";
import { useShallow } from "zustand/react/shallow";
import TimeLine from "./TimeLine";

export const AboutMe: React.FunctionComponent = () => {
  const { Introduction, features } = useStore(
    useShallow((state) => ({
      Introduction: state.introduction,
      features: state.features,
    }))
  );
  const highlightedFeatures = features.slice(0, 2);

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="about-me-title">
      <div className="mx-auto max-w-6xl space-y-10">
        <header className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.45em] text-emerald-500">Origin Story</p>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl" id="about-me-title">
                Ben Simmers · Builder Dashboard
              </h1>
              <p className="text-sm text-slate-500">
                A rolling snapshot of how I think, experiment, and internally scream
              </p>
            </div>
            <div className="grid gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 px-4 py-3">
                <p className="text-[0.65rem] text-emerald-500">CURRENT ROLE</p>
                <p className="mt-2 text-base font-semibold text-slate-900">TechnologyOne</p>
                <p className="text-[0.75rem] text-slate-500">R&D · SDXP</p>
              </div>
              <div className="rounded-2xl border border-slate-200 px-4 py-3">
                <p className="text-[0.65rem] text-emerald-500">FOCUS AREAS</p>
                <p className="text-[0.75rem] text-slate-500">React · C# · building cool things</p>
              </div>
            </div>
          </div>
        </header>

        <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <article className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-500">Introduction</p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{Introduction.introduction}</p>
            </div>
            {highlightedFeatures.length ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {highlightedFeatures.map((feature) => (
                  <div key={feature.name} className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                      {feature.name}
                    </p>
                    <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </article>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-500">Current load</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                {"React / C# / Redux / Kubernetes / TypeScript / More".split(" / ").map((tag) => (
                  <span key={tag} className="rounded-full border border-slate-200 px-3 py-1 text-slate-600">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <TimeLine />

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm" aria-labelledby="details-title">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-500">Operating Principles</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900" id="details-title">
                Me
              </h2>
            </div>
            <div className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
              Updated {new Date().getFullYear()}
            </div>
          </div>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {features.map((feature) => (
              <li key={feature.name} className="rounded-2xl border border-slate-100 bg-slate-50/80 p-5">
                <h3 className="text-base font-semibold text-slate-900">{feature.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
};

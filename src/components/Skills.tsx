import React from "react";
import { useStore } from "../store/store";
import { useShallow } from "zustand/react/shallow";

const colorTokens = [
  "from-emerald-400/40",
  "from-indigo-400/40",
  "from-rose-400/40",
  "from-amber-400/40",
];

const Skills: React.FunctionComponent = () => {
  const skills = useStore(useShallow((state) => state.skills));

  return (
    <section
      aria-labelledby="skills-title"
      className="relative isolate mt-10 px-4 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-indigo-50 to-white" />
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-72 w-72 rounded-full bg-emerald-200/40 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-500">
          Toolbox
        </p>
        <h2
          id="skills-title"
          className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
        >
          My Skills
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm text-slate-500">
          A modular stack that blends rapid experimentation, product thinking, and polish.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <article
              key={skill.title}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/40 bg-white/80 p-6 text-left shadow-xl shadow-slate-900/5 backdrop-blur-lg transition-transform duration-300 hover:-translate-y-1"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  colorTokens[index % colorTokens.length]
                } via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100`}
              />
              <div className="relative flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
                    #{`${index + 1}`.padStart(2, "0")}
                  </span>
                  <span className="rounded-full border border-slate-200/80 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-slate-400">
                    Core Skill
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  {skill.title}
                </h3>
                <p className="text-sm text-slate-600">{skill.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

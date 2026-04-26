import React from "react";

export interface CardProps {
  title: string;
  description: string;
  link: string;
  language?: string;
  stars?: number;
  updatedAtLabel?: string;
  topics?: string[];
  className?: string;
}

export const Card: React.FunctionComponent<CardProps> = ({
  title,
  description,
  link,
  language,
  stars,
  updatedAtLabel,
  topics,
  className,
}) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    className={`group flex h-full flex-col rounded-3xl border border-slate-200 bg-white/90 p-6 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
      className ?? ""
    }`}
  >
    <div className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.35em] text-slate-500">
      <span>{language ?? "Project"}</span>
      <span className="h-px flex-1 bg-slate-200" />
      <span className="rounded-full border border-slate-200 px-2 py-0.5 text-[0.6rem] font-semibold text-slate-600 group-hover:border-slate-300 group-hover:text-slate-800">
        View
      </span>
    </div>
    <h2 className="mt-4 line-clamp-2 text-lg font-semibold text-slate-900">{title}</h2>
    <p className="mt-2 line-clamp-4 text-sm text-slate-600">{description}</p>
    {topics?.length ? (
      <div className="mt-4 flex flex-wrap gap-2">
        {topics.slice(0, 3).map((topic) => (
          <span
            key={topic}
            className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs text-slate-500"
          >
            {topic}
          </span>
        ))}
      </div>
    ) : null}
    <div className="mt-auto flex items-center justify-between pt-6 text-xs text-slate-500">
      <span className="inline-flex items-center gap-1 font-semibold text-amber-500">
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
          <path d="M12 2.5l2.8 6.1 6.7.5-5.1 4.3 1.6 6.6L12 16.8l-6 3.2 1.6-6.6-5.1-4.3 6.7-.5z" />
        </svg>
        {stars ?? 0}
      </span>
      {updatedAtLabel ? <span>{updatedAtLabel}</span> : <span>&nbsp;</span>}
    </div>
  </a>
);


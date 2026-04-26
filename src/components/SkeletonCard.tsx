import React from "react";

interface SkeletonCardProps {
  count?: number;
  className?: string;
}

export const SkeletonCard: React.FunctionComponent<SkeletonCardProps> = ({
  count = 1,
  className = "",
}) => (
  <React.Fragment>
    {Array.from({ length: count }).map((_, i) => (
      <div
        key={i}
        className={`relative overflow-hidden rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-inner animate-pulse ${className}`}
      >
        <div className="h-3 w-16 rounded bg-slate-200/90" />
        <div className="mt-4 h-5 w-3/4 rounded bg-slate-200/70" />
        <div className="mt-3 h-3 w-full rounded bg-slate-200/70" />
        <div className="mt-2 h-3 w-11/12 rounded bg-slate-200/60" />
        <div className="mt-auto flex items-center justify-between pt-6">
          <div className="h-3 w-20 rounded bg-slate-200/60" />
          <div className="h-3 w-16 rounded bg-slate-200/60" />
        </div>
      </div>
    ))}
  </React.Fragment>
);

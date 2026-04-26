import React from "react";
import { useStore } from "../store/store";
import { useShallow } from "zustand/react/shallow";

type TimeLineProps = {
  className?: string;
};

export const TimeLine: React.FunctionComponent<TimeLineProps> = ({
  className = "",
}) => {
  const timeLineItems = useStore(useShallow((state) => state.timelineItems));

  return (
    <section className={className} aria-label="Timeline">
      <div className="rounded-[2.5rem] border  bg-white p-6 shadow-sm">
        <ol className="space-y-6">
          {timeLineItems.map((item, index) => (
            <li key={index}>
              <article className="rounded-2xl border border-slate-100 bg-slate-50/80 px-6 py-5">
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-500">
                    {item.date}
                  </p>
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-slate-400">
                    {`${index + 1}`.padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.content}</p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default TimeLine;
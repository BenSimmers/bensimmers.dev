import React from "react";
import { BookOpenIcon } from "@heroicons/react/outline";
import { useStore } from "../store/store";
import { useShallow } from "zustand/react/shallow";

export const TimeLine: React.FunctionComponent = () => {
  const timeLineItems = useStore(useShallow((state) => state.timelineItems));

  return (
    <div
      className="w-full max-w-4xl bg-white rounded-lg shadow-md p-4 sm:p-6 lg:p-10 mt-6 sm:mt-10"
      id="timeline"
      aria-labelledby="timeline"
    >
      <ol className="relative border-l-2 sm:border-l-[3px] border-black">
        {timeLineItems.map((item, index) => (
          <li
            key={index}
            className="ml-4 sm:ml-6 first:mt-0 mt-6 sm:mt-8 lg:mt-10"
            id="timeline-item"
            aria-labelledby="timeline-item"
          >
            <span className="absolute flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 rounded-full -left-2.5 sm:-left-3 ring-4 sm:ring-8 ring-slate-400">
              {item.icon ? item.icon : <BookOpenIcon className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-blue-800" />}
            </span>
            <h3
              className="mb-1 text-base sm:text-lg font-semibold text-gray-900"
              id={`timeline-title-${index}`}
            >
              {item.title}
            </h3>
            <time
              className="block mb-2 text-xs sm:text-sm font-normal leading-none text-gray-400"
              dateTime={item.date}
              aria-label="Date"
            >
              {item.date}
            </time>
            <p
              className="text-sm sm:text-base font-normal text-gray-500"
              id={`timeline-content-${index}`}
            >
              {item.content}
            </p>
          </li>
        ))}
      </ol>

     
    </div>
  );
};

export default TimeLine;
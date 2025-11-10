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

  return (
    <React.Fragment>
      <h1 className="text-3xl sm:text-4xl font-bold text-center px-4 mt-6 sm:mt-8" id="about-me-title">
        About Me
      </h1>

      <div className="flex flex-col items-center justify-center mt-6 sm:mt-10 px-4 sm:px-6 lg:px-8">
        <section
          className="w-full max-w-4xl bg-white rounded-lg shadow-md p-4 sm:p-6 lg:p-8"
          aria-labelledby="introduction-title"
        >
          <h2 className="sr-only" id="introduction-title">
            Introduction
          </h2>
          <p className="text-sm sm:text-base leading-relaxed">{Introduction.introduction}</p>
        </section>

        <TimeLine />

        <section
          className="w-full max-w-4xl bg-white rounded-lg shadow-md p-4 sm:p-6 lg:p-8 mt-6 sm:mt-10 mb-6 sm:mb-10"
          aria-labelledby="details-title"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6" id="details-title">
            The Details
          </h2>
          <ul className="divide-y divide-gray-200">
            {features.map((feature) => (
              <li key={feature.name} className="py-3 sm:py-4">
                <div className="flex space-x-3">
                  <div className="flex-1 space-y-1">
                    <h3
                      className="text-base sm:text-lg leading-6 font-medium text-gray-900"
                      id={`feature-title-${feature.name}`}
                    >
                      {feature.name}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </React.Fragment>
  );
};

import React from "react";
import { useStore } from "../store/store";
import { useShallow } from "zustand/react/shallow";

const Skills: React.FunctionComponent = () => {
  const skills = useStore(useShallow((state) => state.skills));

  return (
    <section aria-labelledby="skills-title" className="mt-6 sm:mt-10 px-4 sm:px-6 lg:px-8">
      <h2
        id="skills-title"
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 text-center"
      >
        My Skills
      </h2>
      <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="card bg-white rounded-lg shadow-md p-4 sm:p-6 text-center transition-all duration-150 hover:shadow-lg"
          >
            <h3 className="mb-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-black py-2 sm:py-3">
              {skill.title}
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 py-2 sm:py-3">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

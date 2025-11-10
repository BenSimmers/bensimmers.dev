import React from "react";
import { Card } from "./Card";
import { SkeletonCard } from "./SkeletonCard";
import { useProjects, useProjectsActions } from "../store/projectStore";
import { ProjectType, Repo } from "../utils/types";

export const Projects: React.FunctionComponent = () => {
  const { projects } = useProjects();
  const { fetchProjects } = useProjectsActions();

  React.useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);


  const renderItems = (projects: ProjectType[]): JSX.Element[] => {
    const items = projects.length
      ? projects
      : Array.from({ length: 4 }).map(() => null);

    return items.map((item, i) =>
      item ? (
        <Card
          key={item.id}
          title={item.full_name}
          description={item.description}
          link={item.html_url}
        />
      ) : (
        <SkeletonCard key={i} num={6} />
      )
    );
  };
  return (
    <>
      <main className="mt-6 sm:mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold">Notable Projects</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {renderItems(projects)}
        </div>
      </main>
    </>
  );
};

export default Projects;

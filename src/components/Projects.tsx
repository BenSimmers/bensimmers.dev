import React from "react";
import { Card } from "./Card";
import { SkeletonCard } from "./SkeletonCard";
import { useProjects, useProjectsActions, useProjectsStatus } from "../store/projectStore";
import { ProjectType } from "../utils/types";

const tileSpanPattern = ["", "lg:row-span-2", "", "lg:row-span-1"];

const formatUpdatedAt = (value?: string): string | null => {
  if (!value) {
    return null;
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return null;
  }
  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const FeaturedProjectCard: React.FunctionComponent<{ project: ProjectType }> = ({
  project,
}) => {
  const updatedLabel = formatUpdatedAt(project.pushed_at);
  return (
    <a
      href={project.html_url}
      target="_blank"
      rel="noreferrer"
      className="group relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white/95 p-8 text-left shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:col-span-2 lg:col-span-2 lg:row-span-2"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="relative flex h-full flex-col">
        <div className="text-xs uppercase tracking-[0.35em] text-emerald-500">Featured</div>
        <div className="mt-6 flex-1 space-y-4">
          <h2 className="text-3xl font-semibold leading-tight text-slate-900">
            {project.full_name}
          </h2>
          <p className="max-w-2xl text-base text-slate-600">{project.description}</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold text-slate-500">
          {project.language ? (
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 uppercase tracking-wide">
              {project.language}
            </span>
          ) : null}
          <span className="inline-flex items-center gap-2 text-slate-600">
            ★ {project.stargazers_count ?? 0}
          </span>
          {updatedLabel ? <span>Updated {updatedLabel}</span> : null}
        </div>
        {project.topics?.length ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.topics.slice(0, 4).map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs uppercase tracking-wide text-slate-500"
              >
                {topic}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </a>
  );
};

export const Projects: React.FunctionComponent = () => {
  const { projects } = useProjects();
  const { loading, error } = useProjectsStatus();
  const { fetchProjects } = useProjectsActions();

  React.useEffect(() => {
    void fetchProjects();
  }, [fetchProjects]);

  const sortedProjects = React.useMemo(
    () =>
      [...projects].sort(
        (a, b) => (b.stargazers_count ?? 0) - (a.stargazers_count ?? 0)
      ),
    [projects]
  );

  const [featuredProject, ...otherProjects] = sortedProjects;
  const hasProjects = sortedProjects.length > 0;
  const showSkeleton = !hasProjects && loading;

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-500">
            Notable projects
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Shipping work that sticks
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            Curated highlights with live GitHub metadata.
          </p>
        </div>
        <div className="grid auto-rows-[15rem] gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {showSkeleton ? (
            <>
              <SkeletonCard
                key="featured-skeleton"
                className="sm:col-span-2 lg:col-span-2 lg:row-span-2"
              />
              {Array.from({ length: 6 }).map((_, index) => (
                <SkeletonCard
                  key={`tile-skeleton-${index}`}
                  className={`row-span-1 ${
                    tileSpanPattern[index % tileSpanPattern.length]
                  }`}
                />
              ))}
            </>
          ) : hasProjects ? (
            <>
              {featuredProject ? (
                <FeaturedProjectCard project={featuredProject} />
              ) : null}
              {otherProjects.map((project, index) => (
                <Card
                  key={project.id ?? project.full_name}
                  title={project.full_name}
                  description={project.description}
                  link={project.html_url}
                  language={project.language}
                  stars={project.stargazers_count}
                  updatedAtLabel={formatUpdatedAt(project.pushed_at) ?? undefined}
                  topics={project.topics}
                  className={`row-span-1 ${
                    tileSpanPattern[index % tileSpanPattern.length]
                  }`}
                />
              ))}
            </>
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-300 p-10 text-center sm:col-span-2 lg:col-span-3">
              <p className="text-sm text-slate-500">
                No public projects to showcase right now. Please check back soon.
              </p>
            </div>
          )}
        </div>
        {error && !loading ? (
          <p className="text-center text-sm text-red-500">{error}</p>
        ) : null}
      </div>
    </section>
  );
};

export default Projects;

import { ProjectCard } from "../components/ProjectCard";
import { SkeletonCard } from "../components/SkeletonCard";
import { useProjects } from "../store/projectStore";

const Portfolio = () => {
  const { projects, loading, error } = useProjects();
  const [featured, ...rest] = projects;

  return (
    <section className="flex flex-col gap-16 md:gap-margin">
      <div className="flex flex-col items-center gap-unit text-center">
        <span className="neo-eyebrow">Notable projects</span>
        <h1 className="mt-4 font-display text-4xl font-bold leading-none tracking-tight text-primary sm:text-6xl lg:text-display">
          Shipping work that sticks
        </h1>
        <p className="mt-4 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
          Curated highlights with live GitHub metadata.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:auto-rows-fr md:grid-cols-3">
        {featured ? (
          <>
            <ProjectCard project={featured} featured />
            {rest.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </>
        ) : loading ? (
          <>
            <SkeletonCard className="md:col-span-2 md:row-span-2" />
            {Array.from({ length: 5 }, (_, index) => (
              <SkeletonCard key={index} />
            ))}
          </>
        ) : (
          <div className="border-3 border-dashed border-primary p-10 text-center md:col-span-3">
            <p className="font-body-md text-body-md text-on-surface-variant">
              No public projects to showcase right now. Please check back soon.
            </p>
          </div>
        )}
      </div>

      {error && !loading ? (
        <p className="border-3 border-error bg-error-container px-6 py-4 text-center font-label-caps text-label-caps uppercase text-on-error-container">
          {error}
        </p>
      ) : null}
    </section>
  );
};

export default Portfolio;

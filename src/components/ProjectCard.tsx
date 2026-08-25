import type { Repo } from "../store/projectStore";

const formatDate = (value?: string) => {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
};

const StarIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
    <path d="M12 2.5l2.8 6.1 6.7.5-5.1 4.3 1.6 6.6L12 16.8l-6 3.2 1.6-6.6-5.1-4.3 6.7-.5z" />
  </svg>
);

/** Scale is the only difference between a featured project and the rest. */
const variants = {
  featured: {
    card: "p-6 md:col-span-2 md:row-span-2 md:p-8",
    view: "neo-shadow border-3 px-4 py-2",
    title: "font-headline-lg text-3xl font-bold tracking-tight sm:text-4xl lg:text-headline-lg",
    description: "font-body-lg text-body-lg",
    footer: "border-t-3",
    topics: 4,
  },
  default: {
    card: "p-6",
    view: "shadow-neo-sm border-2 px-3 py-1",
    title: "font-headline-md text-2xl font-semibold",
    description: "line-clamp-4 font-body-md text-body-md",
    footer: "border-t-2",
    topics: 3,
  },
} as const;

type ProjectCardProps = {
  project: Repo;
  featured?: boolean;
};

export const ProjectCard = ({ project, featured = false }: ProjectCardProps) => {
  const style = variants[featured ? "featured" : "default"];
  const updatedLabel = formatDate(project.pushed_at);

  return (
    <a
      href={project.html_url}
      target="_blank"
      rel="noreferrer"
      className={`neo-card neo-shadow group flex h-full flex-col justify-between text-left transition-transform hover:-translate-y-1 ${style.card}`}
    >
      <div>
        <div className="mb-4 flex items-start justify-between gap-4 md:mb-6">
          {featured ? (
            <span className="neo-eyebrow">Featured</span>
          ) : (
            <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
              {project.language ?? "Project"}
            </span>
          )}
          <span
            className={`border-primary bg-surface-container-lowest font-label-caps text-label-caps uppercase text-primary transition-colors group-hover:bg-secondary group-hover:text-on-secondary ${style.view}`}
          >
            View
          </span>
        </div>

        <h3 className={`mb-2 text-primary ${style.title}`}>{project.full_name}</h3>
        <p className={`text-on-surface-variant ${style.description}`}>{project.description}</p>

        {project.topics?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.topics.slice(0, style.topics).map((topic) => (
              <span
                key={topic}
                className="border-2 border-primary bg-surface-container px-3 py-1 font-label-caps text-label-caps uppercase text-primary"
              >
                {topic}
              </span>
            ))}
          </div>
        ) : null}
      </div>

      <div className={`mt-8 flex flex-wrap items-center gap-4 border-primary pt-4 md:pt-6 ${style.footer}`}>
        {featured && project.language ? (
          <span className="border-2 border-primary bg-surface-container px-3 py-1 font-label-caps text-label-caps uppercase text-primary">
            {project.language}
          </span>
        ) : null}
        <span className="inline-flex items-center gap-1 font-label-caps text-label-caps text-secondary">
          <StarIcon />
          {project.stargazers_count ?? 0}
        </span>
        {updatedLabel ? (
          <span className="ml-auto font-label-caps text-label-caps uppercase text-on-surface-variant">
            {featured ? `Updated ${updatedLabel}` : updatedLabel}
          </span>
        ) : null}
      </div>
    </a>
  );
};

export default ProjectCard;

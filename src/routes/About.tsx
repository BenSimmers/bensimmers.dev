import { TimeLine } from "../components/TimeLine";
import { currentLoad, features, introduction } from "../content";

const About = () => {
  const highlighted = features.slice(0, 2);

  return (
    <section className="flex flex-col gap-16 md:gap-margin" aria-labelledby="about-me-title">
      <header className="neo-card neo-shadow flex flex-col gap-8 p-6 md:p-margin">
        <div>
          <span className="neo-eyebrow mb-4 block">Origin Story</span>
          <h1
            id="about-me-title"
            className="mb-2 font-display text-4xl font-bold leading-tight tracking-tight text-primary sm:text-5xl lg:text-headline-lg"
          >
            Ben Simmers · Builder Dashboard
          </h1>
          <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
            A rolling snapshot of how I think, experiment, and internally scream
          </p>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="neo-card neo-press p-6">
            <span className="neo-eyebrow mb-2 block">Current Role</span>
            <h2 className="mb-1 font-headline-md text-2xl font-semibold uppercase text-primary md:text-headline-md">
              TechnologyOne
            </h2>
            <p className="font-body-md text-body-md uppercase tracking-wide text-on-surface-variant">
              R&amp;D · SDXP
            </p>
          </div>
          <div className="neo-card neo-press p-6">
            <span className="neo-eyebrow mb-2 block">Focus Areas</span>
            <p className="font-body-lg text-body-lg uppercase tracking-wide text-primary">
              React · C# · Building cool things
            </p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="neo-card neo-shadow flex flex-col gap-8 p-6 md:p-margin lg:col-span-2">
          <div>
            <span className="neo-eyebrow mb-4 block">Introduction</span>
            <p className="max-w-3xl font-body-lg text-body-lg leading-relaxed text-primary">
              {introduction}
            </p>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {highlighted.map((feature) => (
              <div key={feature.name} className="neo-card neo-press bg-surface-bright p-6">
                <span className="mb-2 block font-label-caps text-label-caps uppercase tracking-widest text-primary">
                  {feature.name}
                </span>
                <p className="font-body-md text-body-md text-on-surface-variant">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="neo-card neo-shadow flex flex-col p-6 md:p-8">
          <span className="neo-eyebrow mb-6 block">Current Load</span>
          <div className="flex flex-wrap gap-3">
            {currentLoad.map((tag) => (
              <span
                key={tag}
                className="neo-chip cursor-default bg-surface-bright transition-colors hover:bg-secondary hover:text-on-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
        </aside>
      </div>

      <TimeLine />

      <section
        className="flex flex-col gap-gutter border-t-3 border-primary pt-16 md:pt-margin"
        aria-labelledby="principles-title"
      >
        <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
          <h2 id="principles-title" className="neo-eyebrow">
            Operating Principles
          </h2>
          <p className="font-label-caps text-label-caps uppercase text-outline">
            Updated {new Date().getFullYear()}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="neo-card neo-shadow flex flex-col gap-2 p-6">
              <h3 className="mb-1 font-body-lg text-body-lg font-bold text-primary">{feature.name}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default About;

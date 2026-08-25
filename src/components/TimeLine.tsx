import { timeline } from "../content";

export const TimeLine = () => (
  <section className="flex flex-col gap-gutter" aria-labelledby="timeline-title">
    <div className="flex flex-col gap-2">
      <h2
        id="timeline-title"
        className="font-headline-lg text-3xl font-bold uppercase tracking-tight text-primary sm:text-4xl lg:text-headline-lg"
      >
        Experience
      </h2>
      <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
        A timeline of my professional and academic journey.
      </p>
    </div>

    <ol className="flex flex-col gap-6">
      {timeline.map((item, index) => (
        <li key={item.title + item.date}>
          <article className="neo-card neo-shadow flex flex-col gap-4 p-6 transition-transform hover:-translate-y-1">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <p className="neo-eyebrow">{item.date}</p>
              <p className="font-label-caps text-label-caps font-bold uppercase text-outline">
                {`${index + 1}`.padStart(2, "0")}
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-headline-md text-2xl font-semibold text-primary md:text-headline-md">
                {item.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{item.content}</p>
            </div>
          </article>
        </li>
      ))}
    </ol>
  </section>
);

export default TimeLine;

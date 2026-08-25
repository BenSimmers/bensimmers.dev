import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const heroTags = ["Full-stack", "Systems thinker", "Learner", "Internally screaming"];

const Home = () => (
  <section className="flex flex-grow flex-col justify-center py-12">
    <div className="grid max-w-4xl grid-cols-1 gap-12 md:grid-cols-12">
      <div className="space-y-12 md:col-span-12">
        <TypeAnimation
          role="heading"
          sequence={[
            `Hi, I'm Ben Simmers`,
            2000,
            `I'm a Comp Sci graduate`,
            2000,
            `a full-stack software developer`,
            2000,
            `and internally screaming`,
            2000,
          ]}
          wrapper="h1"
          cursor
          repeat={Infinity}
          className="block min-h-[6.5rem] font-display text-4xl font-bold leading-none tracking-tight text-primary sm:min-h-[9rem] sm:text-6xl lg:min-h-[11rem] lg:text-display"
          aria-label="Animated introduction text"
        />

        <div className="flex flex-wrap gap-4 pt-4">
          {heroTags.map((tag) => (
            <span key={tag} className="neo-chip neo-shadow">
              {tag}
            </span>
          ))}
        </div>

        <div className="pt-8">
          <Link to="/portfolio" className="neo-button px-8 py-4 text-base">
            View work
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Home;

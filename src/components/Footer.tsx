import { Link } from "react-router-dom";

const linkClass =
  "font-label-caps text-label-caps uppercase text-on-surface-variant decoration-secondary decoration-[3px] transition-all hover:text-primary hover:underline";

const socials = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/benjamin-simmers2002/" },
  { name: "Github", url: "https://github.com/BenSimmers" },
];

export const Footer = () => (
  <footer className="mt-auto w-full border-t-3 border-primary bg-background">
    <div className="mx-auto flex w-full max-w-container-max flex-col items-center justify-between gap-8 px-6 py-gutter md:flex-row md:gap-0 md:px-margin">
      <p className="font-headline-md text-2xl font-bold uppercase tracking-tight text-primary md:text-headline-md">
        Ben_Simmers
      </p>

      <nav className="flex flex-wrap items-center justify-center gap-6">
        {socials.map(({ name, url }) => (
          <a key={url} href={url} target="_blank" rel="noreferrer" className={linkClass}>
            {name}
          </a>
        ))}
        <Link to="/contact" className={linkClass}>
          Email
        </Link>
      </nav>

      <p className="font-body-md text-body-md uppercase tracking-wider text-on-surface-variant">
        © {new Date().getFullYear()} Benjamin Simmers
      </p>
    </div>
  </footer>
);

export default Footer;

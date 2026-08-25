import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { WavyLink } from "react-wavy-transitions";

type NavLink = {
  to: string;
  text: string;
  color: string;
  direction?: "up" | "down";
};

const navLinks: NavLink[] = [
  { to: "/", text: "Home", color: "#000000" },
  { to: "/about", text: "About", color: "#000000", direction: "up" },
  { to: "/portfolio", text: "Portfolio", color: "#000000", direction: "up" },
  { to: "/contact", text: "Contact", color: "#af2800" },
];

const Icon = ({ path }: { path: string }) => (
  <svg
    className="block h-6 w-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={3} d={path} />
  </svg>
);

export const Nav = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b-3 border-primary bg-background">
      <div className="mx-auto flex w-full max-w-container-max items-center justify-between px-6 py-4 md:px-margin">
        <a
          href="/"
          className="font-headline-md text-2xl font-bold uppercase tracking-tight text-primary md:text-headline-md"
        >
          Ben_Simmers
        </a>

        <nav className="hidden items-center gap-gutter md:flex">
          {navLinks.map(({ to, text, color, direction }) => (
            <div key={to} className="wavy-reset">
              <WavyLink to={to} direction={direction} duration={1000} color={color}>
                <span
                  className={`font-label-caps text-label-caps uppercase transition-colors ${
                    pathname === to
                      ? "inline-block translate-y-[2px] border-b-3 border-secondary pb-1 text-secondary"
                      : "text-primary hover:text-secondary"
                  }`}
                >
                  {text}
                </span>
              </WavyLink>
            </div>
          ))}
        </nav>

        <div className="wavy-reset hidden md:block">
          <WavyLink to="/contact" duration={1000} color="#af2800">
            <span className="neo-button">Let's Talk</span>
          </WavyLink>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="border-3 border-primary p-2 text-primary transition-colors hover:bg-secondary hover:text-on-secondary md:hidden"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <Icon path={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </button>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} border-t-3 border-primary md:hidden`} id="mobile-menu">
        {navLinks.map(({ to, text, color, direction }) => (
          <div key={to} className="wavy-reset border-b-3 border-primary last:border-b-0">
            <WavyLink to={to} direction={direction} color={color}>
              <span
                className={`block px-6 py-4 font-label-caps text-label-caps uppercase ${
                  pathname === to
                    ? "bg-primary text-on-primary"
                    : "text-primary hover:bg-secondary hover:text-on-secondary"
                }`}
              >
                {text}
              </span>
            </WavyLink>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Nav;

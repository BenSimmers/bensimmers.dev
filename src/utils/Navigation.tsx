import React from "react";
import { WavyLink } from "react-wavy-transitions";
import type { NavLink, NavProps } from "./types";

const navLinks: NavLink[] = [
  { to: "/", color: "#FFBC42", text: "Home" },
  { to: "/about", direction: "up", color: "#73D2DE", text: "About" },
  { to: "/portfolio", direction: "up", color: "#73D2DE", text: "Portfolio" },
  { to: "/contact", color: "#C7EFCF", text: "Contact" },
];

const MenuIcon: React.FunctionComponent = () => (
  <svg
    className="block h-6 w-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon: React.FC = () => (
  <svg
    className="block h-6 w-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const Nav: React.FunctionComponent<NavProps> = ({ isOpen, setIsOpen }) => (
  <nav className="w-full">
    <div className="rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-sm backdrop-blur">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-slate-900 text-lg sm:text-xl font-semibold">
            Ben Simmers
          </a>
        </div>
        <div className="hidden md:block">
          <div className="flex items-center space-x-2 lg:space-x-4">
            {navLinks.map(({ to, direction, color, text }) => (
              <WavyLink
                key={to}
                to={to}
                direction={direction}
                duration={1000}
                color={color}
                className="rounded-full px-3 py-2 text-sm lg:text-base font-medium text-slate-500 transition duration-200 hover:text-slate-900 hover:bg-slate-100"
              >
                {text}
              </WavyLink>
            ))}
          </div>
        </div>
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 p-2 text-slate-500 transition hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      <div className={`${isOpen ? "mt-4" : "hidden"} md:hidden`} id="mobile-menu">
        <div className="flex flex-col gap-2">
          {navLinks.map(({ to, direction, color, text }) => (
            <WavyLink
              key={to}
              to={to}
              direction={direction}
              color={color}
              className="rounded-xl border border-slate-200 px-4 py-3 text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            >
              {text}
            </WavyLink>
          ))}
        </div>
      </div>
    </div>
  </nav>
);

export default Nav;
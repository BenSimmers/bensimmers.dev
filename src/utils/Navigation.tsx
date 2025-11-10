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
    <div className="flex items-center justify-between h-16 px-2 sm:px-0">
      <div className="flex items-center">
        <a href="/" className="text-gray-700 drop-shadow-xl text-lg sm:text-xl font-bold">
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
              className="px-2 lg:px-3 py-2 text-sm lg:text-base text-gray-600 font-medium rounded-md transition-all duration-200 hover:text-gray-900 hover:bg-gray-100 hover:shadow-md hover:-translate-y-0.5"
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
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 ease-in-out duration-150"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </div>
    <div className={`${isOpen ? "block" : "hidden"} md:hidden`} id="mobile-menu">
      <div className="px-2 pt-3 pb-4 flex flex-col gap-2">
        {navLinks.map(({ to, direction, color, text }) => (
          <WavyLink 
            key={to} 
            to={to} 
            direction={direction} 
            color={color}
            className="block px-4 py-3 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
          >
            {text}
          </WavyLink>
        ))}
      </div>
    </div>
  </nav>
);

export default Nav;
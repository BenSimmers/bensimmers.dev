import React from "react";

export const Footer: React.FunctionComponent = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/benjamin-simmers2002/",
    },
    {
      name: "Github",
      url: "https://github.com/BenSimmers",
    },
  ];

  return (
    <footer className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-2xl border border-slate-200 bg-white/90 px-6 py-6 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-base sm:text-lg font-semibold text-slate-900">Ben</span>
          <ul className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-500">
            {links.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  className="rounded-full px-3 py-1 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-5 border-slate-200" />
        <span className="block text-center text-xs sm:text-sm text-slate-500">
          © {currentYear} Benjamin Simmers
        </span>
      </div>
    </footer>
  );
};

export default Footer;

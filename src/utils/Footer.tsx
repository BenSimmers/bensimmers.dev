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
    <footer className="mt-12 sm:mt-16 py-6">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-base sm:text-lg font-semibold whitespace-nowrap">
              Ben
            </span>
          </a>
          <ul className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm font-medium text-gray-500 dark:text-gray-400">
            {links.map((link) => (
              <li key={link.url}>
                <a href={link.url} className="hover:underline hover:text-gray-700 transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-4 sm:my-6 border-gray-200 dark:border-gray-500" />
        <span className="block text-xs sm:text-sm text-gray-500 text-center dark:text-gray-400 pb-4">
          © {currentYear} Benjamin Simmers
        </span>
      </div>
    </footer>
  );
};

export default Footer;

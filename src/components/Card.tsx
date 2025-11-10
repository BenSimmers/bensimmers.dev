import React from "react";
import { Link } from "react-router-dom";

export interface CardProps {
  title: string;
  description: string;
  link: string;
}

export const Card: React.FunctionComponent<CardProps> = ({
  title,
  description,
  link,
}) => (
  <Link to={link}>
    <div className="border-2 border-gray-500 p-4 sm:p-5 rounded-md bg-slate-100 hover:bg-slate-200 w-full h-full flex flex-col justify-between transition-all duration-150 hover:shadow-lg min-h-[180px]">
      <div className="flex-1">
        <h2 className="text-base sm:text-lg font-semibold mb-2 line-clamp-2">{title}</h2>
        <p className="text-sm text-gray-700 line-clamp-3">{description}</p>
      </div>
      <a
        href={link}
        className="text-sm text-blue-500 hover:underline self-start mt-3"
      >
        View
      </a>
    </div>
  </Link>
);


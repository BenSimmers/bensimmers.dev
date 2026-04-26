/**
 * @description: Types for the project
 * @type: Types
 * @exports: Features, Projects, Skills, TimeLineItems, TitleSequence, Introduction, NavLink, NavProps
 */

type Features = {
  name: string;
  description: string;
};

type Repo = {
  id?: number;
  html_url: string;
  full_name: string;
  description: string;
  private?: boolean;
  language?: string;
  stargazers_count?: number;
  watchers_count?: number;
  topics?: string[];
  homepage?: string;
  pushed_at?: string;
};

type ProjectType = Repo;

type Skills = {
  title: string;
  description: string;
};

type TimeLineItems = {
  title: string;
  date: string;
  content: string;
  icon?: React.ReactNode;
};

type SequenceArray = string | number;

type TitleSequence = {
  sequence: SequenceArray[];
};

type Introduction = {
  introduction: string;
};

type NavLink = {
  to: string;
  direction?: "up" | "down" | "left" | "right";
  color: string;
  text: string;
};

type NavProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type {
  Features,
  Skills,
  TimeLineItems,
  TitleSequence,
  Introduction,
  NavLink,
  Repo,
  ProjectType,
  NavProps,
};

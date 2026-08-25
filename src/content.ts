export type Feature = {
  name: string;
  description: string;
};

export type TimelineItem = {
  title: string;
  date: string;
  content: string;
};

export const introduction =
  "I’m a full-stack web developer from Brisbane, Australia, skilled in TypeScript, C#, React, and Redux, and currently learning Go. I also have experience with low-level C programming. Outside of tech, I enjoy rock climbing, hiking, playing soccer, and watching films.";

export const features: Feature[] = [
  { name: "Currently Learning", description: "Kubernetes, Rust" },
  {
    name: "My Interests",
    description:
      "Games, programming, solving interesting problems, reading, football, film, rock climbing, bouldering",
  },
  {
    name: "Skills",
    description:
      "JavaScript, TypeScript, Python, C#, C, HTML, CSS, Docker, Git, SQL, React, Express, PostgreSQL, AWS",
  },
];

export const timeline: TimelineItem[] = [
  {
    title: "Began studying Computer Science",
    date: "March 2021 - December 2023",
    content:
      "Bachelors degree of Information Technology majoring in Computer Science and IoT mobile technologies at the Queensland University of Technology.",
  },
  {
    title: "Software Developer",
    date: "June 2022 - March 2024",
    content:
      "Junior developer and UX designer at TestLab360. Contributing and maintaining full stack applications with various technologies in the construction/LIMS industry.",
  },
  {
    title: "Volunteer Software Developer",
    date: "March 2023 - November 2023",
    content:
      "Apart of the QUT Capstone project, developing a full stack application for a real-world client in the health industry.",
  },
  {
    title: "Graduated from QUT",
    date: "December 2023",
    content:
      "Graduated with a Bachelor of Information Technology majoring in Computer Science and minor IoT mobile technologies, with Distinction.",
  },
  {
    title: "Software Developer",
    date: "April 2024 - Present",
    content:
      "Software developer at Technology One, Contributing and maintaining full stack applications with various technologies in the higher education sector.",
  },
];

export const currentLoad = ["React", "C#", "Redux", "Kubernetes", "TypeScript"];

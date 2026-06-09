import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    company: "Tata Elxsi",
    role: "Senior Engineer",
    duration: "Oct 2022 - Present",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Redux",
      "REST APIs",
    ],
    highlights: [
      "Developing Caterpillar ECS 200 web-based monitoring platform",
      "Building reusable React and TypeScript component architecture",
      "Working on industrial monitoring and telemetry dashboards",
      "API integration and real-time visualization systems",
      "Contributing to scalable frontend design patterns",
    ],
  },
  {
    company: "Trenser Technology Solutions",
    role: "Software Engineer",
    duration: "Apr 2022 - Oct 2022",
    techStack: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    highlights: [
      "Worked on enterprise web applications",
      "Implemented frontend enhancements",
      "Collaborated with product and backend teams",
      "Improved application usability and responsiveness",
    ],
  },
  {
    company: "UL Technology Solutions",
    role: "Software Engineer",
    duration: "May 2019 - Apr 2022",
    techStack: [
      "JavaScript",
      "React",
      "Node.js",
      "HTML",
      "CSS",
    ],
    highlights: [
      "Developed customer-facing web applications",
      "Worked on UI components and dashboard modules",
      "Maintained production applications",
      "Participated in feature development and bug fixes",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section className="mt-24">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
          Experience
        </p>

        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
          Professional Journey
        </h2>

        <p className="mt-3 max-w-2xl text-slate-400">
          A quick overview of my professional experience,
          technologies and responsibilities.
        </p>
      </div>

      <div className="mt-12 space-y-10">
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.company}
            {...experience}
          />
        ))}
      </div>
    </section>
  );
}
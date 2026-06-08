import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    company: "Tata Elxsi",
    role: "Senior Engineer",
    duration: "10/2022 - Present",
    techStack: [
      "React.JS","Javascript",
      "TypeScript",
      "Node.js",
      "Redux",
      "REST APIs",
    ],
    details: [
      "Working on industrial monitoring and control systems",
      "Developing scalable React applications",
      "Building reusable component architecture",
      "API integration and data visualization",
    ],
  },
  {
    company: "Trenser Technology Solutions (P) Ltd",
    role: "Software Engineer",
    duration: "04/2022 - 10/2022",
      techStack: [
        "React.JS",
      "JavaScript",
      "HTML",
      "CSS",
      ,
    ],
    details: [
      "Developed web applications",
      "Worked on frontend modules",
      "Collaborated with cross-functional teams",
    ],
  },
  {
    company: "UL Technology Solutions",
    role: "Software Engineer",
    duration: "05/2019 - 04/2022",
    techStack: [
      "JavaScript",
      "React", 'Node.Js',
      "HTML",
      "CSS","IoT",'AI'
    ],
    details: [
      "Worked on enterprise web applications",
      "Implemented UI enhancements",
      "Improved application performance",
    ],
  }
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

      <div className="space-y-6">
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
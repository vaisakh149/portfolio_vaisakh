import { useState } from "react";

type ExperienceCardProps = {
  company: string;
  role: string;
  duration: string;
  techStack: string[];
  details: string[];
};

export default function ExperienceCard({
  company,
  role,
  duration,
  techStack,
  details,
}: ExperienceCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white">
            {company}
          </h3>

          <p className="text-slate-400">
            {role}
          </p>

          <p className="text-sm text-slate-500">
            {duration}
          </p>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-cyan-400 transition hover:border-cyan-400"
        >
          {expanded ? "Hide Details" : "View Details"}
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {expanded && (
        <div className="mt-6 border-t border-slate-800 pt-4">
          <ul className="space-y-3 text-slate-400">
            {details.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
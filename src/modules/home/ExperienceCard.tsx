import { useState } from "react";

type ExperienceCardProps = {
  company: string;
  role: string;
  duration: string;
  techStack: string[];
  highlights: string[];
};

export default function ExperienceCard({
  company,
  role,
  duration,
  techStack,
  highlights,
}: ExperienceCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative pl-10">
      {/* Timeline Dot */}
      <div className="absolute left-0 top-3 h-4 w-4 rounded-full border-4 border-cyan-400 bg-slate-950" />

      {/* Timeline Line */}
      <div className="absolute left-[7px] top-8 h-full w-[2px] bg-slate-800" />

      <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur transition-all hover:border-cyan-400/30">
        
        <div className="flex flex-col gap-2">
          <span className="text-sm text-cyan-400">
            {duration}
          </span>

          <h3 className="text-2xl font-semibold text-white">
            {company}
          </h3>

          <p className="text-slate-400">
            {role}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mt-5 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <div className="mt-6 space-y-2">
          {highlights.slice(0, expanded ? highlights.length : 2).map(
            (item) => (
              <div
                key={item}
                className="flex items-start gap-2 text-slate-400"
              >
                <span className="mt-1 text-cyan-400">•</span>
                <span>{item}</span>
              </div>
            )
          )}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-5 text-sm font-medium text-cyan-400 hover:text-cyan-300"
        >
          {expanded ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
}
const stats = [
  {
    label: "Years Experience",
    value: "7+",
  },
  {
    label: "Enterprise Projects",
    value: "5+",
  },
  {
    label: "Industrial Systems",
    value: "10+",
  },
];

export default function HeroStats() {
  return (
   <div className="mt-14 overflow-hidden">
  <div className="flex w-max animate-marquee gap-4">
    
    {[
      "React",
      "TypeScript",
      "Node.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "REST APIs",
      "PostgreSQL",
      "Docker",
      "Frontend Architecture",
      "Enterprise UI",
    ].map((tech) => (
      <div
        key={tech}
        className="rounded-full border border-slate-700 bg-slate-900/40 px-5 py-3 text-sm text-slate-300 backdrop-blur"
      >
        {tech}
      </div>
    ))}

  </div>
</div>
  );
}
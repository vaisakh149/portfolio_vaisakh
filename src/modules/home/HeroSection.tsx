import HeroStats from "./HeroStats";
export default function HeroSection() {
  return (
    <section
  id="experience"
  className="mt-24"
>
      {/* Background Glow */}
      <div className="absolute right-0 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl sm:h-[500px] sm:w-[500px]" />

      <div className="relative z-10 w-full max-w-6xl">
        
        {/* Intro */}
        <p className="mb-5 text-[11px] uppercase tracking-[0.28em] text-cyan-400 sm:text-sm">
          Senior Frontend Engineer
        </p>

        {/* Heading */}
        <h1 className="max-w-5xl text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
          Building scalable enterprise interfaces,
          dashboards and modern frontend systems.
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base lg:text-lg">
          Frontend engineer with 7+ years of experience building
          scalable React and TypeScript applications,
          enterprise dashboards, reusable UI systems
          and modern web applications.
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-wrap gap-3">
          
          <button className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-medium text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-300 sm:px-6">
            View Projects
          </button>

          <button className="rounded-xl border border-slate-700 px-5 py-3 text-sm text-slate-300 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 sm:px-6">
            Contact Me
          </button>
        </div>

        {/* Tech Stack */}
        <div className="mt-12 overflow-hidden">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            
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
            ].map((tech) => (
              <div
                key={tech}
                className="whitespace-nowrap rounded-full border border-slate-700 bg-slate-900/40 px-4 py-2 text-xs text-slate-300 backdrop-blur"
              >
                {tech}
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
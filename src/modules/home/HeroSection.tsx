import HeroStats from "./HeroStats";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative z-10 max-w-6xl">
        
        {/* Intro */}
        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Senior Frontend Engineer
        </p>

        {/* Heading */}
        <h1 className="max-w-5xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
          Building scalable enterprise interfaces,
          industrial dashboards and modern frontend systems.
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-base leading-relaxed text-slate-400 sm:text-lg">
          Frontend engineer with 7+ years of experience building
          scalable React and TypeScript applications, enterprise dashboards,
          reusable UI systems and modern web applications.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap gap-4">
          
          <button className="rounded-xl bg-cyan-400 px-6 py-3 font-medium text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-300">
            View Projects
          </button>

          <button className="rounded-xl border border-slate-700 px-6 py-3 text-slate-300 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400">
            Contact Me
          </button>
        </div>

        {/* Stats */}
        <HeroStats />
      </div>
    </section>
  );
}
import { navigationItems } from "../data/navigation";

export default function Sidebar() {
  const handleScroll = (sectionId: string) => {
  document
    .getElementById(sectionId)
    ?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
};
  return (
    <aside className="sticky top-0 flex h-screen w-[280px] flex-col border-r border-slate-800 bg-[#0F172A] px-6 py-10">
      
      {/* Logo */}
      <div>
        <h1 className="text-2xl font-bold tracking-wide text-white">
          Vaisakh Mullassery<span className="text-cyan-400">.</span>
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          Senior Frontend Developer 
        </p>
      </div>

      {/* Navigation */}
      <nav className="mt-16 flex flex-col gap-4">
        {navigationItems.map((item) => (
          <button
  key={item.sectionId}
  onClick={() => handleScroll(item.sectionId)}

            className="group flex items-center gap-3 text-left text-sm text-slate-400 transition-all hover:text-cyan-400"
          >
            <span className="h-[1px] w-6 bg-slate-600 transition-all group-hover:w-10 group-hover:bg-cyan-400" />

            {item.label}
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="mt-auto">
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
          <p className="text-xs leading-relaxed text-slate-400">
  React • TypeScript • Node.js • Full Stack Learning
</p>
        </div>
      </div>
    </aside>
  );
}
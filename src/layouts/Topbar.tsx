export default function Topbar() {
  return (
    <header className="sticky top-0 z-50 flex h-[64px] items-center justify-between border-b border-slate-800 bg-[#0F172A]/90 px-5 backdrop-blur">
      
      <h1 className="text-base font-bold text-white">
        Vaisakh<span className="text-cyan-400">.</span>
      </h1>

      <button className="rounded-lg border border-slate-700 px-3 py-2 text-xs text-slate-300">
        Menu
      </button>
    </header>
  );
}
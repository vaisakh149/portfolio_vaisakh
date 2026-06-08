import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({
  children,
}: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-200">
      
      {/* Mobile Topbar */}
      <div className="lg:hidden">
        <Topbar />
      </div>

      <div className="mx-auto flex max-w-[1600px]">
        
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="w-full flex-1 px-5 py-6 sm:px-6 lg:px-12 lg:py-10">
          {children}
        </main>
      </div>
    </div>
  );
}
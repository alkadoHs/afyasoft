import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex">
      <Sidebar />
      <section className="shrink-1 px-4 lg:px-8 w-full">
        <header className="bg-white/90 sticky top-0 z-50 mb-3 -mx-4 px-4 lg:px-8 lg:-mx-8 ">
          <Navbar />
        </header>
        {children}
      </section>
    </section>
  );
}

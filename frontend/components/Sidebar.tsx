import { ChartPieIcon, CpuChipIcon } from "@heroicons/react/24/solid";
import { Navigation } from "./Navigation";
import { BeakerIcon } from "@heroicons/react/24/outline";
import SidebarAccordion from "./SidebarAccordion";

function Sidebar() {
  return (
    <aside className="p-4 hidden md:block border-dashed border-r-1 w-[350px] h-[100dvh] sticky top-0 ">
      <p>Logo</p>
      <section>
        <h5 className="text-base text-slate-400 font-medium">Overview</h5>
        <nav className="py-2">
          <ul className="grid gap-1">
            <Navigation href="/dashboard" name="Dashboard">
              <ChartPieIcon className="h-6 w-6 fill-slate-400" />
            </Navigation>
            <Navigation href="/dashboard/laboratory" name="Laboratory">
              <BeakerIcon className="h-6 w-6 fill-slate-400" />
            </Navigation>
            <Navigation href="/dashboard/pharmacy" name="Pharmacy">
              <CpuChipIcon className="h-6 w-6 fill-slate-400" />
            </Navigation>
          </ul>
        </nav>
      </section>

      <section>
        <h5 className="text-base text-slate-400 font-medium">Management</h5>
        <SidebarAccordion />
      </section>
    </aside>
  );
}

export default Sidebar;

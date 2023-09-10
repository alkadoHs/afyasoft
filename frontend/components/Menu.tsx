"use client";

import {
  Bars3CenterLeftIcon,
  BeakerIcon,
  ChartPieIcon,
  ClipboardDocumentCheckIcon,
  ClipboardDocumentListIcon,
  Cog8ToothIcon,
  CpuChipIcon,
  PresentationChartBarIcon,
  ScaleIcon,
  ShieldCheckIcon,
  Square3Stack3DIcon,
  SwatchIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import { useState } from "react";
import { Navigation } from "./Navigation";
import SidebarPath from "./SidebarPath";
import { usePathname } from "next/navigation";
import { XMarkIcon } from "@heroicons/react/24/solid";

function Menu() {
  const pathname = usePathname();

  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal  text-medium",
    trigger:
      "data-[hover=true]:bg-default-100 rounded py-2 px-1 flex items-center",
    indicator: "text-medium",
    content: "text-small",
  };
  const [isDrowerOpen, setIsDrowerOpen] = useState(false);
  return (
    <>
      <Button
        isIconOnly
        onClick={(e) => setIsDrowerOpen(false)}
        className="bg-slate-50 lg:hidden hover:bg-emerald-100"
      >
        <Bars3CenterLeftIcon className="h-6 w-6 text-slate-500" />
      </Button>

      <aside
        className={`p-4 border-dashed ${
          isDrowerOpen ? "hidden" : ""
        } border-r-1 w-[350px] h-[100dvh] absolute z-50 top-0 left-0 myaside bg-white md:hidden`}
      >
        <section className="w-full flex justify-between items-start">
          <div>Logo</div>
          <Button
            isIconOnly
            color="danger"
            onClick={(event) => setIsDrowerOpen(true)}
          >
            <XMarkIcon className="h-6 w-6" />
          </Button>
        </section>
        <section>
          <h5 className="text-base text-slate-400 font-medium">Overview</h5>
          <nav className="py-2">
            <ul
              className="grid gap-1"
              onClick={(event) => setIsDrowerOpen(true)}
            >
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

          <Accordion
            showDivider={false}
            variant="light"
            className="flex flex-col shadow-none gap-1 w-full max-w-[300px]"
            itemClasses={itemClasses}
          >
            <AccordionItem
              key="1"
              aria-label="Settings"
              startContent={
                <Cog8ToothIcon className="text-slate-400 h-6 w-5" />
              }
              title="Settings"
            >
              <ul
                role="list"
                className="marker:text-gray-400 list-disc text-small pl-10 space-y-3 text-slate-500"
              >
                <SidebarPath
                  pathName="/dashboard/settings/general"
                  name="General"
                  closeSideBar={() => setIsDrowerOpen(true)}
                />
                <SidebarPath
                  pathName="/dashboard/settings/payment"
                  name="Payment Methods"
                  closeSideBar={() => setIsDrowerOpen(true)}
                />
                <SidebarPath
                  pathName="/dashboard/settings/category"
                  name="Categories"
                  closeSideBar={() => setIsDrowerOpen(true)}
                />
              </ul>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Billing Settings"
              startContent={<ScaleIcon className="h-6 text-slate-500 w-5" />}
              title="Billing Settings"
            >
              <ul
                role="list"
                className="marker:text-sky-400 list-disc text-small pl-10 space-y-3 text-slate-500"
              >
                <SidebarPath
                  closeSideBar={() => setIsDrowerOpen(true)}
                  pathName="/dashboard/billing/bed"
                  name="Bed and Room"
                />
                <SidebarPath
                  pathName="/dashboard/billing/procedures"
                  name="Procedures"
                  closeSideBar={() => setIsDrowerOpen(true)}
                />
                <SidebarPath
                  pathName="/dashboard/billing/surgicals"
                  name="Surgicals"
                  closeSideBar={() => setIsDrowerOpen(true)}
                />
                <SidebarPath
                  pathName="/dashboard/billing/labtests"
                  name="Labtests"
                  closeSideBar={() => setIsDrowerOpen(true)}
                />
                <SidebarPath
                  pathName="/dashboard/billing/services"
                  name="Services"
                  closeSideBar={() => setIsDrowerOpen(true)}
                />
              </ul>
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Pending tasks"
              classNames={{ subtitle: "text-warning" }}
              startContent={<UserIcon className="text-slate-400 h-6 w-6" />}
              title="Staff"
            >
              <ul
                role="list"
                className="marker:text-sky-400 list-disc text-small pl-10 space-y-3 text-slate-500"
              >
                <SidebarPath
                  pathName="/dashboard/staff/create"
                  closeSideBar={() => setIsDrowerOpen(true)}
                  name="Create"
                />
                <SidebarPath
                  pathName="/dashboard/staff/list"
                  closeSideBar={() => setIsDrowerOpen(true)}
                  name="List"
                />
                <SidebarPath
                  pathName="/dashboard/staff/profile"
                  name="Profile"
                  closeSideBar={() => setIsDrowerOpen(true)}
                />
              </ul>
            </AccordionItem>
            <AccordionItem
              key="4"
              aria-label="Pending tasks"
              classNames={{ subtitle: "text-warning" }}
              startContent={<UserIcon className="text-slate-400 h-6 w-6" />}
              title="Out-Patients"
            >
              <ul
                role="list"
                className="marker:text-sky-400 list-disc text-small pl-10 space-y-3 text-slate-500"
              >
                <SidebarPath
                  pathName="/dashboard/outptients/create"
                  name="Add Patient"
                  closeSideBar={() => setIsDrowerOpen(true)}
                />
                <SidebarPath
                  pathName="/dashboard/outpatients/list"
                  name="All Patients"
                  closeSideBar={() => setIsDrowerOpen(true)}
                />
                <SidebarPath
                  pathName="/dashboard/outpatients/profile"
                  name="Profile"
                  closeSideBar={() => setIsDrowerOpen(true)}
                />
              </ul>
            </AccordionItem>
            <AccordionItem
              key="5"
              aria-label="Card expired"
              classNames={{ subtitle: "text-danger" }}
              title="Medicines"
              startContent={
                <Square3Stack3DIcon className="text-slate-400 h-5 w-5" />
              }
            >
              <ul
                role="list"
                className="marker:text-sky-400 list-disc text-small pl-10 space-y-3 text-slate-500"
              >
                <SidebarPath
                  pathName="/dashboard/medicine/create"
                  name="Add Medicine"
                  closeSideBar={() => setIsDrowerOpen(true)}
                />
                <SidebarPath
                  pathName="/dashboard/medicine"
                  name="All Medicines"
                  closeSideBar={() => setIsDrowerOpen(true)}
                />
                <SidebarPath
                  pathName="/dashboard/medicine/alert"
                  name="Stock Alert"
                  closeSideBar={() => setIsDrowerOpen(true)}
                />
                <SidebarPath
                  pathName="/dashboard/medicine/tock-movement"
                  name="Stock Movemoment"
                  closeSideBar={() => setIsDrowerOpen(true)}
                />
                <SidebarPath
                  pathName="/dashboard/medicine/todays-sales"
                  name="Today's Sales"
                  closeSideBar={() => setIsDrowerOpen(true)}
                />
                <SidebarPath
                  pathName="/dashboard/medicine/inventory"
                  name="Inventory"
                  closeSideBar={() => setIsDrowerOpen(true)}
                />
              </ul>
            </AccordionItem>

            <AccordionItem
              key="6"
              aria-label="Card expired"
              classNames={{ subtitle: "text-danger" }}
              title="Appointments"
              startContent={
                <PresentationChartBarIcon className="text-slate-400 h-5 w-5" />
              }
            >
              <ul
                role="list"
                className="marker:text-sky-400 list-disc text-small pl-10 space-y-3 text-slate-500"
              >
                <SidebarPath
                  pathName="/dashboard/appointment/create"
                  name="create"
                  closeSideBar={() => setIsDrowerOpen(true)}
                />
                <SidebarPath
                  pathName="/dashboard/appointment"
                  name="All Appointments"
                  closeSideBar={() => setIsDrowerOpen(true)}
                />
              </ul>
            </AccordionItem>
            <AccordionItem
              key="7"
              aria-label="Manage Orders"
              classNames={{ subtitle: "text-danger" }}
              title="Manage Orders"
              startContent={
                <ClipboardDocumentListIcon className="text-slate-400 h-5 w-5" />
              }
            >
              <ul
                role="list"
                className="marker:text-sky-400 list-disc text-small pl-10 space-y-3 text-slate-500"
              >
                <SidebarPath
                  pathName="/dashboard/orders/register-supplier"
                  name="Register Supplier"
                  closeSideBar={() => setIsDrowerOpen(true)}
                />
                <SidebarPath
                  pathName="/dashboard/orders/suppliers"
                  name="All Suppliers"
                  closeSideBar={() => setIsDrowerOpen(true)}
                />
                <SidebarPath
                  pathName="/dashboard/orders/create-order"
                  name="Place Order"
                  closeSideBar={() => setIsDrowerOpen(true)}
                />
                <SidebarPath
                  pathName="/dashboard/orders/order-history"
                  name="Order History"
                  closeSideBar={() => setIsDrowerOpen(true)}
                />
              </ul>
            </AccordionItem>

            <AccordionItem
              key="8"
              aria-label="Manage Orders"
              classNames={{ subtitle: "text-danger" }}
              title="Human Resources"
              startContent={
                <ShieldCheckIcon className="text-slate-400 h-5 w-5" />
              }
            >
              <ul
                role="list"
                className="marker:text-sky-400 list-disc text-small pl-10 space-y-3 text-slate-500"
              >
                <SidebarPath
                  pathName="/dashboard/resources/doctor"
                  name="Doctor"
                  closeSideBar={() => setIsDrowerOpen(true)}
                />
                <SidebarPath
                  pathName="/dashboard/resources/pharmasist"
                  name="Pharmasist"
                  closeSideBar={() => setIsDrowerOpen(true)}
                />
                <SidebarPath
                  pathName="/dashboard/resources/receptionist"
                  name="Receptionist"
                  closeSideBar={() => setIsDrowerOpen(true)}
                />
              </ul>
            </AccordionItem>
            <AccordionItem
              key="9"
              aria-label="Manage Orders"
              classNames={{ subtitle: "text-danger" }}
              title="Financials"
              startContent={<SwatchIcon className="text-slate-400 h-5 w-5" />}
            >
              <ul
                role="list"
                className="marker:text-sky-400 list-disc text-small pl-10 space-y-3 text-slate-500"
              >
                <SidebarPath
                  pathName="/dashboard/financials/due-collections"
                  name="Due Collections"
                  closeSideBar={() => setIsDrowerOpen(true)}
                />
                <SidebarPath
                  pathName="/dashboard/resources/pharmasist"
                  name="Patient Profile"
                  closeSideBar={() => setIsDrowerOpen(true)}
                />
                <SidebarPath
                  pathName="/dashboard/resources/receptionist"
                  name="Receptionist"
                  closeSideBar={() => setIsDrowerOpen(true)}
                />
              </ul>
            </AccordionItem>
            <AccordionItem
              key="10"
              aria-label="Manage Orders"
              classNames={{ subtitle: "text-danger" }}
              title="Invoices"
              startContent={
                <ClipboardDocumentCheckIcon className="text-slate-400 h-5 w-5" />
              }
            >
              <ul
                role="list"
                className="marker:text-sky-400 list-disc text-small pl-10 space-y-3 text-slate-500"
              >
                <SidebarPath
                  pathName="/dashboard/invoice/list"
                  name="List"
                  closeSideBar={() => setIsDrowerOpen(true)}
                />
                <SidebarPath
                  pathName="/dashboard/invoice/detail"
                  name="Detail"
                  closeSideBar={() => setIsDrowerOpen(true)}
                />
                <SidebarPath
                  pathName="/dashboard/invoice/create"
                  name="Create"
                  closeSideBar={() => setIsDrowerOpen(true)}
                />
                <SidebarPath
                  pathName="/dashboard/invoice/edit"
                  name="Edit"
                  closeSideBar={() => setIsDrowerOpen(true)}
                />
              </ul>
            </AccordionItem>
          </Accordion>
        </section>
      </aside>
    </>
  );
}

export default Menu;

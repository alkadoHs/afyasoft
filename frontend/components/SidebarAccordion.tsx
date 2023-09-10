"use client";

import {
  ClipboardDocumentCheckIcon,
  ClipboardDocumentListIcon,
  Cog8ToothIcon,
  PresentationChartBarIcon,
  ScaleIcon,
  ShieldCheckIcon,
  Square3Stack3DIcon,
  SwatchIcon,
} from "@heroicons/react/20/solid";
import { UserIcon } from "@heroicons/react/24/solid";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import SidebarPath from "./SidebarPath";

function SidebarAccordion() {
  const pathname = usePathname();

  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal  text-medium",
    trigger:
      "data-[hover=true]:bg-default-100 rounded py-2 px-1 flex items-center",
    indicator: "text-medium",
    content: "text-small",
  };

  return (
    <Accordion
      showDivider={false}
      variant="light"
      className="flex flex-col shadow-none gap-1 w-full max-w-[300px]"
      itemClasses={itemClasses}
    >
      <AccordionItem
        key="1"
        aria-label="Settings"
        startContent={<Cog8ToothIcon className="text-slate-400 h-6 w-5" />}
        title="Settings"
      >
        <ul
          role="list"
          className="marker:text-gray-400 list-disc text-small pl-10 space-y-3 text-slate-500"
        >
          <SidebarPath pathName="/dashboard/settings/general" name="General" />
          <SidebarPath
            pathName="/dashboard/settings/payment"
            name="Payment Methods"
          />
          <SidebarPath
            pathName="/dashboard/settings/category"
            name="Categories"
          />
        </ul>
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Apps Permissions"
        startContent={<ScaleIcon className="h-6 text-slate-500 w-5" />}
        title="Billing Settings"
      >
        <ul
          role="list"
          className="marker:text-sky-400 list-disc text-small pl-10 space-y-3 text-slate-500"
        >
          <SidebarPath pathName="/dashboard/billing/bed" name="Bed and Room" />
          <SidebarPath
            pathName="/dashboard/billing/procedures"
            name="Procedures"
          />
          <SidebarPath
            pathName="/dashboard/billing/surgicals"
            name="Surgicals"
          />
          <SidebarPath pathName="/dashboard/billing/labtests" name="Labtests" />
          <SidebarPath pathName="/dashboard/billing/services" name="Services" />
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
          <SidebarPath pathName="/dashboard/staff/create" name="Create" />
          <SidebarPath pathName="/dashboard/staff/list" name="List" />
          <SidebarPath pathName="/dashboard/staff/profile" name="Profile" />
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
          />
          <SidebarPath
            pathName="/dashboard/outpatients/list"
            name="All Patients"
          />
          <SidebarPath
            pathName="/dashboard/outpatients/profile"
            name="Profile"
          />
        </ul>
      </AccordionItem>
      <AccordionItem
        key="5"
        aria-label="Card expired"
        classNames={{ subtitle: "text-danger" }}
        title="Medicines"
        startContent={<Square3Stack3DIcon className="text-slate-400 h-5 w-5" />}
      >
        <ul
          role="list"
          className="marker:text-sky-400 list-disc text-small pl-10 space-y-3 text-slate-500"
        >
          <SidebarPath
            pathName="/dashboard/medicine/create"
            name="Add Medicine"
          />
          <SidebarPath pathName="/dashboard/medicine" name="All Medicines" />
          <SidebarPath
            pathName="/dashboard/medicine/alert"
            name="Stock Alert"
          />
          <SidebarPath
            pathName="/dashboard/medicine/tock-movement"
            name="Stock Movemoment"
          />
          <SidebarPath
            pathName="/dashboard/medicine/todays-sales"
            name="Today's Sales"
          />
          <SidebarPath
            pathName="/dashboard/medicine/inventory"
            name="Inventory"
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
          <SidebarPath pathName="/dashboard/appointment/create" name="create" />
          <SidebarPath
            pathName="/dashboard/appointment"
            name="All Appointments"
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
          />
          <SidebarPath
            pathName="/dashboard/orders/suppliers"
            name="All Suppliers"
          />
          <SidebarPath
            pathName="/dashboard/orders/create-order"
            name="Place Order"
          />
          <SidebarPath
            pathName="/dashboard/orders/order-history"
            name="Order History"
          />
        </ul>
      </AccordionItem>

      <AccordionItem
        key="8"
        aria-label="Manage Orders"
        classNames={{ subtitle: "text-danger" }}
        title="Human Resources"
        startContent={<ShieldCheckIcon className="text-slate-400 h-5 w-5" />}
      >
        <ul
          role="list"
          className="marker:text-sky-400 list-disc text-small pl-10 space-y-3 text-slate-500"
        >
          <SidebarPath pathName="/dashboard/resources/doctor" name="Doctor" />
          <SidebarPath
            pathName="/dashboard/resources/pharmasist"
            name="Pharmasist"
          />
          <SidebarPath
            pathName="/dashboard/resources/receptionist"
            name="Receptionist"
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
          />
          <SidebarPath
            pathName="/dashboard/resources/pharmasist"
            name="Patient Profile"
          />
          <SidebarPath
            pathName="/dashboard/resources/receptionist"
            name="Receptionist"
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
          <SidebarPath pathName="/dashboard/invoice/list" name="List" />
          <SidebarPath pathName="/dashboard/invoice/detail" name="Detail" />
          <SidebarPath pathName="/dashboard/invoice/create" name="Create" />
          <SidebarPath pathName="/dashboard/invoice/edit" name="Edit" />
        </ul>
      </AccordionItem>
    </Accordion>
  );
}

export default SidebarAccordion;

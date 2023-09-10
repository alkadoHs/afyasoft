"use client";

import { Select, SelectItem } from "@nextui-org/react";

function DashboardSelect() {
  return (
    <Select label="Filter by" className="max-w-[200px] ">
      <SelectItem key={"medical"} value={"medical doctor"}>
        Laboratory
      </SelectItem>
      <SelectItem key={"nurse"} value={"Nurse"}>
        Pharmacy
      </SelectItem>
      <SelectItem key={"co"} value={"co"}>
        Reception
      </SelectItem>
    </Select>
  );
}

export default DashboardSelect;

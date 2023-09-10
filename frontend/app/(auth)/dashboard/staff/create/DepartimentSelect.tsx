"use client";

import { Select, SelectItem } from "@nextui-org/react";

function DepartimentSelect() {
  return (
    <Select
      label="Select Departiment"
      className="max-w-xs border border-slate-200 rounded-xl"
    >
      <SelectItem key={"pharmacy"} value={"Pharmacy"}>
        Pharmacy
      </SelectItem>
      <SelectItem key={"lab"} value={"Laboratory"}>
        Laboratory
      </SelectItem>
      <SelectItem key={"reception"} value={"Reception"}>
        Reception
      </SelectItem>
    </Select>
  );
}

export default DepartimentSelect;

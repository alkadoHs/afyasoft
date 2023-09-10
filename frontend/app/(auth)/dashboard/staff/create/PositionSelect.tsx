"use client";

import { Select, SelectItem } from "@nextui-org/react";

function PositionSelect() {
  return (
    <Select
      label="Select Position"
      className="max-w-xs border border-slate-200 rounded-xl"
    >
      <SelectItem key={"medical"} value={"medical doctor"}>
        Medical Doctor
      </SelectItem>
      <SelectItem key={"nurse"} value={"Nurse"}>
        Nurce
      </SelectItem>
      <SelectItem key={"co"} value={"co"}>
        Clinical Officer
      </SelectItem>
    </Select>
  );
}

export default PositionSelect;

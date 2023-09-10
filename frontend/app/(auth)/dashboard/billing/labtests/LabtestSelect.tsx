"use client";

import { Select, SelectItem } from "@nextui-org/react";

function LabtestSelect() {
  return (
    <Select label="Select category" className="max-w-xs">
      <SelectItem key={"micro"} value={"micro"}>
        Micro
      </SelectItem>
      <SelectItem key={"macro"} value={"macro"}>
        Macro
      </SelectItem>
    </Select>
  );
}

export default LabtestSelect;

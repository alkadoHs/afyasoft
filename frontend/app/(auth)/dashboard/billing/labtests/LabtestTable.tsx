"use client";

import { Table, TableHeader, TableColumn, TableBody } from "@nextui-org/table";

const LabtestTable: React.FC = () => {
  return (
    <Table aria-label="Example empty table">
      <TableHeader>
        <TableColumn>S/NO</TableColumn>
        <TableColumn>CATEGORY</TableColumn>
        <TableColumn>SUB CATEGORY</TableColumn>
        <TableColumn>ACTION</TableColumn>
      </TableHeader>
      <TableBody emptyContent={"No rows to display."}>{[]}</TableBody>
    </Table>
  );
};

export default LabtestTable;

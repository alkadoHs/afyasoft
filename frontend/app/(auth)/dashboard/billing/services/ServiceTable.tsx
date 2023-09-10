"use client";

import { Table, TableHeader, TableColumn, TableBody } from "@nextui-org/table";

const ServiceTable: React.FC = () => {
  return (
    <Table aria-label="Example empty table">
      <TableHeader>
        <TableColumn>S/NO</TableColumn>
        <TableColumn>SERVICE NAME</TableColumn>
        <TableColumn>PRICE</TableColumn>
        <TableColumn>ACTION</TableColumn>
      </TableHeader>
      <TableBody emptyContent={"No rows to display."}>{[]}</TableBody>
    </Table>
  );
};

export default ServiceTable;

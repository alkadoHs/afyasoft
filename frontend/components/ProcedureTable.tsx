"use client";

import { Table, TableHeader, TableColumn, TableBody } from "@nextui-org/table";

const ProcedureTable: React.FC = () => {
  return (
    <Table aria-label="Example empty table">
      <TableHeader>
        <TableColumn>S/NO</TableColumn>
        <TableColumn>PROCEDURE NAME</TableColumn>
        <TableColumn>PRICE</TableColumn>
        <TableColumn>ACTION</TableColumn>
      </TableHeader>
      <TableBody emptyContent={"No rows to display."}>{[]}</TableBody>
    </Table>
  );
};

export default ProcedureTable;

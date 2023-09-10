"use client";

import { Table, TableHeader, TableColumn, TableBody } from "@nextui-org/table";

const PaymentsTable: React.FC = () => {
  return (
    <Table aria-label="Payment Table">
      <TableHeader>
        <TableColumn>S/NO</TableColumn>
        <TableColumn>METHOD</TableColumn>
        <TableColumn>ACTION</TableColumn>
      </TableHeader>
      <TableBody emptyContent={"No rows to display."}>{[]}</TableBody>
    </Table>
  );
};

export default PaymentsTable;

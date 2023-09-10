"use client";

import { Table, TableHeader, TableColumn, TableBody } from "@nextui-org/table";

const CategoriesTable: React.FC = () => {
  return (
    <Table aria-label="Example empty table">
      <TableHeader>
        <TableColumn>S/NO</TableColumn>
        <TableColumn>CATEGORY NAME</TableColumn>
        <TableColumn>SUB CATEGORIES</TableColumn>
        <TableColumn>ACTION</TableColumn>
      </TableHeader>
      <TableBody emptyContent={"No rows to display."}>{[]}</TableBody>
    </Table>
  );
};

export default CategoriesTable;

"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

interface Row {
  [key: string]: any;
}

interface Column {
  [key: string]: any;
}

interface Props {
  columns: Column[];
  rows: Row[];
  ariaLabel: string;
}

export default function App({ columns, rows, ariaLabel }: Props) {
  return (
    <Table aria-label={ariaLabel}>
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

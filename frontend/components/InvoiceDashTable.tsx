"use client";

import { Chip } from "@nextui-org/react";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";

function InvoiceDashTable() {
  return (
    <Table removeWrapper aria-label="Dashboard invoice table">
      <TableHeader>
        <TableColumn>Invoice ID</TableColumn>
        <TableColumn>Category</TableColumn>
        <TableColumn>Price</TableColumn>
        <TableColumn>Status</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1" className="border-b border-slate-200">
          <TableCell>INV-2109</TableCell>
          <TableCell>Category 1</TableCell>
          <TableCell>6,000</TableCell>
          <TableCell>
            <Chip
              className="capitalize"
              color="success"
              size="sm"
              variant="flat"
            >
              Paid
            </Chip>
          </TableCell>
        </TableRow>
        <TableRow key="2" className="border-b border-slate-200">
          <TableCell>INV-0002</TableCell>
          <TableCell>Procedure B</TableCell>
          <TableCell>200,000</TableCell>
          <TableCell>
            <Chip
              className="capitalize"
              color="success"
              size="sm"
              variant="flat"
            >
              Paid
            </Chip>
          </TableCell>
        </TableRow>
        <TableRow key="3" className="border-b border-slate-200">
          <TableCell>INV-7600</TableCell>
          <TableCell>Surgical</TableCell>
          <TableCell>60,800</TableCell>
          <TableCell>
            <Chip
              className="capitalize"
              color="danger"
              size="sm"
              variant="flat"
            >
              overdue
            </Chip>
          </TableCell>
        </TableRow>
        <TableRow key="4" className="border-b border-slate-200">
          <TableCell>INV-0067</TableCell>
          <TableCell>X-rays</TableCell>
          <TableCell>900,7800</TableCell>
          <TableCell>
            <Chip
              className="capitalize"
              color="warning"
              size="sm"
              variant="flat"
            >
              Progress
            </Chip>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default InvoiceDashTable;

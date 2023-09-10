"use client";

import React, { useState } from "react";
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridToolbar,
} from "@mui/x-data-grid";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const handleEdit = (id: number) => {
  // Add your edit logic here
};

const handleDelete = (id: number) => {
  // Add your delete logic here
};

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 150 },
  {
    field: "actions",
    headerName: "Actions",
    width: 150,
    sortable: false,
    renderCell: (params) => (
      <strong>
        <IconButton
          color="primary"
          aria-label="edit"
          onClick={() => handleEdit(params.row.id)}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          color="secondary"
          aria-label="delete"
          onClick={() => handleDelete(params.row.id)}
        >
          <DeleteIcon />
        </IconButton>
      </strong>
    ),
  },
];

interface Row {
  id: number;
  name: string;
}

const rows: GridRowsProp = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "Jane Doe" },
  { id: 4, name: "Jane Doe" },
  { id: 5, name: "Jane Doe" },
  // Add other rows here
];

const CategoriesTable: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ height: 400, width: "100%" }}>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={handleSearchChange}
        style={{ marginBottom: 16 }}
      />
      <DataGrid
        rows={filteredRows}
        columns={columns}
        slots={{ toolbar: GridToolbar }}
      />
    </div>
  );
};

export default CategoriesTable;

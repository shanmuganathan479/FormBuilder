import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Chip } from "@mui/material";

const rows = [
  {
    id: 1,
    formName: "Customer Feedback Form",
    status: "Active",
    lastUpdated: "10 Jan 2024 - 14:20",
    responses: 320,
    today: 12,
  },
  {
    id: 2,
    formName: "Event Registration Form",
    status: "Inactive",
    lastUpdated: "22 Feb 2024 - 09:45",
    responses: 150,
    today: 0,
  },
  {
    id: 3,
    formName: "Job Application Form",
    status: "Active",
    lastUpdated: "05 Mar 2024 - 11:30",
    responses: 412,
    today: 7,
  },
  {
    id: 4,
    formName: "Newsletter Signup Form",
    status: "Inactive",
    lastUpdated: "18 Apr 2024 - 16:10",
    responses: 98,
    today: 0,
  },
  {
    id: 5,
    formName: "Contact Us Form",
    status: "Active",
    lastUpdated: "01 May 2024 - 08:55",
    responses: 525,
    today: 20,
  },
];

const columns = [
  {
    field: "formName",
    headerName: "Form Name",
    disableColumnMenu: true,
    flex: 1,
    renderCell: (params) => (
      <Box>
        <div>{params.row.formName}</div>
        <Chip
          size="small"
          label={params.row.status}
          color="success"
          sx={{ mt: 0.5 }}
        />
      </Box>
    ),
  },
  {
    field: "lastUpdated",
    headerName: "Last Updated",
    flex: 1,
    disableColumnMenu: true,
  },
  {
    field: "responses",
    headerName: "Responses",
    flex: 1,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div>
        <div>{params.row.responses}</div>
        <div style={{ fontSize: "0.8em", color: "#666" }}>
          {params.row.today} today
        </div>
      </div>
    ),
  },
  {
    field: "actions",
    headerName: "Action",
    flex: 0.5,
    sortable: false,
    disableColumnMenu: true,
    renderCell: () => (
      <Button size="small" variant="text">
        See More →
      </Button>
    ),
  },
];

const FormDetails = () => {
  return (
    <Box sx={{ height: 500, width: "100%", mt: 8 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        disableRowSelectionOnClick
        hideFooter
        rowHeight={60}
        sx={{
          border: "none",
          ".MuiDataGrid-columnHeaders": {
            borderBottom: "none",
          },
          ".MuiDataGrid-cell": {
            borderBottom: "1px solid #eee",
          },
          ".MuiDataGrid-columnHeader": {
            backgroundColor: "#fff",
          },
          p: 2,
        }}
      />
    </Box>
  );
};

export default FormDetails;

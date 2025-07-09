import React from "react";
import { Outlet } from "react-router-dom";
import { Grid, Box } from "@mui/material";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <Grid container sx={{ height: "100vh" }}>
      {/* Sidebar - 4/12 */}
      <Grid
        item
        size={2.5}
        sx={{
          bgcolor: "#f5f5f5", // optional background
          overflowY: "auto",
        }}
      >
        <Sidebar />
      </Grid>

      {/* Main Content - 8/12 */}
      <Grid
        item
        size={9.5}
        sx={{
          p: 2,
          overflowY: "auto",
        }}
      >
        <Box>
          <Outlet />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Layout;

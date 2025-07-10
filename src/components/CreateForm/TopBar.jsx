import React from "react";
import { Box, Button, Typography } from "@mui/material";

const TopBar = () => (
  <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    px={3}
    py={2}
    mb={2}
  >
    <Typography variant="h5" sx={{ fontFamily: "Inter, sans-serif" }}>
      Create New Form
    </Typography>
    <Button
      variant="contained"
      color="primary"
      sx={{ textTransform: "capitalize" }}
    >
      Publish Form
    </Button>
  </Box>
);

export default TopBar;

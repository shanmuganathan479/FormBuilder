import React from "react";
import { Grid } from "@mui/material";
import logo from "../assets/logo.png";
const LeftContainer = () => {
  return (
    <Grid
      item
      size={6}
      sx={{
        backgroundColor: "#03111B",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={logo} alt="Logo failed tom load" />
    </Grid>
  );
};
export default LeftContainer;

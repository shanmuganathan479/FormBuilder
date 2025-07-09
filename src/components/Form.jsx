import React from "react";
import { Box, Typography, Card, CardContent, IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import NewFormlogo from "../assets/NewFormlogo.png";
const cardStyle = {
  backgroundColor: "#007AD3",
  width: 230,
  height: 90,
  p: 1,
  borderRadius: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 2, // Ensure gap is explicitly 0
  paddingLeft: 0,
  paddingRight: 0,
};

const fontStyle = {
  fontFamily: "Inter, sans-serif",
  color: "#fff",
  marginLeft: 0, // Remove margin between icon and text
  fontSize: "16px",
  textAlign: "left",
};

const Form = () => {
  return (
    <Box sx={{ mt: 4, px: 2 }}>
      <Typography
        variant="h5"
        sx={{
          fontFamily: "Inter, sans-serif",
          textAlign: "left",
          mb: 5,
          color: "#1E1E1E",
          fontSize: "18px",
        }}
      >
        My Forms
      </Typography>

      <Card sx={cardStyle} elevation={3}>
        <IconButton sx={{ color: "#fff" }}>
          <img src={NewFormlogo} alt="logo" />
        </IconButton>
        <Typography sx={fontStyle}>New Form</Typography>
      </Card>
    </Box>
  );
};

export default Form;

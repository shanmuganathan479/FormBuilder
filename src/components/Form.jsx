import React from "react";
import { Box, Typography, Card, IconButton, TextField } from "@mui/material";
import NewFormlogo from "../assets/NewFormlogo.png";
import FormDetails from "../components/FormDetails";

const cardStyle = {
  backgroundColor: "#007AD3",
  width: 230,
  height: 90,
  p: 1,
  borderRadius: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 2,
  paddingLeft: 0,
  paddingRight: 0,
};

const fontStyle = {
  fontFamily: "Inter, sans-serif",
  color: "#fff",
  marginLeft: 0,
  fontSize: "16px",
  textAlign: "left",
};

const Form = () => {
  return (
    <>
      <Box sx={{ mt: 4, px: 2 }}>
        {/* TITLE + SEARCH BAR */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 5,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Inter, sans-serif",
              color: "#1E1E1E",
              fontSize: "18px",
            }}
          >
            My Forms
          </Typography>

          <TextField
            size="small"
            placeholder="Search forms"
            sx={{ width: 250 }}
          />
        </Box>

        {/* NEW FORM CARD */}
        <Card sx={cardStyle} elevation={3}>
          <IconButton sx={{ color: "#fff" }}>
            <img src={NewFormlogo} alt="logo" />
          </IconButton>
          <Typography sx={fontStyle}>New Form</Typography>
        </Card>
      </Box>

      <FormDetails />
    </>
  );
};

export default Form;

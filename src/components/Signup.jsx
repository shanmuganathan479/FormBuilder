import {
  Grid,
  Box,
  TextField,
  Button,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import LeftContainer from "../components/LeftContainer";

const Signup = () => {
  return (
    <div>
      <Grid container sx={{ height: "100vh" }}>
        <LeftContainer />

        <Grid
          item
          size={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 4,
          }}
        >
          <Box sx={{ width: "100%", maxWidth: 400 }}>
            <Typography
              variant="h4"
              mb={3}
              sx={{
                fontSize: "22px",
                mt: 2,
                color: "#1E1E1E",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Sign Up
            </Typography>

            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              variant="outlined"
              margin="normal"
            />

            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 2, color: "white", textTransform: "capitalize" }}
            >
              Sign Up
            </Button>

            <Typography
              variant="h4"
              mb={3}
              sx={{
                fontSize: "14px",
                mt: 2,
                color: "#1E1E1E",
                fontFamily: "Inter, sans-serif",
                textAlign: "center",
              }}
            >
              Already have a account ?
            </Typography>
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              sx={{ textTransform: "capitalize", fontWeight: "bold" }}
            >
              Login
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Signup;

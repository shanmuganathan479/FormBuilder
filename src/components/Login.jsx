import {
  Grid,
  Box,
  TextField,
  Button,
  Divider,
  Typography,
} from "@mui/material";
import LeftContainer from "./LeftContainer";
const Login = () => {
  return (
    <Grid container sx={{ minHeight: "100vh" }}>
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
            Login
          </Typography>

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

          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2, color: "white", textTransform: "capitalize" }}
          >
            Login
          </Button>

          <Divider sx={{ my: 3 }}>or</Divider>

          <Button
            fullWidth
            variant="outlined"
            color="primary"
            sx={{ textTransform: "capitalize", fontWeight: "bold" }}
          >
            Create Account
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;

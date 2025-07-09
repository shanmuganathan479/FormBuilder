import React from "react";
import {
  Drawer,
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@mui/material";

import DescriptionIcon from "@mui/icons-material/Description";

import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Logo from "../assets/Vector 54 (Stroke).png";
const navButtons = [
  { label: "Forms", icon: <DescriptionIcon /> },
  { label: "Profile", icon: <AccountBoxIcon /> },
];

const Sidebar = () => (
  <Drawer
    variant="permanent"
    PaperProps={{
      sx: {
        width: 305,
        bgcolor: "#03111B",
        color: "#fff",
        border: "none",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: "24px 0",
      },
    }}
  >
    {/* Logo and Title */}
    <Box display="flex" alignItems="center" mb={5} gap={2}>
      <img src={Logo} alt="Logo failed tom load" />

      <Typography
        variant="h6"
        sx={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 400,
          fontSize: "20px",
        }}
      >
        Form Builder
      </Typography>
    </Box>

    {/* Navigation Buttons */}
    <List sx={{ width: "100%" }}>
      {navButtons.map((btn) => (
        <ListItem key={btn.label} disablePadding>
          <Button
            startIcon={
              <ListItemIcon sx={{ color: "#fff", minWidth: 0 }}>
                {btn.icon}
              </ListItemIcon>
            }
            sx={{
              width: "80%",
              m: "8px auto",
              justifyContent: "flex-start",
              color: "#fff",
              fontSize: 16,
              textTransform: "none",
              borderRadius: 2,
              px: 2,
              py: 1.5,
              "&:hover": {
                background: "#112233",
              },
            }}
          >
            <ListItemText
              primary={btn.label}
              primaryTypographyProps={{ fontSize: 16 }}
            />
          </Button>
        </ListItem>
      ))}
    </List>
  </Drawer>
);

export default Sidebar;

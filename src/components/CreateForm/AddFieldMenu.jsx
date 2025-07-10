import React, { useState } from "react";
import { Button, Menu, MenuItem, TextField, Box } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SearchIcon from "@mui/icons-material/Search";
import { fieldOptions } from "./fieldOptions";

const AddFieldMenu = ({ addField }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [search, setSearch] = useState("");

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSearch("");
  };

  const filteredOptions = fieldOptions.filter((option) =>
    option.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Button
        variant="outlined"
        startIcon={<AddCircleOutlineIcon />}
        sx={{ mt: 2 }}
        onClick={handleClick}
      >
        Add New Field
      </Button>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <Box display="flex" alignItems="center" px={1} mb={1}>
          <SearchIcon fontSize="small" />
          <TextField
            variant="standard"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            fullWidth
            sx={{ ml: 1 }}
          />
        </Box>
        {filteredOptions.map((option) => (
          <MenuItem
            key={option}
            onClick={() => {
              addField(option);
              handleClose();
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default AddFieldMenu;

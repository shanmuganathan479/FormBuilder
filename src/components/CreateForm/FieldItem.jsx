import React from "react";
import {
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Switch as MuiSwitch,
  Checkbox as MuiCheckbox,
  Typography,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const FieldItem = ({ field, selectedField, setSelectedField, removeField }) => {
  const { type, props, id } = field;

  return (
    <Box
      sx={{
        mt: 1,
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
    >
      {/* Field itself */}
      <Box
        onClick={() => setSelectedField(field)}
        sx={{
          p: 1,
          flexGrow: 1,
          border:
            selectedField?.id === id ? "2px solid #007AD3" : "1px solid #ccc",
          cursor: "pointer",
        }}
      >
        {type === "Text Field" && (
          <TextField
            label={props.label}
            placeholder={props.placeholder}
            fullWidth
          />
        )}

        {type === "Button" && (
          <Button variant="contained" color={props.color}>
            {props.text}
          </Button>
        )}

        {type === "Dropdown" && (
          <FormControl fullWidth>
            <Select value="">
              {props.options.map((opt, idx) => (
                <MenuItem key={idx} value={opt}>
                  {opt}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}

        {type === "Radio Button" && (
          <FormControl>
            <Typography>{props.label}</Typography>
            <RadioGroup>
              {props.options.map((opt, idx) => (
                <FormControlLabel
                  key={idx}
                  value={opt}
                  control={<Radio />}
                  label={opt}
                />
              ))}
            </RadioGroup>
          </FormControl>
        )}

        {type === "Switch" && (
          <FormControlLabel
            control={<MuiSwitch checked={props.checked} />}
            label={props.label}
          />
        )}

        {type === "File Upload" && (
          <>
            <Typography>{props.label}</Typography>
            <input type="file" />
          </>
        )}

        {type === "Checkbox" && (
          <FormControlLabel
            control={<MuiCheckbox checked={props.checked} />}
            label={props.label}
          />
        )}
      </Box>

      {/* Delete button */}
      <IconButton
        size="small"
        onClick={(e) => {
          e.stopPropagation();
          removeField(id);
        }}
      >
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default FieldItem;

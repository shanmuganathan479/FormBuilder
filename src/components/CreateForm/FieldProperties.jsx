import React from "react";
import {
  Card,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Button,
} from "@mui/material";

const FieldProperties = ({ selectedField, updateFieldProps }) => {
  if (!selectedField) {
    return (
      <Card sx={{ width: 300, p: 2 }} elevation={4}>
        <Typography color="text.secondary">
          Select a field to edit its properties.
        </Typography>
      </Card>
    );
  }

  const { type, props, id } = selectedField;

  const handleOptionChange = (index, value) => {
    const newOptions = [...props.options];
    newOptions[index] = value;
    updateFieldProps(id, { options: newOptions });
  };

  const addOption = () => {
    updateFieldProps(id, { options: [...props.options, ""] });
  };

  const removeOption = (index) => {
    const newOptions = props.options.filter((_, i) => i !== index);
    updateFieldProps(id, { options: newOptions });
  };

  return (
    <Card sx={{ width: 300, p: 2 }} elevation={6}>
      <Typography variant="h6">Field Properties</Typography>

      {type === "Text Field" && (
        <>
          <TextField
            label="Label"
            value={props.label}
            onChange={(e) => updateFieldProps(id, { label: e.target.value })}
            fullWidth
            sx={{ my: 1 }}
          />
          <TextField
            label="Placeholder"
            value={props.placeholder}
            onChange={(e) => updateFieldProps(id, { placeholder: e.target.value })}
            fullWidth
            sx={{ my: 1 }}
          />
        </>
      )}

      {type === "Button" && (
        <>
          <TextField
            label="Text"
            value={props.text}
            onChange={(e) => updateFieldProps(id, { text: e.target.value })}
            fullWidth
            sx={{ my: 1 }}
          />
          <FormControl fullWidth sx={{ my: 1 }}>
            <InputLabel>Color</InputLabel>
            <Select
              value={props.color}
              onChange={(e) => updateFieldProps(id, { color: e.target.value })}
            >
              <MenuItem value="primary">Primary</MenuItem>
              <MenuItem value="secondary">Secondary</MenuItem>
              <MenuItem value="success">Success</MenuItem>
            </Select>
          </FormControl>
        </>
      )}

      {(type === "Dropdown" || type === "Radio Button") && (
        <>
          <TextField
            label="Label"
            value={props.label}
            onChange={(e) => updateFieldProps(id, { label: e.target.value })}
            fullWidth
            sx={{ my: 1 }}
          />
          <Typography variant="subtitle2">Options</Typography>
          {props.options.map((opt, index) => (
            <Box key={index} display="flex" gap={1} my={1}>
              <TextField
                value={opt}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                fullWidth
              />
              <Button
                color="error"
                onClick={() => removeOption(index)}
              >
                X
              </Button>
            </Box>
          ))}
          <Button onClick={addOption} sx={{ mt: 1 }}>
            Add Option
          </Button>
        </>
      )}

      {type === "Switch" && (
        <TextField
          label="Label"
          value={props.label}
          onChange={(e) => updateFieldProps(id, { label: e.target.value })}
          fullWidth
          sx={{ my: 1 }}
        />
      )}

      {type === "File Upload" && (
        <TextField
          label="Label"
          value={props.label}
          onChange={(e) => updateFieldProps(id, { label: e.target.value })}
          fullWidth
          sx={{ my: 1 }}
        />
      )}

      {type === "Checkbox" && (
        <TextField
          label="Label"
          value={props.label}
          onChange={(e) => updateFieldProps(id, { label: e.target.value })}
          fullWidth
          sx={{ my: 1 }}
        />
      )}
    </Card>
  );
};

export default FieldProperties;

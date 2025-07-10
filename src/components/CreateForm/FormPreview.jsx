import React from "react";
import { Card, Typography, Button } from "@mui/material";
import AddFieldMenu from "./AddFieldMenu";
import FieldItem from "./FieldItem";

const FormPreview = ({
  formFields,
  setSelectedField,
  addField,
  selectedField,
  removeField, 
}) => {
  return (
    <Card sx={{ flex: 1, p: 2 }} elevation={6}>
      <Typography variant="h6">Form Preview</Typography>
      {formFields.length === 0 && (
        <Typography color="text.secondary" mt={2}>
          No fields
        </Typography>
      )}

      {formFields.map((field) => (
        <FieldItem
          key={field.id}
          field={field}
          selectedField={selectedField}
          setSelectedField={setSelectedField}
          removeField={removeField}
        />
      ))}

      <AddFieldMenu addField={addField} />
    </Card>
  );
};

export default FormPreview;

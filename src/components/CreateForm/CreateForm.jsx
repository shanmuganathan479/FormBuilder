import React, { useState } from "react";
import { Box } from "@mui/material";
import TopBar from "./TopBar";
import FormPreview from "./FormPreview";
import FieldProperties from "./FieldProperties";
import { defaultPropsByType } from "./fieldOptions";

const CreateForm = () => {
  const [formFields, setFormFields] = useState([]);
  const [selectedField, setSelectedField] = useState(null);

  const addField = (type) => {
    const newField = {
      id: Date.now(),
      type,
      props: { ...defaultPropsByType[type] },
    };
    setFormFields([...formFields, newField]);
    setSelectedField(newField);
  };

  const updateFieldProps = (id, newProps) => {
    setFormFields((fields) =>
      fields.map((field) =>
        field.id === id
          ? { ...field, props: { ...field.props, ...newProps } }
          : field
      )
    );
    if (selectedField?.id === id) {
      setSelectedField({
        ...selectedField,
        props: { ...selectedField.props, ...newProps },
      });
    }
  };

  const removeField = (id) => {
    setFormFields((fields) => fields.filter((field) => field.id !== id));
    if (selectedField?.id === id) {
      setSelectedField(null);
    }
  };

  return (
    <Box>
      <TopBar />
      <Box display="flex" gap={2} p={2}>
        <FormPreview
          formFields={formFields}
          setSelectedField={setSelectedField}
          addField={addField}
          selectedField={selectedField}
          removeField={removeField}
        />

        <FieldProperties
          selectedField={selectedField}
          updateFieldProps={updateFieldProps}
        />
      </Box>
    </Box>
  );
};

export default CreateForm;

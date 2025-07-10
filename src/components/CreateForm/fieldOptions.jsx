export const fieldOptions = [
  "Text Field",
  "Button",
  "Dropdown",
  "Radio Button",
  "Switch",
  "File Upload",
  "Checkbox",
];

export const defaultPropsByType = {
  "Text Field": { label: "Text Field", placeholder: "Enter text" },
  Button: { text: "Submit", color: "primary" },
  Dropdown: { label: "Select", options: ["Option 1", "Option 2"] },
  "Radio Button": { label: "Choose", options: ["Yes", "No"] },
  Switch: { label: "Toggle", checked: false },
  "File Upload": { label: "Upload File" },
  Checkbox: { label: "Check me", checked: false },
};

import React from "react";
import { Box, FormControl, InputLabel, OutlinedInput, Grid, Button } from "@mui/material";
import { useTheme } from "@mui/system";

const OverallStatEditForm = ({ documentData, onConfirm }) => {
  const [updatedData, setUpdatedData] = React.useState(documentData);
  const theme = useTheme();

  const handleInputChange = (keyPath, value) => {
    const keys = keyPath.split(".");
    const updatedNestedData = { ...updatedData };
    let currentLevel = updatedNestedData;

    keys.slice(0, -1).forEach((key, index) => {
      if (Array.isArray(currentLevel[key])) {
        currentLevel = currentLevel[key];
      } else {
        currentLevel = currentLevel[key];
      }
    });

    if (Array.isArray(currentLevel)) {
      const index = Number(keys[keys.length - 2]);
      const itemKey = keys[keys.length - 1];
      currentLevel[index][itemKey] = value;
    } else {
      currentLevel[keys[keys.length - 1]] = value;
    }

    setUpdatedData(updatedNestedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(updatedData);
  };

  const renderField = (name, value, onChange) => (
    <Grid item xs={12} sm={6} md={4} key={name}>
      <FormControl variant="outlined" fullWidth margin="normal">
        <InputLabel>{name}</InputLabel>
        <OutlinedInput name={name} value={value} onChange={onChange} label={name} />
      </FormControl>
    </Grid>
  );

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ backgroundColor: theme.palette.background.alt, padding: '2rem', borderRadius: '0.55rem', boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)' }}
    >
      <Grid container spacing={2}>
        {Object.entries(updatedData).map(([key, value]) => {
          if (key === "_id") {
            return null;
          }

          if (Array.isArray(value)) {
            return value.map((item, index) => (
              <Grid container item xs={12} spacing={2} key={index}>
                {Object.entries(item).map(([itemKey, itemValue]) =>
                  renderField(
                    `${key}[${index}][${itemKey}]`,
                    itemValue,
                    (e) => handleInputChange(`${key}.${index}.${itemKey}`, e.target.value)
                  )
                )}
              </Grid>
            ));
          }

          if (typeof value === "object" && value !== null) {
            return (
              <Grid container item xs={12} spacing={2} key={key}>
                {Object.entries(value).map(([objectKey, objectValue]) =>
                  renderField(
                    `${key}.${objectKey}`,
                    objectValue,
                    (e) => handleInputChange(`${key}.${objectKey}`, e.target.value)
                  )
                )}
              </Grid>
            );
          }

          return renderField(
            key,
            value,
            (e) => handleInputChange(key, e.target.value)
          );
        })}
      </Grid>
      <Button variant="contained" color="primary" type="submit">
        Confirm
      </Button>
    </Box>
  );
};

export default OverallStatEditForm;

import React from "react";
import { Box, Typography, FormControl, InputLabel, OutlinedInput, Grid } from "@mui/material";
import { useTheme } from "@mui/system";

const OverallStatSearchForm = ({ documentData }) => {
  const theme = useTheme();

  const renderField = (name, value, readOnly = true) => (
    <Grid item xs={12} sm={6} md={4} key={name}>
      <FormControl variant="outlined" fullWidth margin="normal">
        <InputLabel>{name}</InputLabel>
        <OutlinedInput name={name} value={value} readOnly={readOnly} label={name} />
      </FormControl>
    </Grid>
  );

  return (
    <Box
      component="form"
      sx={{ backgroundColor: theme.palette.background.alt, padding: '2rem', borderRadius: '0.55rem', boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)' }}
    >
      <Grid container spacing={2}>
        {Object.entries(documentData).map(([key, value]) => {
          if (key === "_id") {
            return null;
          }

          if (Array.isArray(value)) {
            return value.map((item, index) => (
              <Grid container item xs={12} spacing={2} key={index}>
                {Object.entries(item).map(([itemKey, itemValue]) =>
                  renderField(`${key}[${index}][${itemKey}]`, itemValue)
                )}
              </Grid>
            ));
          }

          if (typeof value === "object" && value !== null) {
            return (
              <Grid container item xs={12} spacing={2} key={key}>
                {Object.entries(value).map(([objectKey, objectValue]) =>
                  renderField(`${key}.${objectKey}`, objectValue)
                )}
              </Grid>
            );
          }

          return renderField(key, value);
        })}
      </Grid>
    </Box>
  );
};

export default OverallStatSearchForm;

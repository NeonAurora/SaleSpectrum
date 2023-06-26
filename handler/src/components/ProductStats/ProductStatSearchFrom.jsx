import React from "react";
import { Box, Typography, Grid, TextField } from "@mui/material";
import { useTheme } from "@mui/system";

const ProductStatSearchForm = ({ documentData }) => {
  const theme = useTheme();

  const renderField = (name, value) => (
    <Grid item xs={12} sm={6} md={4} key={name}>
      <TextField
        label={name}
        variant="outlined"
        fullWidth
        margin="normal"
        value={value}
        InputProps={{
          readOnly: true,
        }}
      />
    </Grid>
  );

  return (
    <Box
      component="form"
      sx={{
        backgroundColor: theme.palette.background.alt,
        padding: "2rem",
        borderRadius: "0.55rem",
        boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Grid container spacing={2}>
        {Object.entries(documentData).map(([key, value]) => {
          if (key === "_id") {
            return null;
          }

          if (Array.isArray(value)) {
            return (
              <Grid item xs={12} key={key}>
                <Typography variant="subtitle1" component="h2" sx={{ marginTop: "1rem" }}>
                  {key}
                </Typography>
                {value.map((item, index) => (
                  <Grid container spacing={2} key={index}>
                    {Object.entries(item).map(([itemKey, itemValue]) =>
                      renderField(`${key}[${index}][${itemKey}]`, itemValue)
                    )}
                  </Grid>
                ))}
              </Grid>
            );
          }

          if (typeof value === "object" && value !== null) {
            return (
              <Grid item xs={12} key={key}>
                <Typography variant="subtitle1" component="h2" sx={{ marginTop: "1rem" }}>
                  {key}
                </Typography>
                <Grid container spacing={2}>
                  {Object.entries(value).map(([objectKey, objectValue]) =>
                    renderField(`${key}.${objectKey}`, objectValue)
                  )}
                </Grid>
              </Grid>
            );
          }

          return renderField(key, value);
        })}
      </Grid>
    </Box>
  );
};

export default ProductStatSearchForm;

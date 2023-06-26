import React from 'react';
import { Box, Typography, FormControl, TextField, Grid } from '@mui/material';
import { useTheme } from '@mui/system';

const ProductSearchForm = ({ productData }) => {
  const theme = useTheme();

  const renderField = (name, value) => (
    <Grid item xs={12} sm={6} md={4} key={name}>
      <FormControl fullWidth margin="normal">
        <TextField
          label={name}
          variant="outlined"
          value={value}
          readOnly
        />
      </FormControl>
    </Grid>
  );

  return (
    <Box
      component="form"
      sx={{
        backgroundColor: theme.palette.background.alt,
        padding: '2rem',
        borderRadius: '0.55rem',
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Grid container spacing={2}>
        {Object.entries(productData).map(([key, value]) => {
          if (key === '_id') {
            return null;
          }

          return renderField(key, value);
        })}
      </Grid>
    </Box>
  );
};

export default ProductSearchForm;

import React from 'react';
import { Box, FormControl, TextField, Grid, Button } from '@mui/material';
import { useTheme } from '@mui/system';

const ProductEditForm = ({ productData, onConfirm }) => {
  const [updatedData, setUpdatedData] = React.useState(productData);
  const theme = useTheme();

  const handleInputChange = (key, value) => {
    setUpdatedData({ ...updatedData, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(updatedData);
  };

  const renderField = (name, value, onChange) => (
    <Grid item xs={12} sm={6} md={4} key={name}>
      <FormControl fullWidth margin="normal">
        <TextField
          label={name}
          variant="outlined"
          name={name}
          value={value}
          onChange={onChange}
        />
      </FormControl>
    </Grid>
  );

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        backgroundColor: theme.palette.background.alt,
        padding: '2rem',
        borderRadius: '0.55rem',
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Grid container spacing={2}>
        {Object.entries(updatedData).map(([key, value]) => {
          if (key === '_id') {
            return null;
          }

          return renderField(key, value, (e) => handleInputChange(key, e.target.value));
        })}
      </Grid>
      <Button type="submit" variant="contained" color="primary">
        Confirm
      </Button>
    </Box>
  );
};

export default ProductEditForm;

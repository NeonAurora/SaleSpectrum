import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import productService from "services/productsService";

const ProductDeletion = () => {
  const [_id, setId] = useState("");
  const [message, setMessage] = useState("");
  const theme = useTheme();

  const onDelete = async (e) => {
    e.preventDefault();
    try {
      const res = await productService.deleteProduct(_id);
      setMessage(res.data.message);
    } catch (error) {
      setMessage("Error deleting product");
    }
  };

  return (
    <Box
      component="div"
      sx={{
        backgroundColor: theme.palette.background.alt,
        padding: '2rem',
        borderRadius: '0.55rem',
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h4" sx={{ color: theme.palette.secondary.main }}>
        Delete Product
      </Typography>
      <Box
        component="form"
        onSubmit={onDelete}
        sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
      >
        <TextField
          label="ID"
          id="_id"
          value={_id}
          onChange={(e) => setId(e.target.value)}
          required
          color="secondary"
        />
        <Button type="submit" variant="contained" color="secondary">
          Delete
        </Button>
      </Box>
      {message && <Typography variant="body1">{message}</Typography>}
    </Box>
  );
};

export default ProductDeletion;

import React, { useState } from "react";
import productsService from "services/productsService";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/system";

const ProductDeletion = () => {
  const [_id, setId] = useState("");
  const theme = useTheme();

  const onDelete = async (e) => {
    e.preventDefault();
    try {
      await productsService.deleteProduct(_id);
      alert("Product deleted successfully");
    } catch (error) {
      alert("Error deleting product");
    }
  };

  return (
    <Box
      component="div"
      sx={{
        backgroundColor: theme.palette.background.alt,
        padding: "2rem",
        borderRadius: "0.55rem",
        boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h4" sx={{ color: theme.palette.secondary.main }}>
        Delete Product
      </Typography>
      <Box
        component="form"
        onSubmit={onDelete}
        sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <TextField
          label="Product ID"
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
    </Box>
  );
};

export default ProductDeletion;

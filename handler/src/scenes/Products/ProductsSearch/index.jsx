import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  FormControl,
} from "@mui/material";
import { useTheme } from "@mui/system";
import ProductSearchForm from "components/Products/ProductSearchForm";
import ProductEditForm from "components/Products/ProductEditForm";
import productService from "services/productsService";

const ProductSearch = () => {
  const theme = useTheme();
  const [productId, setProductId] = useState("");
  const [productData, setProductData] = useState(null);
  const [error, setError] = useState("");
  const [editMode, setEditMode] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await productService.searchProduct(productId);
      const data = response.data;
      setProductData(data);
    } catch (error) {
      setProductData(null);
      setError("Error: Product not found");
    }
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleConfirm = async (updatedData) => {
    try {
      await productService.updateProduct(productId, updatedData);
      setProductData(updatedData);
      setEditMode(false);
    } catch (error) {
      setError("Error: Failed to update the product");
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
      <Typography variant="h4" color="secondary">
        Search Product
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginTop: "2rem",
        }}
      >
        <FormControl>
          <TextField
            id="product-id"
            label="Enter the ID of the product you want to search for:"
            type="text"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            variant="outlined"
            sx={{ flex: "1" }}
          />
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ height: "56px", flexShrink: 0 }}
        >
          Search
        </Button>
      </Box>
      <Box component="div" sx={{ marginTop: "2rem" }}>
        {error && <Typography color="error">{error}</Typography>}
        {productData && !editMode && (
          <>
            <ProductSearchForm productData={productData} />
            <Button
              onClick={handleEdit}
              variant="contained"
              color="secondary"
              sx={{ marginTop: "1rem" }}
            >
              Edit product
            </Button>
          </>
        )}
        {productData && editMode && (
          <ProductEditForm
            productData={productData}
            onConfirm={handleConfirm}
          />
        )}
      </Box>
    </Box>
  );
};

export default ProductSearch;

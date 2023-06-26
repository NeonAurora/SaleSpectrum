import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import { Container, Typography, Box, useTheme } from "@mui/material";
import ProductsInsertion from "scenes/Products/ProductsInsertion";
import ProductsDeletion from "scenes/Products/ProductsDeletion";
import ProductsSearch from "scenes/Products/ProductsSearch";

const Products = () => {
  const theme = useTheme();

  return (
    <Container
      maxWidth="lg"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <Box
        sx={{
          backgroundColor: theme.palette.background.alt,
          padding: "2rem",
          borderRadius: "0.55rem",
          boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            marginBottom: "1rem",
            color: theme.palette.secondary.main,
          }}
        >
          Products
        </Typography>
        <Routes>
          <Route
            path="/"
            element={<Typography sx={{color: 'white'}}>Please Select a subpage from navbar</Typography>}
          />
          <Route path="insertion" element={<ProductsInsertion />} />
          <Route path="search" element={<ProductsSearch />} />
          <Route path="deletion" element={<ProductsDeletion />} />
        </Routes>
        <Outlet />
      </Box>
    </Container>
  );
};

export default Products;

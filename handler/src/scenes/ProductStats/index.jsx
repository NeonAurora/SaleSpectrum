import { Route, Routes, Outlet } from "react-router-dom";
import { Container, Typography, Box, useTheme } from "@mui/material";
import ProductStatsInsertion from "scenes/ProductStats/ProductStatsInsertion";
import ProductStatsSearch from "scenes/ProductStats/ProductStatsSearch";
import ProductStatsDeletion from "scenes/ProductStats/ProductStatsDeletion";

function ProductStats() {
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
          Product Stats
        </Typography>
        <Routes>
          <Route
            path="/"
            element={<Typography sx={{ color: "white" }}>Please select a subpage from the navbar.</Typography>}
          />
          <Route path="insertion" element={<ProductStatsInsertion />} />
          <Route path="search" element={<ProductStatsSearch />} />
          <Route path="deletion" element={<ProductStatsDeletion />} />
        </Routes>
        <Outlet />
      </Box>
    </Container>
  );
}

export default ProductStats;

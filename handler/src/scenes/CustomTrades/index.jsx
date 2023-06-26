import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container, Typography, Box, useTheme } from "@mui/material";
import CustomTradesInsertion from "scenes/CustomTrades/CustomTradesInsertion";
import CustomTradesSearch from "scenes/CustomTrades/CustomTradesSearch";
import CustomTradesDelete from "scenes/CustomTrades/CustomTradesDeletion";

function CustomTrades() {
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
          Custom Trades
        </Typography>
        <Routes>
          <Route
            path="/"
            element={
              <Typography sx={{ color: "white" }}>
                Please select a subpage from the navbar.
              </Typography>
            }
          />
          <Route path="insertion" element={<CustomTradesInsertion />} />
          <Route path="search" element={<CustomTradesSearch />} />
          <Route path="deletion" element={<CustomTradesDelete />} />
        </Routes>
      </Box>
    </Container>
  );
}

export default CustomTrades;

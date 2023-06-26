import React, { useEffect } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import { Container, Typography, Box, useTheme } from "@mui/material";
import TransactionsInsertion from "scenes/Transactions/TransactionsInsertion";
import TransactionsSearch from "scenes/Transactions/TransactionsSearch";
import TransactionsDeletion from "scenes/Transactions/TransactionsDeletion";

function Transactions() {
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
          Transactions
        </Typography>
        <Routes>
          <Route
            path="/"
            element={<Typography sx={{color: 'white'}}>Please select an Operation from the navbar.</Typography>}
          />
          <Route path="insertion" element={<TransactionsInsertion />} />
          <Route path="search" element={<TransactionsSearch />} />
          <Route path="deletion" element={<TransactionsDeletion />} />
        </Routes>
        <Outlet />
      </Box>
    </Container>
  );
}
export default Transactions;

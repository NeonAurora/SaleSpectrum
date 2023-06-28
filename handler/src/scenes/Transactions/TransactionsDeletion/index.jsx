import React, { useState } from "react";
import transactionService from "services/transactionService";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/system";

const TransactionsDelete = () => {
  const [transactionId, setTransactionId] = useState("");
  const [message, setMessage] = useState("");
  const theme = useTheme();

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      await transactionService.deleteTransaction(transactionId);
      alert("Transaction successfully deleted.");
    } catch (error) {
      alert("Error: Failed to delete transaction.");
    }
};


  return (
    <Box
      component="div"
      sx={{ backgroundColor: theme.palette.background.alt, padding: '2rem', borderRadius: '0.55rem', boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)' }}
    >
      <Typography variant="h4" sx={{ color: theme.palette.secondary.main }}>Delete Transaction</Typography>
      <Box component="form" onSubmit={handleDelete} sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <TextField
          label="Transaction ID"
          id="transactionId"
          value={transactionId}
          onChange={(e) => setTransactionId(e.target.value)}
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

export default TransactionsDelete;

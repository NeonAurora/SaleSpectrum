import React, { useState } from "react";
import customTradeService from "services/customTradeService";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/system";

const CustomTradesDelete = () => {
  const [customTradeId, setCustomTradeId] = useState("");
  const [message, setMessage] = useState("");
  const theme = useTheme();

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await customTradeService.deleteCustomTrade(customTradeId);
      if (response.status === 200) {
        alert("Custom trade successfully deleted.");
      } else {
        alert("Error: Failed to delete custom trade.");
      }
    } catch (error) {
      console.error(error);
      alert("Error: Failed to delete custom trade.");
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
        Delete Custom Trade
      </Typography>
      <Box
        component="form"
        onSubmit={handleDelete}
        sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <TextField
          label="Custom Trade ID"
          id="customTradeId"
          value={customTradeId}
          onChange={(e) => setCustomTradeId(e.target.value)}
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

export default CustomTradesDelete;

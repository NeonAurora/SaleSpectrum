import React, { useState } from "react";
import tempStatService from "services/tempStatService";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/system";

const TempStatDeletion = () => {
  const [_id, setId] = useState("");
  const theme = useTheme();

  const onDelete = async (e) => {
    e.preventDefault();
    try {
      await tempStatService.deleteTempStat(_id);
      alert("TempStat record deleted successfully");
    } catch (error) {
      alert("Error deleting TempStat record");
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
        Delete TempStat Record
      </Typography>
      <Box
        component="form"
        onSubmit={onDelete}
        sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <TextField
          label="TempStat Record ID"
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

export default TempStatDeletion;

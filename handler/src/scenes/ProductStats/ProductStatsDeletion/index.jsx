import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import productStatService from "services/productStatService";

const ProductStatsDeletion = () => {
  const theme = useTheme();
  const [_id, setId] = useState("");

  const onDelete = async (e) => {
    e.preventDefault();
    try {
      const res = await productStatService.deleteProductStat(_id);
      // use alert instead of setMessage
      window.alert(res.data.message);
    } catch (error) {
      // use alert instead of setMessage in case of error as well
      window.alert("Error deleting data: " + error.message);
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
        Delete Data
      </Typography>
      <Box
        component="form"
        onSubmit={onDelete}
        sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <TextField
          label="ID"
          id="_id"
          value={_id}
          onChange={(e) => setId(e.target.value)}
          required
          color="secondary"
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="secondary">
          Delete
        </Button>
      </Box>
    </Box>
  );
};

export default ProductStatsDeletion;

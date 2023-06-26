import React from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Input,
  Button,
  useTheme
} from "@mui/material";

const TransactionSearchForm = ({ transactionData, onEditClick }) => {
  const { _id, userId, cost, products, createdAt, __v, audioUrl } =
    transactionData;
  
  const theme = useTheme();

  return (
    <Box
      component="div"
      sx={{
        backgroundColor: theme.palette.background.alt,
        padding: "2rem",
        borderRadius: "0.55rem",
        boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
        marginTop: "2rem",
      }}
    >
      <Typography variant="h6" color="secondary">
        Transaction Details
      </Typography>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <InputLabel htmlFor="_id">_id:</InputLabel>
        <Input id="_id" value={_id} readOnly />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <InputLabel htmlFor="userId">User ID:</InputLabel>
        <Input id="userId" value={userId} readOnly />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <InputLabel htmlFor="cost">Cost:</InputLabel>
        <Input id="cost" value={cost} readOnly />
      </FormControl>
      <Typography variant="h6" color="secondary" sx={{ marginTop: "1rem" }}>
        Products:
      </Typography>
      {products &&
        products.map((product, index) => (
          <FormControl key={index} sx={{ width: "100%", marginTop: "1rem" }}>
            <InputLabel htmlFor={`product-${index}`}>
              Product {index + 1}:
            </InputLabel>
            <Input id={`product-${index}`} value={product.productID} readOnly />
          </FormControl>
        ))}
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <InputLabel htmlFor="createdAt">Created At:</InputLabel>
        <Input id="createdAt" value={createdAt} readOnly />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <InputLabel htmlFor="__v">__v:</InputLabel>
        <Input id="__v" value={__v} readOnly />
      </FormControl>
      {audioUrl && <audio controls src={audioUrl} />}
      <Button
        variant="contained"
        color="primary"
        onClick={onEditClick}
        sx={{ marginTop: "1rem" }}
      >
        Edit
      </Button>
    </Box>
  );
};

export default TransactionSearchForm;

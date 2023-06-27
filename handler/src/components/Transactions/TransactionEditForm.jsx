import React, { useRef } from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField,
  useTheme
} from "@mui/material";

const TransactionEditForm = ({
  transactionData,
  onInputChange,
  onSaveClick,
  onCancelClick,
}) => {
  const handleFieldChange = (event, key) => {
    onInputChange(key, event.target.value);
  };
  const handleFileInputChange = (event) => {
    console.log("File input change event:", event);
    onInputChange("newAudioFile", event.target.files[0]);
  };
  const audioFileInput = useRef(null);
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
        <Input id="_id" value={transactionData._id} readOnly />
      </FormControl>
      <TextField
        id="userId"
        label="User ID"
        variant="outlined"
        value={transactionData.userId}
        onChange={(e) => handleFieldChange(e, "userId")}
        sx={{ width: "100%", marginTop: "1rem" }}
      />
      <TextField
        id="cost"
        label="Cost"
        variant="outlined"
        value={transactionData.cost}
        onChange={(e) => handleFieldChange(e, "cost")}
        sx={{ width: "100%", marginTop: "1rem" }}
      />
      <Typography variant="h6" color="secondary" sx={{ marginTop: "1rem" }}>
        Products:
      </Typography>
      {transactionData.products &&
        transactionData.products.map((product, index) => (
          <TextField
            key={index}
            id={`product-${index}`}
            label={`Product ${index + 1}`}
            variant="outlined"
            value={product.productID}
            onChange={(e) =>
              handleFieldChange(e, "products", index, "productID")
            }
            sx={{ width: "100%", marginTop: "1rem" }}
          />
        ))}
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <InputLabel htmlFor="createdAt">Created At:</InputLabel>
        <Input id="createdAt" value={transactionData.createdAt} readOnly />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <InputLabel htmlFor="__v">__v:</InputLabel>
        <Input id="__v" value={transactionData.__v} readOnly />
      </FormControl>
      {transactionData.audioUrl && (
        <audio controls src={transactionData.audioUrl} />
      )}
      {transactionData.audioUrl && (
        <Box component="div" sx={{ marginTop: "1rem" }}>
          <audio controls src={transactionData.audioUrl} />
          <Box component="div" sx={{ marginTop: "1rem" }}>
            <Input
              ref={audioFileInput}
              type="file"
              accept="audio/*"
              onChange={handleFileInputChange}
            />
          </Box>
        </Box>
      )}
      <Box component="div" sx={{ marginTop: "1rem" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={onSaveClick}
          sx={{ marginRight: "1rem" }}
        >
          Confirm
        </Button>
        <Button variant="outlined" color="primary" onClick={onCancelClick}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default TransactionEditForm;

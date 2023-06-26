import React, { useState } from "react";
import { Box, Typography, FormControl, TextField, Button } from "@mui/material";
import { useTheme } from "@mui/material";
import TransactionSearchForm from "components/Transactions/TransactionSearchForm";
import TransactionEditForm from "components/Transactions/TransactionEditForm";
import transactionService from "services/transactionService";

const TransactionSearch = () => {
  const [transactionId, setTransactionId] = useState("");
  const [transactionData, setTransactionData] = useState(null);
  const [error, setError] = useState("");
  const [editMode, setEditMode] = useState(false);

  const theme = useTheme();

  const resetTransactionData = () => {
    setTransactionData(null);
    setError("");
    setEditMode(false);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    resetTransactionData();
    setError("");

    try {
      const { transactionData, audioUrl } =
        await transactionService.searchTransaction(transactionId);
      if (audioUrl) {
        setTransactionData({ ...transactionData, audioUrl });
      } else {
        setTransactionData({ ...transactionData });
        alert("No Audio Available");
      }
      setEditMode(false);
    } catch (error) {
      console.error("Error while submitting: ", error);
      setTransactionData(null);
      setError("Error: Transaction not found");
    }
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = async (audioFileInput) => {
    try {
      const updatedTransactionData = {
        userId: transactionData.userId,
        cost: transactionData.cost,
        products: transactionData.products,
      };

      // Update transaction data
      const response = await transactionService.updateTransaction(
        transactionId,
        updatedTransactionData
      );

      console.log("Response from updateTransaction API call:", response); // Add this line

      // Update audio file if a new file is selected
      if (transactionData.newAudioFile) {
        const formData = new FormData();
        formData.append("newAudio", transactionData.newAudioFile);
        const audioResponse = await transactionService.updateAudio(
          transactionId,
          formData
        );

        if (audioResponse.status === "success") {
          // Reload transaction data to show the updated audio file
          const { transactionData: updatedData, audioUrl } =
            await transactionService.searchTransaction(transactionId);
          setTransactionData({ ...updatedData, audioUrl });

          // Clear the input field for the audio file
          if (audioFileInput && audioFileInput.current) {
            audioFileInput.current.value = "";
          }
        } else {
          alert("Error updating audio file. Please try again.");
        }
      }

      if (response.message === "Transaction updated successfully") {
        // Updated this line
        alert("Transaction updated successfully!");
        console.log(`
        ............... ...............
        .....*****..... .**......**....
        ...**.....**... .**.....**.....
        ..**.......**.. .**....**......
        .**.........**. .**...**.......
        .**.........**. .*****.........
        .**.........**. .*****.........
        .**.........**. .**..**........
        .**.........**. .**...**.......
        .**.........**. .**....**......
        ..**.......**.. .**.....**.....
        ...**.....**... .**......**....
        .....*****..... .**.......**...
        ............... ...............

        `);
      } else {
        alert("Error updating transaction. Please try again.");
      }
    } catch (error) {
      console.error("Error updating transaction:", error); // Keep this line
      console.error("Error object:", error); // Add this line to log the error object itself
      alert("Error updating transaction. Please try again.");
    }
  };

  const handleCancelClick = () => {
    setEditMode(false);
  };

  const onInputChange = (key, value) => {
    setTransactionData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
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
      <Typography variant="h4" color="secondary">
        Search Transaction
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginTop: "2rem",
        }}
      >
        <FormControl>
          <TextField
            id="transaction-id"
            label="Enter the ID of the transaction you want to search for:"
            type="text"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
            variant="outlined"
            sx={{ flex: "1" }}
          />
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ height: "56px", flexShrink: 0 }}
        >
          Search
        </Button>
      </Box>
      <Box component="div" sx={{ marginTop: "2rem" }}>
        {error && <Typography color="error">{error}</Typography>}
        {transactionData && !editMode && (
          <>
            <TransactionSearchForm
              transactionData={transactionData}
              onEditClick={handleEditClick}
            />
          </>
        )}
        {transactionData && editMode && (
          <TransactionEditForm
            transactionData={transactionData}
            onSaveClick={handleSaveClick}
            onCancelClick={handleCancelClick}
            onInputChange={onInputChange}
          />
        )}
      </Box>
    </Box>
  );
};

export default TransactionSearch;

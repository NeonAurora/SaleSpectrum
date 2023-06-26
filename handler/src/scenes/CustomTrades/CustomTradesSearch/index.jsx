import React, { useState } from "react";
import { Box, Typography, FormControl, TextField, Button } from "@mui/material";
import { useTheme } from "@mui/material";
import CustomTradeSearchForm from "components/CustomTrades/CustomTradeSearchForm";
import CustomTradeEditForm from "components/CustomTrades/CustomTradeEditForm";
import customTradeService from "services/customTradeService";

const CustomTradeSearch = () => {
  const [customTradeId, setCustomTradeId] = useState("");
  const [customTradeData, setCustomTradeData] = useState(null);
  const [error, setError] = useState("");
  const [editMode, setEditMode] = useState(false);

  const theme = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const { customTradeData, audioUrl } =
        await customTradeService.searchCustomTrade(customTradeId);
      setCustomTradeData({ ...customTradeData, audioUrl });
      setEditMode(false);
    } catch (error) {
      setCustomTradeData(null);
      setError("Error: Custom trade not found");
    }
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = async (audioFileInput) => {
    try {
      const updatedCustomTradeData = {
        ...customTradeData,
      };

      // Update custom trade data
      const response = await customTradeService.updateCustomTrade(
        customTradeId,
        updatedCustomTradeData
      );

      console.log("Response from updateCustomTrade API call:", response);

      if (customTradeData.newAudioFile) {
        const formData = new FormData();
        formData.append("newAudio", customTradeData.newAudioFile);
        const audioResponse = await customTradeService.updateCustomAudio(
          customTradeId,
          formData
        );
        if (audioResponse.status === "success") {
          // Reload customTrade data to show the updated audio file
          const { customTradeData: updatedData, audioUrl } =
            await customTradeService.searchCustomTrade(customTradeId);
          setCustomTradeData({ ...updatedData, audioUrl });

          // Clear the input field for the audio file
          if (audioFileInput && audioFileInput.current) {
            audioFileInput.current.value = "";
          }
        } else {
          alert("Error updating audio file. Please try again.");
        }
      }
    } catch (error) {
      alert("Error updating custom trade. Please try again.");
    }
  };

  const handleCancelClick = () => {
    setEditMode(false);
  };

  const onInputChange = (key, value) => {
    setCustomTradeData((prevData) => ({
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
        Search Custom Trade
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
            id="customTrade-id"
            label="Enter the ID of the custom trade you want to search for:"
            type="text"
            value={customTradeId}
            onChange={(e) => setCustomTradeId(e.target.value)}
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
        {customTradeData && !editMode && (
          <CustomTradeSearchForm
            customTradeData={customTradeData}
            onEditClick={handleEditClick}
          />
        )}
        {customTradeData && editMode && (
          <CustomTradeEditForm
            customTradeData={customTradeData}
            onSaveClick={handleSaveClick}
            onCancelClick={handleCancelClick}
            onInputChange={onInputChange}
          />
        )}
      </Box>
    </Box>
  );
};

export default CustomTradeSearch;

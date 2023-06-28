import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  FormControl,
} from "@mui/material";
import { useTheme } from "@mui/system";
import DisplayForm from "components/TempStats/TempStatSearchForm";
import EditForm from "components/TempStats/TempStatEditForm";
import tempStatService from "services/tempStatService";

const TempStatsSearch = () => {
  const theme = useTheme();
  const [documentId, setDocumentId] = useState("");
  const [documentData, setDocumentData] = useState(null);
  const [error, setError] = useState("");
  const [editMode, setEditMode] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await tempStatService.searchTempStat(documentId);
      const data = response.data;
      setDocumentData(data);
    } catch (error) {
      setDocumentData(null);
      setError("Error: Document not found");
    }
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleConfirm = async (updatedData) => {
    try {
      await tempStatService.updateTempStat(documentId, updatedData);
      setDocumentData(updatedData);
      setEditMode(false);
      alert("Data updated successfully!");
    } catch (error) {
      setError("Error: Failed to update the document");
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
      <Typography variant="h4" color="secondary">
        Search Temp Data
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
            id="tempStat-id"
            label="Enter the ID of the document you want to search for:"
            type="text"
            value={documentId}
            onChange={(e) => setDocumentId(e.target.value)}
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
        {documentData && !editMode && (
          <>
            <DisplayForm documentData={documentData} />
            <Button
              onClick={handleEdit}
              variant="contained"
              color="secondary"
              sx={{ marginTop: "1rem" }}
            >
              Edit records
            </Button>
          </>
        )}
        {documentData && editMode && (
          <EditForm documentData={documentData} onConfirm={handleConfirm} />
        )}
      </Box>
    </Box>
  );
};

export default TempStatsSearch;

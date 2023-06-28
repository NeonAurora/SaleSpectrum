import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import tempStatService from "services/tempStatService";
import { useTheme } from "@mui/system";

const TempStatInsertion = () => {
  const theme = useTheme();
  const [tempStatData, setTempStatData] = useState({
    weekStats: {
      totalRevenue: 0,
      percentageChange: 0,
    },
    todayStats: {
      totalLeads: 0,
      percentageChange: 0,
    },
    thisMonthStats: {
      totalRevenue: 0,
      percentageChange: 0,
    },
    thisMonthLeads: {
      totalLeads: 0,
      percentageChange: 0,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split(".");
    setTempStatData(prevState => {
      const nextState = { ...prevState };
      let currentLevel = nextState;
      for (let i = 0; i < keys.length - 1; i++) {
        currentLevel = currentLevel[keys[i]];
      }
      currentLevel[keys[keys.length - 1]] = value;
      return nextState;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await tempStatService.addTempStat(tempStatData);
      const savedObjectId = response.data._id;
      alert("Temp stat data submitted successfully. Saved Object ID: " + savedObjectId);
    } catch (error) {
      alert("Error submitting temp stat data: " + error.message);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary[600],
        color: theme.palette.secondary[300],
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <Typography variant="h4">Add Temp Stat</Typography>
      <Box component="form" width="100%" onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <TextField
            name="weekStats.totalRevenue"
            label="Weekly Total Revenue"
            type="number"
            value={tempStatData.weekStats.totalRevenue}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            name="weekStats.percentageChange"
            label="Weekly Revenue Change (%)"
            type="number"
            value={tempStatData.weekStats.percentageChange}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            name="todayStats.totalLeads"
            label="Today's Total Leads"
            type="number"
            value={tempStatData.todayStats.totalLeads}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            name="todayStats.percentageChange"
            label="Today's Lead Change (%)"
            type="number"
            value={tempStatData.todayStats.percentageChange}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            name="thisMonthStats.totalRevenue"
            label="This Month's Total Revenue"
            type="number"
            value={tempStatData.thisMonthStats.totalRevenue}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            name="thisMonthStats.percentageChange"
            label="This Month's Revenue Change (%)"
            type="number"
            value={tempStatData.thisMonthStats.percentageChange}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            name="thisMonthLeads.totalLeads"
            label="This Month's Total Leads"
            type="number"
            value={tempStatData.thisMonthLeads.totalLeads}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            name="thisMonthLeads.percentageChange"
            label="This Month's Lead Change (%)"
            type="number"
            value={tempStatData.thisMonthLeads.percentageChange}
            onChange={handleChange}
            required
            fullWidth
          />
        </Box>
        <Box>
          <Button
            type="submit"
            sx={{
              backgroundColor: theme.palette.secondary[300],
              marginTop: "1rem",
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TempStatInsertion;

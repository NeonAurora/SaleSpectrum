import React, { useState, useEffect } from "react";
import customTradeService from "services/customTradeService";
import { Box, TextField, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/system";

const CustomTradeInsertion = () => {
  const [customTradeData, setCustomTradeData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    acquisition: "",
    arv: "",
    assignedAgent: "",
    bestPhoneNumber: "",
    builtYear: "",    
    city: "",
    comps: "",
    county: "",
    email: "",
    furnace: "",
    garage: "",
    leadStatus: "",
    liens: "",
    lotSize: "", 
    monthlyPayments: "",
    mortgage: "", 
    ownedFor: "",
    owed: "",
    paidOff: "",
    performance: "",
    phoneNumber: "",
    pool: "",
    price: "",
    propertySize: "",
    repairs: "",
    roof: "",
    sellingReason: "", 
    state: "",  
    tenants: "",
    timeLine: "",
    timeToSell: "",
    type: "",
    unitNumber: "",
    url: "",
    waterHeater: "",    
    zipCode: "", 
    notes: "",
  });

  const theme = useTheme();
  const [audioFile, setAudioFile] = useState(null);
  const [audioMetadata, setAudioMetadata] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("audio", audioFile);
    formData.append(
      "customTradeData",
      JSON.stringify({ ...customTradeData, ...audioMetadata })
    );

    try {
      const response = await customTradeService.addCustomTrade(formData);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomTradeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const generateRandomData = () => {
    const randomString = (length) =>
      Math.random().toString(36).substr(2, length);

    const randomPhoneNumber = () =>
      `(${Math.floor(Math.random() * 900 + 100)}) ${Math.floor(
        Math.random() * 900 + 100
      )}-${Math.floor(Math.random() * 9000 + 1000)}`;

    return {
      firstName: randomString(5),
      lastName: randomString(5),
      address: `${randomString(4)} ${randomString(6)} St`,
      acquisition: randomString(5),
      arv: randomString(5),
      assignedAgent: randomString(8),
      bestPhoneNumber: randomPhoneNumber(),
      builtYear: `${Math.floor(Math.random() * 100 + 1900)}`,
      city: randomString(6),
      comps: randomString(5),
      county: randomString(5),
      email: `${randomString(5)}@${randomString(5)}.com`,
      furnace: randomString(5),
      garage: randomString(5),
      leadStatus: randomString(5),
      liens: randomString(5),
      lotSize: `${Math.floor(Math.random() * 10000 + 1000)} sqft`,
      monthlyPayments: `${Math.floor(Math.random() * 10000 + 500)}`,
      mortgage: randomString(5),
      ownedFor: `${Math.floor(Math.random() * 20 + 1)} years`,
      owed: `${Math.floor(Math.random() * 100000 + 10000)}`,
      paidOff: Math.random() > 0.5 ? 'Yes' : 'No',
      performance: randomString(5),
      phoneNumber: randomPhoneNumber(),
      pool: Math.random() > 0.5 ? 'Yes' : 'No',
      price: `${Math.floor(Math.random() * 1000000 + 10000)}`,
      propertySize: `${Math.floor(Math.random() * 3000 + 1000)} sqft`,
repairs: randomString(5),
      roof: randomString(5),
      sellingReason: randomString(10),
      state: randomString(5),
      tenants: randomString(5),
      timeLine: `${Math.floor(Math.random() * 12 + 1)} months`,
      timeToSell: `${Math.floor(Math.random() * 12 + 1)} months`,
      type: randomString(5),
      unitNumber: `${Math.floor(Math.random() * 500 + 1)}`,
      url: `https://${randomString(6)}.com`,
      waterHeater: randomString(5),
      zipCode: `${Math.floor(Math.random() * 90000 + 10000)}`,
      notes: randomString(20),
    };
  };

  const handleEntryTest = () => {
    setCustomTradeData(generateRandomData());
  };

  return (
    <Box
      className="App"
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
      <Box component="form" width="100%">
        {Object.keys(customTradeData).map((key) => (
          <React.Fragment key={key}>
            <Typography variant="h6">{key}:</Typography>
            <TextField
              type="text"
              name={key}
              value={customTradeData[key]}
              onChange={handleInputChange}
              fullWidth
            />
          </React.Fragment>
        ))}

        <Box>
          <Typography variant="h6">Audio File:</Typography>
          <input
            type="file"
            accept="audio/*"
            onChange={(e) => setAudioFile(e.target.files[0])}
          />
        </Box>
      </Box>

      <Box>
        <Button
          type="button"
          onClick={handleEntryTest}
          sx={{
            backgroundColor: theme.palette.secondary[300],
            marginTop: "1rem",
            marginRight: "1rem",
          }}
        >
          Entry Test
        </Button>
        <Button
          type="submit"
          onClick={handleSubmit}
          sx={{
            backgroundColor: theme.palette.secondary[300],
            marginTop: "1rem",
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default CustomTradeInsertion;

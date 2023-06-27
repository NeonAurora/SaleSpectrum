import React from "react";
import { Box, Typography, FormControl, TextField, Button } from "@mui/material";
import { useTheme } from "@mui/material";

const CustomTradeSearchForm = ({ customTradeData, onEditClick }) => {
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
        Custom Trade Details
      </Typography>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <TextField label="_id" value={customTradeData._id} readOnly />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <TextField
          label="First Name"
          value={customTradeData.firstName}
          readOnly
        />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <TextField
          label="Last Name"
          value={customTradeData.lastName}
          readOnly
        />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <TextField label="Address" value={customTradeData.address} readOnly />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <TextField
          label="Acquisition"
          value={customTradeData.acquisition}
          readOnly
        />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <TextField label="ARV" value={customTradeData.arv} readOnly />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <TextField
          label="Assigned Agent"
          value={customTradeData.assignedAgent}
          readOnly
        />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <TextField
          label="Best Phone Number"
          value={customTradeData.bestPhoneNumber}
          readOnly
        />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <TextField
          label="Built Year"
          value={customTradeData.builtYear}
          readOnly
        />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <TextField label="City" value={customTradeData.city} readOnly />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <TextField label="Comps" value={customTradeData.comps} readOnly />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <TextField label="County" value={customTradeData.county} readOnly />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <TextField label="Email" value={customTradeData.email} readOnly />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <TextField label="Furnace" value={customTradeData.furnace} readOnly />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <TextField label="Garage" value={customTradeData.garage} readOnly />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <TextField
          label="Lead Status"
          value={customTradeData.leadStatus}
          readOnly
        />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <TextField label="Liens" value={customTradeData.liens} readOnly />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <TextField label="Lot Size" value={customTradeData.lotSize} readOnly />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <TextField
          label="Monthly Payments"
          value={customTradeData.monthlyPayments}
          readOnly
        />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <TextField label="Mortgage" value={customTradeData.mortgage} readOnly />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <TextField
          label="Owned For"
          value={customTradeData.ownedFor}
          readOnly
        />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <TextField label="Owed" value={customTradeData.owed} readOnly />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <TextField label="Paid Off" value={customTradeData.paidOff} readOnly />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <TextField
          label="Performance"
          value={customTradeData.performance}
          readOnly
        />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <TextField
          label="Phone Number"
          value={customTradeData.phoneNumber}
          readOnly
        />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <TextField label="Pool" value={customTradeData.pool} readOnly />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <TextField label="Price" value={customTradeData.price} readOnly />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <TextField
          label="Property Size"
          value={customTradeData.propertySize}
          readOnly
        />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <TextField label="Repairs" value={customTradeData.repairs} readOnly />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <TextField label="Roof" value={customTradeData.roof} readOnly />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <TextField
          label="Selling Reason"
          value={customTradeData.sellingReason}
          readOnly
        />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <TextField label="State" value={customTradeData.state} readOnly />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <TextField label="Tenants" value={customTradeData.tenants} readOnly />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <TextField
          label="Time Line"
          value={customTradeData.timeLine}
          readOnly
        />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <TextField
          label="Time To Sell"
          value={customTradeData.timeToSell}
          readOnly
        />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <TextField label="Type" value={customTradeData.type} readOnly />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <TextField
          label="Unit Number"
          value={customTradeData.unitNumber}
          readOnly
        />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <TextField label="URL" value={customTradeData.url} readOnly />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <TextField
          label="Water Heater"
          value={customTradeData.waterHeater}
          readOnly
        />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <TextField label="Zip Code" value={customTradeData.zipCode} readOnly />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
        <TextField label="Notes" value={customTradeData.notes} readOnly />
      </FormControl>
      {customTradeData.audioUrl && (
        <audio controls src={customTradeData.audioUrl} />
      )}
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

export default CustomTradeSearchForm;

import React, { useRef } from "react";
import { Box, Typography, TextField, Button, useTheme } from "@mui/material";

const CustomTradeEditForm = ({
customTradeData,
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
Custom Trade Details
</Typography>
<TextField
label="First Name"
value={customTradeData.firstName}
onChange={(e) => handleFieldChange(e, "firstName")}
fullWidth
sx={{ marginTop: "1rem" }}
/>
<TextField
label="Last Name"
value={customTradeData.lastName}
onChange={(e) => handleFieldChange(e, "lastName")}
fullWidth
sx={{ marginTop: "1rem" }}
/>
<TextField
label="Address"
value={customTradeData.address}
onChange={(e) => handleFieldChange(e, "address")}
fullWidth
sx={{ marginTop: "1rem" }}
/>
<TextField
label="Acquisition"
value={customTradeData.acquisition}
onChange={(e) => handleFieldChange(e, "acquisition")}
fullWidth
sx={{ marginTop: "1rem" }}
/>
<TextField
label="ARV"
value={customTradeData.arv}
onChange={(e) => handleFieldChange(e, "arv")}
fullWidth
sx={{ marginTop: "1rem" }}
/>
<TextField
label="Assigned Agent"
value={customTradeData.assignedAgent}
onChange={(e) => handleFieldChange(e, "assignedAgent")}
fullWidth
sx={{ marginTop: "1rem" }}
/>
<TextField
label="Best Phone Number"
value={customTradeData.bestPhoneNumber}
onChange={(e) => handleFieldChange(e, "bestPhoneNumber")}
fullWidth
sx={{ marginTop: "1rem" }}
/>
<TextField
label="Built Year"
value={customTradeData.builtYear}
onChange={(e) => handleFieldChange(e, "builtYear")}
fullWidth
sx={{ marginTop: "1rem" }}
/>
<TextField
label="City"
value={customTradeData.city}
onChange={(e) => handleFieldChange(e, "city")}
fullWidth
sx={{ marginTop: "1rem" }}
/>
<TextField
label="Comps"
value={customTradeData.comps}
onChange={(e) => handleFieldChange(e, "comps")}
fullWidth
sx={{ marginTop: "1rem" }}
/>
<TextField
label="County"
value={customTradeData.county}
onChange={(e) => handleFieldChange(e, "county")}
fullWidth
sx={{ marginTop: "1rem" }}
/>
<TextField
label="Email"
value={customTradeData.email}
onChange={(e) => handleFieldChange(e, "email")}
fullWidth
sx={{ marginTop: "1rem" }}
/>
<TextField
label="Furnace"
value={customTradeData.furnace}
onChange={(e) => handleFieldChange(e, "furnace")}
fullWidth
sx={{ marginTop: "1rem" }}
/>
<TextField
label="Garage"
value={customTradeData.garage}
onChange={(e) => handleFieldChange(e, "garage")}
fullWidth
sx={{ marginTop: "1rem" }}
/>
<TextField
label="Lead Status"
value={customTradeData.leadStatus}
onChange={(e) => handleFieldChange(e, "leadStatus")}
fullWidth
sx={{ marginTop: "1rem" }}
/>
<TextField
label="Liens"
value={customTradeData.liens}
onChange={(e) => handleFieldChange(e, "liens")}
fullWidth
sx={{ marginTop: "1rem" }}
/>
<TextField
label="Lot Size"
value={customTradeData.lotSize}
onChange={(e) => handleFieldChange(e, "lotSize")}
fullWidth
sx={{ marginTop: "1rem" }}
/>
<TextField
label="Monthly Payments"
value={customTradeData.monthlyPayments}
onChange={(e) => handleFieldChange(e, "monthlyPayments")}
fullWidth
sx={{ marginTop: "1rem" }}
/>
<TextField
label="Mortgage"
value={customTradeData.mortgage}
onChange={(e) => handleFieldChange(e, "mortgage")}
fullWidth
sx={{ marginTop: "1rem" }}
/>
<TextField
label="Owned For"
value={customTradeData.ownedFor}
onChange={(e) => handleFieldChange(e, "ownedFor")}
fullWidth
sx={{ marginTop: "1rem" }}
/>
<TextField
label="Owed"
value={customTradeData.owed}
onChange={(e) => handleFieldChange(e, "owed")}
fullWidth
sx={{ marginTop: "1rem" }}
/>
<TextField
label="Paid Off"
value={customTradeData.paidOff}
onChange={(e) => handleFieldChange(e, "paidOff")}
fullWidth
sx={{ marginTop: "1rem" }}
/>
<TextField
label="Performance"
value={customTradeData.performance}
onChange={(e) => handleFieldChange(e, "performance")}
fullWidth
sx={{ marginTop: "1rem" }}
/>
<TextField
label="Phone Number"
value={customTradeData.phoneNumber}
onChange={(e) => handleFieldChange(e, "phoneNumber")}
fullWidth
sx={{ marginTop: "1rem" }}
/>
<TextField
label="Pool"
value={customTradeData.pool}
onChange={(e) => handleFieldChange(e, "pool")}
fullWidth
sx={{ marginTop: "1rem" }}
/>
<TextField
label="Price"
value={customTradeData.price}
onChange={(e) => handleFieldChange(e, "price")}
fullWidth
sx={{ marginTop: "1rem" }}
/>
<TextField
label="Property Size"
value={customTradeData.propertySize}
onChange={(e) => handleFieldChange(e, "propertySize")}
fullWidth
sx={{ marginTop: "1rem" }}
/>
<TextField
label="Repairs"
value={customTradeData.repairs}
onChange={(e) => handleFieldChange(e, "repairs")}
fullWidth
sx={{ marginTop: "1rem" }}
/>
<TextField
label="Roof"
value={customTradeData.roof}
onChange={(e) => handleFieldChange(e, "roof")}
fullWidth
sx={{ marginTop: "1rem" }}
/>
<TextField
label="Selling Reason"
value={customTradeData.sellingReason}
onChange={(e) => handleFieldChange(e, "sellingReason")}
fullWidth
sx={{ marginTop: "1rem" }}
/>
<TextField
label="State"
value={customTradeData.state}
onChange={(e) => handleFieldChange(e, "state")}
fullWidth
sx={{ marginTop: "1rem" }}
/>
<TextField
label="Tenants"
value={customTradeData.tenants}
onChange={(e) => handleFieldChange(e, "tenants")}
fullWidth
sx={{ marginTop: "1rem" }}
/>
<TextField
label="Time Line"
value={customTradeData.timeLine}
onChange={(e) => handleFieldChange(e, "timeLine")}
fullWidth
sx={{ marginTop: "1rem" }}
/>
<TextField
label="Time To Sell"
value={customTradeData.timeToSell}
onChange={(e) => handleFieldChange(e, "timeToSell")}
fullWidth
sx={{ marginTop: "1rem" }}
/>
<TextField
label="Type"
value={customTradeData.type}
onChange={(e) => handleFieldChange(e, "type")}
fullWidth
sx={{ marginTop: "1rem" }}
/>
<TextField
label="Unit Number"
value={customTradeData.unitNumber}
onChange={(e) => handleFieldChange(e, "unitNumber")}
fullWidth
sx={{ marginTop: "1rem" }}
/>
<TextField
label="URL"
value={customTradeData.url}
onChange={(e) => handleFieldChange(e, "url")}
fullWidth
sx={{ marginTop: "1rem" }}
/>
<TextField
label="Water Heater"
value={customTradeData.waterHeater}
onChange={(e) => handleFieldChange(e, "waterHeater")}
fullWidth
sx={{ marginTop: "1rem" }}
/>
<TextField
label="Zip Code"
value={customTradeData.zipCode}
onChange={(e) => handleFieldChange(e, "zipCode")}
fullWidth
sx={{ marginTop: "1rem" }}
/>
<TextField
label="Notes"
value={customTradeData.notes}
onChange={(e) => handleFieldChange(e, "notes")}
fullWidth
multiline
rows={4}
sx={{ marginTop: "1rem" }}
/>
{customTradeData.audioUrl && (
    <div>
      <audio controls src={customTradeData.audioUrl} />
      <div>
        <input
          ref={audioFileInput}
          type="file"
          accept="audio/*"
          onChange={handleFileInputChange}
        />
      </div>
    </div>
  )}

  <Button
    variant="contained"
    color="primary"
    onClick={onSaveClick}
    sx={{ marginTop: "1rem" }}
  >
    Confirm
  </Button>
  <Button
    variant="contained"
    onClick={onCancelClick}
    sx={{ marginTop: "1rem", marginLeft: "1rem" }}
  >
    Cancel
  </Button>
</Box>
);
};

export default CustomTradeEditForm;
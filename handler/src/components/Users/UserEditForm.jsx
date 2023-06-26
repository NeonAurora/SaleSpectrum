import React from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Input,
  Button,
  useTheme,
} from "@mui/material";

const UserEditForm = ({ userData, onConfirm }) => {
  const [updatedData, setUpdatedData] = React.useState(userData);
  const theme = useTheme();

  const handleInputChange = (key, value) => {
    setUpdatedData({ ...updatedData, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(updatedData);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        backgroundColor: theme.palette.background.alt,
        padding: "2rem",
        borderRadius: "0.55rem",
        boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
        marginTop: "2rem",
      }}
    >
      <Typography variant="h6" color="secondary">
        Edit User Details
      </Typography>
      {Object.entries(updatedData).map(([key, value]) => {
        if (key === "_id" || key === "transactions") {
          return null;
        } else {
          return (
            <FormControl key={key} sx={{ width: "100%", marginTop: "1rem" }}>
              <InputLabel htmlFor={key}>{key}:</InputLabel>
              <Input
                id={key}
                value={value}
                onChange={(e) => handleInputChange(key, e.target.value)}
              />
            </FormControl>
          );
        }
      })}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ marginTop: "1rem" }}
      >
        Confirm
      </Button>
    </Box>
  );
};

export default UserEditForm;

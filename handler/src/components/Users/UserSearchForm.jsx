import React from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Input,
  useTheme,
} from "@mui/material";

const UserSearchForm = ({ userData }) => {
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
        User Details
      </Typography>
      {Object.entries(userData).map(([key, value]) => {
        if (key === "_id") {
          return null;
        } else {
          return (
            <FormControl key={key} sx={{ width: "100%", marginTop: "1rem" }}>
              <InputLabel htmlFor={key}>{key}:</InputLabel>
              <Input id={key} value={value} readOnly />
            </FormControl>
          );
        }
      })}
    </Box>
  );
};

export default UserSearchForm;

import React, { useState } from "react";
import { Box, Typography, FormControl, TextField, Button } from "@mui/material";
import { useTheme } from "@mui/material";
import UserSearchForm from "components/Users/UserSearchForm";
import UserEditSearchForm from "components/Users/UserEditForm";
import userService from "services/usersService";

const UserSearch = () => {
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const [editMode, setEditMode] = useState(false);

  const theme = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await userService.searchUser(userId);
      const data = response.data;
      setUserData(data);
    } catch (error) {
      setUserData(null);
      setError("Error: User not found");
    }
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleConfirm = async (updatedData) => {
    try {
      await userService.updateUser(userId, updatedData);
      setUserData(updatedData);
      setEditMode(false);
    } catch (error) {
      setError("Error: Failed to update the user");
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
        Search User
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
            id="user-id"
            label="Enter the ID of the user you want to search for:"
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
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
        {userData && !editMode && (
          <>
            <UserSearchForm userData={userData} />
            <Button onClick={handleEdit} variant="contained" color="primary">
              Edit user
            </Button>
          </>
        )}
        {userData && editMode && (
          <UserEditSearchForm userData={userData} onConfirm={handleConfirm} />
        )}
      </Box>
    </Box>
  );
};

export default UserSearch;

import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import { Container, Typography, Box, useTheme } from "@mui/material";
import UsersInsertion from "scenes/Users/UsersInsertion";
import UsersDeletion from "scenes/Users/UsersDeletion";
import UsersSearch from "scenes/Users/UsersSearch";

const Users = () => {
  const theme = useTheme();

  return (
    <Container
      maxWidth="lg"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <Box
        sx={{
          backgroundColor: theme.palette.background.alt,
          padding: "2rem",
          borderRadius: "0.55rem",
          boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            marginBottom: "1rem",
            color: theme.palette.secondary.main,
          }}
        >
          Users
        </Typography>
        <Routes>
          <Route
            path="/"
            element={
              <Typography sx={{ color: theme.palette.text.secondary }}>
                Please Select a subpage from navbar
              </Typography>
            }
          />
          <Route path="insertion" element={<UsersInsertion />} />
          <Route path="search" element={<UsersSearch />} />
          <Route path="deletion" element={<UsersDeletion />} />
        </Routes>
      </Box>
      <Outlet />
    </Container>
  );
};

export default Users;

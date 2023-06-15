import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  useTheme,
  IconButton,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ForgotPasswordPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handlePasswordResetRequest = async (e) => {
    e.preventDefault();
    // Add logic to send the email to the backend here

    // After the email is sent, navigate to the "Password Reset Requested" page
    navigate("/resetRequest");
  };

  const handleBackClick = () => {
    navigate("/login");
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        component="form"
        onSubmit={handlePasswordResetRequest}
        sx={{
          backgroundColor: theme.palette.background.alt,
          padding: "2rem",
          borderRadius: "0.55rem",
          boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
          position: "relative",
        }}
      >
        <IconButton
          color="secondary"
          aria-label="Go back"
          onClick={handleBackClick}
          sx={{
            position: "absolute",
            top: "10px",
            left: "10px",
          }}
        >
          <ArrowBack />
        </IconButton>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", marginBottom: "1rem" }}
        >
          Forgot Password
        </Typography>

        <TextField
          fullWidth
          label="Email"
          type="email"
          margin="normal"
          required
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ marginBottom: "1rem" }}
        />

        <Button
          fullWidth
          variant="contained"
          color="secondary"
          type="submit"
          sx={{ padding: "0.8rem", fontWeight: "bold" }}
        >
          Send Verification Mail
        </Button>
      </Box>
    </Container>
  );
};

export default ForgotPasswordPage;

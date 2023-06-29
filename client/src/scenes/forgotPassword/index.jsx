import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  useTheme,
  IconButton,
  Snackbar,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import {
  useRequestPasswordResetMutation,
  useVerifyOtpMutation,
  useResetPasswordMutation,
} from "state/resetApi";

const ForgotPassword = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [requestPasswordReset, { isLoading, isError, error }] =
    useRequestPasswordResetMutation();
  const [verifyOtp] = useVerifyOtpMutation();
  const [resetPassword] = useResetPasswordMutation();

  const [stage, setStage] = useState(0); // 0: request reset, 1: verify OTP, 2: reset password
  const [openSnackbar, setOpenSnackbar] = useState(false); // Controls the Snackbar
  const [snackbarMessage, setSnackbarMessage] = useState(""); // Message to be shown on the Snackbar

  const handlePasswordResetRequest = async (e) => {
    e.preventDefault();
    try {
      const result = await requestPasswordReset(email).unwrap();
      if (result) {
        setStage(1);
        console.log("OTP:", result);
        setSnackbarMessage(
          "OTP successfully sent. If you don't see the email in your inbox, check the spam folder."
        );
        setOpenSnackbar(true);
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred: " + err.message);
    }
  };

  const handleOtpVerification = async (e) => {
    e.preventDefault();
    try {
      const result = await verifyOtp({ email, otp }).unwrap();
      if (result) {
        setStage(2);
        setSnackbarMessage('Email successfully verified. Please update your new account password.');
        setOpenSnackbar(true);
      }
    } catch (error) {
      console.error(error);
  
      if (error.status === 400 && error.data.message === "Invalid OTP.") {
        setSnackbarMessage('Invalid OTP. Please try again.');
      } else {
        setSnackbarMessage('An error occurred. Please try again later.');
      }
      setOpenSnackbar(true);
    }
  };
  
  
  

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    try {
      if (newPassword !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }
      const result = await resetPassword({
        email,
        password: newPassword,
      }).unwrap();
      if (result) {
        setSnackbarMessage("Password Successfully Updated.");
        setOpenSnackbar(true);
        // Wait 2 seconds, then navigate to login
        setTimeout(() => navigate("/login"), 2000);
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred: " + err.message);
    }
  };

  const handleBackClick = () => {
    navigate("/login");
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
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
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
      />
      <Box
        component="form"
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

        {stage === 0 && (
          <>
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
              onClick={handlePasswordResetRequest}
              sx={{ padding: "0.8rem", fontWeight: "bold" }}
            >
              Send Verification Mail
            </Button>
          </>
        )}

        {stage === 1 && (
          <>
            <TextField
              fullWidth
              label="OTP"
              type="text"
              margin="normal"
              required
              variant="outlined"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              sx={{ marginBottom: "1rem" }}
            />

            <Button
              fullWidth
              variant="contained"
              color="secondary"
              type="submit"
              onClick={handleOtpVerification}
              sx={{ padding: "0.8rem", fontWeight: "bold" }}
            >
              Verify OTP
            </Button>
          </>
        )}

        {stage === 2 && (
          <>
            <TextField
              fullWidth
              label="New Password"
              type="password"
              margin="normal"
              required
              variant="outlined"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              sx={{ marginBottom: "1rem" }}
            />

            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              margin="normal"
              required
              variant="outlined"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              sx={{ marginBottom: "1rem" }}
            />

            <Button
              fullWidth
              variant="contained"
              color="secondary"
              type="submit"
              onClick={handlePasswordUpdate}
              sx={{ padding: "0.8rem", fontWeight: "bold" }}
            >
              Update Password
            </Button>
          </>
        )}
      </Box>
    </Container>
  );
};

export default ForgotPassword;

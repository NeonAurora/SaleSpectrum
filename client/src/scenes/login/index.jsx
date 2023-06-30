import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Checkbox,
  TextField,
  Typography,
  useTheme,
  IconButton,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "state/authSlice";
import { setUserId } from "state";
import { useLoginMutation } from "state/api";
import { Google, Facebook, microsoft } from "@mui/icons-material";
import { Check } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Microsoft from "assets/icons8-microsoft.svg";

const LoginPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const [loginMutation] = useLoginMutation();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("Login data:", { email, password, rememberMe });
      const response = await loginMutation({ email, password, rememberMe });
      console.log("Login response:", response);

      const { data } = response;

      if (data && data.result && data.token) {
        // Store the token and userId in local storage
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.result._id);
        dispatch(login(data.result));
        dispatch(setUserId(data.result._id));
        navigate("/dashboard");
      } else {
        console.error("Unexpected login response:", response);
        // Handle login errors, e.g., show a notification
      }
    } catch (error) {
      console.error("Login failed:", error.message);
      // Handle login errors, e.g., show a notification
    }
  };

  const googleAuth = () => {
    window.open(`${process.env.REACT_APP_BASE_URL}/auth/google`, "_self");
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
        onSubmit={handleLogin}
        sx={{
          backgroundColor: theme.palette.background.alt,
          padding: "2rem",
          borderRadius: "0.55rem",
          boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h4"
          sx={{ textAlign: "center", marginBottom: "1rem" }}
        >
          Sign In
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
        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          required
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            marginBottom: "1rem",
          }}
        >
          <Button
            variant="text"
            color="secondary"
            onClick={() => {
              navigate("/forgotPassword");
            }}
            sx={{
              textTransform: "none",
              marginBottom: "1.5rem",
            }}
          >
            Forgot Password?
          </Button>
        </Box>

        <Button
          fullWidth
          variant="contained"
          color="secondary"
          type="submit"
          sx={{ padding: "0.8rem", fontWeight: "bold" }}
        >
          Login
        </Button>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <Button
            variant="text"
            color="secondary"
            onClick={() => {
              navigate("/request-access");
            }}
            sx={{ textTransform: "none" }}
          >
            Create an Account
          </Button>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Checkbox
              color="secondary"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              icon={
                <Box
                  sx={{
                    width: "16px",
                    height: "16px",
                    border: "1px solid",
                    borderColor: theme.palette.secondary.main,
                    borderRadius: "2px",
                  }}
                />
              }
              checkedIcon={
                <Check
                  sx={{ fontSize: "16px", color: theme.palette.secondary.main }}
                />
              }
            />
            <Button
              variant="text"
              color="secondary"
              onClick={() => setRememberMe(!rememberMe)}
              sx={{ textTransform: "none" }}
            >
              Remember Me
            </Button>
          </Box>
        </Box>
        <Typography
          variant="body1"
          sx={{ textAlign: "center", marginBottom: "1rem", fontFamily: "sans-serif" }}
        >
          Or Continue With
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={googleAuth}
            startIcon={<Google />}
            sx={{
              padding: "0.3rem",
              width: "100%",
              textTransform: "none",
              fontSize: "1.2rem",
              borderRadius: "0.5rem",
              fontFamily: "Roboto" // to make the corner smoother
            }}
          >
            Google
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
// code ends here

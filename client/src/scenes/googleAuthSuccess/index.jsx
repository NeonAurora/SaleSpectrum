import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login as loginAction } from 'state/authSlice';
import { setUserId } from 'state';
import { useNavigate } from 'react-router-dom';
import { useGoogleLoginMutation } from 'state/api'; // import the newly created mutation
import { Container, Typography } from '@mui/material';

function GoogleAuthSuccess() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = new URLSearchParams(location.search).get('email');
  console.log("Google Auth Success Have been Triggered");

  const [googleLogin, { data, error }] = useGoogleLoginMutation(); // use the newly created mutation

  useEffect(() => {
    googleLogin(email);
  }, [email, googleLogin]);

  useEffect(() => {
    if (data && data.result && data.token) {
      // Store the token and userId in local storage
      console.log('Returned data from useGoogleLoginMutation:', data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.result._id);
      dispatch(loginAction(data.result));
      dispatch(setUserId(data.result._id));
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } else if (error) {
      console.error("Login failed:", error.message);
      // Handle login errors, e.g., show a notification
    }
  }, [data, error, dispatch, navigate]);

  return (
    <Container>
      <Typography variant="h6">Google Authentication Successful!</Typography>
    </Container>
  );
}

export default GoogleAuthSuccess;

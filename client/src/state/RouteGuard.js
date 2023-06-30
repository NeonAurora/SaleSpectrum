import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useValidateTokenMutation } from "state/api";

export function RouteGuard() {
  const navigate = useNavigate();
  const location = useLocation();
  const [validateToken] = useValidateTokenMutation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (location.pathname === "/auth/google/success") {
      return;
    }

    if (token && userId) {
      validateToken({ token }).unwrap()
        .then(() => {
          // successful validation
          navigate("/dashboard");
        })
        .catch(() => {
          // failed validation
          navigate("/login");
        });
    } else {
      // if no token or userId found, navigate to login
      navigate("/login");
    }
  }, []);

  return null;
}

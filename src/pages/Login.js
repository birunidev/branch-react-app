import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { authAPI } from "../api";
import { setAuthorizationHeader } from "../configs/axios";
import useAuth from "../hooks/useAuth";
import { loginValidation, saveAuthToLocalStorage } from "../utils";

export default function Login() {
  const [, setAuth, , setUser] = useAuth();
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      // login API: to get the token
      authAPI.loginAPI(values).then((res) => {
        // set the token to authorization header
        if (res.success) {
          setAuthorizationHeader(res.token);
          let user = {
            employeeName: res.employeeName,
            id: res.employeeID,
            email: res.email,
          };
          saveAuthToLocalStorage(res.token, res.refreshToken, user);
          setUser(user);
          setAuth(true);
          history.push("/");
        } else {
          toast.error(res.errors[0]);
        }

        // set global state for user email, username, name and id
      });
    },
    validationSchema: loginValidation,
  });

  return (
    <div className="login-app">
      <Container maxWidth="md">
        <form className="login-form" onSubmit={formik.handleSubmit}>
          <Typography variant="h4">Login</Typography>
          <p>Please login using valid credential</p>
          <Box my={3}>
            <TextField
              data-testid="input-username"
              id="username"
              style={{ width: "100%" }}
              variant="outlined"
              label="username"
              name="username"
              placeholder="Username"
              value={formik.values.username}
              onChange={formik.handleChange}
            />
            <p className="text-red-600" data-testid="username-error">
              {formik.errors.username}
            </p>
          </Box>
          <Box my={3}>
            <TextField
              id="password"
              data-testid="input-password"
              style={{ width: "100%" }}
              variant="outlined"
              label="Password"
              type="password"
              placeholder="Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <p className="text-red-600" data-testid="password-error">
              {formik.errors.password}
            </p>
          </Box>

          <Box my={2}>
            <Button
              type="submit"
              variant="contained"
              data-testid="btn-submit"
              style={{ width: "100%", padding: 10 }}
            >
              SIGN IN TO MY ACCOUNT
            </Button>
          </Box>
        </form>
      </Container>
    </div>
  );
}

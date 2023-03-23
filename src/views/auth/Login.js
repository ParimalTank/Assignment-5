import React, { useState } from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  Input,
  InputLabel,
  TextField,
  Grid,
  CardContent,
  Button,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="main-sign-up">
      <div className="row container m-auto flex-column justify-content-center  align-items-center sign-up">
        <div className="d-flex flex-column justify-content-center align-items-center bg-white form-style col-lg-6 ">
          <h2>Login</h2>

          <form>
            <CardContent>
              <Grid container className="justify-content-center" spacing={1}>
                <Grid container md={8} spacing={1}>

                  <Grid item xs={12} sm={12} lg={12}>
                    <TextField
                      required
                      fullWidth
                      id="standard-required"
                      label="Email"
                      variant="standard"
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} lg={12}>
                    <FormControl variant="standard" fullWidth>
                      <InputLabel htmlFor="standard-adornment-password">
                        Password*
                      </InputLabel>
                      <Input
                        id="standard-adornment-password"
                        type={showPassword ? "text" : "password"}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Grid>

                  <Grid item className="my-3">
                    <Button variant="contained">Login</Button>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </form>
          <div className="d-flex align-items-center justify-content-center">
            <h5>don't have a Account?</h5>
            <Button variant="text" className="mx-3">
                <Link to='/SignUp' className="text-decoration-none">
                Sign Up
                </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

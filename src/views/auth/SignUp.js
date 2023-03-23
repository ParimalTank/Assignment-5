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
import makeStyles from '@emotion/styled'
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
// import { TextField } from "formik-material-ui";

// Data
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  password: "",
  conformPassword: "",
};

// for password validation
const lowercaseRegEx = /(?=.*[a-z])/;
const uppercaseRegEx = /(?=.*[A-Z])/;
const numericRegEx = /(?=.*[0-9])/;
const lengthRegEx = /(?=.{8,})/;

// validation
let validateForm = Yup.object().shape({
  firstName: Yup.string().required("Firstname is require"),
  lastName: Yup.string().required("Lastname is require"),
  email: Yup.string().email("Invalid email").required("Email is require"),
  mobile: Yup.string()
    .min(10, "Mobile number should be at least 10 character")
    .required("Required"),
  password: Yup.string()
    .matches(
      lowercaseRegEx,
      "Must contains one lowercase alphabetical character!"
    )
    .matches(
      uppercaseRegEx,
      "Must contains one uppercase alphabetical character"
    )
    .matches(numericRegEx, "Must contains one Numeric character!")
    .required("Required!"),
});

const useStyle = makeStyles((theme) => ({
  padding: {
    padding: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const classes = useStyle();

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="main-sign-up">
      <div className="row container m-auto flex-column justify-content-center  align-items-center sign-up">
        <div className="d-flex flex-column justify-content-center align-items-center bg-white form-style col-lg-8 ">
          <h2>SignUp</h2>

          <Formik
            initialValues={initialValues}
            validateOnChange={true}
            // validateForm={validateForm}
            validationSchema={validateForm}
            onSubmit={onSubmit}
          >
            {({ dirty, isValid, values, handleChange, handleBlur ,setFieldValue , errors }) => {
              console.log('errors: ', errors);
              
              return (
                <Form>
                  <CardContent>
                    <Grid
                      container
                      className="justify-content-center"
                      spacing={1}
                    >
                      <Grid container md={8} spacing={1}>
                        <Grid item xs={12} sm={12} lg={6}>
                          <TextField
                            fullWidth
                            isValid={errors.firstName}
                            id="firstName"
                            label="FirstName"
                            variant="standard"
                            name="firstName"
                            defaultValue={values.firstName}
                            // onChange={(e)=> setFieldValue('firstName',e.target.value)}
                            onChange={handleChange}
                          />
                          {
                            errors.firstName ? <span className="text-danger">{errors.firstName}</span> : null
                          }
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6}>
                          <TextField
                            
                            fullWidth
                            id="standard-required"
                            label="LastName"
                            variant="standard"
                            name="lastName"
                            defaultValue={values.lastName}
                          />
                        </Grid>

                        <Grid item xs={12} sm={12} lg={12}>
                          <TextField
                            
                            fullWidth
                            id="standard-required"
                            label="Email"
                            variant="standard"
                            name="email"
                            defaultValue={values.email}
                          />
                        </Grid>

                        <Grid item xs={12} sm={12} lg={12}>
                          <TextField
                            
                            fullWidth
                            id="standard-required"
                            label="MobileNumber"
                            variant="standard"
                            name="mobile"
                            type='number'
                            defaultValue={values.mobile}
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
                              name="password"
                              defaultValue={values.password}
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

                        <Grid item xs={12} sm={12} lg={12}>
                          <FormControl variant="standard" fullWidth>
                            <InputLabel htmlFor="standard-adornment-password">
                              Conform Password*
                            </InputLabel>
                            <Input
                              id="standard-adornment-password"
                              type={showPassword ? "text" : "password"}
                              fullWidth
                              name="conformPassword"
                              defaultValue={values.conformPassword}
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
                        <Grid item>
                          <Button
                            // disabled={!dirty || !isValid}
                            variant="contained"
                            type="submit"
                            className={classes.button}
                          >
                            REGISTER
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Form>
              );
            }}
          </Formik>
          <div className="d-flex align-items-center justify-content-center">
            <h5 className="p-0 mb-0">Already have an Account?</h5>
            <Button variant="text" className="mx-3">
              <Link to="/Login" className="text-decoration-none">
                Login
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

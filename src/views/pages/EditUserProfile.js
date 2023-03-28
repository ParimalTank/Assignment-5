import React, { useState } from "react";
import Navbars from "../../components/Navbars";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
    TextField,
    Grid,
    CardContent,
    Button,
  } from "@mui/material";


// Data
const initialValues = {
  validateOnMount: true,
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
};

// validation
let signUpSchema = Yup.object().shape({
  firstName: Yup.string().required("FirstName is require"),
  lastName: Yup.string().required("LastName is require"),
  email: Yup.string().email("Invalid email").required("Email is require"),
  mobile: Yup.string()
    .min(10, "Mobile number should be at least 10 Digit")
    .required("Required")
});



const EditUserProfile = (props) => {

  const [userData, setUserData] = useState([{}]);
  
  const user = {
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    password: userData.password,
  };
  
  const onSubmit = (values) => {
  
  
    const user = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
    };
    const userDataArray = [];
    userDataArray.push(user);
    localStorage.setItem("userData", JSON.stringify(userDataArray));
  };


  return (
    <div>
         <Navbars />

  <div className="main-sign-up">
    <div className="row container m-auto flex-column justify-content-center  align-items-center sign-up">
      <div className="d-flex flex-column justify-content-center align-items-center bg-white form-style col-lg-8 ">
        <h2>Edit Profile</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={signUpSchema}
          onSubmit={onSubmit}
          validateOnChange={false} // Disable validation every field change
          validateOnBlur={false} // Disable validation every field blur
        >
          {({
            dirty,
            isValid,
            values,
            touched,
            errors,
            handleChange,
            validateField,
            handleBlur,
          }) => {
            // Avoid a race condition to allow each field to be validated on change
            const handleInputChange = async (e, fieldName) => {
              await handleChange(e);
              validateField(fieldName);
            };

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
                          id="firstName"
                          label="FirstName"
                          variant="standard"
                          name="firstName"
                          defaultValue={values.firstName}
                          onChange={(e) => handleInputChange(e, "firstName")}
                          isValid={touched.firstName && !errors.firstName}
                          isInvalid={!!errors.firstName}
                        />
                        {errors.firstName ? (
                          <span className="text-danger error-text mb-0">
                            {errors.firstName}
                          </span>
                        ) : null}
                      </Grid>
                      <Grid item xs={12} sm={12} lg={6}>
                        <TextField
                          fullWidth
                          id="lastName"
                          label="LastName"
                          variant="standard"
                          name="lastName"
                          defaultValue={values.lastName}
                          onChange={(e) => handleInputChange(e, "lastName")}
                          isValid={touched.lastName && !errors.lastName}
                          isInvalid={!!errors.lastName}
                        />
                        {errors.lastName ? (
                          <span className="text-danger error-text mb-0">
                            {errors.lastName}
                          </span>
                        ) : null}
                      </Grid>

                      <Grid item xs={12} sm={12} lg={12}>
                        <TextField
                          fullWidth
                          id="email"
                          label="Email"
                          variant="standard"
                          name="email"
                          defaultValue={values.email}
                          onChange={(e) => handleInputChange(e, "email")}
                          isValid={touched.email && !errors.email}
                        />
                        {errors.email ? (
                          <span className="text-danger error-text mb-0">
                            {errors.email}
                          </span>
                        ) : null}
                      </Grid>

                      <Grid item xs={12} sm={12} lg={12}>
                        <TextField
                          fullWidth
                          id="mobile"
                          label="MobileNumber"
                          variant="standard"
                          name="mobile"
                          type="number"
                          defaultValue={values.mobile}
                          onChange={(e) => handleInputChange(e, "mobile")}
                          handleBlur={handleBlur}
                          isValid={touched.mobile && !errors.mobile}
                        />
                        {errors.mobile ? (
                          <span className="text-danger error-text mb-0">
                            {errors.mobile}
                          </span>
                        ) : null}
                      </Grid>
                      <Grid item>
                        <Button
                          disabled={!dirty || !isValid}
                          variant="contained"
                          type="submit"
                        >
                          SUBMIT
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
          <h5 className="p-0 mb-0">Want to change your password?</h5>
          <Button variant="text" className="mx-3">
            <Link to="/dashboard/editprofile/changepassword" className="text-decoration-none">
              Change Password
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
};

export default EditUserProfile;

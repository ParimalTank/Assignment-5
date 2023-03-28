import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import { Navbar, NavbarBrand } from "reactstrap";
// import Cart from "./Cart";

const Navbars = () => {
  return (
    <div className="px-5 py-1" style={{backgroundColor: '#002B5B'}}>
      <Navbar>
        <NavbarBrand href="/" className="text-white">
          My Online Shopping Site
        </NavbarBrand>
        <div>
        <Button   variant="contained" style={{backgroundColor : '#57c5b6' , borderColor: '#57c5b6'}} outline>
        <Link to='/dashboard/editprofile'  className="text-decoration-none text-white">Edit Profile</Link>
        </Button>
        <Button className="mx-2" variant="outlined" style={{color : '#57c5b6' , borderColor: '#57c5b6'}} outline>
            Logout
        </Button>
        </div>
      </Navbar>
    </div>
  );
};

export default Navbars;
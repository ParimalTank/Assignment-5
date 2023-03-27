import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Navbars from "./Navbars";
import { Grid, Typography } from "@mui/material";
import Carousel from "react-bootstrap/Carousel";

const ProductsDetails = (args) => {
  let { state } = useLocation();

  const productId = state.productId;

  console.log(productId);

  const [productDetail, setProductDetails] = useState({});

  const loadData = async () => {
    const result = await axios(`https://dummyjson.com/products/${productId}`);
    setProductDetails(result.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div>
        <Navbars />
      </div>

      <Grid container className="w-75 m-auto my-5"> 
        <Grid lg={6} md={6} sm={12}>
          <Carousel variant="dark">
            {productDetail?.images?.map((e) => {
              return (
                <Carousel.Item>
                  <img className="d-block w-100" src={e} alt="First slide" />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Grid>

        <Grid lg={6} md={6} sm={12} className='px-5 py-3'>
          <div>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
            >
              <h1>{productDetail.title}</h1>
            </Typography>
            <Typography variant="body2" color="text.secondary">
               <h5> Category : {productDetail.category}</h5>
            </Typography>
            <Typography variant="body2" color="text.secondary">
                <h5> {productDetail.brand}</h5>
            </Typography>
            <Typography variant="body2" color="text.secondary">
               <h5> Rating : {productDetail.rating}</h5>
            </Typography>
            <Typography variant="body2" color="text.secondary">
               <h5> Price : {productDetail.price}$</h5>
            </Typography>
            <Typography variant="body2" color="text.secondary">
               <h5> Discount : {productDetail.discountPercentage}%</h5>
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
            >
               <h5> Description : {productDetail.description}</h5>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductsDetails;

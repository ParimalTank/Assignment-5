import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, CardText, CardTitle, Col, Row } from "reactstrap";
import { CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import ProductsDetails from "../../components/ProductsDetails";
import { Link } from "react-router-dom";

const Products = (props) => {
  const [productData, setProductData] = useState([]);

  const loadData = async () => {
    const result = await axios("https://dummyjson.com/products");
    setProductData(result.data.products);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="m-5">
      <div className="text-center my-5">
        <h2>VIEW YOUR FAVORITE PRODUCTS</h2>
      </div>
      <Row className="justify-content-center">
        {productData.map((result, index) => {
          return (
            <Col sm="6" lg="3">
              {/* <Card key={index} body>
                <div className="d-flex justify-content-between">
                  <CardTitle tag="h5">{result.title}</CardTitle>
                  <CardText tag={"h2"}>${result.price}</CardText>
                </div>

                <CardText className="text-start">{result.description}</CardText>
                <div className="d-flex justify-content-end">
                  <Button
                    outline
                    color="warning"
                    onClick={() => props.AddCart(result)}
                  >
                    Add To Cart
                  </Button>
                </div>
              </Card> */}

              <Card sx={{ maxWidth: 345 }} className='mb-3'>
                <CardMedia
                  sx={{ height: 310 }}
                  image={result.thumbnail}
                  title={result.title}
                  className='img-fluid object-fit-none'
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" className="product-title">
                   Title : {result.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                   Category : {result.category}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                   Brand Name : {result.brand}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                   Rating : {result.rating}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                   Price : {result.price}$
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                   Discount : {result.discountPercentage}%
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className="product-description">
                   Description : {result.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button className="text-white mx-2" variant="contained" style={{backgroundColor : '#57c5b6' , borderColor: '#57c5b6'}} outline>
                    <Link to='/dashboard/viewproduct'   state={{productId: result.id}}      className="text-decoration-none text-white">Show Product</Link>
                  </Button>
                </CardActions>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Products;

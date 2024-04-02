import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsSuccess, addToCart } from "../redux/feature/productSlice";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import toast, { Toaster } from 'react-hot-toast';

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        const data = await response.json();
        dispatch(fetchProductsSuccess(data));
      } catch (error) {
        console.log("error", error);
      }
    };
    FetchData();
  }, [useDispatch]);
  const handleAddToCart =(e) => {
    dispatch(addToCart({ ...e,quantity: 1 }));
    toast.success("Item added In Your Cart")
  };
  return (
    <>
      <Container className="mt-5  ">
        <Row className="d-flex justify-content-center align-items-center gap-5">
      {products.map((product,id) => (
        <Card style={{ width: "17rem", border:"none"}} key={id}>
          <Card.Img variant="top" style={{height:"14rem",}} src={product.image} className="mt-3"/>
          <Card.Body>
            <Card.Title style={{fontSize:"17px"}} >{product.title}</Card.Title>
            <Card.Text className="m-3"><span className="fw-bold">Price:</span>
            ${product.price}</Card.Text>
            <Button variant="primary" className="Col-lg-12" onClick={()=>handleAddToCart(product)}>Add To Cart</Button>
            <Toaster/>
          </Card.Body>
        </Card>
    
      ))}
      </Row>
          </Container>
    </>
  );
}

export default Home;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/esm/Container";
import { removeFromCart } from "../redux/feature/productSlice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const Dispatch = useDispatch();
  const remmoveHandle = (e) => {
    Dispatch(removeFromCart(e));
  };
  const TotalAmount =()=>{
    return Math.floor(cart.reduce((Total,item)=>Total+(item.price*item.quantity),0))
  }
  return (
    <Container className="m-4 ">
      <Table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Name</th>
            <th> <button></button>Quantity</th>
            <th>Price</th>
            <th>Remove</th>
            <th>TotalPrice</th>
          </tr>
        </thead>
        {cart.map((item) => (
          <>
            <tbody>
              <tr>
                <td>
                  <img src={item.image} width={"30px"} />
                </td>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>
                  <i
                    class="fa-solid fa-trash"
                    onClick={() => remmoveHandle(item.id)}
                  ></i>
                </td>
                <td>{item.price * item.quantity}</td>
              </tr>
            </tbody>
          </>
        ))}
      </Table>
      <h1>
        Total Amount : {TotalAmount()}</h1>
    </Container>
  );
}

export default Cart;

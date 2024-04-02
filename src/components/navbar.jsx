import React from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { useAuth0 } from "@auth0/auth0-react";

function NavBar() {
  const cart = useSelector((state) => state.cart);

  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand style={{ fontSize: "25px" }}>Add to Cart</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="" className="text-light text-decoration-none">
              Home
            </NavLink>
          </Nav>
          <Link to="cart">
            <Badge badgeContent={cart.length} color="primary">
              <i
                className="fa-solid fa-cart-shopping text-light"
                style={{ fontSize: "25px" }}
              ></i>
            </Badge>
          </Link>

          {isAuthenticated ? (
            <Button
              variant="contained"
              style={{ marginLeft: "20px" }}
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              logout
            </Button>
          ) : (
            <Button
              variant="contained"
              style={{ marginLeft: "30px" }}
              onClick={() => loginWithRedirect()}
            >
              Login
            </Button>
          )}
          {isAuthenticated && (
            <img
              src={user.picture}
              alt={user.name}
              style={{ width: "40px", marginLeft: "10px", borderRadius: "50%" }}
            />
          )}
        </Container>
      </Navbar>
    </>
  );
}
export default NavBar;

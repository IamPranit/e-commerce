import React from "react";
import { Container, Typography } from "@material-ui/core";
import CartItem from "./CartItem";

const CartList = ({ cartItems, cartPrice }) => {
  return (
    <div>
      <Container>
        <Typography align="right" color="primary" variant="h6" gutterBottom>
          Total: {cartPrice.toFixed(2)}
        </Typography>
      </Container>
      {cartItems.map((item) => (
        <Container key={item._id} style={{ padding: "0.2em" }}>
          <CartItem cartItem={item} cartPrice={cartPrice} />
        </Container>
      ))}
    </div>
  );
};

export default CartList;

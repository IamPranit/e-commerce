import React from "react";
import { Container, Typography, Button, Divider } from "@material-ui/core";
import { PaymentRounded } from "@material-ui/icons";
import CartItem from "./CartItem";
import { useHistory } from "react-router-dom";

const CartList = ({ cartItems, cartPrice }) => {
  const history = useHistory();

  const handleCheckout = () => {
    history.push("/checkout");
  };
  return (
    <div>
      <Container style={{ textAlign: "end" }}>
        <Typography align="right" color="primary" variant="h6" gutterBottom>
          Total: {cartPrice.toFixed(2)}
        </Typography>

        <Button
          variant="contained"
          color="secondary"
          onClick={handleCheckout}
          disableElevation
        >
          Proceed To Checkout
          <PaymentRounded style={{ paddingLeft: "0.2em" }} />
        </Button>
      </Container>
      <Divider style={{ margin: "1em 0" }} />
      {cartItems.map((item) => (
        <Container key={item._id} style={{ padding: "0.2em" }}>
          <CartItem cartItem={item} />
        </Container>
      ))}
    </div>
  );
};

export default CartList;

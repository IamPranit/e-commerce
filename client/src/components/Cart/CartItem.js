import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { CardContent, Container, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AddCircle, RemoveCircle } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  getCart,
  removeFromCart,
} from "../../store/actions/cartActions";

const useStyles = makeStyles({
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "3fr 1fr 1fr",
    justifyItems: "self-start",
    gap: "1em",
  },
  cardHeader: {
    display: "flex",
  },
});

const CartItem = ({ cartItem }) => {
  const classes = useStyles();

  const { lineItemId, lineItemPrice, quantity } = cartItem;

  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleAdd = async () => {
    await dispatch(addToCart(cart, lineItemId));
    await dispatch(getCart());
  };

  const handleRemove = async () => {
    await dispatch(removeFromCart(cart, lineItemId));
    await dispatch(getCart());
  };

  return (
    <Card>
      <CardContent>
        <Container className={classes.cardHeader}>
          <Typography variant="h6">{lineItemId}</Typography>
        </Container>
        <Container className={classes.cardGrid}>
          <Typography>Image</Typography>
          <Typography>
            <IconButton
              aria-label="remove"
              name="removeFromCart"
              color="secondary"
              onClick={handleRemove}
            >
              <RemoveCircle />
            </IconButton>
            {quantity}
            <IconButton
              aria-label="add"
              name="addToCart"
              color="primary"
              onClick={handleAdd}
            >
              <AddCircle />
            </IconButton>
          </Typography>
          <Typography>Price: {lineItemPrice}</Typography>
        </Container>
      </CardContent>
    </Card>
  );
};

export default CartItem;

import React, { useEffect } from "react";
import CartList from "./CartList";
import { getCart } from "../../store/actions/cartActions";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Cart = () => {
  const classes = useStyles();

  const cartItems = useSelector((state) => state.cart.cartItems);

  const cartPrice = useSelector((state) => state.cart.totalCartPrice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);
  return cartItems.length ? (
    <div>
      <CartList cartItems={cartItems} cartPrice={cartPrice} />
    </div>
  ) : (
    <div className={classes.root}>
      <Alert severity="warning">Your cart is empty!</Alert>
    </div>
  );
};

export default Cart;

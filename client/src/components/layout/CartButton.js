import React from "react";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Container, makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions/cartActions";

const useStyles = makeStyles({
  root: {
    paddingTop: "5px",
  },
});

const CartButton = ({ text, product, cart }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const productObj = {
    lineItemId: product._id,
    lineItemPrice: product.price,
    quantity: 1,
  };

  const handleClick = (e) => {
    dispatch(addToCart(cart, product._id));
  };

  return (
    <Container className={classes.root}>
      <Button
        variant="outlined"
        startIcon={<AddShoppingCartIcon />}
        color="primary"
        aria-label="add to shopping cart"
        size="large"
        onClick={handleClick}
      >
        {text}
      </Button>
    </Container>
  );
};

export default CartButton;

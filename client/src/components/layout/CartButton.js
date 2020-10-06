import React from "react";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    paddingTop: "5px",
  },
});

const CartButton = ({ disabled, text }) => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Button
        variant="outlined"
        startIcon={<AddShoppingCartIcon />}
        color="primary"
        aria-label="add to shopping cart"
        size="large"
        disabled={disabled ? true : false}
      >
        {text}
      </Button>
    </Container>
  );
};

export default CartButton;

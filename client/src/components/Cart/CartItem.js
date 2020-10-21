import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { CardContent, Container, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AddCircle, RemoveCircle } from "@material-ui/icons";

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

const CartItem = ({ cartItem, cartPrice }) => {
  const classes = useStyles();

  const { lineItemId, lineItemPrice, quantity } = cartItem;

  return (
    <Card>
      <CardContent>
        <Container className={classes.cardHeader}>
          <Typography variant="h6">{lineItemId}</Typography>
        </Container>
        <Container className={classes.cardGrid}>
          <Typography>Image</Typography>
          <Typography>
            <IconButton aria-label="remove" color="secondary">
              <RemoveCircle />
            </IconButton>
            {quantity}
            <IconButton aria-label="add" color="primary">
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

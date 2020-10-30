import React, { useEffect } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Card,
  Container,
  Typography,
  CardContent,
  Button,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { getCart } from "../../store/actions/cartActions";
import { orderCheckout } from "../../store/actions/checkoutActions";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  listItemText: {
    color: "#6e6d6d",
    wordBreak: "break-word",
  },
  listItem: {
    [theme.breakpoints.up("md")]: {
      width: "70%",
    },
  },
  containerStyles: {
    display: "flex",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  card: {
    height: "max-content",
    paddingBottom: theme.spacing(2),
  },
}));

const OrderSummary = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const cart = useSelector((state) => state.cart);

  const { cartItems, totalCartPrice } = cart;

  const handleCheckout = async (e) => {
    dispatch(orderCheckout());
    history.push("/orders");
  };

  return (
    <Container className={classes.containerStyles}>
      <List className={classes.listItem}>
        {cartItems.map((item) => (
          <div key={item._id}>
            <ListItem
              className={classes.containerStyles}
              classes={{ root: classes.listItemText }}
            >
              <ListItemText
                primary={`Product: ${item.lineItemId}`}
                classes={{ root: classes.listItemText }}
              />
              <ListItemText
                primary={`Quantity: ${item.quantity}`}
                classes={{ root: classes.listItemText }}
              />
              <ListItemText
                primary={`Price: ${item.lineItemPrice}`}
                classes={{ root: classes.listItemText }}
              />
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
      <Card className={classes.card}>
        <Typography variant="h6" color="textSecondary">
          <CardContent>Total: {totalCartPrice.toFixed(2)}</CardContent>
          <Button
            color="primary"
            onClick={handleCheckout}
            disableElevation
            fullWidth
          >
            Pay
          </Button>
        </Typography>
      </Card>
    </Container>
  );
};

export default OrderSummary;

import React, { useEffect } from "react";
import { Container, Typography, makeStyles } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { getOrder } from "../../store/actions/checkoutActions";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
    textAlign: "justify",
  },
}));

const OrderScreen = () => {
  const classes = useStyles();
  const orderId = useSelector((state) => state.order.orderId);
  const customer = useSelector((state) => state.order.customer);
  const shippingAddress = useSelector((state) => state.order.shippingAddress);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrder());
  }, [dispatch]);
  return (
    <Container className={classes.root}>
      <Alert severity="info">
        <AlertTitle>{`${customer.name}'s`} Order</AlertTitle>
        <Typography>{`Your order with order ID ${orderId} will be delivered to ${shippingAddress}.`}</Typography>
      </Alert>
    </Container>
  );
};

export default OrderScreen;

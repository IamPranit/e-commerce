import React, { useEffect } from "react";
import { Container, Divider, makeStyles, Typography } from "@material-ui/core";
import { SentimentSatisfiedRounded } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getOrder } from "../../store/actions/checkoutActions";

const useStyles = makeStyles((theme) => ({
  smiley: {
    color: "#66bb6a",
    fontSize: "5rem",
  },
  successTypo: {
    color: "#66bb6a",
  },
  typoDark: {
    color: "#424242",
  },
  typoLight: {
    color: "#616161",
  },
  topDownPadding: {
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  maxContent: {
    width: "max-content",
  },
}));

const OrderSuccess = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const orderId = useSelector((state) => state.order.orderId);

  const handleClick = () => {
    history.push("/myorders");
  };

  useEffect(() => {
    dispatch(getOrder());
  }, [dispatch]);

  return (
    <Container className={classes.maxContent}>
      <Container>
        <SentimentSatisfiedRounded className={classes.smiley} />
        <Typography variant="h3" className={classes.successTypo}>
          Order Success
        </Typography>
        <Typography
          variant="h4"
          className={`${classes.typoDark} ${classes.topDownPadding}`}
        >
          Your order has been placed
        </Typography>
      </Container>
      <Divider />
      <Container className={classes.topDownPadding}>
        <Typography variant="h5" className={classes.typoLight}>
          Your order ID is
        </Typography>
        <Typography
          variant="h4"
          color="primary"
          style={{ cursor: "pointer" }}
          className={classes.topDownPadding}
          onClick={handleClick}
        >
          {`${orderId}`}
        </Typography>
      </Container>
      <Divider />
    </Container>
  );
};

export default OrderSuccess;

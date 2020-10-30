import React, { useEffect } from "react";
import { Container, Typography, makeStyles, Card } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../store/actions/userActions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    color: "#495464",
  },
  details: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "1em 0",
    color: "#214252",
  },
  divider: {
    marginTop: "1em",
  },
}));

const ProfilePage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  const { _id, name, email, address } = user;

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  return !user ? (
    <Container>
      <Typography>Coudn't get user</Typography>
    </Container>
  ) : (
    <Card className={classes.root}>
      <Typography variant="h3">Account Details</Typography>

      <Container className={classes.details}>
        <Typography variant="h6"> Customer ID </Typography>
        <Typography variant="h6"> {_id} </Typography>
      </Container>

      <Container className={classes.details}>
        <Typography variant="h6"> Full Name </Typography>
        <Typography variant="h6"> {name} </Typography>
      </Container>

      <Container className={classes.details}>
        <Typography variant="h6"> Email </Typography>
        <Typography variant="h6"> {email} </Typography>
      </Container>

      <Container className={classes.details}>
        <Typography variant="h6"> Shipping Address </Typography>
        <Typography variant="h6"> {address} </Typography>
      </Container>
    </Card>
  );
};

export default ProfilePage;

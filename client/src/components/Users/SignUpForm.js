import React, { useState } from "react";
import {
  Container,
  FormControl,
  TextField,
  Button,
  makeStyles,
  Card,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { createUser } from "../../store/actions/userActions";
import SnackBarComponent from "../layout/SnackBarComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    margin: "2em 0",
    justifyContent: "center",
  },
  card: {
    width: "100%",
  },
}));

const SignUpForm = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [state, setState] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
    verifyPassword: "",
    snackBarStatus: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { name, email, address, password, verifyPassword, snackBar } = state;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === verifyPassword) {
      dispatch(createUser(state));
      setState({
        name: "",
        email: "",
        address: "",
        password: "",
        verifyPassword: "",
        snackBar: "success",
      });
    } else {
      setState({
        name: "",
        email: "",
        address: "",
        password: "",
        verifyPassword: "",
        snackBar: "error",
      });
    }
  };

  return (
    <Container className={classes.root} style={{ alignItems: "center" }}>
      <Card className={classes.card}>
        <form onSubmit={handleSubmit}>
          <Container className={classes.root}>
            <FormControl>
              <TextField
                id="fullName"
                type="text"
                name="name"
                label="Full Name"
                value={name}
                onChange={handleChange}
                autoComplete="off"
                variant="outlined"
                placeholder="John Doe"
                required
              />
            </FormControl>
          </Container>

          <Container className={classes.root}>
            <FormControl>
              <TextField
                id="email"
                type="email"
                name="email"
                label="Email"
                value={email}
                onChange={handleChange}
                autoComplete="off"
                variant="outlined"
                placeholder="johndoe@email.com"
                required
              />
            </FormControl>
          </Container>

          <Container className={classes.root}>
            <FormControl>
              <TextField
                id="address"
                type="text"
                name="address"
                label="Address"
                value={address}
                onChange={handleChange}
                autoComplete="off"
                multiline
                variant="outlined"
                placeholder="Theodore Lowe Ap #867-859 Sit Rd. Azusa New York 39531"
                required
              />
            </FormControl>
          </Container>

          <Container className={classes.root}>
            <FormControl>
              <TextField
                id="password"
                type="password"
                name="password"
                label="Password"
                value={password}
                onChange={handleChange}
                autoComplete="off"
                variant="outlined"
                placeholder="humTdumt$@t0nAwa11@gOoGL"
                required
              />
            </FormControl>
          </Container>

          <Container className={classes.root}>
            <FormControl>
              <TextField
                id="verifyPassword"
                type="password"
                name="verifyPassword"
                label="Confirm Password"
                value={verifyPassword}
                onChange={handleChange}
                autoComplete="off"
                variant="outlined"
                placeholder="Enter the password you entered above"
                required
              />
            </FormControl>
          </Container>

          <Container className={classes.root}>
            <Button type="submit" variant="contained" color="primary">
              Sign Up
            </Button>
          </Container>
        </form>
      </Card>
      {snackBar === "success" ? (
        <SnackBarComponent
          open={true}
          message="User added successfully!"
          severity="success"
        />
      ) : snackBar === "error" ? (
        <SnackBarComponent
          open={true}
          message="Passwords do not match!"
          severity="error"
        />
      ) : (
        <></>
      )}
    </Container>
  );
};

export default SignUpForm;

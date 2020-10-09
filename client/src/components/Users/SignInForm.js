import React, { useState } from "react";
import {
  Container,
  FormControl,
  TextField,
  Button,
  makeStyles,
  Card,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    margin: "2em 0",
    justifyContent: "center",
  },
  card: {
    width: "400px",
  },
}));

const SignInForm = () => {
  const classes = useStyles();

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { email, password } = state;

  return (
    <Container className={classes.root} style={{ alignItems: "center" }}>
      <Card className={classes.card}>
        <form>
          <Container className={classes.root}>
            <FormControl>
              <TextField
                id="email"
                type="email"
                name="email"
                label="Email"
                value={email}
                onChange={handleChange}
                variant="outlined"
                placeholder="johndoe@email.com"
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
                variant="outlined"
                placeholder="humTdumt$@t0nAwa11@gOoGL"
                required
              />
            </FormControl>
          </Container>

          <Container className={classes.root}>
            <Button type="submit" variant="contained" color="primary">
              SignIn
            </Button>
          </Container>
        </form>
      </Card>
    </Container>
  );
};

export default SignInForm;

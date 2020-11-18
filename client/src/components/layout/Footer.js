import React from "react";
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#ececec",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer>
      <Container className={classes.root}>
        Copyright &copy; e-commerce
      </Container>
    </footer>
  );
};

export default Footer;

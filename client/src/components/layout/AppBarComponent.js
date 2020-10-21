import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "flex",
    flexGrow: 1,
    cursor: "pointer",
  },
}));

const AppBarComponent = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = (route) => {
    history.push(`${route}`);
  };

  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Typography
          variant="h6"
          className={classes.title}
          onClick={() => handleClick("/products")}
        >
          E Commerce
        </Typography>
        <ShoppingCartRoundedIcon
          color="inherit"
          onClick={() => handleClick("/cart")}
        />
        <Button color="inherit" onClick={() => handleClick("/auth/signup")}>
          Sign Up
        </Button>
        <Button color="inherit" onClick={() => handleClick("/auth/signin")}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton, Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../store/actions/authActions";

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
  toolbar: {
    textAlignLast: "end",
  },
  containerWidthAuto: {
    width: "auto",
  },
}));

const AppBarComponent = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleClick = (route) => {
    history.push(`${route}`);
  };

  const handleLogout = async (route) => {
    await dispatch(userLogout());
    history.push(`${route}`);
  };

  return (
    <AppBar position="static" color="transparent">
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h6"
          className={classes.title}
          onClick={() => handleClick("/products")}
        >
          E Commerce
        </Typography>

        <IconButton onClick={() => handleClick("/cart")}>
          <ShoppingCartRoundedIcon color="secondary" />
        </IconButton>
        {isLoggedIn ? (
          <Button color="inherit" onClick={() => handleLogout("/products")}>
            Sign Out
          </Button>
        ) : (
          <Container className={classes.containerWidthAuto}>
            <Button color="inherit" onClick={() => handleClick("/auth/signup")}>
              Sign Up
            </Button>
            <Button color="inherit" onClick={() => handleClick("/auth/signin")}>
              Sign In
            </Button>
          </Container>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;

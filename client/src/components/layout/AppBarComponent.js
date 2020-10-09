import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
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
    flexGrow: 1,
  },
}));

const AppBarComponent = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = (website) => {
    history.push(`/auth/${website}`);
  };

  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          E Commerce
        </Typography>
        <Button color="inherit" onClick={() => handleClick("signup")}>
          Sign Up
        </Button>
        <Button color="inherit" onClick={() => handleClick("signin")}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;

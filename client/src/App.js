import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container, makeStyles, ThemeProvider } from "@material-ui/core";
import Theme from "./components/layout/Theme";
import AppBarComponent from "./components/layout/AppBarComponent";
import Footer from "./components/layout/Footer";
import ProductList from "./components/products/ProductList";
import ProductDetails from "./components/products/ProductDetails";
import SignUpForm from "./components/Users/SignUpForm";
import SignInForm from "./components/Users/SignInForm";

const useStyles = makeStyles({
  paperRoot: {
    backgroundColor: "#ececec",
    color: "#6e6d6d",
  },
  mainContent: {
    padding: 24,
  }
});

const theme = Theme;

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <AppBarComponent />
          <Container className={classes.mainContent}>
            <Switch>
              <Route exact path="/products">
                <ProductList />
              </Route>
              <Route exact path="/products/:id">
                <ProductDetails />
              </Route>
              <Route exact path="/auth/signup">
                <SignUpForm />
              </Route>
              <Route exact path="/auth/signin">
                <SignInForm />
              </Route>
            </Switch>
          </Container>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

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
import ProfilePage from "./components/Users/ProfilePage";
import Cart from "./components/Cart/Cart";
import OrderSummary from "./components/Order/OrderSummary";
import OrderSuccess from "./components/Order/OrderSuccess";
import OrderScreen from "./components/Order/OrderScreen";

const useStyles = makeStyles({
  paperRoot: {
    backgroundColor: "#ececec",
    color: "#6e6d6d",
  },
  mainContent: {
    padding: 24,
  },
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
              <Route exact path="/myprofile">
                <ProfilePage />
              </Route>
              <Route exact path="/cart">
                <Cart />
              </Route>
              <Route exact path="/checkout">
                <OrderSummary />
              </Route>
              <Route exact path="/orders">
                <OrderSuccess />
              </Route>
              <Route exact path="/myorders">
                <OrderScreen />
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

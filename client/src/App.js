import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import AppBarComponent from "./components/layout/AppBarComponent";
import Footer from "./components/layout/Footer";
import ProductList from "./components/products/ProductList";
import ProductDetails from "./components/products/ProductDetails";
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  mainContent: {
    minHeight: "85vh",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <BrowserRouter>
        <AppBarComponent />
        <Container className={classes.mainContent}>
          <Switch>
            <Route exact path="/products">
              <ProductList />
            </Route>
            <Route exact path="/products/:id">
              <ProductDetails />
            </Route>
          </Switch>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

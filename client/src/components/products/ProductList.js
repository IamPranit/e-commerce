import React, { useEffect } from "react";
import { getProducts } from "../../store/actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 150,
  },
}));

const ProductList = () => {
  const products = useSelector((state) => state.product.products);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    isLoggedIn ? dispatch(getProducts()) : history.push("/auth/signin");
  }, [dispatch, history, isLoggedIn]);

  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justify="center"
      className={classes.root}
      spacing={2}
    >
      {products.length &&
        products.map((product) => (
          <Grid item key={product._id}>
            <ProductCard
              className="product-card"
              productId={product._id}
              name={product.name}
              image={product.image}
              maker={product.maker}
              price={product.price}
              rating={product.rating}
              category={product.category}
              description={product.description}
              inStock={product.inStock}
            />
          </Grid>
        ))}
    </Grid>
  );
};

export default ProductList;

import React, { useEffect } from "react";
import { getProducts } from "../../store/actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "0.5rem",
  },
  paper: {
    height: 150,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const ProductList = () => {
  const products = useSelector((state) => state.product.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const [spacing, setSpacing] = React.useState(2);
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
          <Grid
            item
            className={classes.control}
            xs={12}
            md={4}
            xl={3}
            key={product._id}
          >
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

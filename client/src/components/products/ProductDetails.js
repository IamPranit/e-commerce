import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../store/actions/productActions";
import { useParams } from "react-router-dom";
import { Container, Typography, makeStyles } from "@material-ui/core";
import Rating from "../layout/Rating";
import CartButton from "../layout/CartButton";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10px 5px",
  },
  left: {
    textAlign: "left",
    padding: "5px 0px",
  },
  displayInline: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Product = () => {
  const product = useSelector((state) => state.product.products);

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  const {
    name,
    maker,
    image,
    price,
    rating,
    category,
    description,
    inStock,
  } = product;

  const classes = useStyles();
  return (
    <Container>
      <Container>
        <Container>
          <Typography className={classes.left} variant="h6">
            {category}: {maker}
          </Typography>
          <Typography className={classes.left} variant="h4">
            {name}
          </Typography>
        </Container>
        <Container className={classes.displayInline}>
          <img src={image} alt="product" width="300" />
          <Container>
            <Container className={classes.root}>
              <Typography>{description}</Typography>
            </Container>

            <Container className={classes.root}>
              <Typography variant="h5">
                Rating: <Rating rating={rating} />
              </Typography>
            </Container>

            <Container className={classes.root}>
              <Typography variant="h5">Price: {price}</Typography>
            </Container>

            <Container className={classes.root}>
              {inStock ? (
                <CartButton text="Add" />
              ) : (
                <CartButton disabled="disabled" text="OUT OF STOCK" />
              )}
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default Product;

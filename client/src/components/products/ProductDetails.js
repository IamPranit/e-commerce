import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../store/actions/productActions";
import { useParams } from "react-router-dom";

const Product = (props) => {
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

  return (
    <div>
      <h1 style={{ float: "left" }}> {name} </h1>
      <h3>Company: {maker}</h3>
      <img src={image} alt="product" width="400" />
      <h3>Rating: {rating}</h3>
      <h4>Price: {price}</h4>
      {inStock ? <button>Add</button> : <button>OUT OF STOCK</button>}
    </div>
  );
};

export default Product;

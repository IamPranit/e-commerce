import React, { useEffect } from "react";
import CartList from "./CartList";
import { getCart } from "../../store/actions/cartActions";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const cartPrice = useSelector((state) => state.cart.totalCartPrice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);
  return (
    <div>
      <CartList cartItems={cartItems} cartPrice={cartPrice} />
    </div>
  );
};

export default Cart;

import React from "react";
import { clearCart, selectCartItems } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const handleRemoveItem = () => {
    // Dispatch an action
    dispatch(clearCart());
  };

  return (
    <div className="text-center">
      <h1 className="text-5xl text-center font-bold">Cart</h1>
      <button
        className="text-2xl font-bold border border-black text-white bg-black rounded-md px-2 py-1 my-4"
        onClick={handleRemoveItem}
      >
        Clear cart
      </button>
      {cartItems.length ? (
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 cursor-pointer">
          <ItemList items={cartItems} />
        </div>
      ) : (
        <h1>Cart is empty.</h1>
      )}
    </div>
  );
};

export default Cart;

import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../Store/ui-slice";

function CartButton(props) {
  const dispatch = useDispatch();
  const cartQuantity = useSelector(state => state.cart.totalQuantity);
  
  const toggleCartHandler = () => {
    // dispatch(uiActions.toggle());
    dispatch(uiActions.toggle());
  };

  return (
    <button className="btncart" onClick={toggleCartHandler} >
      <span className="icon">
        <AiOutlineShopping />
      </span>
      <span className="badge">{cartQuantity}</span>
    </button>
  );
}

export default CartButton;

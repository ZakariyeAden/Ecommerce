import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../Store/ui-slice";
import { Link } from "react-router-dom";
function CartButton(props) {
  const dispatch = useDispatch();
  const cartQuantity = useSelector(state => state.cart.totalQuantity);
  
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <Link to="/cart">
    <button className="btncart" onClick={toggleCartHandler} >
      <span className="icon">
        <AiOutlineShopping className="icon-"/>
      </span>
      <span className="badge">{cartQuantity}</span>
    </button>
    </Link>
  );
}

export default CartButton;

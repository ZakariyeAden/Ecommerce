import React,{ useEffect, useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
function CartButton({ cart }) {

const [cartCount, setCartCount] = useState(0);

useEffect(() => {
  let count = 0;
  cart.forEach((item) => {
    count += item.qty;
  });

  setCartCount(count);
}, [cart, cartCount]);



  return (
    <Link to="/cart">
    <button className="btncart">
      <span className="icon">
        <AiOutlineShopping className="icon-"/>
      </span>
      <span className="badge">{cartCount}</span>
    </button>
    </Link>
  );
}


const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};
export default connect(mapStateToProps)(CartButton);


import React from "react";
import CartItem from "./CartItem";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import Back from "../Icons/Back";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { CartHeading } from "../Style/style-components";
import Basket from '../Icons/Basket'

function Cart({ cart }) {
  return (
    <div>
      <CartHeading >Your Cart<Basket/></CartHeading>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Price</TableCell>
              {/* <TableCell align="right">Size</TableCell> */}
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="right">Remove</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      {cart.length > 0 ? (
        <div>
          {cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div>
          <h4 className="cart-heading">Cart is Empty</h4>
          <Link to="/shop" className="cart-link"><Back />Continue Shopping</Link>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);

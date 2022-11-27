import { useSelector } from "react-redux";
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

import { connect } from "react-redux";
function Cart({cart}) { 
  return (
    <div>
      <h4>Your Cart</h4>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="right">Remove</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      {cart.length > 0 ? (
        <div>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        </div>
      ) : (
        <div>
          <h4 className="cart-heading">Cart is Empty</h4>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);

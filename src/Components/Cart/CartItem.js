import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { removeFromCart, adjustItemQty } from "../Redux/Actions/cart-action";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { CartImage } from "../Style/style-components";
import Trash from "../Icons/Trash";
import Modal from '../Icons/Modal'
function CartItem({ item, removeFromCart, adjustQty, cart,   }) {
  const [input, setInput] = useState(item.qty);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
 
  useEffect(() => {
    let items = 0;
    let price = 0;
    

    cart.forEach(item => {
      items += item.qty;
      price += item.qty * item.price;
      
    });
  
    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  const onChangeHandler = e => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };
  

  
 
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              <CartImage src={item.image} />
            </TableCell>
            <TableCell align="right">{item.title}</TableCell>
            <TableCell align="right">{item.price}</TableCell>
            {/* <TableCell align="right">{item.size}</TableCell> */}
            <TableCell align="right">
              <label htmlFor="qty">Qty</label>
              <input
                min="1"
                type="number"
                id="qty"
                name="qty"
                value={input}
                onChange={onChangeHandler}
              />
            </TableCell>
            <TableCell align="right">
              <span>${totalPrice}</span>
            </TableCell>
            <TableCell align="right">
              <button
                onClick={() => {removeFromCart(item.id) }}
                className="trash-btn"
              >
                <Trash />
              </button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const mapStateToProps = state => {
  return {
    cart: state.shop.cart,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: id => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);

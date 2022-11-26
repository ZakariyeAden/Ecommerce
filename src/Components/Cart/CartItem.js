import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../Redux/Actions/cart-action";
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

function CartItem({item , removeFromCart}) {
  return (
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              <CartImage src={item.image} />
            </TableCell>
            <TableCell align="right">{item.title}</TableCell>
            <TableCell align="right">{item.price}</TableCell>
            <TableCell align="right">
            {/* <button onClick={removeItemHandler}>-</button>
            {quantity}
              <button onClick={addItemHandler}>+</button> */}
             
            </TableCell>
            <TableCell align="right">
            {/* <button onClick={removeItemHandler}>-</button>
            {quantity}
              <button onClick={addItemHandler}>+</button> */}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </TableCell>
  
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}


const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};
export default connect(null, mapDispatchToProps)(CartItem);

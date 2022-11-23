import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../Store/cart-slice";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";


function CartItem(props) {
  const dispatch = useDispatch();
  const { title, price, id, quantity,image } = props.item;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        image
      })
    );
  };

  console.log(title, price, image);
  return (
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">

        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              <img src={image} />
            </TableCell>
            <TableCell align="right">{title}</TableCell>
            <TableCell align="right">{price}</TableCell>
            <TableCell align="right">
            <button onClick={removeItemHandler}>-</button>
            {quantity}
              <button onClick={addItemHandler}>+</button>
            </TableCell>
  
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CartItem;

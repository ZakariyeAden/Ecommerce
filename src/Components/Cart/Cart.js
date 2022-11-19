import { useSelector } from 'react-redux'
import React from 'react'
import CartItem from './CartItem'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
function Cart(props) {
  const cartItems = useSelector(state => state.cart.items)
  return (
    <div>
      <h4>Your Cart</h4>
      <TableContainer component={Paper}>
      <Table  aria-label="simple table">
      <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
     
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          item={{
            id:item.id,
            title:item.name,
            quantity:item.quantity,
            total:item.totalPrice,
            price:item.price,
          }}
        />
      ))}
    </div>
  )
}

export default Cart
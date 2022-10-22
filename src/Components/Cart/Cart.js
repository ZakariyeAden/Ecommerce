import { useSelector } from 'react-redux'
import React from 'react'
import CartItem from './CartItem'
function Cart(props) {
  const cartItems = useSelector(state => state.cart.items)
  return (
    <div>
      <h4>Your Cart</h4>
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
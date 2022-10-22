import React from 'react'
import { useDispatch } from 'react-redux';
import { cartActions } from '../Store/cart-slice'

function CartItem(props) {
  const dispatch = useDispatch();
  const { title, price ,id,quantity } = props; 

const removeItemHandler = () => {
  dispatch(cartActions.removeItemFromCart(id));
};

const addItemHandler = () => {
  dispatch(
    cartActions.addItemToCart({
      id,
      title,
      price,
    })
  );
};
  return (
    <li>
    <div>
      <header>
        <h3>{title}</h3>
        <p>{price}</p>
      </header>
      <div>
        <div><span>{quantity}</span></div>
        <div>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </div>
    </li>
  )
}

export default CartItem
import React from 'react'
import CartItem from './CartItem'

const Cart = (props) => {
  const cartMap = props.cart.items.map((element) => {
    return (
      <CartItem
        key={element.cart_id}
        item={element}
        changeQuantity={props.changeQuantity}
        removeFromCart={props.removeFromCart}
      />
    )
  })

  return (
    <div className="cart-container">
      <div className="cart">
        <h2>Your Cart</h2>
        {cartMap}
      </div>
      <div className="total">
        Your total: ${props.cart.total}
        <button onClick={() => props.checkout()}>Checkout</button>
      </div>
    </div>
  )
}
export default Cart

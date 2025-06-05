import React from 'react'

const Cart = ({ cartItems }) => {
  const total = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', ''))
    return sum + price
  }, 0)

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} — {item.price}
            </li>
          ))}
        </ul>
      )}

      <p>Total Items: {cartItems.length}</p>
      <p>Total Price: ${total.toFixed(2)}</p>
    </div>
  )
}

export default Cart

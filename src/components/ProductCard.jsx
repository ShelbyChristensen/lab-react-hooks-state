import React from 'react'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product, inCart, handleCartToggle }) => {
  const { name, price, inStock } = product

  return (
    <div className={`${styles.card} ${!inStock ? styles.outOfStock : ''}`}>
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <p>Status: {inStock ? 'In Stock' : 'Out of Stock'}</p>
      <button onClick={() => handleCartToggle(product)} disabled={!inStock}>
        {inCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </div>
  )
}

export default ProductCard

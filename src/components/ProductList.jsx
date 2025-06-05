import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({ products, cartItems, handleCartToggle }) => {
  return (
    <div>
      <h2>Available Products</h2>

      {products.length === 0 ? (
        <p>No products available in this category.</p>
      ) : (
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            inCart={!!cartItems.find((item) => item.id === product.id)}
            handleCartToggle={handleCartToggle}
          />
        ))
      )}
    </div>
  )
}

export default ProductList

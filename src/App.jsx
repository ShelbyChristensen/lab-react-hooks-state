import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './App.css'

const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', inStock: false }
]

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [categoryFilter, setCategoryFilter] = useState('all')

  const toggleDarkMode = () => setDarkMode(prev => !prev)

  const handleAddRemoveFromCart = (product) => {
    const exists = cartItems.find(item => item.id === product.id)
    if (exists) {
      setCartItems(cartItems.filter(item => item.id !== product.id))
    } else {
      setCartItems([...cartItems, product])
    }
  }

  const handleFilterChange = (e) => {
    setCategoryFilter(e.target.value)
  }

  const filteredProducts =
    categoryFilter === 'all'
      ? sampleProducts
      : sampleProducts.filter(p => p.category === categoryFilter)

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <h1>🛒 Shopping App</h1>
      <p>Welcome! Your task is to implement filtering, cart management, and dark mode.</p>

      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <label htmlFor="category">Filter by Category: </label>
      <select id="category" value={categoryFilter} onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
        <option value="Non-Existent Category">Non-Existent Category</option>
      </select>

      <ProductList
        products={filteredProducts}
        cartItems={cartItems}
        handleCartToggle={handleAddRemoveFromCart}
      />

      <Cart cartItems={cartItems} />
    </div>
  )
}

export default App

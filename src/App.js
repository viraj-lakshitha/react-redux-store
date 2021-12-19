import React, { createContext, useEffect, useState } from 'react'
import Header from './components/Header'
import "./App.scss"
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'
import axios from 'axios'
import UserSignup from './components/UserSignup'
import UserTodo from './components/UserTodo'

export const StoreContext = createContext();

const App = () => {
  const [store, setStore] = useState([]);

  const fetchAllProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
      .catch(err => console.log('Something went wrong!'))
    setStore(response.data);
  }

  useEffect(() => {
    fetchAllProducts();
  }, [])

  return (
    <StoreContext.Provider value={store}>
      <div className="w-100">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductList/>} />
            <Route path="/products/:productId" element={<ProductDetails/>} />
            <Route path="/signup" element={<UserSignup/>} />
            <Route path="/todo" element={<UserTodo/>} />
          </Routes>
        </BrowserRouter>
    </div>
    </StoreContext.Provider>
  )
}

export default App

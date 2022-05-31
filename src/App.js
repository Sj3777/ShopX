import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/Login/Login"
import ShopX from "./ShopX"
import Cart from  "../src/common/Cart/Cart"
import Register from './pages/Register/Register'
function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route path="/shop" exact element={<ShopX/>}/>
          <Route path='/login' exact element={<Login/>}/>
          {/* <Route path='/cart' exact element={<Cart  />}/> */}
          <Route path='/register' exact element={<Register/>}/>
            
        </Routes>
        
      </Router>
    </>
  )
}

export default App

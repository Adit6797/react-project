import React from 'react'
import Navbar from './navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './navbar/Home'
import Signup from './navbar/Signup'
import Orders from './navbar/Orders'
import Cart from './navbar/Cart'
import Login from './navbar/Login'
import About from './navbar/About'
function App() {
    return (
        <div>
            <BrowserRouter>

                <Navbar />
                <Routes>
                    <Route path="" element={<About />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/about" element={<About/>}/>

                </Routes>
            </BrowserRouter>

            

        </div>
    )
}

export default App

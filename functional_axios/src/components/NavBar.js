import React from 'react'
import { BrowserRouter, Routes, Route,Link } from "react-router-dom"
import CreateProduct from './CreateProduct'
import Login from './Login'
import ProductList from './ProductList'
const NavBar = () => {
    return (
        <BrowserRouter>
            <div >
            <Link to="/login">Login</Link>
                
               
            </div>
            <Routes>
                <Route path='/login' element={<Login/>} />
                <Route path='/list' element={<ProductList/>} />
                <Route path='/create' element={<CreateProduct/>}/>
                
            </Routes>

        </BrowserRouter>

    )
}

export default NavBar

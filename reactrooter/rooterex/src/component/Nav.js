import React from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Home from './Home'
import Services from './Services'
export default function Nav() {
  return (
    <BrowserRouter>
    <div>
        <ul >
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/aboutus">AboutUs</Link></li>
            <li><Link to="/contactus">ContactUs</Link></li>
        </ul>
    </div>
    <Routes>
    <Route path="/" exact element={<Home/>} />
    <Route path="/services" element={<Services/>} />
    <Route path="/aboutus" element={<AboutUs/>} />
    <Route path='/contactus' element={<ContactUs/>} />
    </Routes>
    </BrowserRouter>
  )
}

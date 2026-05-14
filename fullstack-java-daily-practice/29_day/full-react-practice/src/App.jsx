import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { Home } from "./pages/Home";
import { User } from "./pages/User";
import { Products } from "./pages/Products";

function App() {
  return (
    <>
      

      <BrowserRouter>
        <nav>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/user">
              <li>User</li>
            </Link>
            <Link to="/product">
              <li>Products</li>
            </Link>
           
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="/product" element={<Products/>}/>


        </Routes>
      </BrowserRouter>
     
    
    </>
  )
}
export default App;
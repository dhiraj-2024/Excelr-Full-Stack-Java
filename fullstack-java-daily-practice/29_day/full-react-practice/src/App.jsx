import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { Home } from "./pages/Home";
import { User } from "./pages/User";
import { Products } from "./pages/Products";
import { Posts } from "./pages/Posts";
import Recipes from "./pages/Recipes";
import { RecipesFormPage } from "./pages/RecipesFormPage";

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
            <Link to="/post">
            <li>Posts</li>
            </Link>
            <Link to="/recipes">
              <li>Recipes</li>
            </Link>
            <Link to="/recipeform">
              <li>Add Recipes</li>
            </Link>
           
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="/product" element={<Products/>}/>
          <Route path="/post" element={<Posts/>}/>
          <Route path="/recipes" element={<Recipes/>}/>
          <Route path="/recipeform" element={<RecipesFormPage/>}/>


        </Routes>
      </BrowserRouter>
     
    
    </>
  )
}
export default App;
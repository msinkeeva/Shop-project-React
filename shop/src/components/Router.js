import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RouterLayout from "./RouterLayout";
import Home from "./Home";
import Catalog from "./Catalog";
import Login from "./Login";
import Registration from "./Registration";
import NotFoundPage from "./NotFoundPage";
import Cart from "./Cart";
import ProductProfile from "./ProductProfile";


class Router extends React.Component{
    render () {
        return(
            <div>
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<RouterLayout />}>
            <Route index element={<Home />}/>
            <Route path="catalog" element={<Catalog />}/>
            <Route path="registration" element={<Registration />}/>
            <Route path="login" element={<Login />}/> 
            <Route path="product/:productid" element={<ProductProfile />}/>        
            <Route path="cart" element={<Cart />}/>    
            <Route path="*" element={<NotFoundPage/>}/> 
            </Route>
          </Routes>
          </BrowserRouter>
        </div>
        )
    }
}
export default Router
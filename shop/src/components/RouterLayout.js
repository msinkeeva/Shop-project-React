import React, { useEffect, useState } from "react";
import {Link, Outlet} from "react-router-dom"
import cart from "../assets/shopping-cart.png"
import logo from "../assets/logo2.png"
import Footer from "./Footer";
import {useSelector } from "react-redux"

function RouterLayout () {
    const login = localStorage.getItem("login")
    const products = useSelector((state) => state.counter.cart)
    console.log(products)
    console.log(products.length)
    return (
        <div >
            <div className="navbar">
                <div className="navbar-leftblock">
                    <Link to="/"><img className="logo" src={logo}/></Link>      
                    <Link to="/catalog" className="link catalog-link">Каталог</Link>
                    <Link to="/search" className="link search-link">Поиск</Link>
                </div>
                <div className="navbar-rightblock">
                    <Link to="/registration" className="link">Регистрация</Link>
                    <Link to="/login" className="link">Войти</Link>    
                    <div className="navbar-cart">
                        <Link to="/cart" className="link cart-link"><img className="cart" src={cart}/></Link>  
                    <div className="cart-quantity">
                        {products.length == 0 ? <div></div> : <div>({products.length})</div>}  
                    </div>
                    {/* <div className="login">{login}</div>    */}
                  </div>
                </div>
            </div>     
            <div className="outlet"><Outlet/></div>
            <div><Footer/></div>
        </div>    
        )
    } 
export default RouterLayout
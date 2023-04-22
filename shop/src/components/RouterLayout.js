
import React, { useEffect, useState } from "react";
import {Link, Outlet} from "react-router-dom"
import cart from "../assets/shopping-cart.png"
import logo from "../assets/logo2.png"
import Footer from "./Footer";
import Search from "./Search";
import axios from "axios";

function RouterLayout () {
    const login = localStorage.getItem("login")
    return (
        <div >
            <div className="menu">
                <div className="menu-leftblock">
                    <Link to="/"><img className="logo" src={logo}/></Link>      
                    <Link to="/catalog" className="link catalog-link">Каталог</Link>
                    <Link to="/search" className="link search">Найти товар</Link>
                </div>
                <div className="menu-rightblock">
                    <Link to="/registration" className="link">Регистрация</Link>
                    <Link to="/login" className="link">Войти</Link>    
                    <Link to="/cart" className="link cart-link"><img className="cart" src={cart}/></Link>  
                    <div className="login">{login}</div>    
                </div>
            </div>     
            <div className="outlet"><Outlet/></div>
            <div><Footer/></div>
        </div>    
        )
    }
        
export default RouterLayout
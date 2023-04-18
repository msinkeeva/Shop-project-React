
import React, { useEffect, useState } from "react";
import {Link, Outlet} from "react-router-dom"
import cart from "../assets/shopping-cart.png"

function RouterLayout () {
    return (
        <div >
            <div className="menu">
                <div className="menu-leftblock">
                    <div className="Logo">LOGO</div>
                    <Link to="/" className="link">Home</Link>      
                    <Link to="/catalog" className="link catalog-link">Каталог</Link>
                    

                </div>
                <div className="search">
                        <input className="search-input" placeholder="Введите название товара"/>
                        <div className="search-button">Найти</div>
                    </div>
                <div className="menu-rightblock">
                    <Link to="/registration" className="link">Регистрация</Link>
                    <Link to="/login" className="link">Войти</Link>    
                    <Link to="/cart" className="link"><img className="cart" src={cart}/></Link>    
                </div>
            </div>     
            <div className="outlet"><Outlet/></div>
        </div>    
        )
    }
        
export default RouterLayout
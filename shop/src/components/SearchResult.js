import Catalog from "./Catalog"
import Product from "./Product"
import { useState, useEffect } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { addToCatalog } from "../store/SearchSlice"
import SearchSlice from "../store/SearchSlice"
import { increment, decrement, addToCart, removeToCart } from "../store/demoSlice"

import { Outlet } from "react-router-dom"


function SearchResult (props) {
    const [arrayOfProducts, setArrayOfProducts] = useState([])
    const [request, setReguest] = useState("")
    const products = useSelector((state) => state.counter.cart)
    const dispatch = useDispatch()
    
    return (
        <div className="search"> 
          
          {/* <div className="product-card" >
            <img className="product-photo" src={props.product.photosURL[0]}/>
            <div className="product-name">{props.product.name}</div>
            <div className="product-item">Цена: {props.product.price}</div>
            <div className="product-button" onClick={() =>{dispatch(addToCart(props.product))}}>Добавить в корзину</div>           
        </div> */}
        
        </div>
    )
}
export default SearchResult
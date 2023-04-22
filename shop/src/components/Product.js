import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, addToCart, removeToCart } from "../store/demoSlice"

function Product (props){
    const products = useSelector((state) => state.counter.cart)
    const dispatch = useDispatch()
    return (
        <Link className="product-card" to={`/product/${props.product._id}`}>
            <img className="product-photo" src={props.product.photosURL[0]}/>
            <div className="product-name">{props.product.name}</div>
            <div className="product-item">Цена: {props.product.price}</div>
            <div className="product-button" onClick={() =>{dispatch(addToCart(props.product))}}>Добавить в корзину</div>           
        </Link>
    )
    }
export default Product
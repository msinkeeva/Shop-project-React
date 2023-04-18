import { useEffect, useState } from "react"
import {Link} from "react-router-dom"

function Product (props){
    return (
        <Link className="product-card" to={`/product/${props.product._id}`}>
            <img className="product-photo" src={props.product.photosURL[0]}/>
            <div className="product-name">{props.product.name}</div>
            <div className="product-item">Цена: {props.product.price}</div>
            <div className="product-button">Добавить в корзину</div>           
        </Link>
    )
    }
export default Product
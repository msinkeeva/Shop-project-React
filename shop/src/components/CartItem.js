import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, deleteFromCart } from "../store/cartSlice"
import {useState } from "react"
import deleteIcon from "../assets/delete.png"
import loading from "../assets/loading.gif"


function CartItem (props) {
    const dispatch = useDispatch()   
    const products = useSelector((state) => state.counter.cart) 
    const [cart, setCart] = useState(products[0]) 
 
return (
    <div>
        <div className="cart-item-container">
            {props.product.photosURL ? <img className="cart-item-photo" src={props.product.photosURL[0]}/> : <img src={loading}/>} 
            <div className="cart-item-name">название<div className="cart-item-value">{props.product.name}</div></div>
            <div className="cart-item-quantity">количество
                <div className="quantity-container ">
                    <div className="button-quantity" onClick={() => dispatch(increment(props.product._id))}>+</div>
                    <div className="cart-item-value">{props.product.quantity}</div>
                    <div className="button-quantity" onClick={ () => {dispatch(decrement(props.product._id))}}>-</div>    
                </div>
            </div>
            <div className="cart-item-price">цена<div className="cart-item-value">{props.product.price}</div></div>
            <div className="cart-item-price-sum">стоимость: <div className="cart-item-value">{props.product.quantity*props.product.price}</div></div>
            <div onClick={ () => {dispatch(deleteFromCart(props.product))}}><img className="cart-item-button" src={deleteIcon}/></div>
        </div> 
    </div>
)
}
 export default CartItem
import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, addToCart, deleteFromCart } from "../store/demoSlice"
import { useEffect, useState } from "react"
import axios from "axios"

function CartItem (props) {
    const dispatch = useDispatch()   
    const products = useSelector((state) => state.counter.cart) 
    const  [cart, setCart] = useState(products[0]) 
    console.log(products[0])   
    console.log(cart)
    const count = products.length
 
    const quantity = useSelector((state) => state.counter.cart[0].quantity) 
    console.log(quantity)
    
 
    
return (
    <div>
      <div className="cart-item-container">
        <div className="count">{}</div>
    <div className="cart-item-name">название<div>{props.product.name}</div></div>
    <div className="cart-item-quantity">количество
    <div className="quantity-container">
    <div className="button-quantity" onClick={() => dispatch(increment(props.product._id))}>+</div>
    <div>{props.product.quantity}</div>
    <div className="button-quantity" onClick={ () => {dispatch(decrement(props.product._id))}}>-</div>    
    </div>
    
    <div></div>
        </div>
    <div className="cart-item-price">цена<div>{props.product.price}</div></div>
    <div>стоимость: <div>{props.product.quantity*props.product.price}</div></div>
    <div className="cart-item-button" onClick={ () => {dispatch(deleteFromCart(props.product))}}>удалить из корзины</div>
    </div> 
   
    </div>
  
)
}
 export default CartItem
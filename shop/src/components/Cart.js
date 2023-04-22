import { useState, useEffect } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, addToCart } from "../store/demoSlice"
import CartItem from "./CartItem"
import RouterLayout from "./RouterLayout"
function Cart() {
    const products = useSelector((state) => state.counter.cart)
    console.log(products)
    let totalQuantity = 0
    let totalPrice = 0
const getTotal = () => {
  products.forEach(item => {
    totalQuantity += item.quantity
    totalPrice += item.price * item.quantity
  })
  return {totalPrice, totalQuantity}
}
   
    return (
        <div className="cart-container">
             {products.length == 0 ? <div className="empty-cart">Корзина пустая</div> :  
             products.map((product) => <CartItem product={product}/>)
             }
            {products.length == 0 ? <div></div> :  
            <div>
                <div className="total__p">Общая сумма за {getTotal().totalQuantity} товара(ов)  : <strong>{getTotal().totalPrice}тг</strong></div>
                <div className="cart-button">Оформить заказ</div>
            </div>}
            
        
        </div>
    )
    }

    export default Cart
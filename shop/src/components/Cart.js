import { useState} from "react"
import { useSelector } from "react-redux"
import CartItem from "./CartItem"
import Order from "./Order"
import close from "../assets/close.png"


function Cart() {
    const products = useSelector((state) => state.counter.cart)
    const [isActive, setIsActive] = useState(false)
    const [address, setAddress] = useState("")
    const [message, setMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [deliveryType, setDeliveryType] = useState("")
    const [paymentType, setPaymentType] = useState("")

    const showHideOrderForm = event => {
        setIsActive(active => !active);
    }
    let totalQuantity = 0
    let totalPrice = 0
    const getTotal = () => {
        products.forEach(item => {
            totalQuantity += item.quantity
            totalPrice += item.price * item.quantity/2
        })
        return {totalPrice, totalQuantity}
    }
    const order = () => {
        try {
        if (!address || !deliveryType || !paymentType) throw "Заполните все поля"
            setErrorMessage()
            setMessage("Заказ оформлен!")}
        catch (error){
            setErrorMessage(error)
            console.log(error)
        }
    }
    return (
        <div className="cart-container">
            {products.length == 0 ? <div className="empty-cart">Корзина пустая</div> : products.map((product) => <CartItem key={product._id} product={product}/>)}
            {products.length == 0 ? <div></div> :  
                <div className="cart-footer">
                    <div className="total">Общая сумма за {getTotal().totalQuantity} товар(а) : <strong>{getTotal().totalPrice}тг</strong></div>
                    <div className="cart-button" onClick={showHideOrderForm}>Оформить заказ</div>
                </div>}
            <div>
            <div className={isActive ? 'order' : 'hidden'}>
                <div className="order-form">
                    <div className="close" onClick={showHideOrderForm}><img src={close}/></div>
                    <div className="order-form-title">Оформление заказа</div>
                    <div className="order-form-container">
                        <div className="delivery-info">
                            <div className="delivery-info-title">Доставка и оплата</div>
                            <div className="delivery-info-name">Адрес доставки</div>
                                <input className="order-input" value={address} placeholder="введите адрес" onChange={(event) => {setAddress (event.target.value)}}/>
                            <div className="delivery-info-name">Способ доставки</div> 
                                <div className="delivery-info-list">
                                  <div><input type="radio" name="delivery type" value="courier" id="courier" onChange={(event) => {setDeliveryType (event.target.value)}}/><label htmlFor="delivery type" >Курьерская доставка</label></div> 
                                  <div><input type="radio" name="delivery type" value="pick up yourself" id="courier"  onChange={(event) => {setDeliveryType (event.target.value)}}/><label htmlFor="delivery type">Доставка в пункт выдачи заказов</label></div> 
                                </div>
                            <div className="delivery-info-name">Способ оплаты</div>
                            <div className="delivery-info-list">
                                <div><input type="radio" name="payment type" value="card" id="card" onChange={(event) => {setPaymentType (event.target.value)}}/><label htmlFor="payment type">Оплата картой</label></div> 
                                <div><input type="radio" name="payment type" value="cash" id="cash"  onChange={(event) => {setPaymentType (event.target.value)}}/><label htmlFor="payment type">Оплата наличными курьеру</label></div> 
                            </div>
                        </div>
                        <div className="order-info">
                            <div className="delivery-info-title">Ваш заказ</div>
                            {products.length == 0 ? <div></div> : products.map((product) => <Order key={product._id} product={product}/>)}
                            <div className="total">Сумма к оплате {totalPrice}тг</div>
                        </div>  
                      </div>
                    <div className="cart-er-message">{errorMessage}</div>
                    <div className="cart-message">{message}</div>
                    <div className="order-button" onClick={(order)}>Оформить заказ</div>
                  </div>
              </div>
              </div>
              </div>
      
      
)
}
export default Cart
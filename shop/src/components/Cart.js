import { useState} from "react"
import { useSelector } from "react-redux"
import CartItem from "./CartItem"
import Order from "./Order"
import close from "../assets/close.png"

function Cart() {
    const products = useSelector((state) => state.counter.cart)
    const [isActive, setIsActive] = useState(false);
    const handleClick = event => {
        setIsActive(current => !current);
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
    return (
        <div className="cart-container">
            {products.length == 0 ? <div className="empty-cart">Корзина пустая</div> : products.map((product) => <CartItem product={product}/>)}
            {products.length == 0 ? <div></div> :  
                <div className="cart-footer">
                    <div className="total">Общая сумма за {getTotal().totalQuantity} товар(а) : <strong>{getTotal().totalPrice}тг</strong></div>
                    <div className="cart-button" onClick={handleClick}>Оформить заказ</div>
                </div>}
            <div>
            <div className={isActive ? 'order' : 'hidden'}>
                <div className="order-form">
                    <div className="close" onClick={handleClick}><img src={close}/></div>
                    <div className="order-form-title">Оформление заказа</div>
                    <div className="order-form-container">
                        <div className="delivery-info">
                            <div className="delivery-info-title">Доставка и оплата</div>
                            <div className="delivery-info-name">Адрес доставки</div>
                                <input className="order-input"/> 
                            <div className="delivery-info-name">Способ доставки</div> 
                                <div className="delivery-info-list">
                                    <div><input type="radio" className="list-input" id="male" name="gender" value="male"/><label className="label" for="male">Курьерская доставка</label></div>
                                    <div><input type="radio" className="list-input" id="female" name="gender" value="female"/><label for="female">Доставка в пункт выдачи заказов</label></div>
                                    <div><input type="radio" className="list-input" id="other" name="gender" value="other"/><label for="other">Самовывоз</label>  </div>
                                </div>
                            <div className="delivery-info-name">Способ оплаты</div>
                            <div className="delivery-info-list">
                                <div><input type="radio" className="list-input" id="male" name="gender" value="male"/><label for="male">Оплата картой</label></div>
                                <div><input type="radio" className="list-input" id="female" name="gender" value="female"/><label for="female">Оплата наличными курьеру</label></div>
                            </div >
                        </div>
                        <div className="order-info">
                            <div className="delivery-info-title">Ваш заказ</div>
                            {products.length == 0 ? <div></div> : products.map((product) => <Order product={product}/>)}
                            <div className="total">Сумма к оплате {totalPrice}тг</div>
                        </div>  
                      </div>
                      <div className="order-button" onClick={(handleClick)}>Оформить заказ</div>

                  </div>
              </div>
          </div>
        </div>
)
}
export default Cart
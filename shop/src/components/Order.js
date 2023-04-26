
function Order (props) {
 
return (
    <div>
        <div className="order-container">
            <div className="order-container-proto">
                  {props.product.photosURL ? <img className="order-photo" src={props.product.photosURL[0]}/>:  <div>загрузка</div>} 
            </div>
            <div>
                <div className="cart-item-name"><div className="cart-item-value">{props.product.name}</div></div>
                <div className="cart-item-value">{props.product.quantity} шт</div>
                <div className="cart-item-price-sum"><div className="cart-item-value">{props.product.quantity*props.product.price}тг</div></div>  
            </div>
        </div> 
    </div>
  
)
}
 export default Order
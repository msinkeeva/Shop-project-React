
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addToCart} from "../store/demoSlice"

function Product (props){
    const products = useSelector((state) => state.counter.cart)
    const dispatch = useDispatch()
    return (
        <div className="product-card" to={`/product/${props.product._id}`}>
          <Link className="product-link" to={`/product/${props.product._id}`}><img className="product-photo" src={props.product.photosURL[0]}/></Link>
          <Link className="product-link" to={`/product/${props.product._id}`}><div className="product-name">{props.product.name}</div></Link>
          <Link className="product-link" to={`/product/${props.product._id}`}><div className="product-item">Цена: {props.product.price} тг</div></Link>
          <div className="product-button" onClick={() =>{dispatch(addToCart(props.product))}}>Добавить в корзину</div>           
        </div>
    )
    }
export default Product
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import {addToCart} from "../store/cartSlice"
import loading from "../assets/loading.gif"

function ProductProfile () {
    const params = useParams()
    const [product, setProduct] = useState({})
    const dispatch = useDispatch()
    
    useEffect (() => {
        getProduct()
    },[])
    const getProduct = async () => {
        const url = (`http://cepbep.ddns.net:2500/api/shopDB/products/getProductById/${params.productid}`)
        const response = await axios.get(url)
        setProduct(response.data[0])
        console.log(response.data[0])  
    }
    return (
        <div className="product-profile">
            <div className="product-name">{product.name}</div>
            <div className="product-info-container">
                <div className="product-photo-container">
                    {product.photosURL ? <img className="product-photo" src={product.photosURL[0]}/> : <img src={loading}/>}
                </div>
                <div className="product-info-items">
                    <div className="product-item">Описание: {product.description}</div>
                    <div className="product-item" >Цена: {product.price} тг</div>
                    <div>Цвет:
                        {product.colors ? <div>{product.colors.map((number) =><li>{number}</li>)}</div> : <img src={loading}/>}</div>
                    <div className="product-item">Количество: {product.amount} шт</div>
                    <div className="product-item">Размеры:
                        {product.sizes ? <div>{product.sizes.map((number) =><li>{number}</li>)}</div> : <img src={loading}/>} </div>
                        <div className="button-container">
                            <div className="product-button" onClick={() =>{dispatch(addToCart(product))}}>Добавить в корзину</div>
                        </div>
                </div>    
            </div>
        </div>    
    )
}
export default ProductProfile
    
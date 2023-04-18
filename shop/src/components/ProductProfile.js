import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import { useParams } from "react-router-dom"
import axios from "axios"

function ProductProfile () {
    const params = useParams()
    const [product, setProduct] = useState({})
    useEffect (() => {
        getProduct()
    },[])
    const getProduct = async () => {
        const url = (`http://cepbep.ddns.net:2500/api/shopDB/products/getProductById/${params.productid}`)
        const response = await axios.get(url)
        setProduct(response.data)

        console.log(response.data)
}
    return (
        <div className="product-card">
            {/* <img className="product-photo" src={product.photosURL[0]}/>  */}
            <div >{product.name}</div>
            <div >{product._id}</div>
            <div>Количество: {product.amount}</div>
            <div >Цвета:{product.colors}</div>
            <div >Описание:{product.description}</div>
            <div >Цена: {product.price}</div>
            <div >Размеры: {product.sizes}</div>  
            <div className="product-button">Добавить в корзину</div>  
        </div>    
    )
    }
export default ProductProfile
    
import { useState, useEffect } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import CarouselBox from "./CarouselBox"
import logo from "../assets/logo2.png"
import {Link} from "react-router-dom"
import {addToCart} from "../store/cartSlice"
import loading from "../assets/loading.gif"

function Home () {
    const [arrayOfProducts, setArrayOfProducts] = useState([])

    const dispatch = useDispatch()

    const getAllProducts = async () => {
            const url = "http://cepbep.ddns.net:2500/api/shopDB/products/getAllProducts"
            const response = await axios.get(url)
            setArrayOfProducts(response.data.payload)
    }
    useEffect (() => {
        getAllProducts()
    }, [])
    return (
        <div className="home-page-container">
            <div className="carousel-container">
                <CarouselBox/>
            </div>  
            <div className="store-description">
                <div className="store-description-block-one">
                    <div className="store-description-block-one-left"><img className="store-description-logo" src={logo}/></div>
                    <div className="store-description-block-one-right">
                        <p> На My Store – вы не просто найдете все то что вам нужно, но и подберете для себя подходящий вам образ.
                            Наша цель, как интернет магазина одежды – это создать все необходимые условия, среду для качественного шоппинга. Шоппинг с My Store – это удобно, быстро и экономно. </p>
                            <ul>Наши преимущества:
                                <li>Бесплатная доставка по Казахстану</li>
                                <li>Примерка при получении</li>
                                <li>Гарантия возврата</li>
                                <li>Оплата при получении</li>
                            </ul>
                    </div>
                </div>
            </div>
            <div className="bestsellers">
                <h2>Хиты продаж</h2>
                <div className="bestsellers-container"> 
                    <div className="product-card">
                    {arrayOfProducts[19] ? 
                        <Link className="product-link" to={`/product/${arrayOfProducts[19]._id}`}>
                        <div className="info">
                            <img className="product-photo" src={arrayOfProducts[19].photosURL[0]}/> 
                            <div className="product-name">{arrayOfProducts[19].name}</div> 
                            <div className="product-item">Цена: {arrayOfProducts[19].price}</div> 
                        </div>
                        </Link> : <img src={loading}/>}
                        {arrayOfProducts[19] ? <div className="product-button" onClick={() =>{dispatch(addToCart(arrayOfProducts[19]))}}>Добавить в корзину</div> : <img src={loading}/>}
                    </div>
                    <div className="product-card">
                    {arrayOfProducts[15] ? 
                        <Link className="product-link" to={`/product/${arrayOfProducts[15]._id}`}>
                        <div className="info">
                            <img className="product-photo" src={arrayOfProducts[15].photosURL[0]}/> 
                            <div className="product-name">{arrayOfProducts[15].name}</div> 
                            <div className="product-item">Цена: {arrayOfProducts[15].price}</div> 
                        </div>
                        </Link> : <img src={loading}/>}
                        {arrayOfProducts[15] ? <div className="product-button" onClick={() =>{dispatch(addToCart(arrayOfProducts[19]))}}>Добавить в корзину</div> : <img src={loading}/>}
                    </div>
                    <div className="product-card">
                    {arrayOfProducts[3] ? 
                        <Link className="product-link" to={`/product/${arrayOfProducts[3]._id}`}>
                        <div className="info">
                            <img className="product-photo" src={arrayOfProducts[3].photosURL[0]}/> 
                            <div className="product-name">{arrayOfProducts[3].name}</div> 
                            <div className="product-item">Цена: {arrayOfProducts[3].price}</div> 
                        </div>
                        </Link> : <img src={loading}/>}
                        {arrayOfProducts[3] ? <div className="product-button" onClick={() =>{dispatch(addToCart(arrayOfProducts[19]))}}>Добавить в корзину</div> : <img src={loading}/>}
                    </div>
                    <div className="product-card">
                    {arrayOfProducts[18] ? 
                        <Link className="product-link" to={`/product/${arrayOfProducts[18]._id}`}>
                        <div className="info">
                            <img className="product-photo" src={arrayOfProducts[18].photosURL[0]}/> 
                            <div className="product-name">{arrayOfProducts[18].name}</div> 
                            <div className="product-item">Цена: {arrayOfProducts[18].price}</div> 
                        </div>
                        </Link> : <img src={loading}/>}
                        {arrayOfProducts[18] ? <div className="product-button" onClick={() =>{dispatch(addToCart(arrayOfProducts[19]))}}>Добавить в корзину</div> : <img src={loading}/>}
                    </div>  
                </div>
            </div>        
        </div>
    )
}
export default Home



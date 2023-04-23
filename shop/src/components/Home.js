import Catalog from "./Catalog"
import Product from "./Product"
import { useState, useEffect } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { increment } from "../store/demoSlice"
import Carousel from "./CarouselBox"
import CarouselBox from "./CarouselBox"

function Home () {
    const [arrayOfProducts, setArrayOfProducts] = useState([])

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const setState = () => {
        dispatch(increment())
    }

    const getAllProducts = async () => {
            const url = "http://cepbep.ddns.net:2500/api/shopDB/products/getAllProducts"
            const response = await axios.get(url)
            setArrayOfProducts(response.data.payload)
            console.log(response.data.payload)
   
    }
    useEffect (() => {
        getAllProducts()
    }, [])
    return (
        <div className="home-page-container">
        <div className="carousel-container">
<CarouselBox/>
        </div>  
        <div className="bestsellers">
            <div>Хиты продаж</div>
            <div className="bestsellers-container">
             {/* <div className="product-card">
                {arrayOfProducts[3].photosURL[0] ? <img className="product-photo" src={arrayOfProducts[3].photosURL[0]}/> : <div>Загрузка</div>}
                    <div className="product-name">{arrayOfProducts[3].name}</div>
                    <div className="product-item">Цена: {arrayOfProducts[3].price}</div>
                    <div className="product-button">Добавить в корзину</div>           
                 </div>
                 <div className="product-card">
                {arrayOfProducts[1].photosURL[0] ? <img className="product-photo" src={arrayOfProducts[1].photosURL[0]}/> : <div>Загрузка</div>}
                    <div className="product-name">{arrayOfProducts[1].name}</div>
                    <div className="product-item">Цена: {arrayOfProducts[1].price}</div>
                    <div className="product-button">Добавить в корзину</div>           
                 </div>
                 <div className="product-card">
                 {arrayOfProducts[6].photosURL[0] ? <img className="product-photo" src={arrayOfProducts[6].photosURL[0]}/> : <div>Загрузка</div>}
                    <div className="product-name">{arrayOfProducts[6].name}</div>
                    <div className="product-item">Цена: {arrayOfProducts[6].price}</div>
                    <div className="product-button">Добавить в корзину</div>           
                 </div>    */}
        </div>
            </div>
                
            </div>


        
    )
}
export default Home



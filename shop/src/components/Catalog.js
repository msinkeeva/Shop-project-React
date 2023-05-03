import Product from "./Product"
import { useState, useEffect } from "react"
import axios from "axios"
import ScrollToTop from "./ScrollToTop"
import arrowLeft from "../assets/left-arrow.png"
import arrowRight from "../assets/right-arrow.png"
import loading from "../assets/loading.gif"

function Catalog() {
    const [arrayOfProducts, setArrayOfProducts] = useState([])
    const [request, setReguest] = useState("")
    const [page, setPage] = useState(1)
    const getAllProducts = async () => {
        const url = `http://cepbep.ddns.net:2500/api/shopDB/products/getAllProducts/?page=${page}`
        const response = await axios.get(url)
        setArrayOfProducts(response.data.payload)
    }
    const  getProductsByFilter= async (category) => {
        const url = "http://cepbep.ddns.net:2500/api/shopDB/products/postProductFilter"
        const data = {"filter": {"category": category}}
        const response = await axios.post(url, data, {
            'Content-Type': 'application/json'
        })
        setArrayOfProducts(response.data)
    }
    const sortPriceUp = () => {
        setArrayOfProducts([...arrayOfProducts].sort((a,b) => a.price - b.price))
    }
    const sortPriceDown = () => {
        setArrayOfProducts([...arrayOfProducts].sort((a,b) => b.price - a.price))
    }
    const nextPage = () => {
        setPage(page+1)
    }
    const prevPage = () => {
        setPage(page-1)
    }
    useEffect (() => {
        getAllProducts()
    }, [page])
    
    return (
        <div className="catalog"> 
            <div className="catalog-container">
                <div className="catalog-item-all" onClick={getAllProducts}>Все товары</div>
                <div className="catalog-item" onClick={()=>{getProductsByFilter("Платья")}}>Платья</div>
                <div className="catalog-item" onClick={()=>{getProductsByFilter("Джинсы")}}>Джинсы</div>
                <div className="catalog-item" onClick={()=>{getProductsByFilter("Толстовки и худи")}}>Толстовки и худи</div>
                <div className="catalog-item" onClick={()=>{getProductsByFilter("Брюки")}}>Брюки</div>
                <div className="catalog-item" onClick={()=>{getProductsByFilter("Юбки")}}>Юбки</div>
                <div className="catalog-item" onClick={()=>{getProductsByFilter("Блузки и рубашки")}}>Блузки и рубашки</div>
                <div className="catalog-item" onClick={()=>{getProductsByFilter("Майки")}}>Майки</div>
            </div>
            <div className="product-container">
                {arrayOfProducts == 0 ? <div></div> :  
                <div className="sort-container"> 
                    <div className="sort-button-one" onClick={sortPriceUp}> Сортировать по возрастанию цены</div>
                    <div className="sort-button-one" onClick={sortPriceDown}>Сортировать по убыванию цены</div>    
                </div>}
                <div className="product-container-box">
                     {arrayOfProducts ? arrayOfProducts.map((product) => <Product key={product._id} product={product}/>) : <img src={loading}/>}
                </div>
               <div>
                    {page == 2 && arrayOfProducts.length == 20 ? <div className="page-button" onClick={prevPage}><img src={arrowLeft}/></div> : <div></div>}
                    {page == 1 && arrayOfProducts.length == 20 ?<div className="page-button"  onClick={nextPage}><img src={arrowRight}/></div> : <div></div>}
               </div>
            </div>
            <ScrollToTop/>
        </div>
    )}
export default Catalog
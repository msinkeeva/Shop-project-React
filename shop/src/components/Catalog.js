import Product from "./Product"
import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Search from "./Search"

function Catalog() {
    const [arrayOfProducts, setArrayOfProducts] = useState([])
    const [request, setReguest] = useState("")
    const getAllProducts = async () => {
        const url = "http://cepbep.ddns.net:2500/api/shopDB/products/getAllProducts"
        const response = await axios.get(url)
        setArrayOfProducts(response.data.payload)
        console.log(response.data.payload)
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
    const sortRatingUp = () => {
        setArrayOfProducts([...arrayOfProducts].sort((a,b) => a.rating - b.rating))
    }
    const sortRatingDown = () => {
        setArrayOfProducts([...arrayOfProducts].sort((a,b) => b.rating - a.rating))
    }
    // const Render = () => {
    //     console.log("render")
    //     return (
    //         // <div>{arrayOfProducts.map((product) => <Product product={product}/>)}</div>
    //         <div></div>
    //     )
    // }
    // useEffect (() => {
    //     Render()
    // }, [arrayOfProducts])
    
    return (
        <div className="catalog"> 
            <div className="catalog-container">
                <div className="catalog-item-all" onClick={getAllProducts}>Все товары</div>
                <div className="catalog-item" onClick={()=>{getProductsByFilter("Платья")}}>Платья</div>
                <div className="catalog-item" onClick={()=>{getProductsByFilter("Джинсы")}}>Джинсы</div>
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
                        </div>
                                             
                  
                }
                <div className="product-container-box">
                     {arrayOfProducts ? arrayOfProducts.map((product) => <Product product={product}/>) : <div>Загрузка</div>}
                </div>
               
            </div>
        </div>
        
    )}
    
    export default Catalog
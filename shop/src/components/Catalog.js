import Product from "./Product"
import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Search from "./Search"

function Catalog() {
    const [arrayOfProducts, setArrayOfProducts] = useState([])
    console.log(arrayOfProducts)
    const [request, setReguest] = useState("")
    const getAllProducts = async () => {
        const url = "http://cepbep.ddns.net:2500/api/shopDB/products/getAllProducts"
        const response = await axios.get(url)
        setArrayOfProducts(response.data.payload)
}
    const showMore1 = async () => {
        const url = "http://cepbep.ddns.net:2500/api/shopDB/products/postProductFilter"
        const data = {"filter": {"category": "Блузки и рубашки"}}
        const response = await axios.post(url, data, {
            'Content-Type': 'application/json'
        })
        console.log(response)
        setArrayOfProducts(response.data)
    }
    const showMore2 = async () => {
        const url = "http://cepbep.ddns.net:2500/api/shopDB/products/postProductFilter"
        const data = {"filter": {"category": "Майки"}}
        const response = await axios.post(url, data, {
            'Content-Type': 'application/json'
        })
        console.log(response)
        setArrayOfProducts(response.data)
    }
    
    return (
        <div className="catalog"> 
       
        <div className="catalog-container">
        <div className="catalog-item" onClick={getAllProducts}>Показать все товары</div>
        <div className="catalog-item" onClick={showMore1}>Блузки</div>
        <div className="catalog-item" onClick={showMore2}>Майки</div>
        <div className="catalog-item">Свитшоты</div>
        <div className="catalog-item">Брюки</div>
        <div className="catalog-item">Юбки</div>
        <div className="catalog-item">Платья</div> 
        <div className="catalog-item">Обувь</div>
        </div>
     
        <div className="product-container">
          {arrayOfProducts.map((product) => <Product product={product}/>)}
        </div>
        </div>
        
    )}
    
    export default Catalog
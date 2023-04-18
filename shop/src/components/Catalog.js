import Product from "./Product"
import { useState, useEffect } from "react"
import axios from "axios"

function Catalog() {
    const [arrayOfProducts, setArrayOfProducts] = useState([])

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
        <div className="catalog"> 
       
        <div className="catalog-container">
        <div className="catalog-item">Блузки</div>
        <div className="catalog-item">Рубашки</div>
        <div className="catalog-item">Футболки</div>
        <div className="catalog-item">Свитшоты</div>
        <div className="catalog-item">Брюки</div>
        <div className="catalog-item">Юбки</div>
        <div className="catalog-item">Платья</div> 
        <div className="catalog-item">Обувь</div>
        <div className="catalog-item">раздел</div>
        <div className="catalog-item">раздел</div>
        
        </div>
        <div className="product-container">
          {arrayOfProducts.map((product) => <Product key={product._id} product={product}/>)}
        </div>
        </div>
        
    )
    }
    export default Catalog
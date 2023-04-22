import Catalog from "./Catalog"
import Product from "./Product"
import { useState, useEffect } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { addToCatalog } from "../store/SearchSlice"
import SearchSlice from "../store/SearchSlice"

import { Outlet } from "react-router-dom"


function Search () {
    const [arrayOfProducts, setArrayOfProducts] = useState([])
    const [request, setReguest] = useState("")

    const getProductBySeach = async () => {
            const url = `http://cepbep.ddns.net:2500/api/shopDB/products/searchProducts/:${request}`
            const response = await axios.get(url)
            setArrayOfProducts(response.data)
            console.log(response.data)

    }
    useEffect (() => {
        getProductBySeach()
    }, [])
    return (
        <div className="search"> 
        <div className="search-request">
           <input className="search-input" placeholder="Введите название товара" value={request} onChange={(event) => {setReguest (event.target.value)}}/>
             <div className="search-button"  onClick={getProductBySeach}>Найти</div>   
        </div>
          
        <div className="search-result-container">{arrayOfProducts.map((product) => <Product product={product}/>)}</div>
        
        </div>
    )
}
export default Search


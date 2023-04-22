import Catalog from "./Catalog"
import Product from "./Product"
import { useState, useEffect } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { addToCatalog } from "../store/SearchSlice"
import SearchSlice from "../store/SearchSlice"

import { Link, Outlet } from "react-router-dom"
import SearchResult from "./SearchResult"


function Search () {
    const [arrayOfProducts, setArrayOfProducts] = useState([])
    console.log(arrayOfProducts)
    const [request, setReguest] = useState("")

    const getProductBySearch = async () => {
            const url = `http://cepbep.ddns.net:2500/api/shopDB/products/searchProducts/:${request}`
            const response = await axios.get(url)
            setArrayOfProducts(response.data)
            console.log(response.data)
            console.log(arrayOfProducts)
    }
    useEffect (() => {
        getProductBySearch()
    }, [])
    return (
        <div className="search"> 
        <div className="search-request">
           <input className="search-input" placeholder="Введите название товара" value={request} onChange={(event) => {setReguest (event.target.value)}}/>
             <Link className="search-button" to="/search-result" onClick={getProductBySearch}>Найти</Link>   
             <div className="search-result-container">{arrayOfProducts.map((product) => <SearchResult product={product}/>)}</div>
        </div>
        
        </div>
    )
}
export default Search


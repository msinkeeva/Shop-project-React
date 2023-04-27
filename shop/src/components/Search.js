import Product from "./Product"
import { useState, useEffect } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import loading from "../assets/loading.gif"

function Search () {
    const [arrayOfProducts, setArrayOfProducts] = useState([])
    const [request, setReguest] = useState("")
    const search = useSelector((state) => state.counter.search)
    const dispatch = useDispatch()

    const getProductBySearch = async () => {
            const url = `http://cepbep.ddns.net:2500/api/shopDB/products/searchProducts/:${request}`
            const response = await axios.get(url)
            setArrayOfProducts(response.data)
    }
    return (
        <div className="search"> 
            <div className="search-request">
                <input className="search-input" placeholder="Введите название товара" value={request} onChange={(event) => {setReguest (event.target.value)}}/>
             <div className="search-button"  onClick={getProductBySearch}>Найти</div>  
            </div>
            <div className="search-result-container">
                {arrayOfProducts ? arrayOfProducts.map((product) => <Product key={product._id} product={product}/>) : <img src={loading}/>}   
            </div>
        </div>
    )
}
export default Search


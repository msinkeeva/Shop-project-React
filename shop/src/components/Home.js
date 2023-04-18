import Catalog from "./Catalog"
import Product from "./Product"
import { useState, useEffect } from "react"
import axios from "axios"

function Home () {
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
        <div className="product-container">
          {arrayOfProducts.map((product) => <Product key={product._id} product={product}/>)}
        </div>
    )
}
export default Home
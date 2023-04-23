import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../assets/image.jpg'
import axios from "axios"
import { useEffect, useState } from "react"

function CarouselPhoto(props) {
    const [arrayOfProduct, setArrayOfProduct] = useState([])

    const getProductById = async () => {
        const url = `http://cepbep.ddns.net:2500/api/shopDB/products/getProductById/${props.product._id}`
        const response = await axios.get(url)
        setArrayOfProduct(response.data[0])
        console.log(response.data)
        console.log(props.props)
        console.log(props.product._id)
}
useEffect (() => {
    getProductById()
    console.log(arrayOfProduct)
},[])
  return (
    <Carousel>
      <Carousel.Item>
      {arrayOfProduct.photosURL ? <img 
          className="d-block w-100 photo-img"
          src={arrayOfProduct.photosURL[0]}
          alt="First slide"/> : <div>Загрузка</div>}
      </Carousel.Item>
      <Carousel.Item>
      {arrayOfProduct.photosURL ? <img 
          className="d-block w-100 photo-img"
          src={arrayOfProduct.photosURL[1]}
          alt="First slide"/> : <div>Загрузка</div>}
      </Carousel.Item>
      <Carousel.Item>
      {arrayOfProduct.photosURL ? <img 
          className="d-block w-100 photo-img"
          src={arrayOfProduct.photosURL[2]}
          alt="First slide"/> : <div>Загрузка</div>}

      </Carousel.Item>
    </Carousel>
  
  );
}

export default CarouselPhoto;
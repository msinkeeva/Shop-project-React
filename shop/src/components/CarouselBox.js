import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../assets/image.jpg'

function CarouselBox() {
  return (
    <Carousel>
      <Carousel.Item>
        <img 
          className="d-block w-100 carousel-img"
          src="https://img.freepik.com/free-photo/young-happy-woman-shopper-showing-okay-sign-pleased-with-good-discounts-buying-staff-on-sale-holding_1258-121112.jpg?w=1380&t=st=1682066129~exp=1682066729~hmac=694f09f548236fd8403db4aa6aadbe4010b85fd0c360f55b0df5494f15f14a12"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Добро пожаловать на My Store</h3>
          <div className='carousel-text'><p>Вас ждут ТЫСЯЧИ моделей модной брендовой мужской, женской и детской обуви и одежды разных размеров!</p></div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img" 
          src="https://img.freepik.com/premium-vector/banner-with-percentage-symbol-with-tag-on-it-and-place-for-text_348082-348.jpg?w=996"
          alt="Second slide"
        />
      <Carousel.Caption>
          <h3>Скидки и акции</h3>
          <div className='carousel-text'><p>до 50% скидка постоянным покупателям</p></div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={image}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Широкий ассортимент</h3>
          <div className='carousel-text'><p>10 млн+ ежедневно отправляемых товаров со складов</p></div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselBox;
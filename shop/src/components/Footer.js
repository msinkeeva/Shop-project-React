import logo from "../assets/logo2.png"
import telegram from"../assets/social media icons/telegram.png"
import whatsapp from"../assets/social media icons/whatsapp.png"
import instagram from"../assets/social media icons/instagram.png"
import facebook from"../assets/social media icons/facebook.png"
import twitter from"../assets/social media icons/twitter.png"

function Footer (){
    return (
<div className="footer">
    <div className="footer-left-block">
        <img className="footer-logo" src={logo}/> 
        <div className="footer-item">Интернет магазин "My Store"</div> 
    </div>
    <div className="footer-center-block">
        <div className="footer-item"> Контакты:</div> 
        <div className="footer-item">
            email: mystore@mail.com
        </div>
        <div className="footer-item">
            тел: +7 777 123 12 12
        </div>   
    </div>
    <div className="footer-right-block">
        <div>My Store в социальных сетях</div>
        <div className="social-media">
            <div><img className="social-icon" src={instagram}/></div>
            <div><img className="social-icon" src={whatsapp}/></div>
            <div><img className="social-icon" src={telegram}/></div>
            <div><img className="social-icon" src={facebook}/></div>
            <div><img className="social-icon" src={twitter}/></div>
        </div>
    </div>

   

    
</div>

    )
}
export default Footer
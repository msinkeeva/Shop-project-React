import axios from "axios";
import { useEffect, useState } from "react";


function Login () {
        const [login, setLogin] = useState("")  
        const [password, setPassword] = useState("")
        const [message, setMessage] = useState("")
        const [errorMessage, setErrorMessage] = useState("")
        
        const postData = async () => {
            try {
                const url = "http://cepbep.ddns.net:2500/api/hotelDB/users/login"
                if (!password || !login) throw "Все поля должны быть заполнены"
               
                const data = {
                    login: login,
                    password: password
                }
            const response = await axios.post(url, data, {
                'Content-Type': 'application/json'
            })
            console.log(response.data[0])
            if (response.status == "200"){
                setErrorMessage("")
                setMessage("Вход произведен")    
                localStorage.setItem("userid", response.data[0]._id)
                localStorage.setItem("login", response.data[0].login)
            }
            else {
                setErrorMessage("Неправильный логин или пароль") 
            }
        }
    catch (error){
        setErrorMessage(error)
        console.log(error)
    }
    }
    
    return (
            <div className="reg-form"> 
                <div className="reg-title">Войти</div>
                <input className="reg-input" value={login} placeholder="логин" onChange={(event) => {setLogin (event.target.value)}}/>
                <input  className="reg-input" value={password}  placeholder="пароль" type="password" onChange={(event) => {setPassword (event.target.value)}}/>
                <div className="er-message">{errorMessage}</div>
                <div className="message">{message}</div>
                <div onClick={postData} className="reg-button">OK</div> 
            </div>
    )
    
}
export default Login
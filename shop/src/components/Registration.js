import axios from "axios";
import { useEffect, useState } from "react";

function Registration () {
    const [message, setMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [login, setLogin] = useState("")
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [password, setPassword] = useState("")
    const [tryPassword, setTryPassword] = useState("")

    const postData = async () => {
        try {
            if (!login || !fullName || !email || !phoneNumber || !password) throw "заполните все поля"
            if (password != tryPassword) throw "пароли должны совпадать"
            const url = "http://cepbep.ddns.net:2500/api/hotelDB/users/register"
            const data = {
                login: login,
                fullName: fullName,
                email: email,
                phoneNumber: phoneNumber,
                password: password,
                tryPassword: tryPassword      
            }
            const response = await axios.post(url, data, {
                'Content-Type': 'application/json'
            })
            setErrorMessage()
            setMessage("Вы зарегистрированы!")
            }
            catch (error){
                setErrorMessage(error)
                console.log(error)
            }
    }
return (
        <div className="reg-form"> 
            <div className="reg-title">Регистрация</div>
                <input className="reg-input" value={login} placeholder="логин" onChange={(event) => {setLogin (event.target.value)}}/>
                <input className="reg-input" value={fullName} placeholder="полное имя" onChange={(event) => {setFullName (event.target.value)}}/>
                <input  className="reg-input" value={email}  placeholder="email" onChange={(event) => {setEmail (event.target.value)}}/>
                <input  className="reg-input" value={phoneNumber}  placeholder="номер телефона" onChange={(event) => {setPhoneNumber (event.target.value)}}/>
                <input  className="reg-input" value={password}  placeholder="пароль" type="password" onChange={(event) => {setPassword (event.target.value)}}/>
                <input className="reg-input" value={tryPassword} placeholder="пароль еще раз" type="password" onChange={(event) => {setTryPassword (event.target.value)}}/>    
                <div className="er-message">{errorMessage}</div>
                <div className="message">{message}</div>
                <div onClick={postData} className="reg-button">OK</div> 
        </div>
)
}
export default Registration
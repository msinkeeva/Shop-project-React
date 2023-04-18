import axios from "axios";
import { useEffect, useState } from "react";


function Login () {
        const [userName, setUserName] = useState("")
        const [password, setPassword] = useState("")
        const [message, setMessage] = useState("")
        const [errorMessage, setErrorMessage] = useState("")
        
        const postData = async () => {
            try {
                const url = "http://cepbep.ddns.net:1500/api/users/login"
                if (!password || !userName) throw "fields empty"
               
                const data = {
                    userName: userName,
                    password: password
                }
            const response = await axios.post(url, data, {
                'Content-Type': 'application/json'
            })
            console.log(response.data)
            if (response.status == "200"){
                setErrorMessage("")
                setMessage("Login is succsessful")    
                localStorage.setItem("userId", response.data._id)
            }
            else {
                setErrorMessage("Invalid login or password") 
            }
        }
    catch (error){
        setErrorMessage(error)
        console.log(error)
    }
    }
    
    return (
            <div className="reg-form"> 
                <div className="reg-title">Log in</div>
                <input className="reg-input" value={userName} placeholder="name" onChange={(event) => {setUserName (event.target.value)}}/>
                <input  className="reg-input" value={password}  placeholder="password" type="password" onChange={(event) => {setPassword (event.target.value)}}/>
                <div className="er-message">{errorMessage}</div>
                <div className="message">{message}</div>
                <div onClick={postData} className="reg-button">Ok</div> 
            </div>
    )
    
}
export default Login
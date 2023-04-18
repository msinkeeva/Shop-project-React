import axios from "axios";
import { useEffect, useState } from "react";

function Registration () {
    const [users, setUsers] = useState([])
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [tryPassword, setTryPassword] = useState("")
    const [message, setMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
      
    },[])

    const postData = async () => {
        try {
            if (!password || !tryPassword || !userName) throw "fields empty"
            if (password != tryPassword) throw "passwords must be same"
            const url = "http://cepbep.ddns.net:1500/api/users/addUser"
            const data = {
                userName: userName,
                password: password,
                creator: "admin",
                activeStatus: true,
                isClosedProfile: false,
                avatarURL: "https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg",
                about: "demo about",
                description: "demo description",
                age: 27,
                country: "Kazakhstan",
                city: "Astana",
                gender: "Female",
                arrayOfFollowers: [],
                arrayOfFollowing: [],
                arrayOfPosts: []
            }
        const response = await axios.post(url, data, {
            'Content-Type': 'application/json'
        })
        console.log(response)
        setErrorMessage()
        setMessage("Registration is succsessful")
    }
catch (error){
    setErrorMessage(error)
    console.log(error)
}
}

return (
        <div className="reg-form"> 
            <div className="reg-title">Registration</div>
            <input className="reg-input" value={userName} placeholder="name" onChange={(event) => {setUserName (event.target.value)}}/>
            <input  className="reg-input" value={email}  placeholder="email" onChange={(event) => {setEmail (event.target.value)}}/>
            <input  className="reg-input" value={password}  placeholder="password" type="password" onChange={(event) => {setPassword (event.target.value)}}/>
            <input className="reg-input" value={tryPassword} placeholder="password again" type="password" onChange={(event) => {setTryPassword (event.target.value)}}/>    
            <div className="er-message">{errorMessage}</div>
            <div className="message">{message}</div>
            <div onClick={postData} className="reg-button">Ok</div> 
        </div>
)
}
export default Registration
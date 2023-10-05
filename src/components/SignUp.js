import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"; // use for rediract
const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    useEffect(()=>{ /* Use for navigate if value in auth */
        const auth = localStorage.getItem("user");
        if(auth){
            navigate('/');
        }
    });


    const collectData = async () => {
        /* APIs Integrate With Node to Save MongoDB */
        console.log(name, email, password);

        let result = await fetch("http://localhost:5000/register", {
            method: "post",
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.log(result);
        localStorage.setItem("user",JSON.stringify(result)); // inApplication inspect element
        if(result) {
            navigate('/');
        }
    }
    return (
        <div className="div-sign">
            <h1>Register</h1>
            <div className="xyz">
                <input type="text" className="inputField" value={name}
                    onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />

                <input type="text" className="inputField" value={email}
                    onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />

                <input type="password" className="inputField" value={password}
                    onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
                <button onClick={collectData} type="button" class="appButton">Sign Up</button>
            </div>
        </div>
    );
}
export default SignUp;
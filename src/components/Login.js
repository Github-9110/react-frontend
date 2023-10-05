import React, { useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
const Login = ()=>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
          useEffect(()=>{
            const auth = localStorage.getItem('user');
            if(auth){
                navigate('/');
            }
          });
    const loginFunct = async ()=>{
            // alert(email+password);
            let result = await fetch("http://localhost:5000/login",{
            method:"post",
            body:JSON.stringify({email,password}),
            headers: {
                'Content-Type': 'application/json'
            }});
            result = await result.json();
        console.log(result.name);
            localStorage.setItem("user",JSON.stringify(result)); // inApplication inspect element
        if(result.name) {
            navigate('/');
        }else{
            navigate('/Login');
        }
    };

    return (
        <div className="div-sign">
            <h1>Login Here</h1>
            <div className="xyz">
                <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email} className="inputField" 
                     placeholder="Enter Email" />

                <input type="password" onChange={ (e)=>setPassword(e.target.value)} value={password} className="inputField" 
                    placeholder="Enter Password" />
                <button  type="button" onClick={loginFunct} class="appButton">Login</button>
            </div>
        </div>
    );
}
export default Login;
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
// Outlet : privateComponent is like wrapper which will handle to component pro.

const PrivateComponent = ()=>{
    const auth = localStorage.getItem("user");
    return auth?<Outlet/>:<Navigate to="/SignUp"/>
    {/* 2- if auth me value hai to Outlet(All nav bar will clickable) otherwise Navigate to Signup page*/}
}
export default PrivateComponent;
// use in app.js
import React, { useEffect, useState } from 'react';
import '../css/login.css';
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import axios from "axios";
  
function Login() {
    const navigate = useNavigate();

    const[email,setEmail]=useState("");
    const[password,setPassword] = useState("");

    const submithandler=async(e)=>{
    e.preventDefault()
    try {
        const {data}= await axios.post("/api/auth/login",{email,password})
        toast.success("Login Successfully");
        navigate("/")
        localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
        console.log(error)
    }
    }

    useEffect(()=>{
        if(localStorage.getItem("user")){
            navigate("/")
        }
    })

    return (
        <>
        <div className="main-container">
        
        <div className="box1">
        <h3 id='h3'>Login </h3>
            <form onSubmit={submithandler}>
            <label className='label'>email</label>
            <br/>
            <input className='input' type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='enter your email' />
            <br/>
            <label  className='label'>Password</label>
            <br/>
            <input className='input' type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='enter your password' />
            <div>
            <button id='button' type='submit'>Submit</button>
            </div>
            </form>
        </div> 
        
        </div>
        
        </>
    )
}

export default Login

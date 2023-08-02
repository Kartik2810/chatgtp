import React, {useEffect, useState } from 'react'
import "../css/register.css"
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';
import toast from "react-hot-toast"

function Register() {
    const navigate = useNavigate()

    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    

     

    const submithandler=async(e)=>{
        e.preventDefault()
        try {
        await axios.post("/api/auth/register",{name,email,password});
        toast.success("User Register Successfully");
        navigate("/login")
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
        
        <div className="box">
        <h3 id='h3'>Sign up </h3>
        <form onSubmit={submithandler}>
            <label className='label' >username</label>
            <br/>
            <input className='input' type="name" value={name} onChange={(e)=>{setName(e.target.value)}}  placeholder='enter your name' />
            <br/>
            <label className='label' >email</label>
            <br/>
            <input className='input' type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='enter your email' />
            <br/>
            <label className='label' >password</label>
            <br/>
            <input className='input' type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='enter your password' />
            <div>
            <button id='button' type='submit'>Submit</button>
            </div>
            </form>
            Already have an account ? <Link to="/login">Login</Link>
        </div> 
       
        </div>
        
        </>
    )
}

export default Register
 
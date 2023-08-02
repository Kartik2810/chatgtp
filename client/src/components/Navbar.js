import React from 'react'
import "../css/Navbar.css"
import {Link, useNavigate} from "react-router-dom"
function Navbar() {
    
    const navigate = useNavigate()
    
    const logotHandler =()=>{
        localStorage.removeItem("user");
        navigate("/login")
    }
    return (
        <>
        <div className='navbar'>
            <div className='main-container'>
            <h2>
                Ai Chat-Gtp
            </h2>
            </div>
            
            <div className='container1'>
                
                <Link to='/register' className='signup'>Sign up</Link>
                <Link to="login" className='signin'>Login</Link>
                
            </div>
            <div className='logout-btn'> 
                <button onClick={logotHandler} id='btn-logout'>Logout</button>
            </div>

            
            
            
            
        </div>
        
        </>
    )
}

export default Navbar;

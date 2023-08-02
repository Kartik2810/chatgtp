import React from 'react'
import "../css/homepage.css"
import {useNavigate} from "react-router-dom" 
function Homepage() {
    const navigate = useNavigate()
    return (
        <>
        <div className="container">

            <div className="main-box" onClick={() => navigate("/summary")}>
                <div className="box-1">
                <i class=" icon fa-solid fa-file-lines"></i>
                <h3>TEXT SUMMARY</h3>
                <p>summarize long test to Short text</p>
                </div>
            </div>
            
            <div className="main-box" onClick={()=>navigate("/paragraph")}>
                <div className="box-1">
                <i class=" icon fa-solid fa-align-left"></i>
                <h3>PARAGRAPH</h3>
                <p>Genarate Paragraph With Word</p>
                </div>
            </div>
            
            <div className="main-box" onClick={()=>navigate("/chatbox")}>
                <div className="box-1">
                <i class=" icon fa-regular fa-newspaper"></i>
                <h3>CHAT-BOX</h3>
                <p>Chat With Ai Chatbox</p>
                </div>
            </div>

            <div className="main-box" onClick={()=>navigate("/jsconverter")}>
                <div className="box-1">
                <i class=" icon fa-regular fa-newspaper"></i>
                <h3>JS CONVERTER</h3>
                <p>Translate English Into Javascript Code</p>
                </div>
            </div>

            <div className="main-box" onClick={()=>navigate("/seifiimage")}>
                <div className="box-1">
                <i class=" icon fa-regular fa-newspaper"></i>
                <h3>SCIFI IMAGE </h3>
                <p>Create Scifi Image</p>
                </div>
            </div>

        </div>
        </>
    )
}

export default Homepage

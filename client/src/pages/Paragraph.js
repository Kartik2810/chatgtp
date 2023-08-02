import React, { useState } from 'react'
import '../css/paragraph.css'
import axios from "axios"
function Paragraph() {
    const[text,settext]=useState("")
    const[para,setPara]=useState("")
    
    const haldleSubmit=async(e)=>{
    e.preventDefault()
    try {
        const {data}=await axios.post("/api/openai/paragraph",{text})
        console.log(data)
        setPara(data)
    } catch (error) {
        console.log(error)
    }
    }
    return (
        <div>
        <div className='container'>
            <div className='main'>
                <form onSubmit={haldleSubmit}>
                <h3 id='title'>paragraph</h3>
                <input id='input' type="text" value={text} onChange={(e)=>{settext(e.target.value)}} placeholder='Enter Text hear' />
                <br/>
                <button id='btn' type='submit'>Submit</button>
                </form>

                {para ? (<p className='paragraph' type='text' name="textarea" id="textarea" cols="30" rows="10">{para}</p>):(<textarea name="textarea" id="textarea" cols="30" rows="10" defaultValue="text Paragraph"></textarea>)}
                
                <br/>
                
            </div>
        </div>
        </div>
    )
}

export default Paragraph

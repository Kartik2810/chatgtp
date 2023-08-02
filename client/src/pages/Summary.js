import React, { useState } from 'react'
import '../css/summary.css'


import axios from "axios"

function Summary() {
    

    const[text,settext]=useState("")
    const[summary,setSummary] = useState("")

    const submithandler=async(e)=>{
    e.preventDefault()
    try {
    const {data} = await axios.post("/api/openai/summary",{text})
    console.log(data);
    setSummary(data)
    } catch (error) {
            console.log(error)
    }
    }   
    return (
        <>
        <div className='container'>
            <div className='main'>
                <form onSubmit={submithandler}>
                <h3 id='title'>Summarize Text</h3>
                <input id='input'  type="text" value={text} onChange={(e)=>{settext(e.target.value)}} placeholder='Enter Text hear' />
                <br/>
                <button id='btn' type='submit'>Submit</button>
                </form>
                {summary ? (<p className='summary' name="textarea" id="textarea" cols="30" rows="10">{summary}</p>):(<textarea  name="textarea" id="textarea" cols="30" rows="10" defaultValue="text summary"></textarea>)}
                
                <br/>
                
            </div>
        </div>
        </>
    )
}

export default Summary

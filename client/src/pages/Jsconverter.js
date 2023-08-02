import React, { useState } from 'react'
import '../css/jsconverter.css';
import axios from "axios"
function Jsconverter() {
    const [text,setText] = useState("")
    const [jsconverter,setJsconverter] = useState("")
    const submitHandler=async(e)=>{
        e.preventDefault()
        try {
            const {data} = await axios.post("/api/openai/jsconverter",{text})
            console.log(data)
            setJsconverter(data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <div className='container'>
                
                    <div className='main'>
                        <form action="" onSubmit={submitHandler}>
                        <h3 id='title'>js-converter</h3>
                        <input onChange={(e)=> setText(e.target.value)} id='input' type="text" placeholder='Enter Text hear' />
                        <br/>
                        <button id='btn' type='submit'>Submit</button>
                        </form>
                        {jsconverter ? (<p className='summary' name="textarea" id="textarea" cols="30" rows="10">{jsconverter}</p>):(<textarea  name="textarea" id="textarea" cols="30" rows="10" defaultValue="text summary"></textarea>)}
                
                        <br/>
                    </div>
                
            </div>
        </div>
    )
}

export default Jsconverter

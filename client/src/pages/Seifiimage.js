import React, { useState } from 'react'
import '../css/seifi.css'
import axios from "axios"
function Seifiimage() {
    const [text,setText]=useState("")
    const [sifiimage,setSifiimage]=useState("")

    const submitHandler =async(e)=>{
        e.preventDefault()
        try {
            const {data} = await axios.post("/api/openai/sifiimage",{text})
            console.log(data);
            setSifiimage(data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
        <div className='container'>
            
                <div className='main'>
                <form action="" onSubmit={submitHandler}>
                    <h3 id='title'>seifiimage</h3>
                    <input onChange={(e)=>{setText(e.target.value)}} id='input' type="text" placeholder='Enter Text hear' />
                    <br/>
                    <button id='btn' type='submit'>Submit</button>
                    </form>
                    {sifiimage ?(<p name="textarea" id="textarea" cols="30" rows="10">{sifiimage}</p>) :(<textarea  name="textarea" id="textarea" cols="30" rows="10" defaultValue="sifiimage"></textarea>)}
                    
                    <br/>
                </div>
            
        </div>
        </div>
    )
}

export default Seifiimage

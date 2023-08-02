import React,{useState} from 'react'
import '../css/chatbox.css'
import axios from "axios"
 
function Chatbox() {
    const [text , setTaxt] = useState("")
    const [chatbox,setChatbox] = useState("")

    const submitHandler =async (e)=>{
        e.preventDefault()
        try {
            const {data} = await axios.post("/api/openai/chatbox",{text})
            console.log(data)
            setChatbox(data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <form action="" onSubmit={submitHandler}>
                <div className='container'>
                    <div className='main'>
                        <h3 id='title'>Chat-box</h3>
                        <input onChange={(e)=>{setTaxt(e.target.value)}} id='input' type="text" placeholder='Enter Text hear' />
                        <br/>
                        <button id='btn' type='submit'>Submit</button>
                        {chatbox ? (<p className='summary' name="textarea" id="textarea" cols="30" rows="10">{chatbox}</p>):(<textarea  name="textarea" id="textarea" cols="30" rows="10" defaultValue="text summary"></textarea>)}
                
                        <br/>
                    </div>
                </div>
                </form>
        </div>
    )
}

export default Chatbox

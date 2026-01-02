
import { useContext } from 'react'
import './Chatbar.css'
import Chat from './Chat'
import context from './context'
import Loader from "react-js-loader";
import {submit} from './utils/chatbar'


export default function Chatbar() {


    const {
        input, setInput, 
        reply, setReply, 
        thread, setThread, 
        loading, setLoading}=useContext(context)

        
    return (
        <section className='chatbar'>

            <div className='nav'>
                <span className='icon'>myGPT <i className="fa-solid fa-angle-down"></i></span>
                <span className='user-icon icon'><i className="fa-solid fa-user"></i></span>
            </div>

            <Chat />
            {loading &&<Loader type="box-rectangular"/>}

            <div className='bottom'>
                <div className='input'>
                    <input type="text" 
                    placeholder='Ask anything' 
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                    onKeyDown={(e)=>e.key=='Enter'? submit({input, reply, setInput, setReply, setThread, thread, loading, setLoading}) :''}
                    />
                    <span className='icon' onClick={()=>submit({input, reply, setInput, setReply, setThread, thread, loading, setLoading})}>
                        <i className="fa-solid fa-paper-plane"></i>
                    </span>
                </div>
                <p>myGPT can make mistakes. Check important info. See Cookie Preferences.</p>
            </div>

        </section>
    )
}

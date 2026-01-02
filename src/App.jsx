
import './App.css'
import Sidebar from './Sidebar'
import Chatbar from './Chatbar'
import { useState } from 'react'
import context from './context'

export default function App() {
  const [totalThread,setTotalThread]=useState([])
  const [thread, setThread]=useState({})
  const [reply, setReply]=useState(null)
  const [input, setInput]=useState('')
  const [loading, setLoading]=useState(false)

  const options={
    totalThread,setTotalThread,
    thread,setThread,
    reply,setReply,
    input,setInput,
    loading,setLoading
  }

  return (
    <div className='container'>
      <context.Provider value={options}>
      <Sidebar/>
      <Chatbar/>
      </context.Provider>
    </div>
  )
}

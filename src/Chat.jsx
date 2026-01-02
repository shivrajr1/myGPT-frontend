
import { useState, useEffect, useContext } from 'react'
import './Chat.css'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import "highlight.js/styles/github-dark.css"
import context from './context'


export default function Chat() {


  let { reply, thread } = useContext(context)
  const [wordEffect, setWordEffect] = useState('')


  useEffect(() => {
    if (!reply) return setWordEffect('')
    const words = reply?.content.split(' ')
    let idx = 0
    let interval = setInterval(() => {
      setWordEffect(words.slice(0, idx + 1).join(' '))
      idx++
      if (idx >= words.length) clearInterval(interval)
    }, 40);
    return () => clearInterval(interval)
  }, [reply])


  return (
    <>
      <div className="chats">
        <h1 key={'title'} style={{ textAlign: "center" }}>{thread?.title ? thread.title : 'Start new chat'}</h1>
        {thread?.message?.map((obj, idx) => {
          if (idx < thread.message.length - 1)
            return <div className={`${obj.role}Div`} key={idx}>
              {
                obj.role == 'user' ?
                  <p className='userMessage'>{obj.content}</p> :
                  <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{obj.content}</ReactMarkdown>
              }
            </div>
        })}
        {
          (thread?._id==reply?.id) ? 
          <ReactMarkdown rehypePlugins={[rehypeHighlight]} key={'lastElement'}>{wordEffect}</ReactMarkdown> : 
          <ReactMarkdown rehypePlugins={[rehypeHighlight]} key={'lastElement'}>{thread?.message[thread.message.length - 1].content}</ReactMarkdown>
        }
      </div>
    </>
  )
}

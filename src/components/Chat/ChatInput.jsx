import { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import SendIcon from '@mui/icons-material/Send'
import { db } from '../firebase/config'
import { addDoc, collection, doc, Timestamp } from 'firebase/firestore'
import { auth } from '../firebase/config'
import { useAuthState } from 'react-firebase-hooks/auth'

function ChatInput({ channelName, channelId, chatRef }) {
  const [user] = useAuthState(auth)
  const inputFocus = useRef(null)
  const [input, setInput]= useState('')

  //Enter submit
  const handleKeyPress = (e) => {
    let key = e.keyCode || e.which
    if (key === 13) {
      sendMessage(e)
    }
  }

  //SEND MESSAGE
  const sendMessage = (e) => {
    e.preventDefault() //Prevents refresh
    if (!input) {
      return
    }
    const messagesCollection = collection(db, 'rooms', channelId, 'messages')
    addDoc(messagesCollection, {
      message: input,
      timestamp: Timestamp.now(),
      user: user.displayName,
      userImage: user.photoURL
    })
    chatRef?.current?.scrollIntoView({
      behavior: 'smooth'
    })
    setInput('')
    inputFocus.current.focus()
  }

  useEffect(() => {
    inputFocus.current.focus()
  }, [channelName])

  return (
    <ChatInputContainer>
      <div className='form-input'>
        <input ref={inputFocus} placeholder={`Message #${channelName}`} value={input} onChange={(e) => setInput(e.target.value)} onKeyUp={(e) => handleKeyPress(e)} />
        <SendIcon onClick={(e) => sendMessage(e)} style={!input ? { background:'#ffffff', color: '#BBBABB' }:{ background:'#007A5A', color: '#ffffff' }} />
      </div>
    </ChatInputContainer>
  )
}

export default ChatInput

const ChatInputContainer = styled.div`
position: fixed;
bottom: 20px;
width: 100%;
.form-input {
  // background: red;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 30px ;
  position: relative;
}

.form-input > input {
  width: 100%;
  border: 2px solid #dbd8d8;
  border-radius: 10px;
  padding: 20px;
  outline: none;
  font-size: 15px;
}

.form-input> input:focus{
  border: 2px solid #aeaaaa;
}
.form-input > svg{
  position: absolute;
  right: 20px;
  cursor: pointer;
  background-color: #007A5A;
  padding: 5px;
  font-size: 20px;
  color: #ffffff;
  border-radius: 6px;
}

`



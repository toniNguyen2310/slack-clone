import React, { useRef, useState } from 'react'
import styled from '@emotion/styled'
import { IconButton } from '@mui/material'
import { db } from '../firebase/config'
import { addDoc, collection, doc, Timestamp } from 'firebase/firestore'


function ChatInput({ channelName, channelId }) {
  const [input, setInput]= useState('')

  //SEND MESSAGE
  const sendMessage = e => {
    e.preventDefault() //Prevents refresh
    console.log(channelId)

    if (!channelId) {
      return false
    }
    const messagesCollection = collection(db, 'rooms', channelId, 'messages')
    addDoc(messagesCollection, {
      message: input,
      timestamp: Timestamp.now(),
      user: 'tung nx',
      userImage: 'https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png',
    })
    setInput('')
  }

  return (
    <ChatInputContainer>
      <form>
        <input placeholder={'Message #ROOM'} value={input} onChange={(e) => setInput(e.target.value)} />
        <button type='submit' onClick={(e) => sendMessage(e)}>SEND</button>
      </form>
    </ChatInputContainer>
  )
}

export default ChatInput

const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center
  }
  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none
  }
  > form > button {
    // display: none !important;
  }
`
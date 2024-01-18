import styled from '@emotion/styled'
import React from 'react'

function Message(props) {
  const { message, timestamp, user, userImage }=props

  return (
    <MessageContainer>
      <img src={userImage} alt="" />
      <MessageInfo>
        <h4>
          {user} <span>{new Date(timestamp.toDate()).toUTCString()}</span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  )
}

export default Message

const MessageContainer =styled.div`
    display: flex;
    align-items: center;
    padding: 20px;

    > img {
        height: 50px;
        border-radius: 90%;
    }

`
const MessageInfo = styled.div`
    padding-left: 10px;

    > h4 > span {
        color: gray;
        font-weight: 300px; 
        margin-left: 4px;
        font-size: 10px;
    }
`
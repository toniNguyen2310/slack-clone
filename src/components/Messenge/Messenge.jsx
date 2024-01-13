import styled from '@emotion/styled'
import React from 'react'

function Messenge(props) {
  const { message, timestamp, user, userImage }=props

  return (
    <MessengeContainer>
      <img src={userImage} alt="" />
      <MessegeInfo>
        <h4>
          {user} <span>{new Date(timestamp.toDate()).toUTCString()}</span>
        </h4>
        <p>{message}</p>
      </MessegeInfo>
    </MessengeContainer>
  )
}

export default Messenge

const MessengeContainer =styled.div`
    display: flex;
    align-items: center;
    padding: 20px;

    > img {
        height: 50px;
        border-radius: 90%;
    }

`
const MessegeInfo = styled.div`
    padding-left: 10px;

    > h4 > span {
        color: gray;
        font-weight: 300px; 
        margin-left: 4px;
        font-size: 10px;
    }
`
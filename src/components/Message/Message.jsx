import styled from '@emotion/styled'

function Message(props) {
  const { message, timestamp, user, userImage }=props

  return (
    <MessageContainer>
      <img src={userImage} alt="" />
      <MessageInfo>
        <h5>
          {user} <span>{new Date(timestamp.toDate()).toLocaleString('en-US', { timeZone: 'Asia/Jakarta' })}</span>
        </h5>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  )
}

export default Message

const MessageContainer =styled.div`
    display: flex;
    align-items: center;
    padding: 5px 10px 5px 20px;
    // background: red;
    margin-bottom: 10px;
    > img {
        height: 40px;
        border-radius: 5px;
    }

`
const MessageInfo = styled.div`
    padding-left: 10px;

    > h5 > span {
      font-weight: normal;
        color: gray;
        font-weight: 300px; 
        margin-left: 4px;
        font-size: 12px;
    }
`
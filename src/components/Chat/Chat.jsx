import styled from '@emotion/styled'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { useSelector } from 'react-redux'
import ChatInput from './ChatInput'
import { collection, doc, orderBy, query, deleteDoc  } from 'firebase/firestore'
import { db } from '../firebase/config'
import { useCollection } from 'react-firebase-hooks/firestore'
import Message from '../Message/Message'
import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

function Chat(props) {
  const chatRef = useRef(null)
  const navigate = useNavigate()
  const roomId = useSelector((state) => state.app.roomId)
  const titleChannel = useSelector((state) => state.app.titleChannel)
  const docRef = roomId && doc(collection(db, 'rooms'), roomId)

  const [messages] = useCollection(
    docRef && query(collection(docRef, 'messages'), orderBy('timestamp'))
  )
  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }, [messages])

  useEffect(() => {
    if (roomId === null) {
      navigate('/')
    }
  }, [roomId])

  return (
    <ChatContainer>
      <Header>
        <HeaderLeft>
          <h3><strong>#{titleChannel ? titleChannel : 'CHUA CHON KENH'}</strong></h3>
          <KeyboardArrowDownIcon />
        </HeaderLeft>
        <HeaderRight>
          <p>
            <HelpOutlineIcon /> Details
          </p>
          {/* <h4>Details</h4> */}
        </HeaderRight>
      </Header>
      <ChatMessages >
        {/* list out the messages */}
        {messages && messages.docs.map((doc) => {
          const { message, timestamp, user, userImage }=doc.data()
          return <Message key={doc.data().timestamp} message={message} timestamp={timestamp} user={user} userImage={userImage} />
        })}
        <ChatBottom ref={chatRef} />
      </ChatMessages>
      <ChatInput chatRef={chatRef} channelId={roomId} channelName={titleChannel}/>
    </ChatContainer>
  )
}

export default Chat


const ChatInnerContainer = styled.div`
  margin: 0 auto;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);
  flex: 0.4;
  display: flex;
  flex-direction: column;
  position: relative;
`
const Header = styled.div`
// background: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid lightgray;
`
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  > h3 {
    display: flex;
  }
  svg {
    cursor: pointer
  }
`
const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > p > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
  }
`
const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: auto;
  // margin-top: 60px;
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  /* Track */
  // ::-webkit-scrollbar-track {
  //   background: #ffffff1;

  // }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 5px;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
`
const ChatMessages =styled.div`

`
const ChatBottom = styled.div`
  // background-color: red;
  padding-bottom: 80px
`

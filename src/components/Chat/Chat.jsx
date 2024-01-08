import styled from '@emotion/styled'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import { IconButton } from '@mui/material'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { useSelector } from 'react-redux'
import { selectRoomId } from '../../redux/app/appSlice'
import ChatInput from './ChatInput'

function Chat(props) {
  const roomId = useSelector(selectRoomId)

  return (
    <ChatContainer>
      <Header>
        <HeaderLeft>
          <h4><strong>#TITLE</strong></h4>
          <StarBorderIcon />
        </HeaderLeft>
        <HeaderRight>
          <p>
            <HelpOutlineIcon /> Details
          </p>
          {/* <h4>Details</h4> */}
        </HeaderRight>
      </Header>
      <ChatMessages>
        {/* list out the messagess */}
      </ChatMessages>
      <ChatInput channelId={roomId} />
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
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  > h4 {
    display: flex;
    text-transform: lowercase;
  }

  > h4 > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
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
  overflow-y: scroll;
  margin-top: 60px;
`
const ChatMessages =styled.div`

`

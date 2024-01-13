import React from 'react'
import styled from '@emotion/styled'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import CreateIcon from '@mui/icons-material/Create'
import MessageIcon from '@mui/icons-material/Message'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import InboxIcon from '@mui/icons-material/Inbox'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import DraftsIcon from '@mui/icons-material/Drafts'
import GroupIcon from '@mui/icons-material/Group'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import TagIcon from '@mui/icons-material/Tag'
import AppsIcon from '@mui/icons-material/Apps'
import AddIcon from '@mui/icons-material/Add'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { AlertTitle } from '@mui/material'
import SideBarOption from './SideBarOption'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { auth, db } from '../firebase/config'
import { useCollection } from 'react-firebase-hooks/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'

function Sidebar(props) {
  const [snapshot, loading, error] = useCollection(collection(db, 'rooms'))
  const [user] = useAuthState(auth)


  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h4>HELLO WORLD!</h4>
          <p>
            <FiberManualRecordIcon sx={{ fontSize: '14px', color: 'green' }} />
            {user.displayName}
          </p>
        </SidebarInfo>
        <CreateIcon sx={{ background: 'white', padding: '5px', borderRadius: '17px' }} />
      </SidebarHeader>
      <SidebarOptionList>
        <SideBarOption Icon={MessageIcon} title={'Threads'} />
        <SideBarOption Icon={InboxIcon} title={'Mentions & reactions'} />
        <SideBarOption Icon={DraftsIcon} title={'Saved items'} />
        <SideBarOption Icon={BookmarkBorderIcon} title={'Channel browser'} />
        <SideBarOption Icon={GroupIcon} title={'People & user groups'} />
        <SideBarOption Icon={AppsIcon} title={'Apps'} />
        <SideBarOption Icon={FileCopyIcon} title={'File browser'} />
        <SideBarOption Icon={KeyboardArrowUpIcon} title={'Show less'} />
      </SidebarOptionList>

      <SidebarOptionList>
        <SideBarOption Icon={KeyboardArrowDownIcon} title={'Channels'} />
      </SidebarOptionList>

      <SidebarOptionList>
        <SideBarOption
          Icon={AddIcon}
          title={'Add channel'}
          addChannelOption
        />
        {snapshot?.docs.map((roomDoc) => (
          <SideBarOption
            key={roomDoc.id}
            id={roomDoc.id}
            // addChannelOption
            title={roomDoc.data().name}
          />
        ))}
      </SidebarOptionList>
    </SidebarContainer>
  )
}

export default Sidebar


const SidebarContainer = styled.div`
      flex: 0.15;
      display: flex;
      flex-direction: column;
      background: var(--slack-color);
      height: 100%;
     color: white;
     background: var(--slack-color);
     flex: 0.3;
     border-top: 1px solid #49274b; 
     max-width: 260px;
    //  margin-top: 60px;
`
const SidebarTop = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #49274b;
  border-top: 1px solid #49274b;
  & > svg {
    cursor: pointer;
  }
`
const SidebarInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  & > h4 {
    font-size: 14px;
  }
  & > p {
    display: flex;
    align-items: center;
    gap: 3px;
    font-size: 12px;
  }
`
const SidebarOptionList = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #49274b;
  padding: 10px 0px;
`

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;
  justify-content: space-between;

  > .MuiSvgIcon-root{
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`
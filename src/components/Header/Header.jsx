
import styled from '@emotion/styled'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import SearchIcon from '@mui/icons-material/Search'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { Avatar } from '@mui/material'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/config'
import HomeIcon from '@mui/icons-material/Home'
import LogoutIcon from '@mui/icons-material/Logout'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
  const [user] = useAuthState(auth )
  const [isOpen, setIsOpen]=useState(false)
  const navigate = useNavigate()

  const handleLogout =() => {
    auth.signOut()
  }

  return (
    <HeaderContainer>
      <HeaderLeft>
        <AccessTimeIcon />
      </HeaderLeft>

      <HeaderSearch>
        <input type="text" placeholder="Search your channel" />
        <SearchIcon />
      </HeaderSearch>

      <HeaderRight>
        <HelpOutlineIcon />
        {/* <HeaderAvatar alt={user?.displayName} src={user.photoURL} onClick={()=> auth.signOut()}/> */}
        <HeaderAvatar alt={user?.displayName} src={user.photoURL} onClick={() => setIsOpen(!isOpen)}/>
      </HeaderRight>
      {isOpen &&
      <DropdownContainer id='account-title'>
        <DropdownElement onClick={() => navigate('/')}>
          <HomeIcon />
             HOMEPAGE
        </DropdownElement>
        <DropdownElement onClick={handleLogout}>
          <LogoutIcon />
             LOGOUT
        </DropdownElement>
      </DropdownContainer>}
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 0px;
  background: var(--slack-header-color);
  position: relative;
`
const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & > svg {
    cursor: pointer;
    color: #c7bcc7;
    margin-right: 30px;
  }

`

const HeaderSearch = styled.div`
  flex: 0.4;
  display: flex;
  align-items: center;
  border: 1px solid gray;
  border-radius: 5px;
  background: #421f44;
  & > svg {
    color: gray;
    // margin-left: 60px;
    margin-right:10px;
  }
  & > input {
    outline: none;
    background: none;
    border: none;
    text-align: center;
    width: 100%;
    color: white;
    margin-right: 60px;
  }
`
const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & > svg {
    cursor: pointer;
    color: #c7bcc7;
  }
  // background: blue;
  margin-right: 10px;
`
const HeaderAvatar = styled(Avatar)`
  border-radius: 20%;
  margin-left: 20px;
  cursor: pointer;
  width: 30px;
  height: 30px; 
  &:hover {
    opacity: 0.8;
  }
`

const DropdownContainer =styled.div`
  position: absolute;
  top: 90%;
  right: 20px;
  box-shadow: 0 0 0 1px rgb(36 35 36 / 13%), 0 4px 12px 0 #0000001f;
  // color: #000;
  min-width: 150px;
  // width: 100%;
  border-radius: 3px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
`
const DropdownElement=styled.div`
    border-radius: 4px;
    background-color: #f8f8f8;
    width: 100%;
    padding: 5px;
    padding-left: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    box-sizing: border-box;
    &:hover {
      background-color: #b6b0b0;
    }
`


import styled from '@emotion/styled'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import SearchIcon from '@mui/icons-material/Search'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { Avatar } from '@mui/material'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/config'

function Header() {
  const [user] = useAuthState(auth )

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
        <HeaderAvatar alt={user?.displayName} src={user.photoURL} onClick={()=> auth.signOut()}/>
      </HeaderRight>
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
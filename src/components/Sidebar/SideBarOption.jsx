
import styled from '@emotion/styled'
import { db } from '../firebase/config'
import { addDoc, collection, getDocs, doc } from 'firebase/firestore'
import { useDispatch } from 'react-redux'
import { enterRoom } from '../../redux/app/appSlice'
import { useEffect } from 'react'

function SideBarOption({ Icon, title, addChannelOption, id }) {
  const dispatch = useDispatch()
  //ADD CHANNEL
  const addChannel = async() => {
    const name = prompt( 'please enter the chanel')
    if (name) {
      await addDoc(collection(db, 'rooms'), {
        name
      })
    }
  }

  //SELECT CHANNEL
  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
          titleChannel: title
        }))
    }
  }

 


  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel }
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }}/>}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span>{title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  )
}

export default SideBarOption


const SidebarOptionContainer = styled.div`
  cursor: pointer;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  & > svg {
    color: white;
  }
  p {
    font-size: 12px;
    color: white;
    font-weight: 500;
  }
  &:hover {
    opacity: 0.9;
    background: #340e36;
  }
  background: ${(props) => (props.selected ? '#340e36' : 'none')};
`
const SidebarOptionChannel = styled.h3`
  padding: 10px 0;
  margin-left: 50px;
  font-weight:300;

`
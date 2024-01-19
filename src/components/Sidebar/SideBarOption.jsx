
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import { enterRoom } from '../../redux/app/appSlice'
import { useNavigate } from 'react-router-dom'
import { openModal } from '../../redux/app/modalSlice'

function SideBarOption({ Icon, title, addChannelOption, id, setShowList, showList }) {
  const idRedux = useSelector((state) => state.app.roomId)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  //ADD CHANNEL
  const addChannel = () => {
    dispatch(openModal())
    return
  }

  //SELECT CHANNEL
  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
          titleChannel: title
        }))
      navigate('/chat')
    }
  }

  //HIDE LISTCHANNEL
  const hideListChannel = () => {
    setShowList(!showList)
  }

  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : title === 'Channels' ? hideListChannel : selectChannel }
    >
      {Icon && <Icon fontSize="small" style={{ padding: 8 }}/>}
      {Icon ? (
        <h4>{title}</h4>
      ) : (
        <SidebarOptionChannel style={{ background: idRedux===id ? '#1164a3':'none', color: idRedux===id ? '#ffffff':'#c3b4c6' }}>
          <span>#</span><p style={{ color: idRedux===id ? '#ffffff':'#c3b4c6' }}>{title}</p>
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  )
}

export default SideBarOption


const SidebarOptionContainer = styled.div`
  cursor: pointer;
  padding: 0px 10px;
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: 15px;
  color: #c7bcc7;
  & > svg {
    color: #c7bcc7;
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
const SidebarOptionChannel = styled.div`
> span{
  padding: 2px 5px;  
  margin-left: 5px;
  font-size: 20px
}
width: 100%;
gap: 10px;
display: flex;
align-items: center;
justify-content: flex-start;
border-radius: 10px;
> p{
  color: #c7bcc7;
  font-size: 16px
}

`
// background: ${idRedux === id ? 'red': 'none'}
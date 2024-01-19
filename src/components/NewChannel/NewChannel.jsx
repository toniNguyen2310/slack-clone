
import styled from '@emotion/styled'
import TagIcon from '@mui/icons-material/Tag'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../../redux/app/modalSlice'
import { addDoc, collection } from 'firebase/firestore'
import convertToSlug from '../../Utilities/Constant'
import { db } from '../firebase/config'
import { message } from 'antd'
import { enterRoom } from '../../redux/app/appSlice'
import { useNavigate } from 'react-router-dom'

function NewChannel(props) {
  const { setIsLoading } = props
  const inputRef = useRef(null)
  const statusModal = useSelector((state) => state.modal.statusModal)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [titleChannel, setTitleChannel] =useState('')

  //Enter submit
  const handleKeyPress = (e) => {
    let key = e.keyCode || e.which
    if (key === 13) {
      handleAddChannel(e)
    }
  }

  //HANDLE ADD NEW CHANNEL
  const handleAddChannel = async(e) => {
    e.preventDefault()
    // setIsLoading(true)
    if (!titleChannel) {
      message.error('Please enter information')
      inputRef.current.focus()
      // setIsLoading(false)
      return
    }
    let nameSlug=convertToSlug(titleChannel.trim())
    if (nameSlug) {
      let data = await addDoc(collection(db, 'rooms'), {
        name: nameSlug
      })
      if (data && data?.id) {
        dispatch(
          enterRoom({
            roomId: data.id,
            titleChannel: nameSlug
          }))
      }
      navigate('/chat')
      setTitleChannel('')
      dispatch(closeModal())
      setIsLoading(false)
    }
  }
  useEffect(() => {
    inputRef.current.focus()
  }, [statusModal])

  return (
    <>
      <NewChannelContainer>
        <h1>Create a channel</h1>
        <p>This could be anything: a project, campaign, event, or the deal you&apos;re trying to close</p>
        <InputInformation>
          <TagIcon />
          <input value={titleChannel} onChange={(e) => setTitleChannel(e.target.value)} onKeyUp={(e) => handleKeyPress(e)} ref={inputRef} type="text" placeholder='social-media, design-team... ' />
        </InputInformation>
        <button onClick={(e) => handleAddChannel(e)} id='create-btn'>DONE</button>
        {statusModal && <button id='cancel-btn' onClick={() => dispatch(closeModal
        ())}>CANCEL</button>}
      </NewChannelContainer>
    </>

  )
}

export default NewChannel


const NewChannelContainer = styled.div`
      background: #ffffff;
      width: 600px;
      height: fit-content;
      padding: 50px ;
      margin: 20px 0 0 80px;
      border-radius: 10px;
      & > h1 {
        font-size: 45px;
        margin-bottom: 20px
      }
      & > p {
        margin-bottom: 20px
      }
      #create-btn {
        background: var(--slack-color);
        padding: 8px 50px;
        font-size: 16px;
        color: #ffffff;
        font-weight: 600;
        border-radius: 5px;
        cursor: pointer;
        border: 2px solid var(--slack-color);
        margin-right: 10px
      }
      #cancel-btn{
        background: #dddddd;
        padding: 8px 40px;
        font-size: 16px;
        font-weight: 600;
        border-radius: 5px;
        cursor: pointer;
        border: 2px solid var(--slack-color);
        margin-right: 10px
      }
      // z-index: 2;

`
const InputInformation = styled.div`
    background: white;
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 20px;
    & > input {
        width: 100%;
        height: 50px;
        background: none;
        border: 2px solid #c5c5c5;
        padding-left: 50px;
        border-radius: 5px;
        font-size: 16px
    }
    & > input:placeholder-shown {
        font-style: italic;
     }
    & > input:focus{
        outline:solid 5px #1d9bd14d;
    }
    & > svg {
       position: absolute;
       left: 10px;
       color: #9d9c9c
      }

    
`
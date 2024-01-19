import styled from '@emotion/styled'
import NewChannel from './NewChannel'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../../redux/app/modalSlice'

function ModalAdChannels(props) {
  const { setIsLoading } = props
  const statusModal = useSelector((state) => state.modal.statusModal)
  const dispatch = useDispatch()
  window.onclick = function(event) {
    let modal = document.getElementById('modal-create')
    if (event.target === modal) {
      dispatch(closeModal())
    }
  }


  return (
    <Modal id='modal-create' style={{ display : statusModal ? 'block': 'none' }} >
      <NewChannel setIsLoading={setIsLoading} />
    </Modal>
  )
}

export default ModalAdChannels


const Modal = styled.div`
  display: none;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  padding-left: 300px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`
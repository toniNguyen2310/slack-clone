import styled from '@emotion/styled'
import { Spin } from 'antd'

function ModalLoading(props) {
  const { spinning }= props
  return (
    <ModalLoadingContainer style={{ display : spinning ? 'block' : 'none' }}>
      <Spin spinning={spinning} size="large" fullscreen />;
    </ModalLoadingContainer>
  )
}

export default ModalLoading

const ModalLoadingContainer = styled.div`
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
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`

import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import styled from '@emotion/styled'

export const Layout = (props) => {
  const {setIsOpenModal} = props
  return (
    <>
      <Container>
        <Header />
        <Main>
          <Sidebar />
          <Outlet />
        </Main>
      </Container>
    </>
  )
}

// const AppBody = styled.div`
//   display: flex;
//   height: calc(100vh - 60px);
// `

const Container = styled.div`
  width: 100%;
  height: 100vh;
  // display: grid;
  // grid-template-rows: 38px minmax(0, 1fr);

`

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
  height: calc( 100vh - 50px)
`
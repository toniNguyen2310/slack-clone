import { useEffect, useState } from 'react'
import './App.scss'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import NotFound from './components/NotFound/NotFound'
import HomePage from './components/HomePage/HomePage'
import Login from './components/Login/Login'
import Header from './components/Header/Header'
import styled from '@emotion/styled'
import Chat from './components/Chat/Chat'
import { useAuthState } from 'react-firebase-hooks/auth'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { auth } from './components/firebase/config'

import Loading from './components/Loading/Loading'

const LayoutLogin = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

function App() {
  const [user, loading] = useAuthState(auth)

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img src="https://yt3.googleusercontent.com/ytc/AIf8zZQTjGhyv6zCabZQRDnnudwAJ7AoRvnucvEkhi4DSA=s900-c-k-c0x00ffffff-no-rj" alt="" />
          <Loading color={'#29a07e'} secondaryColor={'#ffffff'} />
        </AppLoadingContents>
      </AppLoading>
    )
  }

  const router = createBrowserRouter([
    user ?
      {
        path: '/',
        element: (
          <>
            <Layout />
          </>
        ),
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: (
              <>
                {/* <HomePage /> */}
                <Chat />
              </>
            )
          }
        ]
      } :
      {
        path: '/',
        element: (
          <>
            <LayoutLogin />
          </>
        ),
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: (
              <>
                <Login />
              </>
            )
          }
        ]
      }

  ])

  // useEffect(() => {
  //   console.log('user> ', user)
  // }, [user])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App


const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%
`

const AppLoadingContents = styled.div`
text-align: center;
padding-bottom: 100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

> img {
  height: 200px;
  padding: 20px;
  
}
`

import { useState } from 'react'
import './App.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import NotFound from './components/NotFound/NotFound'
import HomePage from './components/HomePage/HomePage'
import Login from './components/Login/Login'
import Header from './components/Header/Header'
import styled from '@emotion/styled'
import Chat from './components/Chat/Chat'


function App() {
  const router = createBrowserRouter([
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
        },

        {
          path: '/login',
          element: <Login />
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px minmax(0, 1fr);
`

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`

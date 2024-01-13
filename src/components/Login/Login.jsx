import styled from '@emotion/styled'
import React from 'react'
import { auth, provider } from '../firebase/config'
import { signInWithPopup } from 'firebase/auth'

function Login(props) {
  const signIn =(e) => {
    e.preventDefault()
    signInWithPopup(auth, provider)
  }
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img src="https://yt3.googleusercontent.com/ytc/AIf8zZQTjGhyv6zCabZQRDnnudwAJ7AoRvnucvEkhi4DSA=s900-c-k-c0x00ffffff-no-rj" alt="" />
        <h1>Sign in to Slack Clone By TNX</h1>
        <button onClick={signIn}>Sign in with goole</button>
      </LoginInnerContainer>
    </LoginContainer>
  )
}

export default Login

const LoginContainer = styled.div`
  background-color: #ffffff;
  // background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center
`

const LoginInnerContainer =styled.div`
  padding: 100px;
  text-align: center;
  background-color: #ffffff;
  border-radius: 10px;
  // box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  > button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: red;
    border: red;
    padding: 5px 10px;
    color: #ffffff;
    cursor: pointer;
  }
`
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
        <h1>Sign in to Slack</h1>
        <button onClick={signIn}>Sign in with google</button>
      </LoginInnerContainer>
    </LoginContainer>
  )
}

export default Login

const LoginContainer = styled.div`
  background-color: #ffffff;
  height: 100vh;
  display: grid;
  place-items: center
`

const LoginInnerContainer =styled.div`
  padding:  20px 80px 80px ;
  text-align: center;
  border-radius: 10px;

  > img {
    object-fit: contain;
    height: 200px;
    margin-bottom: 20px;
  }
  > h1 {
    font-size: 40px
  }

  > button {
    margin-top:30px;
    text-transform: inherit !important;
    background-color: var(--slack-color);
    border: red;
    padding: 10px 20px;
    color: #ffffff;
    cursor: pointer;
    border-radius: 5px;
    font-size: 20px;
    opacity:1
  }
  > button:hover{
    opacity:0.8

  }
`
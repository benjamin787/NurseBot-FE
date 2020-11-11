import React from 'react'
import './style.css'
// import fauci from './assets/fauci-advisory-council.jpg'
import Chat from './components/chat'
import { Avatar } from '@material-ui/core'
import ClickPortal from './components/clickportal'

export default function App() {
  return (
    <div className="App">
        <h1>NurseBot</h1>
        <div>
          <Avatar alt='Fauci' src='./assets/fauci-advisory-council.jpg' className='Fauci' />
          <span className='popover-container'>
            <ClickPortal />
          </span>
          <Chat />
        </div>
      <footer></footer>
    </div>
  );
}

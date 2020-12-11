import React from 'react'
import './style.css'
import fauci from './assets/fauci-advisory-council.jpg'
import Chat from './components/chat'
import ClickPortal from './components/clickportal'

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>NurseBot</h1>
      </header>
      <img alt='Fauci' src={fauci} className='Fauci'/>
      <span className='popover-container'>
        <ClickPortal />
      </span>
      <Chat />
      <footer><p>Copyright: Science</p></footer>
    </div>
  );
}

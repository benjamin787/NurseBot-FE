import React from 'react'
import './style.css'
import fauci from './assets/fauci-advisory-council.jpg'
import Chat from './components/chat'
import SimplePopover from './components/simplepopover'

export default function App() {
  return (
    <div className="App">
      <header style={{paddingTop: '3rem', paddingBottom: '2rem', paddingLeft: '5rem'}}>
        <img className='Fauci' src={fauci} alt='Fauci' />
        <h1>NurseBot</h1>
      </header>
      <body>
        <span className='popover-container'>
          <SimplePopover />
        </span>
        <Chat />
      </body>
      <footer></footer>
    </div>
  );
}

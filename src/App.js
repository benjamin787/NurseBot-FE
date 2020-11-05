import React from 'react'
import './style.css'
import fauci from './assets/fauci-advisory-council.jpg'
import Chat from './components/chat'

export default function App() {
  return (
    <div className="App">
      <header style={{paddingTop: '3rem', paddingBottom: '2rem', paddingLeft: '5rem'}}>
        NurseBot
        <img src={fauci} alt='Fauci' style={{paddingLeft: '2rem'}}/>
      </header>
      <Chat />
    </div>
  );
}

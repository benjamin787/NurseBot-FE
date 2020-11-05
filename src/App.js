import React from 'react'
import './style.css'
import * as fauci from '../public/assets/fauci-advisory-council.jpg'
import Chat from './components/chat'

export default function App() {
  return (
    <div className="App">
      <header style={{paddingTop: '4rem', paddingBottom: '2rem'}}>
        NurseBot
        <img src={fauci} alt='Fauci' />
      </header>
      <Chat />
    </div>
  );
}

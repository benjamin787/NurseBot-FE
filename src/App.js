import React from 'react'
import './style.css'
import Chat from './components/chat'

export default function App() {
  return (
    <div className="App">
      <header style={{paddingTop: '4rem', paddingBottom: '2rem'}}>NurseBot</header>
      <Chat />
    </div>
  );
}

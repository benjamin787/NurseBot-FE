import React, { useEffect } from 'react'
import './style.css'
import fauci from './assets/fauci-advisory-council.jpg'
import Chat from './components/chat'
import ClickPortal from './components/clickportal'

export default function App() {

  useEffect(() => fetch('https://covid-nurse-bot.herokuapp.com', []))
  
  return (
    <div className="App">
      <header>
        <h1>NurseBot</h1>
      </header>
      <main>
        <img alt='Fauci' src={fauci} className='Fauci'/>
        <article className='popover-container'>
          <ClickPortal />
        </article>
        <Chat />
      </main>
      <footer><p>Copyright: Science</p></footer>
    </div>
  );
}

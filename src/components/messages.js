import React from 'react'
import '../style.css'
import Message from './message'

const Messages = ({ messages }) => {

    let i = 0;
    return (
        <div className='messagesSection'>
            {messages.map(message => {
                i++
                return <Message key={i} message={message} />
            })}
        </div>
    )
}

export default Messages
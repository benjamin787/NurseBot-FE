import React from 'react'
import '../style.css'
import Message from './message'

const Messages = ({ messages }) => {

    return (
        <div className='messagesSection'>
            {messages.map(message => {
                return <Message
                    key={(Math.floor(Math.random() * 764) + 2)}
                    message={message}
                />
            })}
        </div>
    )
}

export default Messages
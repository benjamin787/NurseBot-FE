import React, { useRef, useLayoutEffect } from 'react'
import useStayScrolled from 'react-stay-scrolled'

import '../style.css'
import Message from './message'

const Messages = ({ messages }) => {

    const messagesRef = useRef()

    const { scrollBottom } = useStayScrolled(messagesRef)
    
    useLayoutEffect(() => scrollBottom(), [messages.length, scrollBottom])

    return (
        <div className='messagesSection' ref={messagesRef}>
            {messages.map((message, i) => {
                return <Message
                    key={i}
                    // key={(Math.floor(Math.random() * 764) + 2)}
                    message={message}
                />
            })}
        </div>
    )
}

export default Messages
import React, { useState } from 'react'
import axios from 'axios'

import Messages from './messages'

const Chat = props => {

    const backendURL = 'https://covid-nurse-bot.herokuapp.com/'

    const [responses, setResponses] = useState([])
    const [currentMessage, setCurrentMessage] = useState('')

    const handleMessageSend = message => {
        axios.post(backendURL)
            .then(response => {
                const responseData = {
                    text: response.data['message']['fulfillmentText'] != ''
                        ? response.data['message']['fulfillmentText']
                        : "Sorry, I didn't catch that. Can you repeat, please? And stop mumbling.",
                    isBot: true
                }
                setResponses([...responses, responseData])
            }).catch(error => {
                console.log('ERROR:', error)
            })
    }

    const handleTyping = event => setCurrentMessage(event.target.value)
    
    const handleSubmit = event => {
        const message = {
            text: currentMessage,
            isBot: false
        }
        if (event.key = 'Enter') {
            setResponses([...responses, message])
            handleMessageSend(message.text)
            setCurrentMessage('')
        }
    }

    return (
        <div className="chatSection">
            <div className="botContainer">
                <div className="messagesContainer">
                    <Messages messages={responses} />
                </div>
        
                <div className="inputSection">
                <input
                    type="text"
                    value={currentMessage}
                    onChange={handleTyping}
                    onKeyDown={handleSubmit}
                    placeholder="Hi! How can I help you today?"
                    className="messageInputField"
                />
                </div>
            </div>
        </div>
    )


}

export default Chat
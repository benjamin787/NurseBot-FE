import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../style.css'

import Messages from './messages'

const welcomeMessage = {text: 'Welcome! How can I help?',isBot: true}

const Chat = props => {

    const backendURL = 'https://covid-nurse-bot.herokuapp.com/serve'

    const [waiting, setWaiting] = useState(false)
    const [responses, setResponses] = useState([welcomeMessage])
    const [currentMessage, setCurrentMessage] = useState('')

    const awaitingBot = waiting === true;

    useEffect(() => handleMessageSend(currentMessage),[awaitingBot])

    const handleDisplay = response => {
        const responseData = {
            text: response.queryResult.fulfillmentText !== ''
                ? response.queryResult.fulfillmentText
                : "Sorry, I didn't catch that. Can you repeat, please? And stop mumbling.",
            isBot: true
        }
        setResponses([...responses, responseData])
        console.log('responses', responses)
    }

    const handleMessageSend = message => {
        const post = { 
            headers: {"Access-Control-Allow-Origin": "https://covid-nurse-bot.web.app"},
            body: JSON.stringify({message: message})
        }
        setCurrentMessage('')
        axios
            .post(backendURL, post)
            .then(({data}) => {
                console.log('response', data)
                handleDisplay(data)
            }).catch(error => console.log('ERROR:', error))
    }

    const handleTyping = async event => setCurrentMessage(event.target.value)
    
    const handleSubmit = event => {
        event.stopPropagation();

        if (event.key === 'Enter') {
            const message = {
                text: currentMessage,
                isBot: false
            }
            setResponses([...responses, message])
            setWaiting(true)
        }
    }

    return (
        <div className="messagesContainer">
            <Messages messages={responses} />
            <div className="inputSection">
                <input
                    type="text"
                    value={currentMessage}
                    onChange={handleTyping}
                    onKeyDown={handleSubmit}
                    placeholder="Enter message here."
                    className="messageInputField"
                />
            </div>
        </div>
    )
}

export default Chat
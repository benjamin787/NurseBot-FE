import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import '../style.css'
import Messages from './messages'

const welcomeMessage = {
    text: "Welcome! I may take a few seconds to wake up. I'm sorry, it's been very busy. How can I help?",
    isBot: true
}

const defaultPhrase = {queryResult:
    {fulfillmentText:
        "Sorry, I didn't catch that. Can you repeat, please? And stop mumbling."
    }
}

const backendURL = 'https://covid-nurse-bot.herokuapp.com/serve'


const Chat = props => {

    const [waiting, setWaiting] = useState(false)
    const [responses, setResponses] = useState([welcomeMessage])
    const [currentMessage, setCurrentMessage] = useState('')

    const ref = useRef(false)

    
    const handleDisplay = response => {
        const responseData = {
            text: response.queryResult.fulfillmentText,
            isBot: true
        }
        setResponses([...responses, responseData])
        setWaiting(false)
    }
    
    const handleMessageSend = message => {
        const post = { 
            headers: {"Access-Control-Allow-Origin": "https://covid-nurse-bot.web.app"},
            body: JSON.stringify({message: message})
        }
        setCurrentMessage('')
        axios
        .post(backendURL, post)
        .then(({data}) => console.log(data))
        .then(({data}) => handleDisplay(data))
        .catch(error => handleDisplay(defaultPhrase))
    }

    useEffect(() => {
        if (waiting) handleMessageSend(currentMessage)
    }, [waiting, currentMessage])

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
        <div className="messagesContainer" ref={ref}>
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
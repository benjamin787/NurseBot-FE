import React, { useState } from 'react'
import axios from 'axios'
import '../style.css'

import Messages from './messages'

const welcomeMessage = {text: 'Welcome! How can I help?',isBot: true}

const Chat = props => {

    const backendURL = 'https://covid-nurse-bot.herokuapp.com/serve'

    const [responses, setResponses] = useState([welcomeMessage])
    const [currentMessage, setCurrentMessage] = useState('')

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
            return handleMessageSend(message.text)
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
                <div onClick={handleSubmit}>
                    <svg
                        style={{ marginRight: "10px" }}
                        id="Capa_1"
                        enableBackground="new 0 0 512.004 512.004"
                        height="25"
                        viewBox="0 0 512.004 512.004"
                        width="25"
                        xmlns="http://www.w3.org/2000/svg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Chat
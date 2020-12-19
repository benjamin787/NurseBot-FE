import React from 'react'
import '../style.css'

const Message = ({ message, key }) => {
    return (
        <span className="messageCard" key={key}>
            {message.isBot
                ? ( <div className="botCard">
                    <p style={{
                        paddingLeft: "13px",
                        paddingRight: "8px",
                        fontFamily: "Montserrat",
                        paddingTop: "5px",
                        paddingBottom: "5px",
                        fontWeight: 700
                        }} >
                        {message.text}
                    </p>
                </div> )
                : ( <div className="userCard">    
                    <p style={{
                        paddingLeft: "13px",
                        paddingRight: "8px",
                        fontFamily: "Montserrat",
                        paddingTop: "5px",
                        paddingBottom: "5px",
                        fontWeight: 700
                    }} >
                        {message.text}
                    </p>
                </div>
                )
            }
        </span>
    );
}

export default Message
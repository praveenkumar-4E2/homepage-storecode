import React from 'react'
import './TextCard.css'


const TextCard = ({ title, text, url }) => {
    return (
        <div className='card-border gradient-border1'>

            <div className='card1'>
                <div >
                    <img src={url} alt={1} />
                </div>
                <div className='info-part'>
                    <h5>{title}</h5>
                    <p>{text}</p>
                </div>
            </div>


        </div>
    )
}

export default TextCard
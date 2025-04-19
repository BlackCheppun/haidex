import React, { useState } from 'react'
import './SavoirFr.css'
import { FaCaretDown } from "react-icons/fa"

function CardExpertise({ title, imgURL, listePF }) {
    const [showDetails, setShowDetails] = useState(false);

    const handleCardClick = () => {
        setShowDetails(!showDetails); // Toggle visibility of the inner div
    };

    return (
        <div className='card-expertise' onClick={handleCardClick}>
            <img src={imgURL} alt="image" />
            <div className='card-expertise-content'>
                <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
                    <div className='card-expertise-text-head'>
                        <span>Expert en</span>
                        <p>{title}</p>
                    </div>
                    <div className='border_rdd'>
                    </div>
                    <FaCaretDown className='caret-down' />
                </div>
                <div className={`card-expertise-inner ${showDetails ? 'show' : ''}`}>
                    <ul>
                        {listePF.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CardExpertise

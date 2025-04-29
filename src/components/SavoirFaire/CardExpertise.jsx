import React, { useState } from 'react'
import './SavoirFr.css'
import { FaCaretDown } from "react-icons/fa"

function CardExpertise({ title, imgURL, listePF }) {
    const [showDetails, setShowDetails] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleCardClick = () => {
        setShowDetails(true); // Toggle visibility of the inner div
    };

    const handleMouseLeave = () => {
        setShowDetails(false);
        setIsHovered(false);
    }



    return (
        <div className='card-expertise' onClick={handleCardClick} onMouseEnter={() => setIsHovered(true)} onMouseLeave={handleMouseLeave} style={{ cursor: 'pointer' }}>
            <div className='overlay-onclick' style={{ display: showDetails ? "block" : "none" }}></div>
            <img src={imgURL} alt="image" />
            <div className='card-expertise-content'>
                <div className={`card-experstise-content-top ${isHovered ? 'hovered' : ''}`} style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
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
                            <li className='card-expertise-element' key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CardExpertise

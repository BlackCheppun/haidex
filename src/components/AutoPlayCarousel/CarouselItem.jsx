import React from 'react'

function CarouselItem({ imgUrl }) {
    return (
        <div className='carousel-card'>
            <img src={imgUrl} alt="carousel item" />
        </div>
    )
}

export default CarouselItem
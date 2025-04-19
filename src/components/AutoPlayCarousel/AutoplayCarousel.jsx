import React from 'react'
import { carouselItems } from './config'
import CarouselItem from './CarouselItem'
import "./Carousel.css"

function AutoplayCarousel() {
    return (
        <>
            <div className='carousel-container'>
                <div className='carousel-track'>
                    {Object.keys(carouselItems).map((key) => {
                        return (
                            <CarouselItem key={key} imgUrl={carouselItems[key].imgUrl} />
                        )
                    })}
                    {Object.keys(carouselItems).map((key) => {
                        return (
                            <CarouselItem key={key} imgUrl={carouselItems[key].imgUrl} />
                        )
                    })}
                    {Object.keys(carouselItems).map((key) => {
                        return (
                            <CarouselItem key={key} imgUrl={carouselItems[key].imgUrl} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default AutoplayCarousel;
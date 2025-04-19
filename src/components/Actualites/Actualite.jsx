import { useKeenSlider } from 'keen-slider/react'
import "keen-slider/keen-slider.min.css"
import './Actualite.css'

import React from 'react'


const ActuliteSlides = {
    1: {
        imgURL: '/assets/actualite/actu1.jpg',
        title: "Hot ! Une nouvelle air qui arrive !",
        description: "Ne ratez rien avec nous",
    },
    2: {
        imgURL: '/assets/actualite/actu2.jpg',
        title: "Hot ! Une nouvelle air qui arrive !",
        description: "Ne ratez rien avec nous",
    },
    3: {
        imgURL: '/assets/actualite/actu3.jpg',
        title: "Hot ! Une nouvelle air qui arrive !",
        description: "Ne ratez rien avec nous",
    },
    4: {
        imgURL: '/assets/actualite/actu3.jpg',
        title: "Hot ! Une nouvelle air qui arrive !",
        description: "Ne ratez rien avec nous",
    },
    5: {
        imgURL: '/assets/actualite/actu2.jpg',
        title: "Hot ! Une nouvelle air qui arrive !",
        description: "Ne ratez rien avec nous",
    },
}

function Actualite() {

    const [sliderRef] = useKeenSlider({
        initial: 3,
        breakpoints: {
            '(max-width: 768px)': {
                slides: { perView: 1, spacing: 15 },
            },
            '(min-width: 769px)': {
                slides: { perView: 3, spacing: 32 },
            },
        },
    })
    return (
        <div className='Actualite-Container'>
            <h1>Actualités</h1>
            <div className='keen-slider' ref={sliderRef}>
                {Object.entries(ActuliteSlides).map(([key, slide]) => (
                    <div className={`keen-slider__slide number-slide${key}`} key={key} >
                        <img className='Actualite-slider-img' src={slide.imgURL} alt="" />
                        <h2 className='Actualite-slider-title'>{slide.title}</h2>
                        <p className='Actualite-slider-descp'>{slide.description}</p>
                    </div>
                ))}
            </div>

        </div >
    )
}

export default Actualite
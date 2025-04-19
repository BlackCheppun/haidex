import React from 'react';
import { useState } from 'react';
import './Projets.css';
import { FaArrowRight, FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const videoURL = '/assets/projet-bg.webm';

const images = {
  1: {
    imgURL: '/assets/projet-1.jpg',
  },
  2: {
    imgURL: '/assets/projet-2.jpg',
  },
  3: {
    imgURL: '/assets/projet-3.jpg',
  },
  4: {
    imgURL: '/assets/projet-2.jpg',
  },
  5: {
    imgURL: '/assets/projet-1.jpg',
  }
}

function Projets() {
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    breakpoints: {
      "(min-width: 300px)": {
        slides: { perView: 1, spacing: 1000 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  })

  return (
    <div className="projets-container">
      <video autoPlay loop muted playsInline className="projets-bg-video">
        <source src={videoURL} type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <div className="projets-content">
        <h1>Nos Projets</h1>
        <div className='projets-tout-projet-btn'>
          <p>Tout nos projet</p>
          <FaArrowRight />
        </div>
      </div>

      <div className='projets-slider'>

        <div className='projets-slider-container'>
          <div className="projets-slider-btn" onClick={() => slider.current.prev()}>
            <FaAngleLeft className='projets-slider-btn-icon' />
          </div>
          <div ref={sliderRef} className='keen-slider' >
            {Object.keys(images).map((index) => (
              <div className={`keen-slider__slide number-slide${index}}`} key={index}>
                <img className='slider-img' src={images[index].imgURL} alt={`Project ${index}`} />
              </div>
            ))}
          </div>
          <div className="projets-slider-btn" onClick={() => slider.current.next()}>
            <FaAngleRight className='projets-slider-btn-icon' />
          </div>
        </div>
        <div className="projets-slider-dots">
          {Object.keys(images).map((_, idx) => (
            <button
              title='go to next slide'
              type='button'
              key={idx}
              onClick={() => slider.current?.moveToIdx(idx)}
              className={`${currentSlide === idx ? 'active' : 'dot'}`}
            />
          ))}
        </div>
      </div>
    </div >
  );
}

export default Projets;

import React from 'react'
import "./hero.css"
import Navbar from '../Navbar/Navbar'

function Hero() {
  return (
    <div className='HeroContainer'>
      < Navbar />
      <div className='HeroContent'>
        <div>
          <div className='HeroTextBlock'>
            <img className='HeroTitle' src="/assets/haidex.svg" alt="haidex-title" />
            <p>Électricité et informatique</p>
            <a className='heroKnowMore' href="#">En savoir plus</a>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Hero
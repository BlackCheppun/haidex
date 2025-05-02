import React from 'react'
import "./hero.css"
import Navbar from '../Navbar/Navbar'

function Hero() {
  return (
    <div className='HeroContainer'>
      <div className='HeroContent'>
        <div>
          <div className='HeroTextBlock'>
            <img className='HeroTitle' src="/assets/haidex.svg" alt="haidex-title" />
            <p>Branché sur l'avenir </p>
            <a className='heroKnowMore' href="/apropos">En savoir plus</a>
          </div>
        </div>
      </div>
      <span className="HeroTrustedBy">© Nous font confiance</span>
    </div >
  )
}

export default Hero
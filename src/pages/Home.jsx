import React from 'react'
import AutoplayCarousel from '../components/AutoPlayCarousel/AutoplayCarousel'
import SavoirF from '../components/SavoirFaire/SavoirF'
import Projets from '../components/projetcs/Projets'
import Apropos from '../components/Apropos/Apropos'
import CenterBand from '../components/CenterBand/CenterBand'
import Actualite from '../components/Actualites/Actualite'
import './Home.css'
import Hero from '../components/Hero/Hero'

function Home() {
    return (
        <>
            <Hero />
            <div className="CentealDiv">
                <AutoplayCarousel />
                <SavoirF />
                <Projets />
                <Apropos />
                <CenterBand />
                <Actualite />
            </div>
        </>
    )
}

export default Home
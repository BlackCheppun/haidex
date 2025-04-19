
import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero/Hero'
import AutoplayCarousel from './components/AutoPlayCarousel/AutoplayCarousel'
import SavoirF from './components/SavoirFaire/SavoirF'
import Projets from './components/projetcs/Projets'
import Apropos from './components/Apropos/Apropos'
import CenterBand from './components/CenterBand/CenterBand'
import Actualite from './components/Actualites/Actualite'

function App() {

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
      <Footer />
    </>
  )
}

export default App

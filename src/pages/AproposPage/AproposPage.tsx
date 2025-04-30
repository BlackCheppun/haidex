import React from 'react'
import './AproposPage.css'
import { FaArrowRight, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import AutoplayCarousel from '../../components/AutoPlayCarousel/AutoplayCarousel'
function AproposPage() {
    return (
        <>
            <div className='Apropos-page-Hero-Container'>
                <div className='service-page-HeroContainer'>
                    <div className='service-page-Hero-Overlay'></div>
                    <div className='service-page-Hero'>
                        <img className='HeroTitle' src="/assets/haidex.svg" alt="haidex-title" />
                        <h1 className="HeroSubTitle">Electricité générale</h1>
                    </div>
                </div>
            </div>


            {/* section 2 of page a propos */}
            <div className='Apropos-Page-Section2'>


                <div className='Apropos-Page-Section2-container'>
                    <h1 className='Apropos-section2-Title'>
                        A propos de nous
                    </h1>

                    <div className='Apropos-section2-Section'>

                        <div>
                            <h2>C'est quoi Haidex ?</h2>

                            <p><span>Haidex</span> à été fondé le 02 novembre 2018.
                                Une société spécialisée dans le domaine du <span>tertiaire, construction neuf et rénovation</span></p>

                            <p>Aussi généralement, toutes opérations <span>industrielles, commerciales, financières, civiles, mobilières ou immobilières</span>, pouvant se rattacher directement ou indirectement à l'objet social ou à tout objet similaire ou connexe</p>
                        </div>

                        <img src="/assets/AproposPage/electrician.jpg" alt="" />
                    </div>
                    <div className='Apropos-section2-Section'>

                        <div>
                            <h2>Que peut on faire pour vous</h2>

                            <p>Chez <span>Haidex</span>, l'électricité est bien plus qu'une simple installation de câbles et de fils.</p>

                            <p>Nous sommes les artisans passionnés qui illuminent vos <span>espaces de vie</span> de <span>travail</span> et de <span>loisirs</span>.</p>

                            <a href='/services'>Voir nos services
                                <FaArrowRight />
                            </a>
                        </div>

                        <img src="/assets/ServicesPageAssets/Electrician.jpg" alt="" />
                    </div>
                    <div className='Apropos-section2-Section-Text'>
                        <p>Notre équipe dévouée est <span>spécialisée</span> dans tous les aspects de l'électricité, offrant une gamme complète de <span>services</span> pour répondre à vos besoins <span>résidentiels, commerciaux et industriels</span>.</p>
                        <p> Avec <span>50 collaborateurs</span> engagés sur toute la chaîne de valeur: <span>financement, études, réalisation et maintenance.</span></p>
                    </div>


                    <div className="Apropos-Section-Founder">
                        <img src="/assets/AproposPage/founderbg.jpg" alt="" />
                        <div>
                            <span>Chef d'entreprise</span>
                            <h3>Zulqarnain Haider Munawar</h3>
                            <p>"HAIDEX, c'est l'union de compétences solides et de savoir-faire
                                complémentaires. Notre priorité absolue : votre satisfaction, à travers des
                                services d'une grande qualité, portés par le professionnalisme et la passion
                                de nos équipes."</p>
                            <div>
                                <FaInstagram size={24} />
                                <FaLinkedin size={24} />
                                <FaFacebook size={24} />
                            </div>
                        </div>
                    </div>

                </div >

            </div>

            {/* section 3 of page a propos */}
            <div className='Apropos-Page-Section3-container'>
                <AutoplayCarousel />
            </div>
        </>
    )
}

export default AproposPage
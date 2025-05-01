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

                            <p><span>Haidex</span> a su se forger une solide réputation en tant que partenaire de confiance, offrant une expertise approfondie dans tous les aspects de l'électricité.</p>

                            <p>Que ce soit pour des installations, de la maintenance ou des réparations, nous garantissons des solutions sécurisées, conformes aux normes en vigueur et adaptées à vos besoins.</p>
                        </div>

                        <img src="/assets/AproposPage/electrician.jpg" alt="" />
                    </div>
                    <div className='Apropos-section2-Section'>

                        <div>
                            <h2>Nos métiers</h2>

                            <p><span>Haidex</span> se spécialise en :</p>

                            <p><span>Construction neuve :</span> Installation de systèmes électriques (courant fort et faible) pour bâtiments neufs, conformes et sécurisés.</p>
                            <p><span>Rénovation / Réhabilitation :</span> Modernisation des installations électriques existantes pour plus de performance et de sécurité.</p>
                            <p><span>ERP : </span>  Solutions électriques adaptées aux normes strictes des établissements recevant du public.</p>

                            <a href='/services'>Voir nos services
                                <FaArrowRight />
                            </a>
                        </div>

                        <img src="/assets/ServicesPageAssets/Electrician.jpg" alt="" />
                    </div>
                    <div className='Apropos-section2-Section-Text'>
                        <p>Notre équipe dévouée est <span>spécialisée</span> dans tous les aspects de l'électricité, offrant une gamme complète de <span>services</span> pour répondre à vos besoins <span>résidentiels, commerciaux et industriels</span>.</p>
                        <p> Avec <span>50 collaborateurs</span> engagés sur toute la chaîne de valeur: <span>financement, études, réalisation et maintenance.</span></p>
                        <p>La <span>satisfaction</span> de nos clients est dans notre ADN. Nous nous engageons à fournir des services d'une grande fiabilité, en privilégiant la transparence et l'efficacité à chaque étape de nos interventions.</p>
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

                                <FaInstagram size={24} onClick={() => window.location.href = ""} />
                                <FaLinkedin size={24} onClick={() => window.location.href = "https://www.linkedin.com/company/haidex/"} />
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
import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaBolt, FaArrowRight, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import './Apropos.css'

function Apropos() {
    return (
        <div className='apropos-container'>
            <h1 className='apropos-title'>À propos de nous</h1>

            <div className='apropos-content'>

                <div className='founder-card'>
                    <img src="/assets/founder-transparent.png" alt="Fondateur" />
                    <span className='founder-name'>Zulqarnain Haider MUNAWAR</span>
                    <span className='founder-title'>Chef d'entreprise</span>
                    <div className='founder-socials'>
                        <a className='founder-social-btn' href="#" aria-label="Facebook">
                            <FaFacebook />
                        </a>
                        <a className='founder-social-btn' href="#" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a className='founder-social-btn' href="#" aria-label="GitHub">
                            <FaGithub />
                        </a>
                    </div>
                </div>

                <div className='apropos-text'>

                    <div className='text-header'>
                        <span className='highlight'>
                            <FaBolt /> Avec fierté, on vous présente
                        </span>
                        <span className='highlight-main'>Notre équipe</span>
                        <span className='highlight-sub'>Des professionnels dans la matière</span>

                        <div className="know-more-btn" onClick={() => window.location.href = '/apropos'}>
                            <span>En savoir plus</span>
                            <FaArrowRight />
                        </div>
                    </div>

                    <div className='text-paragraphs'>
                        <p>
                            Nous disposons d’une flotte d’utilitaires entièrement équipés, régulièrement approvisionnés selon les besoins, ce qui garantit des interventions rapides et efficaces. Dans une démarche respectueuse de l’environnement, nos chargés d'affaires et conducteurs de travaux utilisent des véhicules électriques ou hybrides, et la direction est exclusivement équipée en véhicules électriques.
                        </p>

                        <span className='founder-name-inline'>Zulqarnain Haider Munawar</span>
                        <span className='founder-title-inline'>Chef d'entreprise</span>
                    </div>

                </div>
            </div>

            <div className='apropos-contact'>
                <a href="tel:+33175410729" className='contact-card' target="_blank" rel="noopener noreferrer">
                    <FaPhoneAlt className='contact-icon' />
                    <span>+33 1 75 41 07 29</span>
                </a>
                <a href="mailto:contact@haidex.fr" className='contact-card' target="_blank" rel="noopener noreferrer">
                    <FaEnvelope className='contact-icon' />
                    <span>contact@haidex.fr</span>
                </a>
                <a href="https://www.linkedin.com/company/haidex/?originalSubdomain=fr" className='contact-card' target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className='contact-icon' />
                    <span>company/haidex</span>
                </a>
            </div>
        </div>
    )
}

export default Apropos

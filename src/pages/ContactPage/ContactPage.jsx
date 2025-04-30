import React from 'react'
import { FaEnvelope, FaLinkedin, FaPhoneAlt } from 'react-icons/fa'
import './ContactPage.css';
function ContactPage() {
    return (
        <>
            <div className='Contact-page-Hero-Container'>
                <div className='service-page-HeroContainer'>
                    <div className='service-page-Hero-Overlay'></div>
                    <div className='service-page-Hero'>
                        <img className='HeroTitle' src="/assets/haidex.svg" alt="haidex-title" />
                        <h1 className="HeroSubTitle">Electricité générale</h1>
                    </div>
                </div>
            </div>

            <div className='Contact-page-Container'>

                {/* section 2 */}

                <div className='Contact-page-Section2'>

                    <h1>Nous Contacter</h1>

                    <div className='Contact-page-Section2-Contact-Cards'>

                        <div className='Contact-page-Section2-Contact-Cards-Card'>
                            <div>

                                <FaPhoneAlt className='Contact-paga-card-icon' />
                            </div>
                            <span>+33 1 75 41 07 29</span>
                            <a href="tel:+33175410729">Contactez maintenant</a>
                        </div>
                        <div className='Contact-page-Section2-Contact-Cards-Card'>
                            <div>
                                <FaEnvelope className='Contact-paga-card-icon' />
                            </div>
                            <span>contact@haidex.fr</span>
                            <a href="mailto:contact@haidex.fr">Contactez maintenant</a>
                        </div>
                        <div className='Contact-page-Section2-Contact-Cards-Card'>
                            <div>

                                <FaLinkedin className='Contact-paga-card-icon' />
                            </div>
                            <span>company/haidex</span>
                            <a href='https://www.linkedin.com/company/haidex/'>Contactez maintenant</a>
                        </div>


                    </div>

                </div>

                {/* section 3 */}

                <div className='contact-page-Section3-container'></div>

            </div>

        </>
    )
}

export default ContactPage
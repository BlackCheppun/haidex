import React from 'react'
import icon from "/logo.svg"
import "./footer.css"
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";


function Footer() {
    return (
        <div className="Container">
            <div className='footerTop'>
                <div className='footerTitle'>
                    <p style={{ textAlign: 'left' }}>Ensemble</p>
                    <p style={{ textAlign: 'right' }}>Brillons</p>
                </div>
                <div className='FooterDescp'>
                    <p className='FooterDescpP'>Travaux d'installation électrique dans tous locaux.
                        Pour plus d'informations sur nos services veuillez nous contacter via nos services clients </p>
                    <div className='FooterContactBtn' onClick={() => window.location.href = '/contact'}>Contactez nous</div>
                </div>
            </div>

            <div className='footerDetails'>
                <div className='footerDetailsLogo'>
                    <img className='FooterLogo' src={icon} alt="Logo" onClick={() => window.location.href = "/"} />
                    <div className='footerSocials'>
                        <a className="footerSocialsIcons" href=""><FaInstagram /></a>
                        <a className="footerSocialsIcons" href=""><FaLinkedin /></a>
                        <a className="footerSocialsIcons" href=""><FaFacebook /></a>
                    </div>
                </div>
                <div className='footerDetailsText'>
                    <h2 className='footerSubTitle'>Adresse</h2>
                    <p>2-4 Avenue du 6 juin 1944 95190 Goussainville</p>
                </div>
                <div className='footerContacts'>
                    <h2 className='footerSubTitle'>Appelez nous</h2>
                    <a href="tel:+33134196576">+33 1 34 19 65 76</a>
                    <a href="tel:+33753306913">+33 7 53 30 69 13</a>
                    <a href="mailto:contact@haidex.fr">contact@haidex.fr</a>
                </div>
                <div className='footerTerms'>
                    <h2 className='footerSubTitle'>Notre politique</h2>
                    <p>Privacy Policies</p>
                    <p>Terms of use</p>
                </div>
            </div>


            <div className='footerend'>
                <span>© 2024 Haidex Terms of Service Privacy & Cookies policy</span>
                <span>haidex@entreprise</span>
            </div>

        </div>
    )
}

export default Footer
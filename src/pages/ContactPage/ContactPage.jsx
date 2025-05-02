import React, { useEffect, useState } from 'react'
import { FaArrowRight, FaBolt, FaEnvelope, FaLinkedin, FaPhoneAlt } from 'react-icons/fa'
import emailjs from '@emailjs/browser';
import './ContactPage.css';
function ContactPage() {

    useEffect(() => {

        const mapContainer = document.getElementById('map');

        if (!mapContainer || mapContainer._leaflet_id) return;

        const map = L.map('map').setView([49.026677, 2.466240], 18);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

    }, [])


    const [formData, setFormData] = useState({
        company: '',
        email: '',
        mobile: '',
        service: 'Renovation',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send('haidex_contact', 'template_cin7gh8', formData, {
            publicKey: 'Kvu_Yz1U0eVEpi7Wp',
        })
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert('Message envoyé avec succès');
                    setFormData({
                        company: '',
                        email: '',
                        mobile: '',
                        service: 'Renovation',
                        message: '',
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert("Échec de l'envoi du message.");
                },
            );
    };

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
                            <span>+33 1 34 19 65 76</span>
                            <a href="tel:+33134196576">Contactez maintenant</a>
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

                <div className='contact-page-Section3-container'>

                    <div id="map"></div>

                    <div className='Contact-page-apropos-text'>

                        <div className='text-header'>
                            <span className='highlight'>
                                <FaBolt /> Toujours à votre service
                            </span>
                            <span className='contact-page-highlight-main'>Bienvenue à vous</span>

                            <p><span>Domaine d'activité :</span> Traveau de Construction Spécialisés</p>
                            <p><span>Date de création :</span> 02/11/2018</p>
                            <p><span>Dirigeant :</span> Zulqarnain Haider Munawar</p>
                            <p><span>Adresse :</span> 2-4 Avenue du 6 juin 1944 95190 Goussainville</p>
                            <p><span>Numéro de téléphone :</span>+33 1 34 19 65 76 </p>
                            <p><span>Mail :</span>contact@haidex.fr</p>


                            <div className="know-more-btn" onClick={() => window.location.href = '/apropos'}>
                                <span>En savoir plus</span>
                                <FaArrowRight />
                            </div>
                        </div>

                    </div>

                </div>

                {/* section form */}

                <div className='Contact-page-Section4'>

                    <h2>Vous pouvez également nous contactez via formulaire</h2>


                    <div className="Contact-page-form-card">
                        <label>
                            Société
                            <div className="input-wrapper">
                                <input
                                    type="text"
                                    name="company"
                                    placeholder="Nom de la société"
                                    value={formData.company}
                                    onChange={handleChange}
                                    required
                                />
                                <span className="icon">🏢</span>
                            </div>
                        </label>

                        <label>
                            Email
                            <div className="input-wrapper">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Adresse email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <span className="icon">✉️</span>
                            </div>
                        </label>

                        <label>
                            Mobile
                            <div className="input-wrapper">
                                <input
                                    type="tel"
                                    name="mobile"
                                    placeholder="(123) 456-7890"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    required
                                />
                                <span className="icon">📱</span>
                            </div>
                        </label>

                        <label>
                            Type de service
                            <div className="input-wrapper">
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                >
                                    <option value="Renovation">Rénovation</option>
                                    <option value="Installation">Installation</option>
                                </select>
                            </div>
                        </label>

                        <label>
                            Autres informations ?
                            <textarea
                                name="message"
                                placeholder="Souhaitez-vous ajouter quelque chose ?"
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </label>

                        <button onClick={sendEmail}>Envoyer</button>
                    </div>

                </div>

            </div>

        </>
    )
}

export default ContactPage
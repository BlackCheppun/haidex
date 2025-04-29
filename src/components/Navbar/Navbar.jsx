import React from 'react'
import "./Navbar.css"
import { FaBars } from 'react-icons/fa';

function Navbar() {

    const [isOpen, setIsOpen] = React.useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="navbar">
                <img src="/assets/white_logo_navbar.svg" alt="logo" />
                <div className="navbar-links">
                    <a className='navbar-link' href="/">Accueil</a>
                    <div className='navbar-service-dropdown'>
                        <a className='navbar-link' href="/services/Renov">Services</a>
                        <div className="navbar-service-dropdown-menu">
                            <a href="/services/Renov">Rénovation/Réhabilitations</a>
                            <a href="/services/ConstructionNeuve">Construction neuves</a>
                        </div>
                    </div>
                    {/* <a className='navbar-link' href="#">Projets</a> */}
                    <a className='navbar-link' href="#">A propos</a>
                    <a className='navbar-link' href="#">Nous contacter</a>
                </div>
                <button className="navbar-Hamburger" type='button' >
                    <FaBars className='navbar-HamburgerIcon' size={24} color='#fff' onClick={() => toggleMenu()} />
                </button>
            </div>
            <div className='navbar-mobile' style={{ display: isOpen ? 'flex' : 'none' }}>
                <a className='navbar-link-mobile' href="/">Accueil</a>
                <a className='navbar-link-mobile' href="/services">Services</a>
                <a className='navbar-link-mobile' href="#">A propos</a>
                {/* <a className='navbar-link-mobile' href="#">Projet</a> */}
                <a className='navbar-link-mobile' href="#">Nous contacter</a>
            </div>
        </>
    )
}

export default Navbar;
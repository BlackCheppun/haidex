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
                    <a className='navbar-link' href="#">Accueil</a>
                    <a className='navbar-link' href="#">Expériences</a>
                    <a className='navbar-link' href="#">Services</a>
                    <a className='navbar-link' href="#">Clients</a>
                    <a className='navbar-link' href="#">Nous contacter</a>
                </div>
                <button className="navbar-Hamburger" type='button' >
                    <FaBars className='navbar-HamburgerIcon' size={24} color='#fff' onClick={() => toggleMenu()} />
                </button>
            </div>
            <div className='navbar-mobile' style={{ display: isOpen ? 'flex' : 'none' }}>
                <a className='navbar-link-mobile' href="#">Accueil</a>
                <a className='navbar-link-mobile' href="#">Expériences</a>
                <a className='navbar-link-mobile' href="#">Services</a>
                <a className='navbar-link-mobile' href="#">Clients</a>
                <a className='navbar-link-mobile' href="#">Nous contacter</a>
            </div>
        </>
    )
}

export default Navbar;
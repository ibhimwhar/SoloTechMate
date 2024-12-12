import React, { useState } from 'react';
import './Header.css';
import './Tagbody.jsx';
import './Footer.jsx';

function Header() {
    const company = "SoloTechMate";

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const [menuOpen1, setMenuOpen1] = useState(false);

    const toggleMenu1 = () => {
        setMenuOpen1(!menuOpen1);
    };

    return (
        <div className="header">
            <i 
                className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`} 
                onClick={toggleMenu}>
            </i>
            <h1>{company}</h1>

            <i 
                className={`fa-solid ${menuOpen1 ? 'fa-xmark' : 'fa-magnifying-glass'}`} 
                onClick={toggleMenu1}>
            </i>

            {menuOpen && (
                <div className="dropdown-menu">
                    <a href="#/link1">Home</a>
                    <a href="#/aboutUs">About Us</a>
                    <a href="#/footer">Contact</a>
                </div>
            )}

            {menuOpen1 && (
                <div className="dropdown-menu">
                    <form action="https://google.com">
                        <input type="text" />
                        <button>search</button>
                    </form>
                </div>
            )}
        </div>

    )
}

export default Header
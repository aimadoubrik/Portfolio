import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    return (
        <nav className={`navbar ${theme}`}>
            <div className="navbar-logo">
                <h3>AimaDev</h3>
            </div>
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="left">
                <a href="https://github.com/Aimaddev" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/aimaddev/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a className='theme' onClick={toggleTheme}>
                    <i className="fas fa-moon"></i>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;

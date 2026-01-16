import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="container nav">
                <div className="logo">LHSPortfolio</div>
                <nav>
                    <a href="#hero">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
                <div className="nav-icons">
                    <a href="https://github.com/golealda" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;

/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Routes: React.FC = () => {
    return (
        <div>
            {/* HEADER SECTION */}
            <header>
                <input type="checkbox" name="" id="toggler" />
                <label htmlFor="toggler" className="fas fa-bars" />

                <a href="#home" className="logo">
                    flower<span>.</span>
                </a>

                <nav className="navbar">
                    <a href="#home">home</a>
                    <a href="#about">about</a>
                    <a href="#products">products</a>
                    <a href="#review">review</a>
                    <a href="#contact">contact</a>
                </nav>

                <div className="icons">
                    <a href="#home">
                        <i className="fas fa-heart" />
                    </a>
                    <a href="#home">
                        <i className="fas fa-shopping-cart" />
                    </a>
                    <a href="#home">
                        <i className="fas fa-user" />
                    </a>
                </div>
            </header>
        </div>
    );
};

export default Routes;

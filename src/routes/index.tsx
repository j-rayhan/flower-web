/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import videoUrl from '../assets/images/about-vid.mp4';
import { icons, products } from '../utils/data';

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
            {/* <!-- home section starts  --> */}

            <section className="home" id="home">
                <div className="content">
                    <h3>fresh flowers</h3>
                    <span> natural & beautiful flowers </span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae laborum ut
                        minus corrupti dolorum dolore assumenda iste voluptate dolorem pariatur.
                    </p>
                    <a href="#start" className="btn">
                        shop now
                    </a>
                </div>
            </section>

            {/* <!-- about section  --> */}

            <section className="about" id="about">
                <h1 className="heading">
                    <span> about </span> us{' '}
                </h1>

                <div className="row">
                    <div className="video-container">
                        <video src={videoUrl} loop autoPlay muted />
                        <h3>best flower sellers</h3>
                    </div>

                    <div className="content">
                        <h3>why choose us?</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem cumque sit
                            nemo pariatur corporis perspiciatis aspernatur a ullam repudiandae autem
                            asperiores quibusdam omnis commodi alias repellat illum, unde optio
                            temporibus.
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium ea
                            est commodi incidunt magni quia molestias perspiciatis, unde repudiandae
                            quidem.
                        </p>
                        <a href="#learn-more" className="btn">
                            learn more
                        </a>
                    </div>
                </div>
            </section>

            {/* <!-- icons section  --> */}

            <section className="icons-container">
                {icons.map((item) => (
                    <div className="icons" key={item.key}>
                        <img src={item.img} alt="" />
                        <div className="info">
                            <h3>{item.title}</h3>
                            <span>{item.description}</span>
                        </div>
                    </div>
                ))}
            </section>

            {/* <!-- products section  --> */}

            <section className="products" id="products">
                <h1 className="heading">
                    latest <span>products</span>
                </h1>

                <div className="box-container">
                    {products.map(({ key, discount, img, title, price, price_ }) => (
                        <div className="box" key={key}>
                            <span className="discount">{discount}%</span>
                            <div className="image">
                                <img src={img} alt="" />
                                <div className="icons">
                                    <a href="#heart">
                                        <i className="fas fa-heart" />
                                    </a>
                                    <a href="#cart" className="cart-btn">
                                        add to cart
                                    </a>
                                    <a href="#share">
                                        <i className="fas fa-share" />
                                    </a>
                                </div>
                            </div>
                            <div className="content">
                                <h3>{title || 'flower pot'}</h3>
                                <div className="price">
                                    {' '}
                                    ${price} <span>${price_}</span>{' '}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Routes;

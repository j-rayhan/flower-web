/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import videoUrl from '../assets/images/about-vid.mp4';
import contactImg from '../assets/images/contact-img.svg';
import paymentImg from '../assets/images/payment.png';
import { ScrollToTopButton } from '../components';
import { icons, products, reviews } from '../utils/data';

const Routes: React.FC = () => {
    return (
        <div>
            <ScrollToTopButton />
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

            {/* <!-- review section  --> */}

            <section className="review" id="review">
                <h1 className="heading">
                    customer&apos;s <span>review</span>{' '}
                </h1>

                <div className="box-container">
                    {reviews.map(({ key, name, img }) => (
                        <div className="box" key={key}>
                            <div className="stars">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
                                asperiores laboriosam praesentium enim maiores? Ad repellat
                                voluptates alias facere repudiandae dolor accusamus enim ut odit,
                                aliquam nesciunt eaque nulla dignissimos.
                            </p>
                            <div className="user">
                                <img src={img} alt="" />
                                <div className="user-info">
                                    <h3>{name}</h3>
                                    <span>happy customer</span>
                                </div>
                            </div>
                            <span className="fas fa-quote-right" />
                        </div>
                    ))}
                </div>
            </section>

            {/*  <!-- contact section  --> */}

            <section className="contact" id="contact">
                <h1 className="heading">
                    {' '}
                    <span> contact </span> us{' '}
                </h1>

                <div className="row">
                    <form action="">
                        <input type="text" placeholder="name" className="box" />
                        <input type="email" placeholder="email" className="box" />
                        <input type="number" placeholder="number" className="box" />
                        <textarea
                            name=""
                            className="box"
                            placeholder="message"
                            id=""
                            cols={30}
                            rows={10}
                        />
                        <input type="submit" value="send message" className="btn" />
                    </form>

                    <div className="image">
                        <img src={contactImg} alt="" />
                    </div>
                </div>
            </section>

            {/* <!-- footer section starts  --> */}

            <section className="footer">
                <div className="box-container">
                    <div className="box">
                        <h3>quick links</h3>
                        <a href="#home">home</a>
                        <a href="#about">about</a>
                        <a href="#products">products</a>
                        <a href="#review">review</a>
                        <a href="#contact">contact</a>
                    </div>

                    <div className="box">
                        <h3>extra links</h3>
                        <a href="#my-account">my account</a>
                        <a href="#my-order">my order</a>
                        <a href="#my-favorite">my favorite</a>
                    </div>

                    <div className="box">
                        <h3>locations</h3>
                        <a href="#usa">USA</a>
                        <a href="#japan">japan</a>
                        <a href="#france">france</a>
                        <a href="#india">india</a>
                    </div>

                    <div className="box">
                        <h3>contact info</h3>
                        <a href="#phone">+0123-4006-7890</a>
                        <a href="#example">example@gmail.com</a>
                        <a href="#mum">mumbai, dhaka - 400104</a>
                        <img src={paymentImg} alt="" />
                    </div>
                </div>

                <div className="credit">
                    {' '}
                    created by <span> mr. j-rayhan </span> | all rights reserved
                </div>
            </section>
        </div>
    );
};

export default Routes;

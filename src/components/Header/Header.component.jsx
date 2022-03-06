import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.component.css";

function Header() {
  return (
    <div>
                <header className="header">
            <div className="nav-section">
                <div className="brand-and-navBtn">
                    <span className="brand-name">
                        SARAHLAB
                    </span>
                    <span className="navBtn flex">
                        <i className="fas fa-bars"></i>
                    </span>
                </div>

                <nav className="top-nav">
                    <ul>
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink exact to="/gallery">Gallery</NavLink></li>
                        <li><NavLink exact to="/blog">Blog</NavLink></li>
                        <li><NavLink exact to="/contact">Contact</NavLink></li>
                    </ul>
                </nav>
                <span className="search-icon">
                    <i className="fas fa-search"></i>
                </span>
            </div>

            <div className="container about">
                <div className="about-content">
                    <div className="about-img flex">
                        <img src={require('../../images/about-img.jpg')} alt = "photographer img"/>
                    </div>
                    <h2>I'm Sarah Doe</h2>
                    <h3>Photographer | Traveller</h3>
                    <blockquote>
                        "Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever ... It remembers little things, long after you have forgotten everything."
                        <span>-Aaron Siskind</span>
                    </blockquote>
                </div>

                <div className="social-icons">
                    <ul>
                        <li>
                            <a><i className="fab fa-facebook"></i></a>
                        </li>
                        <li>
                            <a><i className="fab fa-twitter"></i></a>
                        </li>
                        <li>
                            <a><i className="fab fa-instagram"></i></a>
                        </li>
                        <li>
                            <a><i className="fab fa-pinterest"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header;
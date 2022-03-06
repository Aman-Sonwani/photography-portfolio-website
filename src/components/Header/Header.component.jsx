import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.component.css";



class Header extends React.Component {

    componentDidMount(){
        const showBtn = document.querySelector('.navBtn');
        const topNav = document.querySelector('.top-nav');
        
        showBtn.addEventListener('click', function(){
            if(topNav.classList.contains('showNav')){
                topNav.classList.remove('showNav');
                showBtn.innerHTML = '<i class = "fas fa-bars"></i>';
            } else {
                topNav.classList.add('showNav');
                showBtn.innerHTML = '<i class = "fas fa-times"></i>';
            }
        });
    }
    

    render () {
        return (
            <div>
                        <header className="header">
                    <div className="nav-section">
                        <div className="brand-and-navBtn">
                            <span className="brand-name">
                                JACOBLAB
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
                            <h2>I'm Jacob Moran</h2>
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
                <script>{`
                    const showBtn = document.querySelector('.navBtn');
                    const topNav = document.querySelector('.top-nav');
                    
                    showBtn.addEventListener('click', function(){
                        if(topNav.classList.contains('showNav')){
                            topNav.classList.remove('showNav');
                            showBtn.innerHTML = '<i class = "fas fa-bars"></i>';
                        } else {
                            topNav.classList.add('showNav');
                            showBtn.innerHTML = '<i class = "fas fa-times"></i>';
                        }
                    });
                `}</script>
            </div>
            
          )
    }
}
// const showBtn = document.querySelector('.navBtn');
// const topNav = document.querySelector('.top-nav');

// showBtn.addEventListener('click', function(){
//     if(topNav.classList.contains('showNav')){
//         topNav.classList.remove('showNav');
//         showBtn.innerHTML = '<i class = "fas fa-bars"></i>';
//     } else {
//         topNav.classList.add('showNav');
//         showBtn.innerHTML = '<i class = "fas fa-times"></i>';
//     }
// });

export default Header;
import React from 'react'

function Footer() {
  return (
    <footer className="footer">
            <div className="footer-container container">
                <div>
                    <h2>SARAH DOE</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel obcaecati sapiente minima itaque nam modi libero optio vitae animi, praesentium quis commodi fugit quasi nostrum nihil veniam nisi suscipit cumque ducimus error doloribus est voluptatum at? Et aut mollitia quia.</p>
                </div>
                <div>
                    <h3>Free Subscription!</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, facere eius! Ipsam laborum modi, cumque dolor incidunt animi nam magni.</p>

                    <div className="subs">
                        <i className="fas fa-envelope"></i>
                        <input type = "email" id = "email" placeholder="Email Address"/>
                        <button type = "submit">SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <p>&copy; Copyright SARAHDOE . SIMPLE AND NICE TEMPALTE</p>
        </footer>
  )
}

export default Footer;
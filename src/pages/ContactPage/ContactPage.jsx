import React from 'react'
import SimpleMap from './SimpleMap';

function ContactPage() {
  return (
    <div>
            <section className='section-five'>
                <div className='container'>
                <div className="contact-top">
                    <h3>CONTACT ME</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nobis.</p>
                </div>

                <div className="contact-middle">
                    <div>
                        <span className="contact-icon">
                            <i className="fas fa-map-signs"></i>
                        </span>
                        <span>Address</span>
                        <p>Main Street - 3456, California 0000</p>
                    </div>

                    <div>
                        <span className="contact-icon">
                            <i className="fas fa-phone"></i>
                        </span>
                        <span>Contact Number</span>
                        <p>4567 3485 2902</p>
                    </div>

                    <div>
                        <span className="contact-icon">
                            <i className="fas fa-paper-plane"></i>
                        </span>
                        <span>Email Address</span>
                        <p>info@gmail.com</p>
                    </div>

                    <div>
                        <span className="contact-icon">
                            <i className="fas fa-globe"></i>
                        </span>
                        <span>Website</span>
                        <p>www.jacoblab.com</p>
                    </div>
                </div>

                    <div className="contact-bottom">
                        <form className="form">
                            <input type = "text" placeholder="Your Name"/>
                            <input type = "email" placeholder="Your Email"/>
                            <input type = "text" placeholder="Subject"/>
                            <textarea rows = "9" placeholder="Message"></textarea>
                            <input type = "submit" className="btn" value = "Send Message"/>
                        </form>
                        <SimpleMap/>                  
                    </div>
                </div>
            </section>
    </div>
  )
}

export default ContactPage;
import React from "react";
import "./styles.page.css";

const images =[
    { id:'1', imageName:'insta-1.jpg'},
    { id:'2', imageName:'insta-2.jpg'},
    { id:'3', imageName:'insta-3.jpg'},
    { id:'4', imageName:'insta-4.jpg'}
]

function HomePage() {
  return (
    <div>
        <section className="section-one">
            <div className="container">
                <div className="sec-one-left">
                    <div>
                        <h3>Lorem ipsum dolor sit amet</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos suscipit ut aliquid ab illo. Repellat nam molestias repellendus perspiciatis blanditiis.</p>
                        <a className="btn">view all</a>
                    </div>
                </div>

                <div className="sec-one-right">
                    <div className="work-content">
                        <h3>AMAZING TEAM WORK WITH PROFESSIONAL PHOTOGRAPHER</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ducimus laboriosam facilis repudiandae neque minus in corrupti consequatur illum placeat nam libero adipisci quidem doloribus, numquam eius delectus quaerat omnis illo earum necessitatibus natus soluta deserunt iusto. Modi, soluta quos.</p>
                        <a className="btn">view all</a>
                    </div>
                    <div className="work-imgs">
                        <div className="work-img-1">
                        </div>
                        <div className="work-img-2">
                        </div>
                    </div>
                    <h3>"Taking an image, freezing a moment, reveals how rich reality truly is."</h3>
                </div>
            </div>
        </section>
        <section className="section-two">
            <div className="container">
                <h2>FOLLOW ON INSTAGRAM</h2>
                <span>@sarah_photographer</span>
                    <div className="insta-imgs">
                        { images.map( image => 
                            <div key={image.id}>
                                <img src = {`../../images/${image.imageName}`} />
                                <div className="icon-overlay flex">
                                    <i className="fab fa-instagram"></i>
                                </div>
                            </div>)
                        }
                    </div>
            </div>
        </section>
    </div>
  )
}

export default HomePage;
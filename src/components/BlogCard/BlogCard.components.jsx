import React from 'react'

import "./styles.component.css";

const images =[
    { id:'1', imageName:'blog1.jpg'},
    { id:'2', imageName:'blog2.jpg'},
    { id:'3', imageName:'blog3.jpg'},
    { id:'4', imageName:'blog4.jpg'},
    { id:'5', imageName:'blog5.jpg'},
    { id:'6', imageName:'blog6.jpg'}
]

function BlogCard() {
  return (
    <div>
        <section className="section-four">
            <div className="container">
                <div className="blogs">
                    <div className='blog-wrapper-lg'>
                        {images.filter((image, idx) => idx < 2).map( image =>
                        <div key={image.id} className='blog'>
                            <img src ={`../../images/blog/${image.imageName}`}/>
                            <div class = "blog-content">
                                <span class = "badge">Photography</span>
                                <span class = "misc-info">
                                    Published: 1 Week Ago | 25 Comments
                                </span>
                                <h3 class = "blog-title">
                                    Best Photography Tips For Beginners
                                </h3>
                                <p class = "blog-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eligendi!
                                </p>
                                <a class = "btn">Read More</a>
                            </div>
                        </div>)

                        }
                    </div>
                    <div className='blog-wrapper-sm'>
                        {images.slice(2,6).map( image =>
                        <div key={image.id} className='blog'>
                            <img src ={`../../images/blog/${image.imageName}`}/>
                            <div class = "blog-content">
                                <span class = "badge">Photography</span>
                                <span class = "misc-info">
                                    Published: 1 Week Ago | 25 Comments
                                </span>
                                <h3 class = "blog-title">
                                    Best Photography Tips For Beginners
                                </h3>
                                <p class = "blog-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eligendi!
                                </p>
                                <a class = "btn">Read More</a>
                            </div>
                        </div>)

                        }
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default BlogCard;
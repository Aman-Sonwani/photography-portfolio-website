import React from 'react'
import { SRLWrapper } from 'simple-react-lightbox';

import "./styles.component.css";

const images =[
    { id:'1', imageName:'gallery1.jpg'},
    { id:'2', imageName:'gallery2.jpg'},
    { id:'3', imageName:'gallery3.jpg'},
    { id:'4', imageName:'gallery4.jpg'},
    { id:'5', imageName:'gallery5.jpg'},
    { id:'6', imageName:'gallery6.jpg'},
    { id:'7', imageName:'gallery7.jpg'},
    { id:'8', imageName:'gallery8.jpg'},
    { id:'9', imageName:'gallery9.jpg'}
]

function GalleryCard() {
  return (
    <div>
        <section className="section-three">
            <div className="container">
                <SRLWrapper>
                    <div className='gallery'>
                        { images.map( image => 
                            <div key={image.id} className="single-img">
                                <a href={`../../images/gallery/${image.imageName}`}>
                                    <img src = {`../../images/gallery/${image.imageName}`} />
                                    <div className="single-img-content">
                                        <h3>Beautiful Work</h3>
                                    </div>
                                </a>
                            </div>)
                        }
                    </div>
                </SRLWrapper>
            </div>
        </section>
    </div>
  )
}

export default GalleryCard;
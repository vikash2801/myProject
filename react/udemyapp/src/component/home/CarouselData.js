import React from 'react';

import './home.css'

const carouselButtonLeft ={
    width: "0",
    left: "2%",
    top: "4%",
    position: "absolute",
    zindex: "100"
}

const carouselButtonRight = {
   width: "0",
   right: "2%",
   top: "4%",
   position: "absolute",
   zindex: "100"
}

const CarouselData = () =>{
    return(
        <>  
                 <div className="box promo">
                    <div id="carouselExampleControls" className="carousel  slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active prm">
                                <img src="https://i.ibb.co/D98TtB6/slide1.jpg" className="d-block w-100" alt="one"/>
                                <div className="promoText">
                                    <h1>Our biggest sale of the season</h1>
                                    <h4>Stock up on courses from ₹389. From coding to leadership to photography, you can learn almost anything. Ends Nov. 31.</h4>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://i.ibb.co/mRQLzDY/slide3.png" className="d-block w-100" alt="two"/>
                                <div className="promoText">
                                    <h1>Learning that gets you</h1>
                                    <h4>Skills for your present (and your future). Get started with us.</h4>
                                </div>
                            </div>
                            
                            <button type="button" className="carousel-control-prev" data-bs-target="#carouselExampleControls" data-bs-slide="prev" style={carouselButtonLeft}>
                                <div className="circle-button">
                                    <span className="carousel-control-prev-icon " ></span>
                                </div>
                            </button>
                            <button type="button" className="carousel-control-next" data-bs-target="#carouselExampleControls" data-bs-slide="next" style={carouselButtonRight}>
                                <div className="circle-button">
                                    <span className="carousel-control-next-icon " ></span>
                                </div>
                            </button>
                        </div>   
                    </div>
                </div>

        </>
    )
}

export default CarouselData;
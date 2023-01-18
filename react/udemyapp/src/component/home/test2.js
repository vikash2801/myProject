import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import Axios from 'axios'

import './home.css'

import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'

const options={
            autoplay:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
}


/* const url = "http://localhost:9000/courseDetail" */

class testData2 extends Component{
    constructor(){
        super()

        this.state={
            courseData: '' 
        }
    }

    render(){
        
        return(
                                <OwlCarousel className="owl-theme" {...options} >
                                        <div className="item">
                                                <Link to={`/listing/Marketing`} >
                                                    <div className="content-item">
                                                        <div className="div-img">                                                         
                                                                <img src="https://i.ibb.co/nb9f9js/7.jpg" alt="10143"/>
                                                        </div>
                                                        <div className="div-caption">
                                                            <h1>Advance marketting skillset</h1>
                                                            <span className="img-tag">Eric Schwartzman</span>
                                                            <div className="course-rating">
                                                                <div><span className="rating-no">2.4</span></div>
                                                                <div>
                                                                    <span  className="star">&#9733;</span> 
                                                                    <span  className="star">&#9733;</span>
                                                                    <span><i className="fa fa-star-half fa-xs half-star"></i></span>
                                                                </div>
                                                                <div>
                                                                    <span className="course-reviews">(5,122)</span>
                                                                </div>
                                                            </div>
                                                            <span className="course-chrg">&#8377;199</span>
                                                        </div>
                                                    </div>
                                            </Link>
                                        </div>
                                        <div className="item">
                                                <Link to={`/listing/Development`} >
                                                    <div className="content-item">
                                                        <div className="div-img">                                                         
                                                                <img src="https://i.ibb.co/PWpVDXp/1.jpg" alt="14027"/>
                                                        </div>
                                                        <div className="div-caption">
                                                            <h1>100 Days of Code</h1>
                                                            <span className="img-tag">Jose Portilla</span>
                                                            <div className="course-rating">
                                                                <div><span className="rating-no">4.3</span></div>
                                                                <div>
                                                                    <span  className="star">&#9733;</span>
                                                                    <span  className="star">&#9733;</span>
                                                                    <span  className="star">&#9733;</span>  
                                                                    <span  className="star">&#9733;</span>
                                                                    <span><i className="fa fa-star-half fa-xs half-star"></i></span>
                                                                </div>
                                                                <div>
                                                                    <span className="course-reviews">(18,938)</span>
                                                                </div>
                                                            </div>
                                                            <span className="course-chrg">&#8377;649</span>
                                                        </div>
                                                    </div>
                                            </Link>
                                        </div>

                                        <div className="item">
                                                <Link to={`/listing/Development`} >
                                                    <div className="content-item">
                                                        <div className="div-img">                                                         
                                                                <img src="https://i.ibb.co/wgXGM4z/6.jpg" alt="16031"/>
                                                        </div>
                                                        <div className="div-caption">
                                                            <h1>Complete C# Unity Game Developer 2D</h1>
                                                            <span className="img-tag">Rick Davidson,Gary Pattie</span>
                                                            <div className="course-rating">
                                                                <div><span className="rating-no">4.7</span></div>
                                                                <div>
                                                                    <span  className="star">&#9733;</span> 
                                                                    <span  className="star">&#9733;</span> 
                                                                    <span  className="star">&#9733;</span> 
                                                                    <span  className="star">&#9733;</span>
                                                                    <span><i className="fa fa-star-half fa-xs half-star"></i></span>
                                                                </div>
                                                                <div>
                                                                    <span className="course-reviews">(96,122)</span>
                                                                </div>
                                                            </div>
                                                            <span className="course-chrg">&#8377;649</span>
                                                        </div>
                                                    </div>
                                            </Link>
                                        </div>
                                        <div className="item">
                                                <Link to={`/listing/Marketing`} >
                                                    <div className="content-item">
                                                        <div className="div-img">                                                         
                                                                <img src="https://i.ibb.co/nb9f9js/7.jpg" alt="18551"/>
                                                        </div>
                                                        <div className="div-caption">
                                                            <h1>SEO Training</h1>
                                                            <span className="img-tag">Eric Schwartzman</span>
                                                            <div className="course-rating">
                                                                <div><span className="rating-no">4.4</span></div>
                                                                <div>
                                                                    <span  className="star">&#9733;</span> 
                                                                    <span  className="star">&#9733;</span>
                                                                    <span  className="star">&#9733;</span>
                                                                    <span  className="star">&#9733;</span>
                                                                    <span><i className="fa fa-star-half fa-xs half-star"></i></span>
                                                                </div>
                                                                <div>
                                                                    <span className="course-reviews">(9,122)</span>
                                                                </div>
                                                            </div>
                                                            <span className="course-chrg">&#8377;999</span>
                                                        </div>
                                                    </div>
                                            </Link>
                                        </div>
                                        <div className="item">
                                                <Link to={`/listing/Development`} >
                                                    <div className="content-item">
                                                        <div className="div-img">                                                         
                                                                <img src="https://i.ibb.co/PWpVDXp/1.jpg" alt="13986"/>
                                                        </div>
                                                        <div className="div-caption">
                                                            <h1>30 Days of Code</h1>
                                                            <span className="img-tag">Jose Portilla</span>
                                                            <div className="course-rating">
                                                                <div><span className="rating-no">4.1</span></div>
                                                                <div>
                                                                    <span  className="star">&#9733;</span>
                                                                    <span  className="star">&#9733;</span>
                                                                    <span  className="star">&#9733;</span>  
                                                                    <span  className="star">&#9733;</span>
                                                                </div>
                                                                <div>
                                                                    <span className="course-reviews">(18,938)</span>
                                                                </div>
                                                            </div>
                                                            <span className="course-chrg">&#8377;349</span>
                                                        </div>
                                                    </div>
                                            </Link>
                                        </div>

                                        
                                </OwlCarousel>
        )           
                       
                                             
                    
                
            
    }

    /* componentDidMount(){
        Axios.get(`${url}`)
        .then((res)=> this.setState({courseData: res.data}))
    } */
    
}

export default testData2;
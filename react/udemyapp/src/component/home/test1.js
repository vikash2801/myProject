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

class testData extends Component{
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

                                        <div className="item">
                                                <Link to={`/listing/Development`} >
                                                    <div className="content-item">
                                                        <div className="div-img">                                                         
                                                                <img src="https://i.ibb.co/PWpVDXp/1.jpg" alt="16993"/>
                                                        </div>
                                                        <div className="div-caption">
                                                            <h1>Advance Python</h1>
                                                            <span className="img-tag">Jose Portilla</span>
                                                            <div className="course-rating">
                                                                <div><span className="rating-no">3.3</span></div>
                                                                <div>
                                                                    <span  className="star">&#9733;</span>
                                                                    <span  className="star">&#9733;</span>
                                                                    <span  className="star">&#9733;</span>
                                                                    <span><i className="fa fa-star-half fa-xs half-star"></i></span>
                                                                </div>
                                                                <div>
                                                                    <span className="course-reviews">1,237</span>
                                                                </div>
                                                            </div>
                                                            <span className="course-chrg">&#8377;849</span>
                                                        </div>
                                                    </div>
                                            </Link>
                                        </div>

                                        <div className="item">
                                                <Link to={`/listing/Development`} >
                                                    <div className="content-item">
                                                        <div className="div-img">                                                         
                                                                <img src="https://i.ibb.co/RBgwpf9/2.jpg" alt="16984"/>
                                                        </div>
                                                        <div className="div-caption">
                                                            <h1>Learn C# programming (In ten easy steps)</h1>
                                                            <span className="img-tag">Huw Collingborne</span>
                                                            <div className="course-rating">
                                                                <div><span className="rating-no">4.5</span></div>
                                                                <div>
                                                                    <span  className="star">&#9733;</span>
                                                                    <span  className="star">&#9733;</span>
                                                                    <span  className="star">&#9733;</span>  
                                                                    <span  className="star">&#9733;</span>
                                                                    <span><i className="fa fa-star-half fa-xs half-star"></i></span>
                                                                </div>
                                                                <div>
                                                                    <span className="course-reviews">(1,711)</span>
                                                                </div>
                                                            </div>
                                                            <span className="course-chrg">&#8377;1499</span>
                                                        </div>
                                                    </div>
                                            </Link>
                                        </div>

                                        <div className="item">
                                                <Link to={`/listing/Development`} >
                                                    <div className="content-item">
                                                        <div className="div-img">                                                         
                                                                <img src="https://i.ibb.co/bdTLKVc/3.jpg" alt="16530"/>
                                                        </div>
                                                        <div className="div-caption">
                                                            <h1>The Complete Android S + Java Developer Course</h1>
                                                            <span className="img-tag">Morteja Kordi</span>
                                                            <div className="course-rating">
                                                                <div><span className="rating-no">4.2</span></div>
                                                                <div>
                                                                    <span  className="star">&#9733;</span>
                                                                    <span  className="star">&#9733;</span>
                                                                    <span  className="star">&#9733;</span>  
                                                                    <span  className="star">&#9733;</span>
                                                                    <span><i className="fa fa-star-half fa-xs half-star"></i></span>
                                                                </div>
                                                                <div>
                                                                    <span className="course-reviews">(4,563)</span>
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
                                                                <img src="https://i.ibb.co/bdTLKVc/3.jpg" alt="10113"/>
                                                        </div>
                                                        <div className="div-caption">
                                                            <h1>Basic Java Course</h1>
                                                            <span className="img-tag">Morteja Kordi</span>
                                                            <div className="course-rating">
                                                                <div><span className="rating-no">4.8</span></div>
                                                                <div>
                                                                    <span  className="star">&#9733;</span>
                                                                    <span  className="star">&#9733;</span>
                                                                    <span  className="star">&#9733;</span>  
                                                                    <span  className="star">&#9733;</span>
                                                                    <span><i className="fa fa-star-half fa-xs half-star"></i></span>
                                                                </div>
                                                                <div>
                                                                    <span className="course-reviews">(4,563)</span>
                                                                </div>
                                                            </div>
                                                            <span className="course-chrg">&#8377;449</span>
                                                        </div>
                                                    </div>
                                            </Link>
                                        </div>
                                        <div className="item">
                                                <Link to={`/listing/Development`} >
                                                    <div className="content-item">
                                                        <div className="div-img">                                                         
                                                                <img src="https://i.ibb.co/Mh3Kg0y/4.jpg" alt="12685"/>
                                                        </div>
                                                        <div className="div-caption">
                                                            <h1>Android Material Design</h1>
                                                            <span className="img-tag">Anapurna Agarwal</span>
                                                            <div className="course-rating">
                                                                <div><span className="rating-no">2.7</span></div>
                                                                <div>
                                                                    <span  className="star">&#9733;</span>
                                                                    <span  className="star">&#9733;</span>
                                                                    <span><i className="fa fa-star-half fa-xs half-star"></i></span>
                                                                </div>
                                                                <div>
                                                                    <span className="course-reviews">(877)</span>
                                                                </div>
                                                            </div>
                                                            <span className="course-chrg">&#8377;1049</span>
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

export default testData;
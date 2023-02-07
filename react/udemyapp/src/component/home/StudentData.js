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

//const stuUrl= "http://localhost:9000/courseDetail/studentCourse/5000"
const stuUrl= "https://udemyapi.onrender.com/courseDetail/studentCourse/5000"

class StudentData extends Component{

    constructor(){
        super()

        this.state={
            stuData: ''
        }
    }


    render(){
        if(this.state.stuData){
        
                return(
                        <OwlCarousel className="owl-theme" {...options} >
                                    {this.state.stuData.map( (item,index) => (
                                        <div className="item" key={index}>                                               

                                                <div className="content-item">                                                        
                                                    <div className="div-img">                                                         
                                                        <Link to={`/listing/${item.course_category}`} >
                                                            <img src={item.course_img} alt={item.typeId}/>
                                                        </Link>
                                                    </div>
                                                    <div className="div-caption">
                                                        <h1>{item.course_name}</h1>
                                                        <span className="img-tag">{item.course_details.tutor}</span>
                                                        <div className="course-rating">
                                                            <div><span className="rating-no">{item.course_details.rating}</span></div>
                                                            <div>
                                                                <span  className="star">&#9733;</span>
                                                                <span  className="star">&#9733;</span>
                                                                <span  className="star">&#9733;</span>  
                                                                <span  className="star">&#9733;</span>
                                                                <span><i className="fa fa-star-half-full half-star"></i></span>
                                                            </div>
                                                            <div>
                                                                <span className="course-reviews">({item.course_details.reviewCount})</span>
                                                            </div>
                                                        </div>
                                                        <span className="course-chrg">&#8377;{item.course_details.cost}</span>
                                                    </div>

                                                </div>
                                    </div>
                                ))
                                }
                            </OwlCarousel>                       
                    
                )
        }
    }

    componentDidMount(){
        Axios.get(`${stuUrl}`)
        .then((res)=> this.setState({stuData: res.data}))
    }
}

export default StudentData;
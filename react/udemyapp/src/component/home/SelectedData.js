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

//const url = "http://localhost:9000/courseDetail"
const url = "https://udemyapi.onrender.com/courseDetail"

class SelectedData extends Component{
    constructor(props){
        super(props)

        this.state={
            courseData: this.props.inputData ? this.props.inputData : ''
        }
    }

    render(){
        let renderDATA = (this.props.inputData ? this.props.inputData : this.state.courseData)
        
        if(renderDATA){
        
                return(             
                    
                            <OwlCarousel className="owl-theme" {...options} >
                                    {renderDATA.map( (item,index) => (
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
        if(!this.props.inputData){
            Axios.get(`${url}`)
            .then((res)=> this.setState({courseData: res.data}))
        }else{
            this.setState({courseData: this.props.inputData ? this.props.inputData : ''})
        }
        
    }
}

export default SelectedData;
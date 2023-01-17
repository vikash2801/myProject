import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import Axios from 'axios'

import './home.css'

const url = "http://localhost:9000/courseDetail"

class SelectedData extends Component{
    constructor(){
        super()

        this.state={
            courseData: ''
        }
    }

    render(){
        if(this.state.courseData){
            return this.state.courseData.map((item,index)=> {
                return(
                                            <div className="item" key={index}>
                                                <Link to={`/listing/${item.course_category}`} >
                                                    <div className="content-item">
                                                        <div className="div-img">                                                         
                                                                <img src={item.course_img} alt={item.typeId}/>
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
                                            </Link>
                                        </div>
                                             
                    
                )
            })
        }
    }

    componentDidMount(){
        Axios.get(`${url}`)
        .then((res)=> this.setState({courseData: res.data}))
    }
    
}

export default SelectedData;
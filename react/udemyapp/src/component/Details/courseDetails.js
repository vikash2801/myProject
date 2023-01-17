import React,{Component} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {Link} from 'react-router-dom'
import 'react-tabs/style/react-tabs.css';
import Axios from 'axios'
import './courseDetails.css'

import Header from '../../header/header'
import MenuDisplay from './MenuDisplay'

const durl = "http://localhost:9000/courseDetail"
const turl = "http://localhost:9000/courseDetail/courseType"

class CourseDetail extends Component{
    constructor(){
        super()

        this.state={
            courseList : '',
            uniqueCourse : '',
            category: sessionStorage.getItem('rendered_category'),
            userItem: '',
            details:''
        }
    }

    typedData=(type)=>{

        Axios.get(`${turl}/${type}`) 
        .then((res) =>  this.setState({courseList: res.data}) )
    }
    
    addToCart=(data) => {
        this.setState({userItem:data})
    }

    proceed=()=>{
        sessionStorage.setItem('menu',this.state.userItem);
        this.props.history.push(`/placeOrder/${this.state.uniqueCourse[0].course_type}`)
    }

    render(){
        if(this.state.uniqueCourse){
            return this.state.uniqueCourse.map((item)=>{
    
                return(
                    <>  
                        <Header />
                        <div className='container' key={item._id}>                       
                            <div className="body-content2" >
                                <div className="body-content2-head">
                                    <div className="container">
                                        <div className="head-links"><h6><a>{item.course_category}</a> <span>&gt;</span> <a>{item.course_subcategory} </a><span>&gt;</span> <a>{item.course_type} Certifications</a> </h6></div>
                                        <div className="head-title"><h1>Ultimate {item.course_name}</h1></div>
                                        <div className="head-subtitle">Full Practice Exam | Learn {item.course_subcategory} | Pass the {item.course_name} Certification</div>
                                        <div className="head-review">
                                            <div className="badge">{item.course_details.tag}</div>
                                            <div className="course-review">({item.course_details.rating} ratings)</div>
                                            <div className="enrolled-students">{item.course_details.reviewCount} students</div>
                                        </div>
                                        <div className="author">Created by <a href="#">{item.course_details.tutor}</a></div>
                                        <div clas="published-date"> Last updated 11/2022</div>
                                    </div>                    
                                </div>
                            </div>
                            <Tabs>
                                <TabList>
                                    <Tab>About Us</Tab>
                                    <Tab>Contact</Tab>
                                </TabList>
                                <TabPanel>
                                    <h2>{item.course_name}</h2>
                                    <p>{item.course_name} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                                </TabPanel>
                                <TabPanel>
                                    <h2>Any content 3</h2>
                                </TabPanel>
                            </Tabs>
                            <div>
                                <Link to={`/listing/${item.course_category}`} className="btn btn-danger">Back</Link> &nbsp;
                                <button className="btn btn-success" onClick={this.proceed}>Go to Cart</button>
                            </div>
                            <div className="col-md-12">
                                {this.typedData(item.typeId)}
                                <MenuDisplay menudata={this.state.courseList}
                                finalOrder={(data) => {this.addToCart(data)}}/>
                            </div>
                        </div>
                    </>
                )
            })
        }
    }
 
    componentDidMount(){
        const courseId = this.props.location.search.split("=")[1];

        Axios.get(`${durl}/${courseId}`) 
        .then((res) =>  this.setState({uniqueCourse: res.data}) )
    } 
}

export default CourseDetail
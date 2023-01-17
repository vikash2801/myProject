import React from 'react';
import CarouselCourse from './CarouselData';
import SelectedCourse from './SelectedData';
import StudentCourse from './StudentData';
import CategorizedCourse from './CategorizedData';
import DiffCourseData from './DiffCourseData';
import InstructorsData from './InstructorsData';

import Header from '../../header/header'


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


const Home =()=>{

    return(
        <>  
            <Header />
            <div id="Udemy_body">
                <div className="container">
                    <CarouselCourse />
                    <div id="courses">
                                <div className="course-heading">
                                    <h1>A broad selection of courses</h1>
                                    <span>Choose from 204,000 online video courses with new additions published every month</span>
                                </div>
                                <div className="course-body">
                                    <div className="course-category">
                                        <ul>
                                            <li><a href="#" target="_blank" className="font-lightBlack"><h4>Python</h4></a></li>
                                            <li><a href="#" target="_blank" className="font-lightBlack"><h4>Excel</h4></a></li>
                                            <li><a href="#" target="_blank" className="font-lightBlack"><h4>Web Development</h4></a></li>
                                            <li><a href="#" target="_blank" className="font-lightBlack"><h4>JavaScript</h4></a></li>
                                            <li><a href="#" target="_blank" className="font-lightBlack"><h4>Data Science</h4></a></li>
                                            <li><a href="#" target="_blank" className="font-lightBlack"><h4>AWS Certification</h4></a></li>
                                            <li><a href="#" target="_blank" className="font-lightBlack"><h4>Drawing</h4></a></li>
                                        </ul>
                                        <div className="course-content">
                                            <div className="content-heading">
                                                <h1>Expand your career opportunities with Python</h1>
                                                <p>Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to both beginners and advanced developers alike.</p>
                                                <button className="explore">Explore Python</button>
                                            </div>
                                            <div className="my-slide">
                                                <OwlCarousel className="owl-theme" {...options} >

                                                    <SelectedCourse />

                                                </OwlCarousel>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    </div>
                    <div id="studentsView">
                                <h1 className="category-heading">Students are viewing</h1>
                                <div className="my-slide">
                                    <OwlCarousel className="owl-carousel owl-theme" {...options} >

                                            <StudentCourse />

                                    </OwlCarousel> 
                                </div>
                    </div>                          
                    
                    
                    <CategorizedCourse />
                    <DiffCourseData />
                    <InstructorsData />
                </div>
            </div>

        </>
    )
}

export default Home;
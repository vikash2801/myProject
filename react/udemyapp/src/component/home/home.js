import React from 'react';
import {Link} from 'react-router-dom'
import './home.css'


const Home = () =>{

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

    return(
        <>
             <div className="container">
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
                            {/* <!-- <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className=".dot"></span>
                                <span className="carousel-control-next-icon arrow-clr" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button> --> */}
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
                                    <div className="owl-carousel owl-theme">
                                        <div className="content-item">
                                            <div className="div-img"><img src="https://i.ibb.co/ZWGR0Qz/course-img5.jpg" alt="python course"/></div>
                                            <div className="div-caption">
                                                <h1>Learn Python: The Complete Python Programming Course</h1>
                                                <span className="img-tag">Avinash Jain, The Codex</span>
                                                <div className="course-rating">
                                                    <div><span className="rating-no">4.4</span></div>
                                                    <div>
                                                        <span  className="star">&starf;</span>
                                                        <span  className="star">&starf;</span>
                                                        <span  className="star">&starf;</span>  
                                                        <span  className="star">&starf;</span>
                                                        <span><i className="fa fa-star-half-full half-star"></i></span>
                                                    </div>
                                                    <div>
                                                        <span className="course-reviews">(3,123)</span>
                                                    </div>
                                                </div>
                                                <span className="course-chrg">&#8377;3,399</span>
                                            </div>
                                        </div>
                                        <div className="content-item">
                                            <div className="div-img"><img src="https://i.ibb.co/ZWGR0Qz/course-img5.jpg" alt="python course"/></div>
                                            <div className="div-caption">
                                                <h1>Learn Python: The Complete Python Programming Course</h1>
                                                <span className="img-tag">Avinash Jain, The Codex</span>
                                                <div className="course-rating">
                                                    <div><span className="rating-no">4.4</span></div>
                                                    <div>
                                                        <span  className="star">&starf;</span>
                                                        <span  className="star">&starf;</span>
                                                        <span  className="star">&starf;</span>  
                                                        <span  className="star">&starf;</span>
                                                        <span><i className="fa fa-star-half-full half-star"></i></span>
                                                    </div>
                                                    <div>
                                                        <span className="course-reviews">(3,123)</span>
                                                    </div>
                                                </div>
                                                <span className="course-chrg">&#8377;3,399</span>
                                            </div>
                                        </div>
                                        <div className="content-item">
                                            <div className="div-img"><img src="https://i.ibb.co/ZWGR0Qz/course-img5.jpg" alt="python course"/></div>
                                            <div className="div-caption">
                                                <h1>Learn Python: The Complete Python Programming Course</h1>
                                                <span className="img-tag">Avinash Jain, The Codex</span>
                                                <div className="course-rating">
                                                    <div><span className="rating-no">4.4</span></div>
                                                    <div>
                                                        <span  className="star">&starf;</span>
                                                        <span  className="star">&starf;</span>
                                                        <span  className="star">&starf;</span>  
                                                        <span  className="star">&starf;</span>
                                                        <span><i className="fa fa-star-half-full half-star"></i></span>
                                                    </div>
                                                    <div>
                                                        <span className="course-reviews">(3,123)</span>
                                                    </div>
                                                </div>
                                                <span className="course-chrg">&#8377;3,399</span>
                                            </div>
                                        </div>
                                        <div className="content-item">
                                            <div className="div-img"><img src="https://i.ibb.co/ZWGR0Qz/course-img5.jpg" alt="python course"/></div>
                                            <div className="div-caption">
                                                <h1>Learn Python: The Complete Python Programming Course</h1>
                                                <span className="img-tag">Avinash Jain, The Codex</span>
                                                <div className="course-rating">
                                                    <div><span className="rating-no">4.4</span></div>
                                                    <div>
                                                        <span  className="star">&starf;</span>
                                                        <span  className="star">&starf;</span>
                                                        <span  className="star">&starf;</span>  
                                                        <span  className="star">&starf;</span>
                                                        <span><i className="fa fa-star-half-full half-star"></i></span>
                                                    </div>
                                                    <div>
                                                        <span className="course-reviews">(3,123)</span>
                                                    </div>
                                                </div>
                                                <span className="course-chrg">&#8377;3,399</span>
                                            </div>
                                        </div>
                                        <div className="content-item">
                                            <div className="div-img"><img src="https://i.ibb.co/ZWGR0Qz/course-img5.jpg" alt="python course"/></div>
                                            <div className="div-caption">
                                                <h1>Learn Python: The Complete Python Programming Course</h1>
                                                <span className="img-tag">Avinash Jain, The Codex</span>
                                                <div className="course-rating">
                                                    <div><span className="rating-no">4.4</span></div>
                                                    <div>
                                                        <span  className="star">&starf;</span>
                                                        <span  className="star">&starf;</span>
                                                        <span  className="star">&starf;</span>  
                                                        <span  className="star">&starf;</span>
                                                        <span><i className="fa fa-star-half-full half-star"></i></span>
                                                    </div>
                                                    <div>
                                                        <span className="course-reviews">(3,123)</span>
                                                    </div>
                                                </div>
                                                <span className="course-chrg">&#8377;3,399</span>
                                            </div>
                                        </div>
                                        <div className="content-item">
                                            <div className="div-img"><img src="https://i.ibb.co/ZWGR0Qz/course-img5.jpg" alt="python course"/></div>
                                            <div className="div-caption">
                                                <h1>Learn Python: The Complete Python Programming Course</h1>
                                                <span className="img-tag">Avinash Jain, The Codex</span>
                                                <div className="course-rating">
                                                    <div><span className="rating-no">4.4</span></div>
                                                    <div>
                                                        <span  className="star">&starf;</span>
                                                        <span  className="star">&starf;</span>
                                                        <span  className="star">&starf;</span>  
                                                        <span  className="star">&starf;</span>
                                                        <span><i className="fa fa-star-half-full half-star"></i></span>
                                                    </div>
                                                    <div>
                                                        <span className="course-reviews">(3,123)</span>
                                                    </div>
                                                </div>
                                                <span className="course-chrg">&#8377;3,399</span>
                                            </div>
                                        </div>
                                        <div className="content-item">
                                            <div className="div-img"><img src="images/course_img7.jpg" alt="python course"/></div>
                                            <div className="div-caption">
                                                <h1>Learn Python: The Complete Python Programming Course</h1>
                                                <span className="img-tag">Avinash Jain, The Codex</span>
                                                <div className="course-rating">
                                                    <div><span className="rating-no">4.4</span></div>
                                                    <div>
                                                        <span  className="star">&starf;</span>
                                                        <span  className="star">&starf;</span>
                                                        <span  className="star">&starf;</span>  
                                                        <span  className="star">&starf;</span>
                                                        <span><i className="fa fa-star-half-full half-star"></i></span>
                                                    </div>
                                                    <div>
                                                        <span className="course-reviews">(3,123)</span>
                                                    </div>
                                                </div>
                                                <span className="course-chrg">&#8377;3,399</span>
                                            </div>
                                        </div>
                                        <div className="content-item">
                                            <div className="div-img"><img src="images/course_img8.jpg" alt="python course"/></div>
                                            <div className="div-caption">
                                                <h1>Learn Python: The Complete Python Programming Course</h1>
                                                <span className="img-tag">Avinash Jain, The Codex</span>
                                                <div className="course-rating">
                                                    <div><span className="rating-no">4.7</span></div>
                                                    <div>
                                                        <span  className="star">&starf;</span>
                                                        <span  className="star">&starf;</span>
                                                        <span  className="star">&starf;</span>  
                                                        <span  className="star">&starf;</span>
                                                        <span><i className="fa fa-star-half-full half-star"></i></span>
                                                    </div>
                                                    <div>
                                                        <span className="course-reviews">(139,562)</span>
                                                    </div>
                                                </div>
                                                <span className="course-chrg">&#8377;389 <delete>&#8377;3,499</delete></span>
                                            </div>
                                        </div>
                                        <div className="content-item">
                                            <div className="div-img"><img src="images/course_img9.jpg" alt="javascript course"/></div>
                                            <div className="div-caption">
                                                <h1>The Complete JavaScript Course 2022: From Zero to Expert!</h1>
                                                <span className="img-tag">Jonas Schmedtmann</span>
                                                <div className="course-rating">
                                                    <div><span className="rating-no">4.8</span></div>
                                                    <div>
                                                        <span  className="star">&starf;</span>
                                                        <span  className="star">&starf;</span>
                                                        <span  className="star">&starf;</span>  
                                                        <span  className="star">&starf;</span>
                                                        <span><i className="fa fa-star-full star"></i></span>
                                                    </div>
                                                    <div>
                                                        <span className="course-reviews">(147,313)</span>
                                                    </div>
                                                </div>
                                                <span className="course-chrg">&#8377;389<delete>&#8377;3,499</delete></span>
                                            </div>
                                        </div>
                                        <div className="content-item">
                                            <div className="div-img"><img src="images/course_img10.jpg" alt="python course"/></div>
                                            <div className="div-caption">
                                                <h1>Learning Python for Data Analysis and Visualization</h1>
                                                <span className="img-tag">Jose Portilla</span>
                                                <div className="course-rating">
                                                    <div><span className="rating-no">4.4</span></div>
                                                    <div>
                                                        <span  className="star">&starf;</span>
                                                        <span  className="star">&starf;</span>
                                                        <span  className="star">&starf;</span>  
                                                        <span  className="star">&starf;</span>
                                                        <span><i className="fa fa-star-half-full half-star"></i></span>
                                                    </div>
                                                    <div>
                                                        <span className="course-reviews">(5,123)</span>
                                                    </div>
                                                </div>
                                                <span className="course-chrg">&#8377;3,499</span>
                                            </div>
                                        </div>
                                        <div className="content-item">
                                            <div className="div-img"><img src="images/course_img11.jpg" alt="python course"/></div>
                                            <div className="div-caption">
                                                <h1>Learning Python for Data Analysis and Visualization</h1>
                                                <span className="img-tag">Jose Portilla</span>
                                                <div className="course-rating">
                                                    <div><span className="rating-no">4.4</span></div>
                                                    <div>
                                                        <span  className="star">&starf;</span>
                                                        <span  className="star">&starf;</span>
                                                        <span  className="star">&starf;</span>  
                                                        <span  className="star">&starf;</span>
                                                        <span><i className="fa fa-star-half-full half-star"></i></span>
                                                    </div>
                                                    <div>
                                                        <span className="course-reviews">(5,123)</span>
                                                    </div>
                                                </div>
                                                <span className="course-chrg">&#8377;3,499</span>
                                            </div>
                                        </div>
                                        <div className="content-item">
                                            <div className="div-img"><img src="images/course_img12.jpg" alt="python course"/></div>
                                            <div className="div-caption">
                                                <h1>Learning Python for Data Analysis and Visualization</h1>
                                                <span className="img-tag">Jose Portilla</span>
                                                <div className="course-rating">
                                                    <div><span className="rating-no">4.4</span></div>
                                                    <div>
                                                        <span  className="star">&starf;</span>
                                                        <span  className="star">&starf;</span>
                                                        <span  className="star">&starf;</span>  
                                                        <span  className="star">&starf;</span>
                                                        <span><i className="fa fa-star-half-full half-star"></i></span>
                                                    </div>
                                                    <div>
                                                        <span className="course-reviews">(5,123)</span>
                                                    </div>
                                                </div>
                                                <span className="course-chrg">&#8377;3,499</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div id="studentsView">
                    <h1 className="category-heading">Students are viewing</h1>
                    <div className="my-slide">
                        <div className="owl-carousel owl-theme">
                            <div className="content-item">
                                <div className="div-img"><img src="https://i.ibb.co/9h0Rby2/students-view1.jpg" alt="WebDevelopment course"/></div>
                                <div className="div-caption">
                                    <h1>The Complete 2022 Web Development Bootcamp</h1>
                                    <span className="img-tag">Dr. Angela Yu</span>
                                    <div className="course-rating">
                                        <div><span className="rating-no">4.7</span></div>
                                        <div>
                                            <span  className="star">&starf;</span>
                                            <span  className="star">&starf;</span>
                                            <span  className="star">&starf;</span>  
                                            <span  className="star">&starf;</span>
                                            <span><i className="fa fa-star-half-full half-star"></i></span>
                                        </div>
                                        <div>
                                            <span className="course-reviews">(213,276)</span>
                                        </div>
                                    </div>
                                    <span className="course-chrg">&#8377;389 <delete>&#8377;3,499</delete></span>
                                </div>
                            </div>
                            <div className="content-item">
                                <div className="div-img"><img src="https://i.ibb.co/VQsG3p4/students-view6.jpg" alt="100 DoC course"/></div>
                                <div className="div-caption">
                                    <h1>100 Days of Code:The Complete Python Pro Bootcamp for 2022</h1>
                                    <span className="img-tag">Dr. Angela Yu</span>
                                    <div className="course-rating">
                                        <div><span className="rating-no">4.7</span></div>
                                        <div>
                                            <span  className="star">&starf;</span>
                                            <span  className="star">&starf;</span>
                                            <span  className="star">&starf;</span>  
                                            <span  className="star">&starf;</span>
                                            <span><i className="fa fa-star-half-full half-star"></i></span>
                                        </div>
                                        <div>
                                            <span className="course-reviews">(128,878)</span>
                                        </div>
                                    </div>
                                    <span className="course-chrg">&#8377;389 <delete>&#8377;3,499</delete></span>
                                </div>
                            </div>
                            <div className="content-item">
                                <div className="div-img"><img src="https://i.ibb.co/gyJK1ny/stu-course3.jpg" alt="python course"/></div>
                                <div className="div-caption">
                                    <h1>Ultimate AWS Certified Solutions Architect Associate...</h1>
                                    <span className="img-tag">Stephane Maarek | AWS Certified Cloud Pra..</span>
                                    <div className="course-rating">
                                        <div><span className="rating-no">4.4</span></div>
                                        <div>
                                            <span  className="star">&starf;</span>
                                            <span  className="star">&starf;</span>
                                            <span  className="star">&starf;</span>  
                                            <span  className="star">&starf;</span>
                                            <span><i className="fa fa-star-half-full half-star"></i></span>
                                        </div>
                                        <div>
                                            <span className="course-reviews">(3,123)</span>
                                        </div>
                                    </div>
                                    <span className="course-chrg">&#8377;3,399</span>
                                </div>
                            </div>
                            <div className="content-item">
                                <div className="div-img"><img src="https://ibb.co/VpHdDsZ" alt="python course"/></div>
                                <div className="div-caption">
                                    <h1>The Complete JavaScript Course 2022: From Zero to Expert!</h1>
                                    <span className="img-tag">Jonas Schmedtmann</span>
                                    <div className="course-rating">
                                        <div><span className="rating-no">4.8</span></div>
                                        <div>
                                            <span  className="star">&starf;</span>
                                            <span  className="star">&starf;</span>
                                            <span  className="star">&starf;</span>  
                                            <span  className="star">&starf;</span>
                                            <span><i className="fa fa-star-full star"></i></span>
                                        </div>
                                        <div>
                                            <span className="course-reviews">(147,313)</span>
                                        </div>
                                    </div>
                                    <span className="course-chrg">&#8377;389<delete>&#8377;3,499</delete></span>
                                </div>
                            </div>
                            <div className="content-item">
                                <div className="div-img"><img src="https://ibb.co/m9MMyhr" alt="react course"/></div>
                                <div className="div-caption">
                                    <h1>React - The Complete Guide(incl Hooks, React Router, Redux)</h1>
                                    <span className="img-tag">Academind by Maximillian</span>
                                    <div className="course-rating">
                                        <div><span className="rating-no">4.6</span></div>
                                        <div>
                                            <span  className="star">&starf;</span>
                                            <span  className="star">&starf;</span>
                                            <span  className="star">&starf;</span>  
                                            <span  className="star">&starf;</span>
                                            <span><i className="fa fa-star-half-full half-star"></i></span>
                                        </div>
                                        <div>
                                            <span className="course-reviews">(157,703)</span>
                                        </div>
                                    </div>
                                    <span className="course-chrg">&#8377;389</span>
                                </div>
                            </div>
                            <div className="content-item">
                                <div className="div-img"><img src="https://ibb.co/jWSYHZX" alt="python course"/></div>
                                <div className="div-caption">
                                    <h1>Learn Python: The Complete Python Programming Course</h1>
                                    <span className="img-tag">Avinash Jain, The Codex</span>
                                    <div className="course-rating">
                                        <div><span className="rating-no">4.4</span></div>
                                        <div>
                                            <span  className="star">&starf;</span>
                                            <span  className="star">&starf;</span>
                                            <span  className="star">&starf;</span>  
                                            <span  className="star">&starf;</span>
                                            <span><i className="fa fa-star-half-full half-star"></i></span>
                                        </div>
                                        <div>
                                            <span className="course-reviews">(3,123)</span>
                                        </div>
                                    </div>
                                    <span className="course-chrg">&#8377;3,399</span>
                                </div>
                            </div>
                            <div className="content-item">
                                <div className="div-img"><img src="https://ibb.co/r3kjW7h" alt="python course"/></div>
                                <div className="div-caption">
                                    <h1>Learn Python: The Complete Python Programming Course</h1>
                                    <span className="img-tag">Avinash Jain, The Codex</span>
                                    <div className="course-rating">
                                        <div><span className="rating-no">4.4</span></div>
                                        <div>
                                            <span  className="star">&starf;</span>
                                            <span  className="star">&starf;</span>
                                            <span  className="star">&starf;</span>  
                                            <span  className="star">&starf;</span>
                                            <span><i className="fa fa-star-half-full half-star"></i></span>
                                        </div>
                                        <div>
                                            <span className="course-reviews">(3,123)</span>
                                        </div>
                                    </div>
                                    <span className="course-chrg">&#8377;3,399</span>
                                </div>
                            </div>
                            <div className="content-item">
                                <div className="div-img"><img src="https://ibb.co/9Y46bF6" alt="python course"/></div>
                                <div className="div-caption">
                                    <h1>Learn Python: The Complete Python Programming Course</h1>
                                    <span className="img-tag">Avinash Jain, The Codex</span>
                                    <div className="course-rating">
                                        <div><span className="rating-no">4.4</span></div>
                                        <div>
                                            <span  className="star">&starf;</span>
                                            <span  className="star">&starf;</span>
                                            <span  className="star">&starf;</span>  
                                            <span  className="star">&starf;</span>
                                            <span><i className="fa fa-star-half-full half-star"></i></span>
                                        </div>
                                        <div>
                                            <span className="course-reviews">(3,123)</span>
                                        </div>
                                    </div>
                                    <span className="course-chrg">&#8377;3,399</span>
                                </div>
                            </div>
                            <div className="content-item">
                                <div className="div-img"><img src="https://ibb.co/16DzL1y" alt="python course"/></div>
                                <div className="div-caption">
                                    <h1>Learn Python: The Complete Python Programming Course</h1>
                                    <span className="img-tag">Avinash Jain, The Codex</span>
                                    <div className="course-rating">
                                        <div><span className="rating-no">4.4</span></div>
                                        <div>
                                            <span  className="star">&starf;</span>
                                            <span  className="star">&starf;</span>
                                            <span  className="star">&starf;</span>  
                                            <span  className="star">&starf;</span>
                                            <span><i className="fa fa-star-half-full half-star"></i></span>
                                        </div>
                                        <div>
                                            <span className="course-reviews">(3,123)</span>
                                        </div>
                                    </div>
                                    <span className="course-chrg">&#8377;3,399</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="popularCategory">
                    <h1 className="category-heading">Top categories</h1>
                    <div className="course-section">
                        <div className="stream">
                            <Link to="/listing">
                                <img src="https://i.ibb.co/FxTPd19/Design.jpg" alt="design stream" />
                                <p>Design</p>
                            </Link>
                        </div>
                        <div className="stream">
                            <Link to="/listing">
                                <img src="https://i.ibb.co/3pzbFkR/development.jpg" alt="development stream" />
                                <h6>Development</h6>
                            </Link>
                        </div>
                        <div className="stream">
                            <Link to="/listing">
                                <img src="https://i.ibb.co/WBfmjWM/marketing.jpg" alt="marketing stream" />
                                <h6>Marketing</h6>
                            </Link>
                        </div>
                        <div className="stream">
                            <Link to="/listing">
                                <img src="https://i.ibb.co/fnR3bWk/it-software.jpg" alt="software stream" />
                                <h6>IT and Software</h6>
                            </Link>
                        </div>
                        <div className="stream">
                            <Link to="/listing">
                                <img src="https://i.ibb.co/gZZB8zt/personaldevelopment.jpg" alt="personalDevelopment stream" />
                                <h6>Personal Development</h6>
                            </Link>
                        </div>
                        <div className="stream">
                            <Link to="/listing">
                                <img src="https://i.ibb.co/hyqkyHD/Business.jpg" alt="business stream" />
                                <h6>Business</h6>
                            </Link>
                        </div>
                        <div className="stream">
                            <Link to="/listing">
                                <img src="https://i.ibb.co/KwjjxdP/photography.jpg" alt="photography stream" />
                                <h6>Photography</h6>
                            </Link>
                        </div>
                        <div className="stream">
                            <Link to="/listing">
                                <img src="https://i.ibb.co/cDT1m2m/music.jpg" alt="music stream" />
                                <h6>Music</h6>
                            </Link>
                        </div>
                    </div>
                    
                </div>
                <div className="diffCourses">
                    <div className="course-find">
                        <h1 className="category-heading">Featured topics by category</h1>
                    </div>
                    <div className="course-section mrg-top">
                        <div className="stream mrg-left stream-dim">
                            <h1 className="category-heading fnt-sz fnt-bld">Development</h1>
                            <div className="item-topic">
                                <div><a href="#" target="_blank" className="topic fnt-bld">Python</a></div>
                                <div><span className="course-reviews">36,305,215 students</span></div>
                            </div>
                            <div className="item-topic">
                                <div><a href="#" target="_blank" className="topic fnt-bld">Web Development</a></div>
                                <div><span className="course-reviews">11,405,325 students</span></div>
                            </div>
                            <div className="item-topic">
                                <div><a href="#" target="_blank" className="topic fnt-bld">Machine Learning</a></div>
                                <div><span className="course-reviews">7,066,089 students</span></div>
                            </div>
                        </div>
                        <div className="stream mrg-left stream-dim">
                            <h1 className="category-heading fnt-sz fnt-bld">Business</h1>
                            <div className="item-topic">
                                <div><a href="#" target="_blank" className="topic fnt-bld">Financial Analysis</a></div>
                                <div><span className="course-reviews">36,305,215 students</span></div>
                            </div>
                            <div className="item-topic">
                                <div><a href="#" target="_blank" className="topic fnt-bld">SQL</a></div>
                                <div><span className="course-reviews">11,405,325 students</span></div>
                            </div>
                            <div className="item-topic">
                                <div><a href="#" target="_blank" className="topic fnt-bld">PMP</a></div>
                                <div><span className="course-reviews">7,066,089 students</span></div>
                            </div>
                        </div>
                        <div className="stream mrg-left stream-dim">
                            <h1 className="category-heading fnt-sz fnt-bld">IT and Software</h1>
                            <div className="item-topic">
                                <div><a href="#" target="_blank" className="topic fnt-bld">AWS Certification</a></div>
                                <div><span className="course-reviews">36,305,215 students</span></div>
                            </div>
                            <div className="item-topic">
                                <div><a href="#" target="_blank" className="topic fnt-bld">Ethical Hacking</a></div>
                                <div><span className="course-reviews">11,405,325 students</span></div>
                            </div>
                            <div className="item-topic">
                                <div><a href="#" target="_blank" className="topic fnt-bld">Cyber Security</a></div>
                                <div><span className="course-reviews">7,066,089 students</span></div>
                            </div>
                        </div>
                        <div className="stream mrg-left stream-dim">
                            <h1 className="category-heading fnt-sz fnt-bld">Design</h1>
                            <div className="item-topic">
                                <div><a href="#" target="_blank" className="topic fnt-bld">Photoshop</a></div>
                                <div><span className="course-reviews">36,305,215 students</span></div>
                            </div>
                            <div className="item-topic">
                                <div><a href="#" target="_blank" className="topic fnt-bld">Graphic Design</a></div>
                                <div><span className="course-reviews">11,405,325 students</span></div>
                            </div>
                            <div className="item-topic topic-bottom">
                                <div><a href="#" target="_blank" className="topic fnt-bld">Drawing</a></div>
                                <div><span className="course-reviews">7,066,089 students</span></div>
                            </div>
                        </div>
                    </div>
                    <button className="explore">Explore more topics</button>
                </div>
                <div id="instructorDiv">
                    <div className="flex-div">
                        <div className="img-instr"><img src="https://i.ibb.co/s5Zk1cD/instructor1.jpg" alt="instructor" /></div>
                        <div className="caption-instr">
                            <div className="strong-font">
                                <h1>Become an instructor</h1>
                            </div>
                            <div>
                                <p>Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</p>
                            </div>
                            <div>
                                <a href="#" target="_blank">
                                    <button type="button" className="dark-btn  bold-font">Start teaching today</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="important-ads">
                        <h1 className="strong-font">Trusted by companies of all sizes</h1>
                        <img src="images/nasdaq-dark.svg" alt="Nasdaq company" />
                        <img src="images/nasdaq-dark.svg" alt="Nasdaq company" />
                        <img src="images/nasdaq-dark.svg" alt="Nasdaq company" />
                        <img src="images/nasdaq-dark.svg" alt="Nasdaq company" />
                    </div>
                    <div className="flex-div">
                        <div className="caption-instr">
                            <div className="strong-font">
                                <img src="images/logo-ub.svg" alt="Udemy Business" />
                            </div>
                            <div>
                                <p>Get unlimited access to 17,000+ of Udemy’s top courses for your team. Learn and improve skills across business, tech, design, and more.</p>
                            </div>
                            <div>
                                <a href="#" target="_blank">
                                    <button type="button" className="dark-btn  bold-font">Get Udemy Business</button>
                                </a>
                            </div>
                        </div>
                        <div className="img-instr"><img src="https://i.ibb.co/jfjLTN6/instructor2.jpg" alt="business instructor" /></div>
                    </div>
                    <div className="flex-div">
                        <div className="img-instr"><img src="https://i.ibb.co/tzCYnmP/step-up.jpg" alt="education" /></div>
                        <div className="caption-instr">
                            <div className="strong-font">
                                <h1>Transform your life through education</h1>
                            </div>
                            <div>
                                <p>Learners around the world are launching new careers, advancing in their fields, and enriching their lives.</p>
                            </div>
                            <div>
                                <a href="#" target="_blank">
                                    <button type="button" className="dark-btn  bold-font">Find out how</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    


        </>
    )
}

export default Home;
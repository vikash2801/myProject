import React from 'react';

import './home.css'

const InstructorsData = () =>{
    return(
        <>  
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
        </>
    )
}

export default InstructorsData;
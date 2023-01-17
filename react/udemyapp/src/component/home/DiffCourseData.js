import React from 'react';

import './home.css'

const DiffCourseData = () =>{
    return(
        <>  
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
        </>
    )
}

export default DiffCourseData;
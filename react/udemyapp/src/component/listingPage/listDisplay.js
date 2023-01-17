import React from 'react'
import {Link} from 'react-router-dom'


const ListDisplay = (props) =>{
    
    const renderData = (listData)=>{

            if(listData){
                if(listData.length > 0){
                    return listData.map((item,index)=>{
                        return(
                        <>
                                    <div className="card mb-3" key={index} style={{maxwidth: "540px"}}>
                                        <div className="row g-0">
                                        <div className="col-md-4">
                                            <Link to={`/details?courseid=${item.courseID}`} >
                                                <img src={item.course_img} className="img-fluid rounded-start" alt="course image" />
                                            </Link>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
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
                                                            <span  className="star">&#9734;</span>
                                                        </div>
                                                        <div>
                                                            <span className="course-reviews">({item.course_details.reviewCount})</span>
                                                        </div>
                                                    </div>
                                                    <span className="course-chrg">&#8377;{item.course_details.cost}</span>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div> 
                        </> 
                        )
                    })
                }else{
                    return(
                        <>
                        <center>
                            <h3>Data not available</h3>
                        </center>
                        </>
                    )
                }
            }else{
                return(
                    <div>
                        <img src="/images/loader.gif" alt="loader"/>
                        <h2>Loading....</h2>
                    </div>
                )
            }
       
    }

    return(
        renderData(props.displayData)
    )
    
}

export default ListDisplay;
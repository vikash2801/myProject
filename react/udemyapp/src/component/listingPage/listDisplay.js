import React,{Component} from 'react'
import axios from 'axios'

const lurl= "https://udemyapi.onrender.com/filter/Development"

class ListDisplay extends Component{
    constructor(){
        super()

        this.state={
            courseList:''
        }
    }

    render(){
        if(this.state.courseList){
            if(this.state.courseList.length > 0){
                return this.state.courseList.map((item)=>{
                    return(
                    <>
                                <div className="card mb-3" style={{maxwidth: "540px"}}>
                                    <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={item.course_img} className="img-fluid rounded-start" alt="course image" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <div className="div-caption">
                                                <h1>{item.course_name}</h1>

                                                <span className="img-tag">{item.course_details[0].tutor}</span>
                                                <div className="course-rating">
                                                    <div><span className="rating-no">{item.course_details[0].rating}</span></div>
                                                    <div>
                                                        <span  className="star">&#9733;</span>
                                                        <span  className="star">&#9733;</span>
                                                        <span  className="star">&#9733;</span>  
                                                        <span  className="star">&#9733;</span>
                                                        {/* <span><i className="fa fa-star-half-full half-star"></i></span> */}
                                                        <span  className="star">&#9734;</span>
                                                    </div>
                                                    <div>
                                                        <span className="course-reviews">({item.course_details[0].reviewCount})</span>
                                                    </div>
                                                </div>
                                                <span className="course-chrg">&#8377;{item.course_details[0].cost}</span>
                                            </div>
                                                <br/>
                                            <a href="#" className="btn btn-info">Add to cart</a> &nbsp;
                                            <a href="#" className="btn btn-success">Buy Now</a>
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

    componentDidMount(){
        axios.get(`${lurl}`)
        .then((res)=>  {this.setState({courseList:res.data}) } )
    }
}

export default ListDisplay;
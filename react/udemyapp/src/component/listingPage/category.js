import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

const url = "https://udemyapi.onrender.com/courseDetail"

class Category extends Component{
    constructor(){
        super()

        this.state = {
            courseData:''
        }
    }

    render(){
        if(this.state.courseData.length > 0){
            return this.state.courseData.map((item)=>{
                return(
                    <>
                        &nbsp; <Link to="/listing" class="catDiv">{item}</Link>                       
                    </>
                )
            })
        }
       
    }

    componentDidMount(){
        axios.get(`${url}`)
        .then((res)=> this.setState({courseData: this.removeDuplicates(res.data)}) 
        )
    }


    removeDuplicates = (rawData)=>{
        let arr = rawData.map((item)=> item.course_category);

        let outputArr =  arr.filter((value, index, self)=>{
               return self.indexOf(value) === index;
        })

        return outputArr;
    }

    
}

export default Category;
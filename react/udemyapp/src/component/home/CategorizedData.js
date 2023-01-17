import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'

import './home.css'

const catUrl = "http://localhost:9000/categoryJson"

class CategoryData extends Component{
    constructor(){
        super()

        this.state={
            categoryData: ''
        }
    }

    printStream = (data) =>{
        
        if(data){
            return data.map((item1)=>{
                return(
                    <Link to={`/listing/${item1.category}`} key={item1.categoryId} >
                    <div className="streamCategory">
                        <img src={item1.category_img} alt={item1.category} className="categoryImg"/>
                        <h6>{item1.category}</h6>
                    </div>
                </Link> 
                )
            })
        }
    }

    render(){
        return(
            <>
                <div id="popularCategory">
                        <h1 className="category-heading">Top categories</h1>
                        <div className="course-section">
                            {this.printStream(this.state.categoryData)}                  
                            
                        </div>
                        
                    </div>
            </>
        )
    }

    componentDidMount(){
        Axios.get(`${catUrl}`)
        .then((res)=> this.setState({categoryData: res.data}))
    }

}

export default CategoryData
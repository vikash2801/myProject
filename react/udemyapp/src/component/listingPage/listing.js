import React, {Component} from 'react';
import CostFilter from '../filter/costFilter'
import RateFilter from '../filter/rateFilter'
import ListingDisplay from './listDisplay';
import Category from './category';
import axios from 'axios'
import './listing.css'

import Header from '../../header/header'

const Url = "http://localhost:9000/courseDetail/courseCat"

class Listing extends Component{
    constructor(props){
        super(props)

        this.state = {
                filteredData: ''
        }
    }

    render(){
        return(
            <>  
                <Header />
                <div id='catNav'>
                    <Category />
                </div>
                <div className="body-content">
                    <div className="body-content-head">
                        <div className="filterSection">
                            <center><h4>Filter</h4></center>
                            <div className="accordion" id="accordionExample">
                                <RateFilter Catog={this.props.match.params.cat} coursePerRate={(data)=> this.setState({filteredData: data})} />
                                <CostFilter Catog={this.props.match.params.cat} coursePerCost={(data)=> this.setState({filteredData: data})}/>
                                
                            </div>
                        </div>
                        <div className="course-container">
                            <ListingDisplay displayData={this.state.filteredData}/>
                        </div>
                        
                    </div>
                </div>
            </>
        )
    }

    componentDidMount(){
        let category = this.props.match.params.cat;
        sessionStorage.setItem('rendered_category', category)
        axios.get(`${Url}/${category}`) 
        .then((res)=> this.setState({filteredData: res.data}))
    }
}

export default Listing;
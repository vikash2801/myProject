import React,{Component} from 'react'
import CostFilter from '../filter/costFilter'
import RateFilter from '../filter/rateFilter'
import TopicFilter from '../filter/topicFilter'
import './listing.css'

class Filter extends Component{
    constructor(){
        super()

        this.state = {

        }
    }

    render(){
        return(
            <>
                <div className="filterSection">
                        <center><h4>Filter</h4></center>
                        <div className="accordion" id="accordionExample">
                            <TopicFilter />
                            <RateFilter />
                            <CostFilter />
                              
                        </div>
                    </div>
            </>
        )
    }
}

export default Filter
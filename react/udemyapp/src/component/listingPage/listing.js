import React, {Component} from 'react';
import Filter from './filter.js'
import ListingDisplay from './listDisplay';
import Category from './category';
import './listing.css'

class Listing extends Component{
    constructor(){
        super()

        this.state = {

        }
    }

    render(){
        return(
            <>  
                <div id='catNav'>
                    <Category />
                </div>
                <div className="body-content">
                    <div className="body-content-head">
                        <Filter />
                        <div className="course-container">
                            <ListingDisplay />
                        </div>
                        
                    </div>
                </div>
            </>
        )
    }
}

export default Listing;
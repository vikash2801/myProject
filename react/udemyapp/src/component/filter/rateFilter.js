import React,{Component} from 'react'

//const rurl = "http://localhost:9000/courseDetail/courseCat"
const rurl = "https://udemyapi.onrender.com/courseDetail/courseCat"

class RateFilter extends Component{
    
    setURL = ""
    filterRate = (event) =>{

        let category = this.props.Catog;
        
        if(event.target.value){
            this.setURL = `${rurl}/${category}?rating=${event.target.value}`
        }
        else{
            this.setURL = `${rurl}/${category}`
        }
        fetch(this.setURL,{method:'GET'})
        .then((res)=> res.json())
        .then((data)=> this.props.coursePerRate(data))
    }


    render(){
        return(
            <>
                        <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                    <h5>Ratings</h5>
                                  </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                  <div className="accordion-body" onChange={this.filterRate}>
                                    <div>
                                        <label className="radio">
                                            <input type="radio" name="rating" value="4.5"/> 4.5 
                                        </label>
                                    </div>
                                    <div>
                                        <label className="radio">
                                            <input type="radio" name="rating" value="4.0"/> 4.0 
                                        </label>
                                    </div>
                                    <div>
                                        <label className="radio">
                                            <input type="radio" name="rating" value="3.5"/> 3.5 
                                        </label>                                        
                                    </div>    
                                    <div>
                                        <label className="radio">
                                            <input type="radio" name="rating" value="3.0"/> 3.0 
                                        </label>
                                    </div>    
                                        
                                  </div>
                                </div>
                        </div>
            </>
        )
    }
}

export default RateFilter;
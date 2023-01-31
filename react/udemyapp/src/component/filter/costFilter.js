import React,{Component} from 'react'

//const costUrl = "http://localhost:9000/courseDetail/courseCat" 
const costUrl = "https://udemyapi.onrender.com/courseDetail/courseCat"

class CostFilter extends Component{


    setURL = ''

    filterCost = (event) =>{
        let category = this.props.Catog;
        let cost = event.target.value.split('-');
        let lcost = cost[0];
        let hcost = cost[1];
        
        if(event.target.value == ""){
            this.setURL = `${costUrl}/${category}`
        }
        else{
            this.setURL = `${costUrl}/${category}?lcost=${lcost}&hcost=${hcost}`
        }
        fetch(this.setURL,{method:'GET'})
        .then((res)=> res.json())
        .then((data)=> this.props.coursePerCost(data))
    }

    render(){
        return(
            <>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                    <h5>Price</h5>
                                  </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                  <div className="accordion-body" onChange={this.filterCost}>
                                        <div>
                                            <label className="radio">
                                                <input type="radio" name="cost" value=""/> All
                                            </label>
                                        </div>
                                        <div>
                                            <label className="radio">
                                                <input type="radio" name="cost" value="0-300"/> 0-300
                                            </label>
                                        </div>
                                        <div>
                                            <label className="radio">
                                                <input type="radio" name="cost" value="301-600"/> 301-600
                                            </label>
                                        </div>
                                        <div>
                                            <label className="radio">
                                                <input type="radio" name="cost" value="601-1000"/> 601-1000
                                            </label>
                                        </div>                                        
                                        <div>
                                            <label className="radio">
                                                <input type="radio" name="cost" value="1001-5000"/> 1001-5000
                                            </label>
                                        </div>
                                        
                                  </div>
                                </div>
                            </div>
            </>
        )
    }
}

export default CostFilter;
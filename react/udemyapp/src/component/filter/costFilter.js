import React,{Component} from 'react'

class CostFilter extends Component{

  //  curl = "https://udemyapi.onrender.com/filter/Development?lcost=700&hcost=1500";
    curl = "https://udemyapi.onrender.com//filter/Development";
    setURL = ""
    filterCost = (event) =>{
        let cost = event.target.value.split('-');
        let lcost = cost[0];
        let hcost = cost[1];
        
        if(event.target.value == ""){
            this.setURL = `${this.curl}?lcost=0`
        }
        else{
            this.setURL = `${this.curl}?lcost=${lcost}&hcost=${hcost}`
        }
        fetch(this.setURL,{method:'GET'})
        .then((res)=> res.json())
        .then((data)=> console.log(data))
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
                                        <label className="radio">
                                            <input type="radio" name="cost" value=""/> All
                                        </label>
                                        <label className="radio">
                                            <input type="radio" name="cost" value="0-300"/> 0-300
                                        </label>
                                        <label className="radio">
                                            <input type="radio" name="cost" value="301-600"/> 301-600
                                        </label>
                                        <label className="radio">
                                            <input type="radio" name="cost" value="601-1000"/> 601-1000
                                        </label>
                                        <label className="radio">
                                            <input type="radio" name="cost" value="1001-5000"/> 1001-5000
                                        </label>
                                  </div>
                                </div>
                            </div>
            </>
        )
    }
}

export default CostFilter;
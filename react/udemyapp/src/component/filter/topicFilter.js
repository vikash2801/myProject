import React,{Component} from 'react'

class TopicFilter extends Component{
    turl = "https://udemyapi.onrender.com/courseDetail";
    setURL = ""
    filterTopic = (event) =>{
        
        if(event.target.value){
            this.setURL = `${this.turl}/courseType/${event.target.value}`
        }
        else{
            this.setURL = `${this.turl}`
        }
        fetch(this.setURL,{method:'GET'})
        .then((res)=> res.json())
        .then((data)=> console.log(data))

    }

    render(){
        return(
            <>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                  <h5>Topic</h5>
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body" onChange={this.filterTopic}>
                                    <label className="radio">
                                        <input type="radio" name="topic" value="Python"/> Python
                                    </label> 
                                    <label className="radio">
                                        <input type="radio" name="topic" value="Java"/> Java
                                    </label>
                                    <label className="radio">
                                        <input type="radio" name="topic" value="Android"/> Android
                                    </label>
                                    <label className="radio">
                                        <input type="radio" name="topic" value=""/> All
                                    </label>
                                </div>
                            </div>
                        </div>
            </>
        )
    }
}

export default TopicFilter;
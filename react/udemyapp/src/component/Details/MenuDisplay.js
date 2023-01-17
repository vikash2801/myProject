import React,{Component} from 'react';

class MenuDisplay extends Component {

    orderId = [];

    placeOrder = (id) => {
        this.orderId.push(id);
        this.props.finalOrder(this.orderId)
    }

    removeOrder=(id)=>{
        if(this.orderId.indexOf(id) > -1){
            this.orderId.splice(this.orderId.indexOf(id), 1)
        }
        this.props.finalOrder(this.orderId)
    }


    renderCart = (orders) => {
        if(orders){
            return orders.map((item,index) => {
                return(
                    <b key={index}>{item}&nbsp;</b>
                )
            })
        }
    }

    renderMenu = ({menudata}) => {
        if(menudata){
            return menudata.map((item) => {
                return(
                    <div className="row" key={item.courseID}>
                        <div className="col-md-7">
                            <b>{item.courseID}</b>
                            <img src={item.course_img} style={{height:80,width:80}} alt={item.courseID}/> &nbsp;
                            {item.course_name} - <span className="itemCost">Rs.{item.course_details.cost}</span>
                        </div>
                        <div className="col-md-5">
                            <button className="btn btn-success"
                            onClick={()=>{this.placeOrder(item.courseID)}}>
                                <span>add to Cart</span>
                            </button> &nbsp;
                            <button className="btn btn-danger"
                            onClick={()=>{this.removeOrder(item.courseID)}}>
                                <span>delete</span>
                            </button> 

                        </div>
                    </div>
                )
            })
        }
    }

    render(){
        return(
            <div>
                <br/>
                <div className="col-md-12 bg-success">
                    <h1>Item Added</h1>
                    Item Numbers {this.renderCart(this.orderId)} Added
                </div>
                <div className="col-md-12 bg-info">
                    {this.renderMenu(this.props)}
                </div>
            </div>
        )
    }

}

export default MenuDisplay
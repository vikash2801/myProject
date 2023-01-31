import React,{Component} from 'react';
import axios from 'axios';
import Display from './DisplayOrder';

import Header from '../../header/header'

//const orderApi = "http://localhost:8800/orders";
const getOrder = "https://udemyapi.onrender.com/orders";
const orderApi = "https://udemyapi.onrender.com/updateOrder";

class ViewOrder extends Component{

    constructor(props){
        super(props)

        this.state={
            orders:''
        }
    }

    render(){
        return(
            <>
                <Header />
                <Display orderData={this.state.orders}/>
            </>
        )
    }

    componentDidMount(){
        if(this.props.location){
            let query = this.props.location.search.split('&');
            if(query){
                let data = {
                    "status": query[0].split('=')[1],
                    "date": query[2].split('=')[1].replace('%20',' '),
                    "bank": query[3].split('=')[1].replaceAll('%20',' ')
                }
                let id = query[1].split('=')[1].split('_')[1];
                fetch(`${orderApi}/${id}`,{
                    method:'PATCH',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify(data)
                })
            }
        }

        let sessionData = sessionStorage.getItem('userInfo')?sessionStorage.getItem('userInfo').split(','):[]


        axios.get(`${getOrder}?email=${sessionData[1]}`).then((res) => {this.setState({orders:res.data}); console.log(res.data)})
    }
}

export default ViewOrder;
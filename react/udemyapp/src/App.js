import React,{Component} from 'react'
import {Route, BrowserRouter} from 'react-router-dom'

import Header from './header/header'
import Footer from './footer/footer'
import Home from './component/home/home'
import Login from './component/login/login';
import Register from './component/login/signUp'
import List from './component/listingPage/listing'
import Details from './component/orderDetails/order'



class Routing extends Component{
    constructor(){
        super();

        this.state={

        }
    }

    render(){
        return(
            <BrowserRouter>
                <Header/>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/listing" component={List} />
                <Route path="/orderDetails" component={Details} />
                <Footer/>
            </BrowserRouter>
                
        
        )
    }
}

export default Routing;
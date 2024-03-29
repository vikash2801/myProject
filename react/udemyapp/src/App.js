import React,{Component} from 'react'
import {Route, HashRouter} from 'react-router-dom'

/* import Header from './header/header' */
import Footer from './footer/footer'
import Home from './component/home/home'
import Login from './component/login/login';
import Register from './component/login/signUp'
import List from './component/listingPage/listing'
import Details from './component/Details/courseDetails'
import PlaceOrder from './component/orders/placeOrder';
import ViewOrder from './component/orders/viewOrder';



class Routing extends Component{
    constructor(){
        super();

        this.state={

        }
    }

    render(){
        return(
            <HashRouter>
                {/* <Header/> */}
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/listing/:cat" component={List} />
                <Route path="/details" component={Details} />                
                <Route path="/placeOrder" component={PlaceOrder}/> {/* /:courseType */}
                <Route path="/viewBooking" component={ViewOrder}/>

                <Footer/>
            </HashRouter>
                
        
        )
    }
}

export default Routing;
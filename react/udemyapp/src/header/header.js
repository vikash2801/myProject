import React, {Component} from 'react';
import {Link,withRouter} from 'react-router-dom';

import './header.css';

//const url = "http://localhost:5000/api/auth/userInfo"
const url = "https://loginapi-wo9y.onrender.com/api/auth/userInfo"

class Header extends Component{
    constructor(){
        super()

        this.state = {
            userData: ''
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('ltk')
        this.setState({userData:''})
        this.props.history.push('/')
    }

    conditionalHeader = () => {
        console.log('conditional header')
        if(this.state.userData.name){
            let data = this.state.userData;
            let outArray = [data.name,data.email,data.phone];
            sessionStorage.setItem('userInfo',outArray)
            return(
                <>  
                    <div id="account">
                        <div className="std-width login bg-info"><Link to="/" className="font-black"><span><i className="fa-solid fa-user"></i> Hi {data.name}</span></Link></div>
                        <button className="std-width bg-danger logoutButton" onClick={this.handleLogout}><i className="fa-solid fa-right-from-bracket"></i> Logout</button>                            
                    </div>
                </>
            )
           

        }else{
            return(
                    <>
                        <div id="account">
                            <div className="std-width login"><Link to="/login" className="font-black"><span>Log in</span></Link></div>
                            <div className="dark std-width"><Link to="/register" className="font-white">Sign up</Link></div>
                            <div id="browser">
                                    <a href="#">
                                        <div>
                                            <img src="https://i.ibb.co/VTR947Y/browselogo.png" alt="browse-icon"/>
                                        </div>
                                    </a> 
                            </div>
                        </div>
                                                
                    </>
            )
        }
        
    }

    render(){
        return(
            <>
                
                <header>
                 <div id="headerComponent">   
                    <div className="flexDiv">
                        <div id="brand">
                            <Link to="/" target="_blank">
                                <img src="/images/logo-udemy.svg" alt="Udemy logo"/>
                            </Link>                    
                        </div>
                        <div id="catgries"><Link to="/listing" className="font-black">Categories</Link></div>
                        <div id="searchbox">
                            <div id="searchlogo">
                                <div>
                                    <img src="https://i.ibb.co/MV4RZy2/logo-search.jpg" alt="search-icon"/>
                                </div>
                            </div>
                            <div id="search"><input type="text" name="Search" placeholder="Search for anything" /></div>
                        </div>
                        <div id="UBness"><a href="#" className="font-black">Udemy Business</a></div>
                        <div id="tudemy"><a href="#" className="font-black">Teach on Udemy</a></div>
                        <div id="cart">
                            <a href="#">
                                <div>
                                    <Link to="/placeOrder"><img src="https://i.ibb.co/nsfzh24/cart.jpg" alt="cart-icon"/></Link>
                                </div>
                            </a>
                        </div>
                        <div id="day-night">
                            <button onClick={this.changeTheme}>                            
                                    <img src="https://i.ibb.co/6N3JqNm/night-mode.png" alt="light-icon"  className="theme-img" />
                            </button>
                        </div> 
                        </div>  
                        {this.conditionalHeader()}         
                    </div>
                
            </header>

            </>
        )
    }

    componentDidMount(){
        fetch(url,{
            method: 'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk'),
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                userData:data
            })
        })
    }
    
}


export default withRouter(Header);
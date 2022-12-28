import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './header.css';

class Header extends Component{
    constructor(){
        super()

        this.state = {

        }
    }

    render(){
        return(
            <>
                
                <header>
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
                                <img src="https://i.ibb.co/nsfzh24/cart.jpg" alt="cart-icon"/>
                            </div>
                        </a>
                    </div>
                    <div id="day-night">
                        <button onClick="changeTheme()">                            
                                 <img src="https://i.ibb.co/6N3JqNm/night-mode.png" alt="light-icon"  className="theme-img" />
                        </button>
                    </div>            
                   
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
                </div>
            </header>

            </>
        )
    }
}


export default Header;
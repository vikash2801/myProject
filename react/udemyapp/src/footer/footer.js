import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './footer.css';

class Footer extends Component{
    constructor(){
        super()

        this.state = {

        }
    }

    render(){
        return(
            <>
              <footer>
                <div className="bottom1">
                    <div className="attr left">
                        <ul>
                            <li><a href="#" className="font-white">Udemy Business</a></li>
                            <li><a href="#" className="font-white">Teach on Udemy</a></li>
                            <li><a href="#" className="font-white">Get the app</a></li>
                            <li><a href="#" className="font-white">About</a></li>
                            <li><a href="#" className="font-white">Contact us</a></li>
                        </ul>
                    </div>
                    <div className="attr left">
                        <ul>
                            <li><a href="#" className="font-white">Careers</a></li>
                            <li><a href="#" className="font-white">Blog</a></li>
                            <li><a href="#" className="font-white">Help and Support</a></li>
                            <li><a href="#" className="font-white">Affiliate</a></li>
                            <li><a href="#" className="font-white">Investors</a></li>
                        </ul>
                    </div>
                    <div className="attr left">
                        <ul>
                            <li><a href="#" className="font-white">Terms</a></li>
                            <li><a href="#" className="font-white">Privacy policy</a></li>
                            <li><a href="#" className="font-white">Cookie settings</a></li>
                            <li><a href="#" className="font-white">Sitemap</a></li>
                            <li><a href="#" className="font-white">Accessibility statement</a></li>
                        </ul>
                    </div>
                    <div className="right-bordered">
                        <a href="#" target="_blank">
                            <div id="lang-chng">
                                <div id="lang-img"><img src="https://i.ibb.co/yydj5sM/lang-icon.jpg"/></div>
                                <div id="lang">English</div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="bottom2">
                    <div id="brand" className="bnd-inline">
                        <Link to="/" target="_blank"> <img src="/images/logo-udemy-inverted.svg" alt="Udemy logo"/> </Link>
                    </div>
                    <div id="copyright">
                        <span>&copy; 2022 Vikash</span>
                    </div>
                </div>
            </footer>
            
        {/* <div id="current_loc">
            <div className="head">
                <button className="myLocation" onclick="getMyLocation()" data-bs-toggle="collapse" data-bs-target="#weatherDetails">TrackMe</button>
            </div>
            <div className="tail collapse" id="weatherDetails">
                <h4 className="myLoc"></h4>
                <p className="myLocTemp"></p>
            </div>
        </div>
        <div id="Udemy_coupon" className="card">
                <button className="closeCoupon btn-close" onClick="closeCoupon()"></button>
                <div className="card-body">
                    <div><a href="#" target="_blank"> <img src="images/logo-udemy.svg" alt="Udemy logo"/> </a></div>
                    <div><h5 className="text-muted">Up to 60% Off - Course starting at &#8377;500</h5></div>
                    <div className="CouponCode">UDEAFFCCA420</div>
                    <a href="#" target="_blank"><div className="copyCouponCode" role="button">Copy Code</div></a>
                    <div><a href="#" target="_blank">Continue to offer <i className="fa fa-angle-right" aria-hidden="true"></i></a></div>
                </div>
            </div>
        </div>
        <script>
            window.onload = loadCoupon(),

            $('.owl-carousel').owlCarousel({
                loop:true,
                margin:10,
                nav:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:5
                    }
                }
            })
        </script> 

 */}            
 
 </>
        )
    }
}


export default Footer;
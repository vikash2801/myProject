import React from 'react';
import {Link} from 'react-router-dom'
import './login.css'

const Login = () =>{
    return(
        <>
                <div className="login-Body">
                <div className="login-label">Log in to your Udemy account</div>
                <hr/>
                <div className="login-inputs">
                        <div className="Inputs">
                            <a href="#" target="_blank">
                                <img alt="fb-img" src="https://i.ibb.co/7vKZCMT/icons8-facebook-48.png" className="link-image"/>
                                <span> Continue with Facebook</span>
                            </a>
                            </div>
                        <div className="Inputs">
                            <a href="#" target="_blank">
                                <img alt="google-img" src="https://i.ibb.co/0KZjvwR/icons8-google-48.png" className="link-image"/>
                                <span> Continue with Google</span>
                            </a>
                        </div>
                        <div className="Inputs">
                            <a href="#" target="_blank">
                                <img alt="apple-img" src="https://i.ibb.co/b6ZKJfd/icons8-apple-logo-30.png" className="link-image"/>
                                <span> Continue with Apple</span>
                            </a>                        
                        </div>
                        <form>
                            <div className="form-input">
                                <div className="icons"><i className="fa fa-envelope" aria-hidden="true"></i></div>
                                <input type="email" id="email" name="email" placeholder="Email" value="" onblur="validateEmail()"/>
                            </div>
                            <p id="eout"></p>
                            <div className="form-input">
                                <div className="icons"><i className="fa fa-unlock-alt" aria-hidden="true"></i></div>
                                <input type="password" name="password" placeholder="Password" value=""/>
                            </div>
                        </form>
                        <div className="login_button">
                            <button type="button" className="loginHere" onclick="">Log in</button>
                        </div>
                        <div className="log-pass">or <a href="#">Forgot Password</a></div>
                        <br/>
                        <div className="need-signUp">
                            <p>Don't have an account? <Link to="/register">Sign up</Link></p>
                            <p><a href="#" target="_blank">Log in with your organization</a></p>                        
                        </div>                    
                </div>                   
            </div> 
        </>
    )
}

export default Login
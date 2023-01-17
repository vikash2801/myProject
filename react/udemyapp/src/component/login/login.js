import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import './login.css'

import Header from '../../header/header'

const url = "http://localhost:5000/api/auth/login"

class Login extends Component{
    constructor(){
        super()

        this.state={
            email: "vik1234@gmail.com",
            password: "test@12",
            message: ''
        }
    }

    handleChange=(event)=>{
        this.setState({[event.target.name]: [event.target.value]})
    }

    handleSubmit=()=>{
        fetch(url,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.auth === false){
                this.setState({message: data.token})
            }else{
                sessionStorage.setItem('ltk',data.token)
                this.props.history.push('/')
            }
        })
    }

    render(){
        return(
            <>      
                    <Header />
                    <div className="login-Body">
                    <div className="login-label">Log in to your Udemy account</div>
                    <p style={{color: 'red'}}>{this.state.message}</p>
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
                                    <input type="text" id="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
                                </div>
                                <p id="eout"></p>
                                <div className="form-input">
                                    <div className="icons"><i className="fa fa-unlock-alt" aria-hidden="true"></i></div>
                                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
                                </div>
                            </form>
                            <div className="login_button">
                                <button type="submit" className="loginHere" onClick={this.handleSubmit}>Log in</button>
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
}

export default Login
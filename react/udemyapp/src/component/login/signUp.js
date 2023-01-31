import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './signUp.css'

import Header from '../../header/header'

//const url = "http://localhost:5000/api/auth/register"
const url = "https://loginapi-wo9y.onrender.com/api/auth/register"

class Register extends Component{
    constructor(){
        super()

        this.state = {
            name: "Rishi",
            phone: "98767895",
            email: "rishi12@gmail.com",
            password: "12345678"

        }
    }
    /* const validateFname = () => {
        let fname = document.getElementById('fname').value;
        let fdiv = document.getElementById('fdiv');
        let fout = document.getElementById('fout');
    
        console.log("called validateFname");
        if(fname.trim().length == 0){
            fout.innerText = "Please Enter FirstName";
            fdiv.classList.remove('has-success')
            fdiv.classList.add('has-error')
        }else{
            fout.innerText = "";
            fdiv.classList.remove('has-error')
            fdiv.classList.add('has-success')
        }
    }
    
    validateEmail=()=>{
        let email = document.getElementById('email').value;
        if(email.trim().length == 0){
            document.getElementById('eout').innerText = "Please Enter Email Id"
        }else{
           if(email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$") == null){
                document.getElementById('eout').innerText = "Please Enter Valid Email"
           } else{
                document.getElementById('eout').innerText = ""
           }
        }
    }
    
    const validatePass = () => {
        let pwd = document.getElementById('pwd').value;
        if(pwd.trim().length < 15){
            if(pwd.trim().length < 8 ){
                document.getElementById('pout').innerText = "Min length is 8 "
            //    document.getElementById('ppout').style.display = "block";
                document.getElementById('ppout').style.border = "1px solid red";
            }else if(pwd.trim().length < 11) {
                document.getElementById('pout').innerText = ""
               document.getElementById('ppout').style.border = "1px solid orange";
            }
        }else{
            document.getElementById('ppout').style.border = "1px solid green";
        }
    }
     */

    handleChange=(event)=>{
        this.setState({[event.target.name]: [event.target.value]})
    }
    handleSubmit =() =>{
        fetch(url,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push('/'))
    }

    render(){
        return(
            <>
                <Header />
                <div className="signUp-Body">
                <div className="signUp-label">Sign up and start learning</div>
                <div className="signUp-inputs">
                    <div className="inputs" id="fdiv">
                        <p className="added_placeholder"></p>
                        <input type="text" id="fname" name="name" placeholder="Full name" value={this.state.name} onChange={this.handleChange}/* onblur="validateFname()" */ required/>
                    </div>
                    <p id="fout"></p>

                    <div className="inputs">
                        <p className="added_placeholder"></p>
                        <input type="number" id="phone" name="phone" placeholder="phone" value={this.state.phone} onChange={this.handleChange}/* oninput="validatePass()" */ required/>
                    </div>

                    <div className="inputs">
                        <p className="added_placeholder"></p>
                        <input type="email" id="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/* oninput="validateEmail()" */ required/>
                    </div>
                    <p id="eout"></p>

                    <div className="inputs" id="ppout">
                        <p className="added_placeholder"></p>
                        <input type="password" id="pwd" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/* oninput="validatePass()" */ required/>
                        <p className="validation_level"></p>
                    </div>
                    <p id="pout"></p>

                    <div className="special_offers">
                        <div className="Box"><input type="checkbox" /></div><div className="checktxt">Send me special offers, personalized recommendations, and learning tips.</div>
                    </div>
                    <div className="signUp_button">
                        <button type="submit" className="signUp" onClick={this.handleSubmit}>Sign up</button>
                    </div>
                    <div className="terms-conditions">
                        <span>By signing up, you agree to our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.</span>
                    </div> 
                </div>
                <hr/>
                <div className="having_account">Already have an account? <Link to="/login">Log in</Link></div>                    
            </div>

            </>
        )
    }
}

export default Register;
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './signUp.css'

class Register extends Component{
    constructor(){
        super()

        this.state = {

        }
    }

    render(){
        return(
            <>
                    <div className="signUp-Body">
                <div className="signUp-label">Sign up and start learning</div>
                <div className="signUp-inputs">
                    <div className="inputs" id="fdiv">
                        <p className="added_placeholder"></p>
                        <input type="text" id="fname" name="fullName" placeholder="Full name" value="" onblur="validateFname()" required/>
                    </div>
                    <p id="fout"></p>

                    <div className="inputs">
                        <p className="added_placeholder"></p>
                        <input type="email" id="email" name="email" placeholder="Email" value="" oninput="validateEmail()" required/>
                    </div>
                    <p id="eout"></p>

                    <div className="inputs" id="ppout">
                        <p className="added_placeholder"></p>
                        <input type="password" id="pwd" name="password" placeholder="Password" value="" oninput="validatePass()" required/>
                        <p className="validation_level"></p>
                    </div>
                    <p id="pout"></p>

                    <div className="special_offers">
                        <div className="Box"><input type="checkbox" /></div><div className="checktxt">Send me special offers, personalized recommendations, and learning tips.</div>
                    </div>
                    <div className="signUp_button">
                        <button type="button" className="signUp" onclick="">Sign up</button>
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
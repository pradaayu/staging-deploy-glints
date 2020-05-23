import React from "react";
import "../assets/style/style.css";
import {Link} from "react-router-dom";

const SignUp = () => {
    return (
        <div className="row">
            <div className="blue__wrapper col-lg-1">
                <h6 className="blue__title">Todos</h6>
                <h3 className="blue__text blue__greet">Welcome Back!</h3>
                <p className="blue__text blue__connect">To keep connected with us, 
                    please log in with your personal info
                </p>
                <Link to="/signin" className="btn btn-signin">SIGN IN</Link>
            </div>
            <div className="white__wrapper col-lg-2">
                <h3 className="white__text--title">Create Account</h3>
                <ul className="socmed__wrapper">
                    <li className="socmed__icon"><img className="socmed__icon--image" src={require("../assets/images/facebook.png")} alt="facebook"/></li>
                    <li className="socmed__icon"><img className="socmed__icon--image" src={require("../assets/images/google-plus.png")} alt="gplus"/></li>
                    <li className="socmed__icon"><img className="socmed__icon--image" src={require("../assets/images/linkedin.png")} alt="linkedin"/></li>
                </ul>
                <p className="blue__connect white__text--desc">or use your email for registration</p>
                <div className="form__wrapper">
                    <form>
                        <input type="text" placeholder="Name"></input>
                        <input type="email" placeholder="Email"></input>
                        <input type="password" placeholder="Password"></input>
                        <input className="btn btn__form" type="submit" value="SIGN UP"></input>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp;
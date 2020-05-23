import React from "react";
import "../assets/style/style.css";
import {Link} from "react-router-dom";

const SignIn = () => {
    return (
        <div className="row">
            <div className="blue__wrapper col-lg-1">
                <h6 className="blue__title">Todos</h6>
                <h3 className="blue__text blue__greet">Hello, Friend!</h3>
                <p className="blue__text blue__connect">Enter your personal details and 
                    start your journey with us
                </p>
                <Link to="/" className="btn btn-signup">SIGN UP</Link>
            </div>
            <div className="white__wrapper col-lg-2">
                <h3 className="white__text--title">Sign in to Task Manager</h3>
                <ul className="socmed__wrapper">
                    <li className="socmed__icon"><img className="socmed__icon--image" src={require("../assets/images/facebook.png")} alt="facebook"/></li>
                    <li className="socmed__icon"><img className="socmed__icon--image" src={require("../assets/images/google-plus.png")} alt="gplus"/></li>
                    <li className="socmed__icon"><img className="socmed__icon--image" src={require("../assets/images/linkedin.png")} alt="linkedin"/></li>
                </ul>
                <p className="blue__connect white__text-desc">or use your email account</p>
                <form>
                    <input type="email" placeholder="Email"></input>
                    <input type="password" placeholder="Password"></input>
                    <input className="btn btn__form" type="submit" value="SIGN UP"></input>
                </form>
            </div>
        </div>
    )
}

export default SignIn;
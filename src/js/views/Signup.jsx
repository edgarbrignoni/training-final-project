import React from 'react';
import { Consumer } from '../stores/AppContext.jsx';
import Navbar from '../component/Navbar.jsx';

class Signup extends React.Component{

	constructor(props){
        super(props);
        this.state = {
        };
    }
    
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <p>&nbsp;</p>
                <div className="container login-container">
                    <div className="row">
                        <div className="col-lg-6 new-member">
                            <h2 className="strong text-center mb-4">New Member</h2>
                            <a href="./plan" alt="New Member">
                                <img src="http://via.placeholder.com/350x150" className="w-100 mb-4" />
                            </a>
                            <h5 className="strong text-center mb-4 text-muted">Start feeling healthy and full of energy!</h5>
                            <div className="text-center mb-4">
                                <a href="./plan" className="btn btn-primary caps w-100">SELECT A PLAN</a>
                            </div>
                            <p className="text-center mb-4 text-muted">After purchase, you`ll receive your password to login!</p>
                        </div>
                        <div className="col-lg-6 returning-member">
                            <h2 className="strong text-center mb50">Returning Member</h2>
                            <form method="POST" action="https://my.foodbabe.com/login" acceptCharset="UTF-8" id="my-login-form">
                                <div className="d-none form-group mb-4">
                                    <label htmlFor="formGroupInputUsername"><span className="text-muted strong">Username</span><span className="text-muted"> (Required)</span></label>
                                    <input type="identity" className="form-control form-control-lg sharp" id="formGroupInputUsername" name="identity" placeholder="Username..." />
                                </div>
                                <div className="d-none form-group mb35">
                                    <label htmlFor="formGroupInputPassword"><span className="text-muted strong">Password</span><span className="text-muted"> (Required)</span></label>
                                    <input type="password" className="form-control form-control-lg sharp" id="formGroupInputPassword" name="password" placeholder="Password..." />
                                </div>
                                <a href="./login" className="btn btn-primary w-100 mt-4" id="xmy-login-btn">LOGIN</a>
                            </form>
                            <div className="text-center alert alert-warning mt-4" id="my-login-msg" style={{ display:'none' }}>
                            </div>
                            <p className="text-center mt-4"><a href="./forgot" className="text-muted">Forgot password?</a></p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Signup;
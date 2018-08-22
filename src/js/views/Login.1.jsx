import React from 'react';
import { Consumer } from '../stores/AppContext.jsx';
import PropTypes from "prop-types";
import Navbar from '../component/Navbar.jsx';

class Login extends React.Component{

	constructor(props){
        super(props);
        
        this.state = {
            username: "",
            password: ""
        };
    }
    
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <main className="py-4 pl-1 foodbabe-main">
                    <div className="container myfb-login">
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <div className="card">
                                    <div className="card-header bg-dark">LOGIN</div>
                                    <div className="card-body">
                                        <form method="POST" action="./login">
                                            <input type="hidden" name="_token" value="h51GZO8hFTrBOqnEXYDZmJJlE9vHD1sNyS6dgM6p" />
                                            <div className="form-group row">
                                                <label htmlFor="identity" className="col-sm-4 col-form-label text-md-right">Username</label>
                                                <div className="col-md-6">
                                                    <input id="identity" type="identity" className="form-control fb-input-lg" name="identity" value="" autoFocus="" autoComplete="off" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>
                                                <div className="col-md-6">
                                                    <input id="password" type="password" className="form-control" name="password" required="" autoComplete="off" />
                                                </div>
                                            </div>
                                            <div className="form-group row mb-0">
                                                <div className="col-md-6 offset-md-4">
                                                    <button type="submit" className="btn btn-primary">
                                                        Login
                                                    </button>
                                                    <a className="btn btn-link" href="./forgot">
                                                        Forgot Your Password?
                                                    </a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}

export default Login;

Login.propTypes = {
    //prop_name: PropTypes.type_of_the_prop
};
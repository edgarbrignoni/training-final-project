import React from 'react';
import { withSession } from '../stores/AppContext.jsx';
import { Consumer } from '../stores/AppContext.jsx';
import PropTypes from "prop-types";
import Navbar from '../component/Navbar.jsx';

class Login extends React.Component{

	constructor(props){
        super(props);
        
        this.state = {
            username: "edgarbrignoni",
            password: "4GeeksAcademy"
        };
    }
    
    render(){
        const {session, actions} = this.props;
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
                                        <form role="form" onSubmit={(e) => {
                                            e.preventDefault();
                                            actions.loadSession(this.state.username, this.state.password);
                                        }}>
                                            <input type="hidden" name="_token" value="h51GZO8hFTrBOqnEXYDZmJJlE9vHD1sNyS6dgM6p" />
                                            <div className="form-group row">
                                                <label htmlFor="identity" className="col-sm-4 col-form-label text-md-right">Username</label>
                                                <div className="col-md-6">
                                                    <input 
                                                        id="identity" 
                                                        className="form-control fb-input-lg" 
                                                        type="text" 
                                                        name="user" 
                                                        value={this.state.user} 
                                                        placeholder="Username" 
                                                        onChange={(e) => this.setState({username: e.target.value})} 
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>
                                                <div className="col-md-6">
                                                    <input 
                                                        id="password" 
                                                        className="form-control" 
                                                        type="password" 
                                                        name="password" 
                                                        value={this.state.password} 
                                                        placeholder="Password" 
                                                        onChange={(e) => this.setState({password: e.target.value})}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row mb-0">
                                                <div className="col-md-6 offset-md-4">
                                                    <button type="submit" className="btn btn-lg btn-block btn-outline-primary">
                                                        Login
                                                    </button><br />
                                                    <a className="btn btn-link p-0" href="./forgot">
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

export default withSession(Login);

Login.propTypes = {
    session: PropTypes.object,
    actions: PropTypes.object,
    currentView: PropTypes.string
};
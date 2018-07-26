import React from 'react';
import $ from "jquery";
import { Link } from "react-router-dom";
import { withSession } from '../stores/AppContext.jsx';
import PropTypes from "prop-types";
// import logo from '../../img/logo4Geeks.png';

class NavBar extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            username: "",
            password: "",
            modal: false
        };
    }
    
    //componentDidUpdate(prevProps, prevState) {
        // Previous ThemeContext value is prevProps.theme
        // New ThemeContext value is this.props.theme
        //if(this.props.session.token) $('#exampleModal').modal('hide');
    //}
    
    render(){
        let homeActive = this.props.currentView === "home" ? "active" :"";
        
        const {session, actions} = this.props;
        
        return(
            <div>
                <nav className="navbar navbar-dark bg-dark justify-content-between navbar-expand-sm fixed-top">
                    <Link className="navbar-brand" to="/">
                        <img id="logoInverted" className="img-fluid" src="./img/logo.png" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to={"/Home"} className="nav-item nav-link text-white" >Home</Link>
                            <Link to={"/Workout"} className="nav-item nav-link text-white" >Workout</Link>
                            <Link to={"/Yoga"} className="nav-item nav-link text-white" >Yoga</Link>
                            <Link to={"/Nutrition"} className="nav-item nav-link text-white" >Nutrition</Link>
                            <Link to={"/Profile"} className="nav-item nav-link text-white" >Profile</Link>
                            <Link to={"/Form"} className="nav-item nav-link text-white" >Form</Link>
                            {session && typeof(session.user_nicename) !== 'undefined' ?
                                <button type="button" className="btn btn-dark" onClick={(e) => actions.logout()}>
                                    <img id="logoInverted" className="img-fluid" src="./img/login.png" />
                                    <p className="login">Logout</p>
                                </button>
                            :
                                <button
                                    type="button"
                                    className="btn btn-dark"
                                    data-toggle="modal" 
                                    data-target="#exampleModal">
                                    <img id="logoInverted" className="img-fluid" src="./img/user.png" />
                                    <p className="login">Login</p>
                                </button>
                            }
                        </div>
                    </div>
                </nav>
                <div className="row top-spacer">
                </div>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form role="form" onSubmit={(e) => {
                                    e.preventDefault();
                                    actions.loadSession(this.state.username, this.state.password);
                                }}>
                                    <div className="form-group">
                                        <input type="text" name="user" value={this.state.user} placeholder="Username" onChange={(e) => this.setState({username: e.target.value})} />
                                        <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={(e) => this.setState({password: e.target.value})} />
                                    </div>
                                    <input type="submit" value="Login" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withSession(NavBar);

NavBar.propTypes = {
    session: PropTypes.object,
    actions: PropTypes.object,
    currentView: PropTypes.string
};
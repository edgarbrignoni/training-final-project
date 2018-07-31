import React from 'react';
import { Link } from "react-router-dom";
import { withSession } from '../stores/AppContext.jsx';
import PropTypes from "prop-types";

class NavBar extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            username: "",
            password: "",
            modal: false
        };
    }
    
    render(){
        return(
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <a className="navbar-brand" href="#">Fitness</a>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                    <form className="form-inline mt-2 mt-md-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        );
    }
}

export default NavBar;

NavBar.propTypes = {
    session: PropTypes.object,
    actions: PropTypes.object,
    currentView: PropTypes.string
};
import React from 'react';
import PropTypes from "prop-types";

class ProfileOverall extends React.Component{

	constructor(props){
        super(props);
        this.state = {
        };
    }
    
    render(){
        return (
            <div className="card border-dark mb-3" id="profile-info">
                <div className="card-header text-white bg-dark border-dark">OVERALL GOAL:</div>
                <div className="card-body text-dark">
                    <h5 className="card-title">This is your overall goal:</h5>
                </div>
                <div className="card-footer bg-transparent border-dark">Achieve on July 25, 2018</div>
            </div>
        );
    }
}

export default ProfileOverall;
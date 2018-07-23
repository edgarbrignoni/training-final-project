import React from 'react';
import PropTypes from "prop-types";

class ProfileInfo extends React.Component{

	constructor(props){
        super(props);
        this.state = {
        };
    }
    
    render(){
        return (
            <div className="card border-dark mb-3" id="profile-info">
                <div className="card-header text-white bg-dark border-dark">MEMBER INFO:</div>
                <div className="card-body text-dark">
                    <h5 className="card-title">Name:</h5>
                    <h5 className="card-title">Age:</h5>
                    <h5 className="card-title">Gender:</h5>
                    <h5 className="card-title">Location:</h5>
                </div>
                <div className="card-footer bg-transparent border-dark">Member since June 16 ,2018</div>
            </div>
        );
    }
}

export default ProfileInfo;
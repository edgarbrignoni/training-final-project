import React from 'react';
import PropTypes from "prop-types";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCog from '@fortawesome/fontawesome-free-solid/faCog';

class OverallGoal extends React.Component{

	constructor(props){
        super(props);
        this.state = {
        };
    }
    
    render(){
        return (
            <div className="card border-dark mb-3" id="profile-info">
                <div className="card-header text-white bg-dark border-dark">OVERALL GOAL:
                    <button type="button" className="btn btn-secondary btn-sm float-right">
                        <FontAwesomeIcon className="fa-lg" icon={faCog} />
                    </button>
                </div>
                <div className="card-body text-dark">
                    <h5 className="card-title">This is your overall goal:</h5>
                </div>
                <div className="card-footer bg-transparent border-dark">Achieve on July 25, 2018</div>
            </div>
        );
    }
}

export default OverallGoal;

OverallGoal.propTypes = {
    //prop_name: PropTypes.type_of_the_prop
};
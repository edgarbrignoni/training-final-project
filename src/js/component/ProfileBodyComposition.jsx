import React from 'react';
import PropTypes from "prop-types";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCog from '@fortawesome/fontawesome-free-solid/faCog';

class ProfileBodyComposition extends React.Component{

	constructor(props){
        super(props);
        this.state = {
        };
    }
    
    render(){
        return (
            <div className="card border-dark mb-3">
                <div className="card-header text-white bg-dark border-dark">BODY COMPOSITION:
                    <button type="button" className="btn btn-secondary btn-sm float-right">
                        <FontAwesomeIcon className="fa-lg" icon={faCog} />
                    </button>
                </div>
                <div className="card-body text-dark">
                    <h5 className="card-title">Current Weight: -- lbs.</h5>
                    <h5 className="card-title">Current Body Fat: -- %</h5>
                    <h5 className="card-title">Lean Body Mass: -- lbs.</h5>
                    <h5 className="card-title">Body Fat: -- lbs.</h5>
                </div>
            </div>
        );
    }
}

export default ProfileBodyComposition;

ProfileBodyComposition.propTypes = {
    //prop_name: PropTypes.type_of_the_prop
};
import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCog from '@fortawesome/fontawesome-free-solid/faCog';


class MemberInfo extends React.Component{

	constructor(props){
        super(props);
        this.state = {
        };
    }
    
    render(){
        return (
            <div className="card border-dark mb-3">
                <div className="card-header text-white bg-dark border-dark">MEMBER INFO:
                    <button type="button" className="btn btn-secondary btn-sm float-right">
                        <FontAwesomeIcon className="fa-lg" icon={faCog} />
                    </button>
                </div>
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

export default MemberInfo;
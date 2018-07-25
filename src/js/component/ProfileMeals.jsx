import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCog from '@fortawesome/fontawesome-free-solid/faCog';


class ProfileMeals extends React.Component{

	constructor(props){
        super(props);
        this.state = {
        };
    }
    
    render(){
        return (
            <div className="card border-dark mb-3">
                <div className="card-header text-white bg-dark border-dark">UPCOMING MEALS:
                    <button type="button" className="btn btn-secondary btn-sm float-right">
                        <FontAwesomeIcon className="fa-lg" icon={faCog} />
                    </button>
                </div>
                <div className="row no-gutters">
                    <div className="col-6">
                        <div className="card-footer bg-transparent border-dark">MONDAY</div>
                    </div>
                    <div className="col-6">
                        <div className="card-footer bg-transparent border-dark">
                            BREAKFAST:<br />
                            LUNCH:<br />
                            DINNER:<br />
                        </div>
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-6">
                        <div className="card-footer bg-transparent border-dark">TUESDAY</div>
                    </div>
                    <div className="col-6">
                        <div className="card-footer bg-transparent border-dark">
                            BREAKFAST:<br />
                            LUNCH:<br />
                            DINNER:<br />
                        </div>
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-6">
                        <div className="card-footer bg-transparent border-dark">WEDNESDAY</div>
                    </div>
                    <div className="col-6">
                        <div className="card-footer bg-transparent border-dark">
                            BREAKFAST:<br />
                            LUNCH:<br />
                            DINNER:<br />
                        </div>
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-6">
                        <div className="card-footer bg-transparent border-dark">THURSDAY</div>
                    </div>
                    <div className="col-6">
                        <div className="card-footer bg-transparent border-dark">
                            BREAKFAST:<br />
                            LUNCH:<br />
                            DINNER:<br />
                        </div>
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-6">
                        <div className="card-footer bg-transparent border-dark">FRIDAY</div>
                    </div>
                    <div className="col-6">
                        <div className="card-footer bg-transparent border-dark">
                            BREAKFAST:<br />
                            LUNCH:<br />
                            DINNER:<br />
                        </div>
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-6">
                        <div className="card-footer bg-transparent border-dark">SATURDAY</div>
                    </div>
                    <div className="col-6">
                        <div className="card-footer bg-transparent border-dark">
                            BREAKFAST:<br />
                            LUNCH:<br />
                            DINNER:<br />
                        </div>
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-6">
                        <div className="card-footer bg-transparent border-dark">SUNDAY</div>
                    </div>
                    <div className="col-6">
                        <div className="card-footer bg-transparent border-dark">
                            BREAKFAST:<br />
                            LUNCH:<br />
                            DINNER:<br />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileMeals;
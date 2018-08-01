import React from 'react';
import { Link } from "react-router-dom";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCog from '@fortawesome/fontawesome-free-solid/faCog';


class UpcomingWorkouts extends React.Component{

	constructor(props){
        super(props);
        this.state = {
        };
    }
    
    render(){
        return (
            <div className="card border-dark mb-3">
                <div className="card-header text-white bg-dark border-dark">UPCOMING WORKOUTS:
                    <button type="button" className="btn btn-secondary btn-sm float-right">
                        <FontAwesomeIcon className="fa-lg" icon={faCog} />
                    </button>
                </div>
                <div className="row no-gutters">
                    <div className="col-4">
                        <div className="card-footer bg-transparent border-dark p-2">MONDAY</div>
                    </div>
                    <div className="col-8">
                        <div className="card-footer bg-transparent border-dark p-2">
                            CHEST AND ABS
                        </div>
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-4">
                        <div className="card-footer bg-transparent border-dark p-2">TUESDAY</div>
                    </div>
                    <div className="col-8">
                        <div className="card-footer bg-transparent border-dark p-2">
                            SHOULDERS TRICEPS BICEPS
                        </div>
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-4">
                        <div className="card-footer bg-transparent border-dark p-2">WEDNESDAY</div>
                    </div>
                    <div className="col-8">
                        <div className="card-footer bg-transparent border-dark p-2">
                            CARDIO:<br />
                            TIME:<br />
                            INTENSITY:<br />
                        </div>
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-4">
                        <div className="card-footer bg-transparent border-dark p-2">THURSDAY</div>
                    </div>
                    <div className="col-8">
                        <div className="card-footer bg-transparent border-dark p-2">
                            UPPER BODY:<br />
                            REPETITIONS:<br />
                            INTENSITY:<br />
                        </div>
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-4">
                        <div className="card-footer bg-transparent border-dark p-2">FRIDAY</div>
                    </div>
                    <div className="col-8">
                        <div className="card-footer bg-transparent border-dark p-2">
                            LOWER BODY:<br />
                            REPETITIONS:<br />
                            INTENSITY:<br />
                        </div>
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-4">
                        <div className="card-footer bg-transparent border-dark p-2">SATURDAY</div>
                    </div>
                    <div className="col-8">
                        <div className="card-footer bg-transparent border-dark p-2">
                            CARDIO:<br />
                            TIME:<br />
                            INTENSITY:<br />
                        </div>
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-4">
                        <div className="card-footer bg-transparent border-dark p-2">SUNDAY</div>
                    </div>
                    <div className="col-8">
                        <div className="card-footer bg-transparent border-dark p-2">REST</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpcomingWorkouts;
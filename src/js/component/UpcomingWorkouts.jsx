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
                <div className="month"> 
                    <ul>
                        <li>Your Weekly Workout</li>
                    </ul>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <ul className="weekdays">
                            <li>Mo</li>
                            <li>Tu</li>
                            <li>We</li>
                            <li>Th</li>
                            <li>Fr</li>
                            <li>Sa</li>
                            <li>Su</li>
                        </ul>
                        <ul className="days"> 
                            <li>
                                <Link style={{ textDecoration: 'none' }} to="/workout">
                                    <button type="button" className="btn btn-light">Chest<br/>Arms</button>
                                </Link>    
                            </li>
                            <li>
                                <Link style={{ textDecoration: 'none' }} to="/workout">
                                    <button type="button" className="btn btn-light">Chest<br/>Arms</button>
                                </Link>
                            </li>
                            <li>
                                <Link style={{ textDecoration: 'none' }} to="/workout">
                                    <button type="button" className="btn btn-light">Chest<br/>Arms</button>
                                </Link>
                            </li>
                            <li>
                                <Link style={{ textDecoration: 'none' }} to="/workout">
                                    <button type="button" className="btn btn-light">Chest<br/>Arms</button>
                                </Link>
                            </li>
                            <li>
                                <Link style={{ textDecoration: 'none' }} to="/workout">
                                    <button type="button" className="btn btn-light">Chest<br/>Arms</button>
                                </Link>
                            </li>
                            <li>
                                <Link style={{ textDecoration: 'none' }} to="/workout">
                                    <button type="button" className="btn btn-light">Chest<br/>Arms</button>
                                </Link>
                            </li>
                            <li>
                                <Link style={{ textDecoration: 'none' }} to="/workout">
                                    <button type="button" className="btn btn-light">Chest<br/>Arms</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>    
            </div>
        );
    }
}

export default UpcomingWorkouts;
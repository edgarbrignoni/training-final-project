import React from 'react';
import { Consumer } from "../stores/AppContext.jsx";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCog from '@fortawesome/fontawesome-free-solid/faCog';


class Calendar extends React.Component{
    
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
                                    <button type="button" className="btn btn-light">
                                        <Consumer>
                                            {({ state }) => {
                                                var obj = state.members[0];
                                                // var result = Object.keys(obj).map(function(key) {
                                                //   return [Number(key), obj[key]];
                                                // });
                                                
                                                console.log(obj);
                                                return (
                                                    <h1>Hello</h1>
                                                );
                                            }}
                                        </Consumer>
                                    </button>
                                </Link>    
                            </li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>6</li>
                            <li>7</li>
                        </ul>
                    </div>
                </div>    
            </div>
        );
    }
}

export default Calendar;

Calendar.propTypes = {
    match: PropTypes.object
};
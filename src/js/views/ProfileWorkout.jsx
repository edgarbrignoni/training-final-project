import React from 'react';
import Navbar from "../component/Navbar.jsx";
import ProfileInfo from "../component/ProfileInfo.jsx";
import ProfileOverallGoal from "../component/ProfileOverallGoal.jsx";
import ProfileBodyComposition from "../component/ProfileBodyComposition.jsx";
import ProfileWeightFatGoals from "../component/ProfileWeightFatGoals.jsx";
import ProfileProgressPhoto from "../component/ProfileProgressPhoto.jsx";

class ProfileWorkout extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <ProfileInfo />   
                        </div>
                        <div className="col-md-6">
                            <ProfileOverallGoal />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <ProfileBodyComposition />   
                        </div> 
                        <div className="col-sm-6">
                            <ProfileWeightFatGoals />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <ProfileProgressPhoto />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="month">
                                <ul>
                                    <li className="prev">&#10094;</li>
                                    <li className="next">&#10095;</li>
                                    <li>Progress<br></br><span>2017</span></li>
                                </ul>
                            </div>
                        </div>     
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <ul className="weekdays">
                                <li>Mo</li>
                                <li>Tu</li>
                                <li>We</li>
                                <li>Th</li>
                                <li>Fr</li>
                                <li>Sa</li>
                                <li>Su</li>
                            </ul>
                        </div>
                    </div>    
                    <div className="row">    
                        <div className="col-12">
                            <ul className="days"> 
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li><span className="active">5</span></li>
                            </ul>
                        </div>
                    </div>    
                    <div className="card text-center">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">Program</h4>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title"><small className="text-muted">THIS MEMBER IS NOT CURRENTLY FOLLOWING A PROGRAM</small></h5>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ProfileWorkout;
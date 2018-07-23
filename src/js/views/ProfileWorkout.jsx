import React from 'react';
import Navbar from "../component/Navbar.jsx";
import ProfileInfo from "../component/ProfileInfo.jsx";
import ProfileOverall from "../component/ProfileOverall.jsx";

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
                            <ProfileOverall />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card bg-light mb-3">
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col-m-6">
                                            <h4>Current Body Composition</h4>
                                        </div>
                                        <div className="col-m-6 text-right">
                                            <ul>
                                                <li className="add">
                                                    <a data-action="activeRequired" href="#"><div className="icon"></div>Add Goal</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>    
                                </div>
                                <div className="row">
                                    <div className="col-6 text-center">
                                        <h3><small className="text-muted">Current Weight</small></h3>
                                        <ul>
                                            <li><span className="currentValue">--</span><span className="unit currentValueUnit">Lbs.</span></li>
                                        </ul> 
                                    </div>
                                    <div className="col-6 text-center">
                                        <h3><small className="text-muted">Current Body Fat</small></h3>
                                        <ul>
                                            <li><span className="currentValueFat">--</span><span className="currentValueUnit">%</span></li>
                                        </ul>
                                    </div>    
                                </div>
                                <div className="row">
                                    <div className="col-6"></div>
                                    <div className="col-6 text-right">
                                        <div className="stats">
                                            <h3><small className="text-muted">Lean Body Mass</small></h3>
                                            <span className="number lbm">--</span><span className="unit">Lbs.</span>
                                        </div>
                                        <div className="stats">
                                            <h3><small className="text-muted">Body Fat</small></h3>
                                            <span className="number bodyfat">--</span><span className="unit">Lbs.</span>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                        </div> 
                        <div className="col-sm-6">
                            <div className="card bg-light mb-3">
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col-m-6">
                                            <h4>Weight &amp; Body Fat Goals</h4>
                                        </div>    
                                        <div className="col-m-6 text-right">
                                            <ul>
                                                <li className="add"><a href="#">Add Goal</a></li>
                                                <li className="graph-3"><a href="#">View Goal History</a></li>
                                            </ul>
                                        </div>
                                    </div>    
                                </div>
                                <div className="row">
                                    <div className="col-6 text-center">
                                        <img className="weightModalEmpty" src="https://common.bbcomcdn.com/BB/WicketBasedModules/WeightBodyFatGoal/images/weightBFModalEmpty.png"/>
                                    </div>
                                    <div className="col-6 text-right">
                                        <h3> <small className="text-muted">Ready, Set, Goal</small></h3>
                                        <p className="text-muted">Achieving the health and fitness goals of your dreams starts with a goal.  Set your weight and body fat goals and get the tools you need to succeed.</p>
                                    </div>
                                </div>        
                            </div>
                        </div>
                    </div>
                    <div className="card bg-light">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-m-6">
                                    <h4>Progress Photos</h4>
                                </div>
                                <div className="col-6 text-right">
                                    <ul>
                                        <li className="upload"><a href="#">Upload New Progress Photo</a></li>
                                    </ul>
                                </div>    
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                                <img className="card-img-bottom" src="https://assets.bodybuilding.com/common/images/default-avatar/Avatar-Male-Default_196x196.jpg"/>
                                <h3>Before</h3>
                            </div>
                            <div className="col-sm-4">
                                <img className="card-img-bottom" src="https://assets.bodybuilding.com/common/images/default-avatar/Avatar-Male-Default_196x196.jpg"/>
                                <h3>Current</h3>
                            </div>
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
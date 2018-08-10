import React from 'react';
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";
import MemberInfo from "../component/MemberInfo.jsx";
import OverallGoal from "../component/OverallGoal.jsx";
import BodyComposition from "../component/BodyComposition.jsx";
import BodyFatGoals from "../component/BodyFatGoals.jsx";
import ProgressPhoto from "../component/ProgressPhoto.jsx";
import UpcomingWorkouts from "../component/UpcomingWorkouts.jsx";
import UpcomingMeals from "../component/UpcomingMeals.jsx";

class ProfileWorkout extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <h1 className="py-2 text-center">PROFILE</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <MemberInfo />   
                        </div>
                        <div className="col-lg-6">
                            <OverallGoal />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <BodyComposition />   
                        </div> 
                        <div className="col-lg-6">
                            <BodyFatGoals />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ProgressPhoto />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <UpcomingWorkouts />
                        </div> 
                    </div>
                    <div className="row">
                        <div className="col-md-4 offset-md-4">
                            <Link style={{ textDecoration: 'none' }} to="/home">
                                <button className="btn btn-danger btn-checkout btn-block" type="submit">Logout</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <hr className="mb-4" />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ProfileWorkout;
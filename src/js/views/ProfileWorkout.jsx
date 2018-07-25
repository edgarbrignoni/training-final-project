import React from 'react';
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";
import ProfileInfo from "../component/ProfileInfo.jsx";
import ProfileOverallGoal from "../component/ProfileOverallGoal.jsx";
import ProfileBodyComposition from "../component/ProfileBodyComposition.jsx";
import ProfileWeightFatGoals from "../component/ProfileWeightFatGoals.jsx";
import ProfileProgressPhoto from "../component/ProfileProgressPhoto.jsx";
import ProfileUpcoming from "../component/ProfileUpcoming.jsx";
import ProfileMeals from "../component/ProfileMeals.jsx";

class ProfileWorkout extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <ProfileInfo />   
                        </div>
                        <div className="col-lg-6">
                            <ProfileOverallGoal />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <ProfileBodyComposition />   
                        </div> 
                        <div className="col-lg-6">
                            <ProfileWeightFatGoals />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ProfileProgressPhoto />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <ProfileUpcoming />   
                        </div> 
                        <div className="col-lg-6">
                            <ProfileMeals />
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default ProfileWorkout;
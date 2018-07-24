import React from 'react';
import Navbar from "../component/Navbar.jsx";
import WorkoutPersonalInfo from "../component/WorkoutPersonalInfo.jsx";
import WorkoutClinicalRecord from "../component/WorkoutClinicalRecord.jsx";
import WorkoutFamilyHistory from "../component/WorkoutFamilyHistory.jsx";
import WorkoutCondition from "../component/WorkoutCondition.jsx";
import WorkoutActivity from "../component/WorkoutActivity.jsx";

class WorkoutForm extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <div className="container">
                    <WorkoutPersonalInfo />
                    <div className="row">
                        <div className="col-lg-6">
                            <WorkoutClinicalRecord />
                        </div>
                        <div className="col-lg-6">
                            <WorkoutFamilyHistory />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <WorkoutCondition />
                        </div>
                        <div className="col-lg-6">
                            <WorkoutActivity />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default WorkoutForm;
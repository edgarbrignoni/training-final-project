import React from 'react';
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";
import BasicInfo from "../component/BasicInfo.jsx";
import ClinicalRecord from "../component/ClinicalRecord.jsx";
import FamilyHistory from "../component/FamilyHistory.jsx";
import PhysicalCondition from "../component/PhysicalCondition.jsx";
import PhysicalActivity from "../component/PhysicalActivity.jsx";

class Registration extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <h1 className="py-2 text-center">REGISTRATION</h1>
                <div className="container">
                    <BasicInfo />
                    <div className="row">
                        <div className="col-lg-6">
                            <ClinicalRecord />
                        </div>
                        <div className="col-lg-6">
                            <FamilyHistory />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <PhysicalCondition />
                        </div>
                        <div className="col-lg-6">
                            <PhysicalActivity />
                        </div>
                    </div>
                    <Link style={{ textDecoration: 'none' }} to="/profile">
                        <button className="btn btn-primary btn-checkout btn-block" type="submit">Submit</button>
                    </Link>
                </div>
                <hr className="mb-4" />
                <Footer />
            </React.Fragment>
        );
    }
}
export default Registration;
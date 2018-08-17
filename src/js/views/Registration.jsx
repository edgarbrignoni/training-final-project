import React from 'react';
import { Link, Redirect } from "react-router-dom";
import { withSession } from '../stores/AppContext.jsx';
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";
import BasicInfo from "../component/BasicInfo.jsx";
import ClinicalRecord from "../component/ClinicalRecord.jsx";
import FamilyHistory from "../component/FamilyHistory.jsx";
import PhysicalCondition from "../component/PhysicalCondition.jsx";
import PhysicalActivity from "../component/PhysicalActivity.jsx";
import PropTypes from "prop-types";

class Registration extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            repassword:"",
            age:"",
            height:"",
            weight:"",
            ocupation:"",
            hChol:"",
            obese:"",
            diabetes:"",
            hypertension:"",
            heartAttack:"",
            otherCarDis:"",
            famChol:"",
            famObese:"",
            famDiabetes:"",
            famHyper:"",
            famHAtk:"",
            otherdsease:"",
            fracture:"",
            luxation:"",
            sprain:"",
            colInjur:"",
            lowBack:"",
            kneeinjur:"",
            tear:"",
            chronic:"",
            physAct:"",
            exActive:"",
            hmtweek:"",
            purpose:""
        };
    }
    
    render(){
        const {session, actions} = this.props;
        return (
            <React.Fragment>
                <Navbar />
                <p>&nbsp;</p>
                {/*
                <h1 className="py-2 text-center">REGISTRATION</h1>
                */}
                <form role="form" onSubmit={(e) => {
                        e.preventDefault();
                        actions.updateSample(
                            this.state.firstName, 
                            this.state.lastName, 
                            this.state.email, 
                            this.state.password, 
                            this.state.repassword, 
                            this.state.age, 
                            this.state.height, 
                            this.state.weight, 
                            this.state.ocupation,
                            this.state.hChol,
                            this.state.obese,
                            this.state.diabetes,
                            this.state.hypertension,
                            this.state.heartAttack,
                            this.state.otherCarDis,
                            this.state.famChol,
                            this.state.famObese,
                            this.state.famDiabetes,
                            this.state.famHyper,
                            this.state.famHAtk,
                            this.state.otherdsease,
                            this.state.fracture,
                            this.state.luxation,
                            this.state.sprain,
                            this.state.colInjur,
                            this.state.lowBack,
                            this.state.kneeinjur,
                            this.state.tear,
                            this.state.chronic,
                            this.state.physAct,
                            this.state.exActive,
                            this.state.hmtweek,
                            this.state.purpose,
                            this.state.goaldesc
                        );
                    }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card border-dark mb-3">
                                    <div className="card-header text-white bg-dark border-dark">BASIC INFO:</div>
                                    <div className="card-body text-dark">
                                        <div>
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="inputName4">First Name *</label>
                                                    <input type="text" name="firstName" value={this.state.firstName} className="form-control" id="inputName4" placeholder="" onChange={(e) => this.setState({firstName: e.target.value})}/>
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="inputLastN4">Last Name *</label>
                                                    <input type="LastN" name="lastName" value={this.state.lastName} className="form-control" id="inputLastN4" placeholder="" onChange={(e) => this.setState({lastName: e.target.value})}/>
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="inputName44">Email *</label>
                                                    <input type="username" name="email" value={this.state.email} className="form-control" id="inputName44" placeholder="" onChange={(e) => this.setState({email: e.target.value})}/>
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="inputLastN44">Password *</label>
                                                    <input type="password" name="password" value={this.state.password} className="form-control" id="inputLastN44" placeholder="" onChange={(e) => this.setState({password: e.target.value})}/>
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="inputLastN444">Re-type Password *</label>
                                                    <input type="password" name="repassword" value={this.state.repassword} className="form-control" id="inputLastN444" placeholder="" onChange={(e) => this.setState({repassword: e.target.value})}/>
                                                </div>
                                                <div className="form-group col-md-2">
                                                    <label htmlFor="inputAge">Age *</label>
                                                    <input type="text" name="age" value={this.state.age} className="form-control" id="inputAge" onChange={(e) => this.setState({age: e.target.value})}/>
                                                </div>
                                                <div className="form-group col-md-2">
                                                    <label htmlFor="inputAge">Height *</label>
                                                    <input type="text" name="height" value={this.state.height} className="form-control" id="inputHeight" placeholder="in cm." onChange={(e) => this.setState({height: e.target.value})}/>
                                                </div>
                                                <div className="form-group col-md-2">
                                                    <label htmlFor="inputAge">Weight *</label>
                                                    <input type="text" name="weight" value={this.state.weight} className="form-control" id="inputWeight" placeholder="in lbs." onChange={(e) => this.setState({weight: e.target.value})}/>
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="inputOcupationN4">Ocupation</label>
                                                    <input type="OcupationN" name="ocupation" value={this.state.ocupation} className="form-control" id="inputOcupationN4" onChange={(e) => this.setState({ocupation: e.target.value})}/>
                                                </div>
                                            </div>
                                        </div>    
                                    </div>
                                    <div className="card-footer bg-transparent border-dark">* This field is required.</div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card border-dark mb-3">
                                    <div className="card-header text-white bg-dark border-dark">CLINICAL RECORD:</div>
                                    <div className="card-body text-dark">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="hChol" value={this.state.hChol} id="defaultCheck111" onChange={(e) => this.setState({hChol: e.target.value})}/>
                                            <label className="form-check-label" htmlFor="defaultCheck111">
                                                High Cholesterol
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="obese" value={this.state.obese} id="defaultCheck222" onChange={(e) => this.setState({obese: e.target.value})}/>
                                            <label className="form-check-label" htmlFor="defaultCheck222">
                                                Obese
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="diabetes" value={this.state.diabetes} id="defaultCheck333" onChange={(e) => this.setState({diabetes: e.target.value})}/>
                                            <label className="form-check-label" htmlFor="defaultCheck333">
                                                Diabetes
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="hypertension" value={this.state.hypertension} id="defaultCheck444" onChange={(e) => this.setState({hypertension: e.target.value})}/>
                                            <label className="form-check-label" htmlFor="defaultCheck444">
                                                Hypertension
                                            </label>
                                        </div>
                                        <div className="form-check"> 
                                            <input className="form-check-input" type="checkbox" name="heartAttack" value={this.state.heartAttack} id="defaultCheck555" onChange={(e) => this.setState({heartAttack: e.target.value})}/>
                                            <label className="form-check-label" htmlFor="defaultCheck555">
                                                Heart Attack
                                            </label>
                                        </div>
                                        <div className="form-check-1">
                                            <p></p>
                                            <input className="form-control" type="text" name="otherCarDis" value={this.state.otherCarDis} id="inputText1" placeholder="Other Cardiac Disease..." onChange={(e) => this.setState({otherCarDis: e.target.value})}/>
                                        </div>
                                    </div>
                                    <div className="card-footer bg-transparent border-dark">Check all that apply.</div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card border-dark mb-3">
                                    <div className="card-header text-white bg-dark border-dark">FAMILY HISTORY:</div>
                                    <div className="card-body text-dark">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="famChol" value={this.state.famChol} id="defaultCheck10" onChange={(e) => this.setState({famChol: e.target.value})}/>
                                            <label className="form-check-label" htmlFor="defaultCheck10">
                                                High Cholesterol
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="famObese" value={this.state.famObese} id="defaultCheck20" onChange={(e) => this.setState({famObese: e.target.value})}/>
                                            <label className="form-check-label" htmlFor="defaultCheck20">
                                                Obese
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="famDiabetes" value={this.state.famDiabetes} id="defaultCheck30" onChange={(e) => this.setState({famDiabetes: e.target.value})}/>
                                            <label className="form-check-label" htmlFor="defaultCheck30">
                                                Diabetes
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="famHyper" value={this.state.famHyper} id="defaultCheck40" onChange={(e) => this.setState({famHyper: e.target.value})}/>
                                            <label className="form-check-label" htmlFor="defaultCheck40">
                                                Hypertension
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="famHAtk" value={this.state.famHAtk} id="defaultCheck50" onChange={(e) => this.setState({famHAtk: e.target.value})}/>
                                            <label className="form-check-label" htmlFor="defaultCheck50">
                                                Heart Attack
                                            </label>
                                        </div>
                                        <div className="form-check-1">
                                            <p></p>
                                            <input className="form-control" type="text" name="otherdsease" value={this.state.otherdsease} id="inputText2" placeholder="Other Cardiac Disease..." onChange={(e) => this.setState({otherdsease: e.target.value})}/>
                                        </div>
                                    </div>
                                    <div className="card-footer bg-transparent border-dark">Check all that apply.</div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card border-dark mb-3">
                                    <div className="card-header text-white bg-dark border-dark">PHYSICAL CONDITION:</div>
                                    <div className="card-body text-dark">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="fracture" value={this.state.fracture} id="defaultCheck11" onChange={(e) => this.setState({fracture: e.target.value})}/>
                                            <label className="form-check-label" htmlFor="defaultCheck11">
                                                Fracture
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="luxation" value={this.state.luxation} id="defaultCheck22" onChange={(e) => this.setState({luxation: e.target.value})}/>
                                            <label className="form-check-label" htmlFor="defaultCheck22">
                                                Luxation
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="sprain" value={this.state.sprain} id="defaultCheck33" onChange={(e) => this.setState({sprain: e.target.value})}/>
                                            <label className="form-check-label" htmlFor="defaultCheck33">
                                                Sprain
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="colInjur" value={this.state.colInjur} id="defaultCheck44" onChange={(e) => this.setState({colInjur: e.target.value})}/>
                                            <label className="form-check-label" htmlFor="defaultCheck44">
                                                Column Injury
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="lowBack" value={this.state.lowBack} id="defaultCheck55" onChange={(e) => this.setState({lowBack: e.target.value})}/>
                                            <label className="form-check-label" htmlFor="defaultCheck55">
                                                Recurrent Low Back Pain
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="kneeinjur" value={this.state.kneeinjur} id="defaultCheck66" onChange={(e) => this.setState({kneeinjur: e.target.value})}/>
                                            <label className="form-check-label" htmlFor="defaultCheck66">
                                                Knee Injury
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="tear" value={this.state.tear} id="defaultCheck77" onChange={(e) => this.setState({tear: e.target.value})}/>
                                            <label className="form-check-label" htmlFor="defaultCheck77">
                                                Repetitive Tear
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="chronic" value={this.state.chronic} id="defaultCheck88" onChange={(e) => this.setState({chronic: e.target.value})}/>
                                            <label className="form-check-label" htmlFor="defaultCheck88">
                                                Chronic Pain
                                            </label>
                                        </div>
                                    </div>
                                    <div className="card-footer bg-transparent border-dark">Check all that apply.</div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card border-dark mb-3">
                                    <div className="card-header text-white bg-dark border-dark">PHYSICAL ACTIVITY:</div>
                                    <div className="card-body text-dark">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="physAct" value={this.state.physAct} id="defaultCheck2" onChange={(e) => this.setState({physAct: e.target.value})}/>
                                            <label className="form-check-label" htmlFor="defaultCheck2">
                                                Physical Active
                                            </label>
                                        </div>
                                        <div className="form-check-disable">
                                            <p></p>
                                            <input className="form-control" type="text" name="exActive" value={this.state.exActive} id="inputText5" placeholder="Examples of activities..." onChange={(e) => this.setState({exActive: e.target.value})}/>
                                        </div>
                                        <div className="form-check-disable">
                                            <p></p>
                                            <input className="form-control" type="text" name="hmtweek" value={this.state.hmtweek} id="inputText3" placeholder="How many times a week..." onChange={(e) => this.setState({hmtweek: e.target.value})}/>
                                        </div>
                                        <p></p>
                                        <div className="form-check-disable">
                                            <p></p>
                                            <input className="form-control" type="text" name="purpose" value={this.state.purpose} id="inputText4" placeholder="Purpose of the training..." onChange={(e) => this.setState({purpose: e.target.value})}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card text-center border-dark">
                            <div className="card-header bg-dark">
                                <h5 className="card-title">Whats your goal...</h5>
                            </div>
                            <div className="card-body">
                                <p></p>
                                <textarea className="card-text" type="text" name="goaldesc" rows="5" style={{width:"100%", height:"100%"}} value={this.state.goaldesc} id="inputText3" placeholder="Please describe your specific goals" onChange={(e) => this.goaldesc({hmtweek: e.target.value})}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 offset-md-4">
                                {/*
                                <Link style={{ textDecoration: 'none' }} to="/member">
                                    <button className="btn btn-primary btn-checkout btn-block" type="submit">Submit</button>
                                </Link>
                                */}
                                <button className="btn btn-primary btn-checkout btn-block" type="submit">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
                <hr className="mb-4" />
                <Footer />
            </React.Fragment>
        );
    }
}
export default withSession(Registration);


Registration.propTypes = {
    session: PropTypes.object,
    actions: PropTypes.object,
    currentView: PropTypes.string
};
import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCog from '@fortawesome/fontawesome-free-solid/faCog';


class WorkoutClinicalRecord extends React.Component{

	constructor(props){
        super(props);
        this.state = {
        };
    }
    
    render(){
        return (
            <div className="card border-dark mb-3">
                <div className="card-header text-white bg-dark border-dark">CLINICAL RECORD:</div>
                <div className="card-body text-dark">
                    <form>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck111"
                            />
                            <label className="form-check-label" htmlFor="defaultCheck111">
                                High Cholesterol
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck222"
                            />
                            <label className="form-check-label" htmlFor="defaultCheck222">
                                Obese
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck333"
                            />
                            <label className="form-check-label" htmlFor="defaultCheck333">
                                Diabetes
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck444"
                            />
                            <label className="form-check-label" htmlFor="defaultCheck444">
                                Hypertension
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck555"
                            />
                            <label className="form-check-label" htmlFor="defaultCheck555">
                                Other Cardiac Disease
                            </label>
                            <p></p>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="inputText1" 
                                placeholder="Explain"
                            />
                        </div>
                    </form>
                </div>
                <div className="card-footer bg-transparent border-dark">Check all that apply.</div>
            </div>
        );
    }
}

export default WorkoutClinicalRecord;
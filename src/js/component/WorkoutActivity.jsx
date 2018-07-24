import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCog from '@fortawesome/fontawesome-free-solid/faCog';


class WorkoutActivity extends React.Component{

	constructor(props){
        super(props);
        this.state = {
        };
    }
    
    render(){
        return (
            <div className="card border-dark mb-3">
                <div className="card-header text-white bg-dark border-dark">PHYSICAL ACTIVITY:</div>
                <div className="card-body text-dark">
                    <form>
                        <div className="form-group row">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                            Email
                            </label>
                            <div className="col-sm-10">
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="inputEmail3" 
                                    placeholder="Email"
                                />
                            </div>
                        </div>
                        <div className="form-check form-check-inline">
                            Physical Activity:&nbsp;
                            <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                value="option1"
                            />
                            <label className="form-check-label" htmlFor="inlineRadio1">
                            Active
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            &nbsp;
                            <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio2"
                                value="option2"
                            />
                            <label className="form-check-label" htmlFor="inlineRadio2">
                            Non-active
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck2"
                            />
                            <label className="form-check-label" htmlFor="defaultCheck2">
                                Luxation
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck3"
                            />
                            <label className="form-check-label" htmlFor="defaultCheck3">
                                Sprain
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck4"
                            />
                            <label className="form-check-label" htmlFor="defaultCheck4">
                                Column Injures
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck5"
                            />
                            <label className="form-check-label" htmlFor="defaultCheck5">
                                Recurrent Low Back Pain
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck6"
                            />
                            <label className="form-check-label" htmlFor="defaultCheck6">
                                Knee Injuries
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck7"
                            />
                            <label className="form-check-label" htmlFor="defaultCheck7">
                                Repetitive Tear
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck8"
                            />
                            <label className="form-check-label" htmlFor="defaultCheck8">
                                Chronic Pain
                            </label>
                        </div>
                    </form>
                </div>
                <div className="card-footer bg-transparent border-dark">Check all that apply.</div>
            </div>
        );
    }
}

export default WorkoutActivity;
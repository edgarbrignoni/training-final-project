import React from 'react';
import Navbar from "../component/Navbar.jsx";

class WorkoutForm extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <div className="container">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputName4">First Name</label>
                                <input type="Name" className="form-control" id="inputName4" placeholder="First Name"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputLastN4">Last Name</label>
                                <input type="LastN" className="form-control" id="inputLastN4" placeholder="Last Name"/>
                            </div>
                            <div className="form-group col-md-2">
                                <label htmlFor="inputAge">Age</label>
                                <input type="text" className="form-control" id="inputAge"/>
                            </div>
                            <div className="form-group col-md-2">
                                <label htmlFor="inputAge">Height</label>
                                <input type="text" className="form-control" id="inputHeight"/>
                            </div>
                            <div className="form-group col-md-2">
                                <label htmlFor="inputAge">Weight</label>
                                <input type="text" className="form-control" id="inputWeight"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputOcupationN4">Ocupation</label>
                                <input type="OcupationN" className="form-control" id="inputOcupationN4"/>
                            </div>
                            <fieldset className="form-group">
                                <div className="row">
                                    <h6>TRAUMAS OSEO-ARTRO-MUSCULARES</h6>
                                    <legend className="col-form-label col-sm-2 pt-0">Fracturas</legend>
                                    <div className="col-sm-10">
                                        <div className="form-check">
                                            <div className="custom-control custom-radio custom-control-inline">
                                                <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input"/>
                                                <label className="custom-control-label" htmlFor="customRadioInline1">Yes</label>
                                            </div>
                                            <div className="custom-control custom-radio custom-control-inline">
                                                <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input"/>
                                                <label className="custom-control-label" htmlFor="customRadioInline2">No</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>    
                        </div>
                    </form>    
                </div>
            </React.Fragment>
        );
    }
}
export default WorkoutForm;